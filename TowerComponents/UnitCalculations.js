import Unit from './Unit.js';

class UnitCalculations {
    constructor() {}

    calculated = {
        DPS: {
            Default: {
                Requires: ['Damage', 'Cooldown'],
                Exclude: [],
                Value: (level) => {
                   if (level.Cooldown == 0) return 0;

                   let spawnCount = level.SpawnCount ?? 1;

                   return (level.Damage / level.Cooldown) * spawnCount;
                },
            },
            ExecutionerSkeleton: {
                Requires: ['Damage', 'Cooldown', 'Tick'],
                For: ["Executioner Skeleton"],
                Value: (level) => (level.Damage / level.Tick) / level.Cooldown,
            },
            Rocket: {
                For: ['WarMachineSentry', 'Tank', 'Railgun Tank', 'Mark1Rocket', 'Mark2', 'Mark3', 'Mark4', 'Mark5'],
                Requires: ['Damage', 'Cooldown'],
                Value: (unit) => {
                    const damage = unit?.Damage ?? 0;
                    const cooldown = unit?.Cooldown ?? 0;
                    const baseDPS = cooldown > 0 ? damage / cooldown : 0;

                    const missileAmount = unit?.MissileAmount ?? 1;
                    const missileCooldown = unit?.TimeBetweenMissiles ?? 0;
                    const missileDamage = unit?.ExplosionDamage ?? 0;

                    const missileDPS =
                        missileCooldown > 0
                            ? (missileAmount * missileDamage) / missileCooldown
                            : 0;

                    return baseDPS + missileDPS;
                },
            },
            Burst: {
                For: ['Rifleman1', 'Rifleman2', 'Rifleman3'],
                Requires: ['Damage', 'Cooldown', 'BurstAmount', 'AimTime'],
                Value: (unit) => {
                    const damage = unit.Damage;
                    const burstAmount = unit.BurstAmount;

                    const cooldown = unit.Cooldown;
                    const burstCooldown = unit.BurstCooldown;

                    const totalDamage = damage * burstAmount;
                    const totalTime = cooldown * burstAmount + burstCooldown + unit.AimTime;
                    return totalDamage / totalTime;
                },
            },
            BurstAgain: {
                For: ['GunnerElf'],
                Requires: ['Damage', 'Cooldown', 'BurstCount', 'SpawnCount'],
                Value: (unit) => {
                    const damage = unit.Damage;
                    const burstAmount = unit.BurstAmount;

                    const cooldown = unit.Cooldown;
                    const burstCooldown = unit.BurstCooldown;

                    const totalDamage = damage * burstAmount;
                    const totalTime = cooldown * burstAmount + burstCooldown;
                    return (totalDamage / totalTime) * unit.SpawnCount;
                },
            },
            MissileAPC: {
                For: ['MissileAPC'],
                Requires: ['Damage', 'Cooldown', 'Burst'],
                Value: (unit) => {
                    const damage = unit.Damage;
                    const burst = unit.Burst;

                    const cooldown = unit.Cooldown;

                    const totalDamage = damage * burst;
                    return totalDamage / cooldown;
                },
            },
            Ivy: {
                For: ['Ivy1', 'Ivy2', 'Ivy3', 'Ivy4'],
                Value: (unit) => {
                    const dps = unit.Damage / unit.Cooldown;
                    const poisonDPS = unit.PoisonDamage / unit.PoisonTick;

                    return dps + poisonDPS;
                },
            },
        },
        AggregateDPS: {
            Default: {
                Requires: ['DPS', 'SpawnTime'],
                Value: (level) => {
                    let damage = 0;
                    let spawnsPerMinute = 60 / level.SpawnTime;

                    if (level.SpawnTime <= 0.1) {
                        return 0;
                    }

                    damage = level.DPS * spawnsPerMinute;

                    return damage;
                },
            },
        },
        RamDPS: {
            Default: {
                Requires: ['Health', 'SpawnTime'],
                Value: (level) => {
                    const defense = level.Defense ?? 0;

                    if (level.SpawnTime == 0 || isNaN(level.SpawnTime)) return 0;
 
                    return (level.Health * (1 + defense)) / level.SpawnTime;
                },
            },
            DoubleUp: {
                Requires: ['Health', 'SpawnTime', 'SpawnCount'],
                Value: (level) => {
                    const defense = level.Defense ?? 0;

                    if (level.SpawnTime == 0 || isNaN(level.SpawnTime)) return 0;
 
                    return ((level.Health * (1 + defense)) / level.SpawnTime) * level.SpawnCount;
                },   
            },
            Bomb: {
                For: ['BomberElf'],
                Value: (level) => {
                    const defense = level.Defense ?? 0;

                    if (level.SpawnTime == 0 || isNaN(level.SpawnTime)) return 0;
 
                    return ((level.Health * (1 + defense) + level.Damage) / level.SpawnTime) * level.SpawnCount;
                },   
            },            
        },
        HealPerSecond: {
            Default: {
                For: ['FieldMedic1', 'FieldMedic2'],
                Requires: ['Heal', 'Cooldown'],
                Value: (level) => {
                    return level.Heal / level.Cooldown;
                },
            } 
        },
        BaseDPS: {
            Default: {
                For: ['WarMachineSentry', 'Tank', 'Railgun Tank', 'Mark1Rocket', 'Mark2', 'Mark3', 'Mark4', 'Mark5', 'Ivy1', 'Ivy2', 'Ivy3', 'Ivy4'],
                Requires: ['Damage', 'Cooldown'],
                Value: (level) => {
                    return level.Damage / level.Cooldown;
                },
            } 
        },
        MissileDPS: {
            Default: {
                For: ['WarMachineSentry', 'Tank', 'Railgun Tank', 'Mark1Rocket', 'Mark2', 'Mark3', 'Mark4', 'Mark5'],
                Requires: ['Damage', 'Cooldown'],
                Value: (unit) => {
                    const missileAmount = unit?.MissileAmount ?? 1;
                    const missileCooldown = unit?.TimeBetweenMissiles ?? 0;
                    const missileDamage = unit?.ExplosionDamage ?? 0;

                    const missileDPS =
                        missileCooldown > 0
                            ? (missileAmount * missileDamage) / missileCooldown
                            : 0;

                    return missileDPS;
                },
            }, 
        },
        PoisonDPS: {
            Default: {
                For: ['Ivy1', 'Ivy2', 'Ivy3', 'Ivy4'],
                Value: (unit) => {
                    return unit.PoisonDamage / unit.PoisonTick;
                },
            }, 
        },
        
        Cooldown: {
            Type: 'Override',

            Default: {
                Requires: ['Cooldown'],
                Value: (cooldown) => {
                    const { extraCooldown, firerateBuff } = window.state.boosts.unit; // prettier-ignore

                    return cooldown / (firerateBuff + 1) + extraCooldown;
                },
            },
        },
        Damage: {
            Type: 'Override',

            Default: {
                Requires: ['Damage'],
                Value: (damage) => {
                    const { damageBuff } = window?.state?.boosts?.unit ?? 0; // prettier-ignore

                    return damage * (damageBuff + 1);
                },
            },
        },
        Range: {
            Type: 'Override',

            Default: {
                Requires: ['Range'],
                Value: (range) => {
                    const { rangeBuff } = window?.state?.boosts?.unit ?? 0; // prettier-ignore

                    return range * (rangeBuff + 1);
                },
            },
        },
        Health: {
            Type: 'Override',

            Default: {
                Requires: ['Health'],
                Value: (health) => {
                    const { healthBuff } = window?.state?.boosts?.unit ?? 0 // prettier-ignore

                    return Math.floor(health * (healthBuff + 1));
                },
            },
        },
        SpawnTime: {
            Type: 'Override',

            Default: {
                Requires: ['SpawnTime'],
                Value: (spawnTime) => {
                    const { spawnrateBuff } = window?.state?.boosts?.unit ?? 0; // prettier-ignore

                    return spawnTime * (1 - spawnrateBuff);
                },
            },
        },
    };

    /**
     *
     * @param {Unit} unitData
     */
    validate(calculatedField, unitData) {
        let valid = true;

        if (calculatedField.Exclude) {
            valid &= !calculatedField.Exclude.includes(unitData.name);
        }
        if (calculatedField.Requires) {
            valid &= calculatedField.Requires.reduce((a, v) => {
                return a && unitData.attributeNames.includes(v);
            }, true);
        }

        if (calculatedField.For) {
            valid &= calculatedField.For.includes(unitData.name);
        }

        return valid;
    }

    /**
     * @param {Unit} unitData
     */
    getValue(calculatedField, unitData) {
        for (let [_, value] of Object.entries(calculatedField)) {
            if (value?.For?.includes(unitData.name)) return value;
        }

        return calculatedField.Default;
    }

    /**
     * @param {Unit} unitData
     */
    #add(name, unitData) {
        const calculated = this.getValue(this.calculated[name], unitData);
        if (this.validate(calculated, unitData))
            unitData.addCalculated(name, calculated.Value);
    }

    addCalculate(unitData) {
        this.#add('DPS', unitData);
        this.#add('HealPerSecond', unitData);
        this.#add('BaseDPS', unitData);
        this.#add('MissileDPS', unitData);
        this.#add('PoisonDPS', unitData);
        this.#add('AggregateDPS', unitData);
        this.#add('RamDPS', unitData);

        this.#add('Health', unitData);
        this.#add('Damage', unitData);
        this.#add('SpawnTime', unitData);
        this.#add('Cooldown', unitData);
        this.#add('Range', unitData);
    }
}

export default new UnitCalculations();
