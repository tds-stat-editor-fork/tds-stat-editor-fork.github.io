import ButtonSelection from './ButtonSelection.js';

const imageCache = {};

export default class UpgradeViewer {
    constructor(viewer) {
        this.viewer = viewer;
        this.levelPanel = document.getElementById('side-upgrade-levels');
        this.levelButtons = new ButtonSelection(this.levelPanel);
        this.levelButtons.activeClass = 'btn-dark';
        this.levelButtons.inactiveClass = 'btn-outline-dark';

        this.levelButtons.root.addEventListener(
            'submit',
            ((e) => {
                this.loadUpgrade(e.detail - 1);
            }).bind(this)
        );

        this.imageInput = document.getElementById('side-upgrade-image');
        this.imageInput.addEventListener(
            'focusout',
            (() => {
                this.#onTextChanged('Image', this.imageInput.value);
                this.viewer.reload();
            }).bind(this)
        );

        this.titleInput = document.getElementById('side-upgrade-title');
        this.titleInput.addEventListener(
            'focusout',
            (() => {
                this.#onTextChanged('Title', this.titleInput.value);
                this.viewer.reload();
            }).bind(this)
        );

        this.extrasInput = document.getElementById('side-upgrade-extras');
        this.addExtraButton = document.getElementById(
            'side-upgrade-extras-add'
        );
        this.addExtraButton.addEventListener('click', () => {
            const upgradeIndex = this.index;
            const skin = this.viewer.getActiveSkin();

            const upgradeStats = skin.data.Upgrades[upgradeIndex].Stats;

            if (upgradeStats.Extras === undefined) {
                upgradeStats.Extras = [];
            }

            upgradeStats.Extras.push('');
            this.viewer.reload();
        });

        this.upgradeChanges = document.getElementById(
            'side-upgrade-extras-output'
        );
    }

    load(skinData) {
        if (skinData.upgrades.length === 0) {
            document.getElementById('level-view').classList.add('d-none');
        } else if (this.skinData == skinData) {
            this.loadUpgrade(this.levelButtons.getSelectedName() - 1);
        } else {
            this.skinData = skinData;
            this.#loadLevelHeader(skinData);
        }
    }

    #loadLevelHeader(skinData) {
        this.levelButtons.setButtons(
            skinData.upgrades.map((_, index) => index + 1)
        );

        this.loadUpgrade(this.levelButtons.getSelectedName() - 1);
    }

    loadUpgrade(index) {
        this.index = index;
        this.upgrade = this.skinData.upgrades[index];

        this.imageInput.value = this.upgrade.upgradeData.Image;
        this.titleInput.value = this.upgrade.upgradeData.Title;

        this.#loadExtras(this.upgrade);
        this.#loadUpgradeChanges();
        this.#loadImage();
    }

    #loadUpgradeChanges() {
        const upgradeChanges = this.skinData.getUpgradeChangeOutput(this.index);
        const minRows = 5;

        this.upgradeChanges.textContent = '';
        this.upgradeChanges.value = '';

        this.upgradeChanges.value = upgradeChanges.join('\n');
        this.upgradeChanges.rows = Math.max(upgradeChanges.length, minRows);
    }

    #addExtra(extra, index) {
        const inputGroup = document.createElement('form');
        ['input-group', 'mb-2'].forEach(className => inputGroup.classList.add(className)) // prettier-ignore

        const inputText = document.createElement('input');
        ['form-control', 'form-control-sm', 'text-white'].forEach(className => inputText.classList.add(className)) // prettier-ignore
        inputText.type = 'text';
        inputText.value = extra;

        const inputButtonGroup = document.createElement('div');

        const removeButton = document.createElement('div');
        ['btn', 'btn-sm', 'btn-outline-danger'].forEach(className => removeButton.classList.add(className)) // prettier-ignore
        removeButton.innerText = 'Remove';

        inputButtonGroup.appendChild(removeButton);
        inputGroup.appendChild(inputText);
        inputGroup.appendChild(inputButtonGroup);
        this.extrasInput.appendChild(inputGroup);

        inputGroup.addEventListener(
            'submit',
            ((e) => {
                e.preventDefault();
                this.#processExtraInput(index, inputText.value);
            }).bind(this)
        );
        inputText.addEventListener('focusin', () => {
            inputText.value = '';
        });
        inputText.addEventListener(
            'focusout',
            (() => {
                this.#processExtraInput(index, inputText.value);
            }).bind(this)
        );
        inputText.addEventListener(
            'mouseup',
            (() => inputText.focus()).bind(this)
        );

        removeButton.addEventListener(
            'mouseup',
            (() => {
                this.removeExtra(index);
                this.viewer.reload();
            }).bind(this)
        );
    }

    #processExtraInput(index, value) {
        if (value !== '') {
            this.updateExtra(index, value);
        }

        this.viewer.reload();
    }

    async #fetchImage(imageId) {
        const url = `https://apis.roblox.com/asset-delivery-api/v1/assetId/${imageId}`;

        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                "x-api-key": "tgdEdccdLkmsC+Gv+uYnF8xIeVMWWJCDUghhCFZae+uTudBjZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaVlYTmxRWEJwUzJWNUlqb2lkR2RrUldSalkyUk1hMjF6UXl0SGRpdDFXVzVHT0hoSlpWWk5WMWRLUTBSVloyaG9RMFphWVdVcmRWUjFaRUpxSWl3aWIzZHVaWEpKWkNJNklqRTNPVEkwTmpjeE9Ea2lMQ0poZFdRaU9pSlNiMkpzYjNoSmJuUmxjbTVoYkNJc0ltbHpjeUk2SWtOc2IzVmtRWFYwYUdWdWRHbGpZWFJwYjI1VFpYSjJhV05sSWl3aVpYaHdJam94TnpRMk9ESXpNVFF4TENKcFlYUWlPakUzTkRZNE1UazFOREVzSW01aVppSTZNVGMwTmpneE9UVTBNWDAuVjNxNTBZOHZSUWVBZDRpWlgtUzZ1MzBWcnhUNVA5YzBvNzRmWGRFdzlmNXJRVElzQWhyalRrRmVJS3hDb3plOVMtMjV6R1E2X1o1Q0pfUm5jd2RnTG9zSUNkSWFzYnZjNmJ2UGJIVUhiTWRYVlpJb0FqQW9xcTlwR1BpNjBMMVJOd0s2aWxPN0FXdUJLaUZ6X2tfQ1U0dXQ0NFBFcG43cUdmakdIMjdlb3hKQmZETFhJN3IwTjEzX2d1VUIxZ3EyQkVnMXlVNFBLWThjOXQ5VU90cUwxT2hyVF9UUkh3MTFKWXdjeVYzU0F2czNPT09qZjZZbHYxNXhwUkFia2RjLTc4ZnNqR1JDYkx1VWltaTdzdWU3NTFCMlhvcVZHUzg0RzVyLW5CVkxnaFpFcEE1dUUwZTFWWGkxZGw4T1pYWURwMGV4bzNLZnpKTnRrQXE5ZURxMk5B",
            },
            referrerPolicy: 'no-referrer',
        });

        const data = await response.json();
        const imageLocation = data?.location;

        imageCache[imageId] = imageLocation;
        return imageLocation;
    }

    async #loadImage() {
        const imageId = this.upgrade.upgradeData.Image;

        const imageLocation =
            imageCache[imageId] ?? (await this.#fetchImage(imageId));

        if (imageLocation) {
            document.getElementById('upgrade-image').src = imageLocation;
        } else {
            document.getElementById('upgrade-image').src = '';
        }
    }

    #loadExtras(upgrade) {
        const extras = upgrade?.data?.Extras ?? [];

        this.extrasInput.innerHTML = [];

        extras.forEach((extra, index) => {
            this.#addExtra(extra, index);
        });
    }

    #onTextChanged(property, value) {
        this.skinData.set(this.index + 1, property, value);
    }

    updateExtra(extraIndex, value) {
        const upgradeIndex = this.index;
        const skin = this.viewer.getActiveSkin();

        skin.data.Upgrades[upgradeIndex].Stats.Extras[extraIndex] = value;
    }

    removeExtra(deletedIndex) {
        const upgradeIndex = this.index;
        const skin = this.viewer.getActiveSkin();

        const stats = skin.data.Upgrades[upgradeIndex].Stats;
        stats.Extras = stats.Extras.filter(
            (_, index) => index !== deletedIndex
        );
    }
}
