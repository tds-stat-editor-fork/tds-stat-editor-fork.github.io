import Levels from '../TowerComponents/Levels.js';
import Viewer from './Viewer.js';

export default class TableInput {
    /**
	 * ({
		level: level,
		attribute: attribute,
		towerLevels: levels,
		referenceLevels: deltaLevels,
		useDelta: this.viewer.buttonDeltaButton.state,
		viewer: this.viewer,
	})
	 */
    /**
     *
     * @param {{
	 * level: Number,
	 * attribute: String,
	 * towerLevels: Levels,
	 * referenceLevels: Levels,
	 * useDelta: Boolean,
	 * viewer: Viewer,
	 * }} data
 
     * @returns
     */
    constructor(data) {
        this.base = this.#createBase();

        this.level = data.level;
        this.attribute = data.attribute;
        this.towerLevels = data.towerLevels;
        this.referenceLevels = data.referenceLevels;
        this.useDelta = data.useDelta;
        this.viewer = data.viewer;
        this.isComplex = data.isComplex;

        this.sizeFactor = 1.35;
        this.sizeDeltaModifier = 0;
        this.sizeModifier = 0;
    }

    createInput() {
        const cellData = this.towerLevels.getCell(this.level, this.attribute);
        const deltaData = this.referenceLevels.getCell(
            this.level,
            this.attribute
        );

        const input = this.#getInput(cellData, deltaData);

        this.input = input;
    }

    #createBase() {
        const td = document.createElement('td');
        td.classList.add('table-cell');

        return td;
    }

    #getInput(value, deltaData) {
        if (['true', 'false'].includes(String(value))) {
            return this.#createBooleanInput(value, deltaData);
        }

        if (Number.isFinite(+value)) {
            return this.#createNumberInput(value, deltaData);
        }

        return this.#createTextInput(value, deltaData);
    }

    #createBooleanInput(value, deltaData) {
        const input = document.createElement('input');

        input.type = 'checkbox';
        input.checked = value;

        if (this.useDelta && value != deltaData) {
            input.classList.add('form-check-input-delta');
        }

        input.classList.add('form-check-input');
        input.classList.add('child-center');
        input.style.padding = '0.6em';
        this.base.style.position = 'relative';

        input.addEventListener('change', this.#onBooleanSubmit.bind(this)); // prettier-ignore
        this.base.appendChild(input);

        return input;
    }

    #createNumberInput(value, deltaData) {
        const input = document.createElement('input');
        const form = document.createElement('form');

        input.classList.add('table-cell-input');

        input.size = 1;

        input.addEventListener('focusin', (() => input.value = '').bind(this)); // prettier-ignore
        input.addEventListener('focusout', this.#onNumberSubmit.bind(this));
        form.addEventListener(
            'submit',
            ((e) => {
                e.preventDefault();
                input.blur();
            }).bind(this)
        );
        input.addEventListener('mouseup', () => {
            input.focus();
        });

        let outputValue = this.#formatNumber(value);
        if (this.useDelta)
            outputValue =
                String(outputValue) +
                String(this.#getDelta(value, deltaData, input));

        const computedSize =
            String(outputValue).length / this.sizeFactor + this.sizeModifier;

        input.style.minWidth = `${computedSize}em`;
        input.value = outputValue;

        form.appendChild(input);
        this.base.appendChild(form);

        return input;
    }

    #createTextInput(value, deltaData) {
        if (this.viewer.unitManager.hasUnit(value)) {
            this.viewer.activeUnits[value] =
                this.viewer.unitManager.unitData[value];
        }
        const input = document.createElement('input');
        input.size = 1;

        input.classList.add('table-cell-input');

        input.addEventListener('focusin', (() => {
			input.value = ''
		}).bind(this)); // prettier-ignore
        input.addEventListener('focusout', this.#onTextSubmit.bind(this));
        input.addEventListener('mouseup', () => {
            input.focus();
        });

        if (this.useDelta && value != deltaData) {
            input.classList.add('table-cell-input-delta');
        }

        const computedSize = String(value).length / this.sizeFactor;

        input.style.minWidth = `${computedSize}em`;
        input.value = value;

        this.base.appendChild(input);

        return input;
    }

    #onBooleanSubmit() {
        const newValue = this.input.checked;

        this.towerLevels.set(this.level, this.attribute, newValue);
        this.viewer.reload();
    }

    #onNumberSubmit() {
        const newValue = this.input.value;

        if (newValue !== '' && Number.isFinite(+newValue))
            this.towerLevels.set(this.level, this.attribute, +newValue);

        this.viewer.reload();
    }

    #onTextSubmit() {
        const newValue = this.input.value;

        if (newValue != '')
            this.towerLevels.set(this.level, this.attribute, newValue);

        this.viewer.reload();
    }

    #formatNumber(value) {
        switch (this.attribute) {
            case 'Income':
            case 'Cost':
            case 'NetCost':
            case 'LimitNetCost':
            case 'SupportCaravanCost':
            case 'AirDropCost':
            case 'SendCost':
            case 'EconomyBonus':
                return `$${Intl.NumberFormat().format(value.toFixed(0))}`;
            case "MaxDefenseMelt":
            case "DefenseMelt":
            case "Slowdown":
            case "DamageBuff":
            case "RangeBuff":
            case "DiscountBuff":
            case "FirerateBuff":
            case "CallToArmsBuff":
            case 'StallUptime':
            case 'ThornsUptime':
            case 'Uptime':
            case 'ChillPercent':
            case 'SlowPerTower':
            case 'MaxSlow':
            case 'MaxChill':
            case 'DefenseMeltPerTower':
            case "Warrior's Call Buff":
            case "PoisonDefenseMelt":
            case "ThornPower":
            case "ThornsSlow":
            case 'TowerCloningCost':
                return `${Intl.NumberFormat().format(value.toFixed(2))}%`;
            case 'Cooldown':
            case 'ChargeTime':
            case 'LaserCooldown':
            case 'BurstTime':
            case 'ReverseCooldown':
            case 'BombTime':
            case 'BurnTime':
            case 'BurnTick':
            case 'StunLength':
            case 'ComboCooldown':
            case 'KnockbackCooldown':
            case 'RepositionCooldown':
            case 'CallToArmsCooldown':
            case 'SupportCaravanCooldown':
            case 'MissileLifespan':
            case 'MissileStun':
            case 'ReloadTime':
            case 'BurstCooldown':
            case 'MissileCooldown':
            case 'SpinDuration':
            case 'BackupCallTime':
            case 'ChillLength':
            case 'FreezeTime':
            case 'AimTime':
            case 'MinStun':
            case 'MaxStun':
            case 'TurretCooldown':
            case 'TickRate':
            case 'SpawnTime':
            case 'BuildTime':
            case 'BuffDuration':
            case 'FireTime':
            case "Warrior's Call Length":
            case "Warrior's Call Cooldown":
            case 'ParryCooldown':
            case 'ParryLength':
            case 'ThornsCooldown':
            case 'ThornsDuration':
            case 'ThornsTick':
            case 'EquipTime':
            case 'SlowDuration':
            case 'PoisonPuddleLifespan':
            case 'ConfusionDuration':
            case 'ConfusionCooldown':
            case 'AirDropCooldown':
            case 'RevTime':
            case 'BuildDelay':
            case 'SummonDelay':
            case 'SummonDebounce':
            case 'PatrolCooldown':
            case 'MissileCooldown':
            case 'TimeForMaxStacks':
            case 'GrenadeCooldown':
            case 'LandmineCooldown':
            case 'SpikeCooldown':
            case 'BearTrapCooldown':
            case 'HologramLifetime':
            case 'BleedTick':
            case 'IceTick':
            case 'ThornsCooldown':
            case 'SpawnTimer':
            case 'ShieldRechargeSpeed':
            case 'UberchargeDuration':
            case 'UberchargeCooldown':
            case 'TowerSelectionCooldown':
            case 'FrostGrenadeCooldown':
            case 'FrostGrenadeFreezeTime':
            case 'KnifeCooldown':
            case 'TrapPlacementTime':
                return `${Intl.NumberFormat().format(value.toFixed(3))}s`;
        }

        if (+value < 1) {
            return +(+value).toFixed(3);
        }
        if (+value < 10) {
            return +(+value).toFixed(2);
        }
        return +(+value).toFixed(1);
    }

    flipped = [
        'Cooldown',
        'Cost',
        'CostEfficiency',
        'NetCost',
        'ChargeTime',
        'LaserCooldown',
        'BombTime',
        'MissileCooldown',
        'SpinDuration',
        'ReloadSpeed',
        'AimTime',
        'Summon_Delay',
        'BuildDelay',
        'BookDebounce',
        'Grave_Cooldown',
        'TimeBetweenMissiles',
        'PoisonTick',
        'Summon_Debounce',
        'EquipTime',
        'ConfusionCooldown',
        'LandmineCooldown',
        'BearTrapCooldown',
        'SpikeCooldown',
        'TickRate',
        'RepositionCooldown',
        'KnockbackCooldown',
        'RepositionCooldown',
        'ReloadTime',
        'BuildTime',
        'WavesUntilNetProfit',
        'WavesUntilUpgradeProfit',
        'ParryCooldown',
        'ParryLength',
        'CashShot',
        'AimTime',
        'PistolCrookSpawnTime',
        'TommyCrookSpawnTime',
        'BackupCallTime',
        'LimitNetCost',
        'ComboCooldown',
        'Velocity',
        'ReloadTime',
        'Recoil',
        'SpreadAdd',
        'Deadzone',
        'BurnTick',
        'TickRate',
        'Spread',
        'RevTime',
        'ReloadTime',
        'BurstCooldown',
        'ThornsTick',
        'SoulMeter',
        'MaxCostEfficiency',
        'BurstTime',
        'SpikeCostEfficiency',
        'LandmineCostEfficiency',
        'BearTrapCostEfficiency',
        'SpawnTime',
        'BleedTick',
        'TimeForMaxStacks',
        'IceTick',
        'FireCostEfficiency',
        'IceCostEfficiency',
        'PoisonCostEfficiency',
        'ConfusionCostEfficiency',
        'ThornsCooldown',
        'TowerCloningCost',
        "Warrior's Call Cooldown",
        'FanOfKnivesThreshold',
        'KnifeCooldown',
        'ShieldRechargeSpeed',
        'TowerSelectionCooldown',
        'UberchargeDuration',
        'UberchargeCooldown',
        'FrostGrenadeCooldown',
        'FrostGrenadeFreezeTime',
        'TrapPlacementTime',
    ];

    #getDelta(cellData, deltaData, input) {
        const difference = cellData - deltaData;
        if (difference === 0) return '';
        if (difference.toFixed(3) == 0) return '';

        const sign = Math.sign(difference) > 0 ? '+' : '-';
        const absDifference = Math.abs(difference);

        const flipFactor = this.flipped.includes(this.attribute) ? -1 : 1;

        if (difference * flipFactor > 0) {
            input.classList.add('table-cell-input-delta-positive');
        } else {
            input.classList.add('table-cell-input-delta-negative');
        }
        this.sizeModifier = this.sizeDeltaModifier;

        return ` (${sign}${this.#formatNumber(absDifference)})`;
    }
}
