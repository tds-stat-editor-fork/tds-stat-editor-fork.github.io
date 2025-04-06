import SkinData from './SkinData.js';
import UnitManager from './UnitManager.js';

class CalculatedManager {
    constructor(unitKey) {
        this.unitManager = new UnitManager(unitKey);
        this.unitManager.load();
    }

    calculated = {
        LaserDPS: {
            Default: {
                For: ['Accelerator'],
                Requires: ['Damage', 'Cooldown'],
                Value: (level) => {
                  return level.Damage / level.Cooldown;
                },
            }
        },
        TowerDPS: {
            Default: {
                For: ['Engineer'],
                Requires: ['Damage', 'Cooldown'],
                Value: (level) => level.Damage / level.Cooldown,
            },
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'Damage',
                    'Cooldown',
                    'PistolCrookSpawnTime',
                    'TommyCrookSpawnTime',
                    'BackupCallTime',
                ],
                Value: (level) => {
                    const pistolDelayPerMinute =
                        level.PistolCrookSpawnTime > 0
                            ? level.BackupCallTime *
                              (60 / level.PistolCrookSpawnTime)
                            : 0;
                    const tommyDelayPerMinute =
                        level.TommyCrookSpawnTime > 0
                            ? level.BackupCallTime *
                              (60 / level.TommyCrookSpawnTime)
                            : 0;

                    const dpm =
                        (level.Damage *
                            (60 - pistolDelayPerMinute - tommyDelayPerMinute)) /
                        level.Cooldown;

                    return dpm / 60;
                },
            },
        },
        RamDPS: {
            Default: {
                Exclude: ['Engineer'],
                Requires: ['UnitToSend', 'SpawnTime'],
                Value: (level) => {
                    this.unitManager.load();

                    if (!this.unitManager.hasUnit(level.UnitToSend)) return 0;
                    const unit = this.unitManager.unitData[level.UnitToSend];

                    return unit.attributes.Health / level.SpawnTime;
                },
            },
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'PistolCrookSpawnTime',
                    'DoublePistolCrooks',
                    'TommyCrookSpawnTime',
                    'TommyDrum',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1Ram =
                        level.PistolCrookSpawnTime &&
                        goon1.attributes.Health / level.PistolCrookSpawnTime;
                    if (level.DoublePistolCrooks) goon1Ram *= 2;

                    let goon2Ram =
                        level.TommyCrookSpawnTime &&
                        goon2.attributes.Health / level.TommyCrookSpawnTime;
                    if (level.TommyDrum)
                        goon2Ram =
                            goon3.attributes.Health / level.TommyCrookSpawnTime;

                    return goon1Ram + goon2Ram;
                },
            },
        },
        ThornsDPS: {
            Default: {
                For: ['Harvester'],
                Requires: ['ThornsDamage', 'ThornsTick'],
                Value: (level) => level.ThornsDamage / level.ThornsTick,
            },
        },
        HeatwaveDPS: {
            Default: {
                For: ['Elementalist'],
                Requires: ['HeatwaveDamage', 'HeatwaveBurnTick', 'HeatwaveBurnDamage', 'HeatwaveCooldown'],
                
                Value: (level) => {
                    const directDPS = level.HeatwaveDamage / level.HeatwaveCooldown;
                    const burnDPS = level.HeatwaveBurnDamage / level.HeatwaveBurnTick;

                    return directDPS + burnDPS;
                }
            },
        },
        UnitDPS: {
            Default: {
                Requires: ['UnitToSend'],
                Value: (level) => {
                    this.unitManager.load();

                    const unitName = level.UnitToSend;
                    if (!this.unitManager.hasUnit(unitName)) return 0;

                    const unitData = this.unitManager.unitData[unitName];

                    return unitData.attributes.DPS;
                },
            },
            Elementalist: {
                For: ['Elementalist'],
                Value: (level) => {
                    this.unitManager.load();
                    const unitName = level.UnitToSend;

                    if (!this.unitManager.hasUnit(unitName)) return 0;

                    const unitData = this.unitManager.unitData[unitName];
                    
                    return (unitData.attributes.DPS) * (unitData.attributes.Lifespan / level.TurretCooldown);
                },
            },
            Engineer: {
                For: ['Engineer'],
                Requires: ['UnitToSend', 'MaxUnits'],
                Value: (level) => {
                    this.unitManager.load();
                    if (!this.unitManager.hasUnit(level.UnitToSend)) return 0;

                    const unit = this.unitManager.unitData[level.UnitToSend];

                    return unit.attributes.DPS * level.MaxUnits;
                },
            },
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'PistolCrookSpawnTime',
                    'DoublePistolCrooks',
                    'TommyCrookSpawnTime',
                    'TommyDrum',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1DPS =
                        level.PistolCrookSpawnTime && goon1.attributes.DPS;
                    if (level.DoublePistolCrooks) goon1DPS *= 2;

                    let goon2DPS =
                        level.TommyCrookSpawnTime && goon2.attributes.DPS;
                    if (level.TommyDrum) goon2DPS = goon3.attributes.DPS;

                    return goon1DPS + goon2DPS;
                },
            },
        },
        AggregateUnitDPS: {
            Default: {
                Exclude: ['Engineer'],
                Requires: ['UnitDPS', 'SpawnTime'],
                Value: (level) => {
                    let damage = 0;
                    let remainingTime = 60;

                    if (level.SpawnTime <= 0.1) {
                        return Infinity;
                    }

                    while (remainingTime > 0) {
                        damage += level.UnitDPS * remainingTime;

                        remainingTime -= level.SpawnTime;
                    }

                    return damage / 60;
                },
            },
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'PistolCrookSpawnTime',
                    'TommyCrookSpawnTime',
                    'DoublePistolCrooks',
                    'TommyDrum',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1DPS =
                        level.PistolCrookSpawnTime && goon1.attributes.DPS;
                    if (level.DoublePistolCrooks) goon1DPS *= 2;

                    let goon2DPS =
                        level.TommyCrookSpawnTime && goon2.attributes.DPS;
                    if (level.TommyDrum) goon2DPS = goon3.attributes.DPS;

                    let damage = 0;
                    let remainingTime = 60;

                    if (level.PistolCrookSpawnTime > 0.1) {
                        while (remainingTime > 0) {
                            damage += goon1DPS * remainingTime;

                            remainingTime -= level.PistolCrookSpawnTime;
                        }
                    }

                    remainingTime = 60;

                    if (level.TommyCrookSpawnTime > 0.1) {
                        while (remainingTime > 0) {
                            damage += goon2DPS * remainingTime;

                            remainingTime -= level.TommyCrookSpawnTime;
                        }
                    }

                    return damage / 60;
                },
            },
        },
        LaserTime: {
            Default: {
                For: ['Accelerator'],
                Requires: ['Overcharge', 'LaserDPS'],
                Value: (level) => level.Overcharge / level.LaserDPS,
            },
        },
        FireTime: {
            Default: {
                For: ['Gatling Gun'],
                Requires: ['Ammo', 'Cooldown'],
                Value: (level) => level.Ammo * level.Cooldown,
            },
        },
        TotalStingDamage: {
            Default: {
                For: ['Swarmer'],
                Requires: ['StingTime', 'BeeDamage', 'TickRate'],
                Value: (level) =>
                    (level.StingTime * level.BeeDamage) / level.TickRate,
            },
        },
        DPS: {
            Default: {
                Requires: ['Damage', 'Cooldown'],
                Exclude: [
                    'Farm',
                    'DJ Booth',
                    'Elf Camp',
                    'Military Base',
                    'Mecha Base',
                    'Firework Technician',
                    'Trapper',
                ],
                Value: (level) => level.Damage / level.Cooldown,
            },
            Ranger: {
                For: ['Ranger'],
                Value: (level) =>
                    (level.Damage + level.ExplosionDamage) /
                    level.Cooldown,
            },
            Cowboy: {
                For: ['Cowboy'],
                Value: (level) => ((level.Damage * level.CashShot) / (level.Cooldown * level.CashShot + level.SpinDuration)), // prettier-ignore
            },
            Slasher: {
                For: ['Slasher', 'Warden'],
                Value: (level) =>
                ((level.Damage * 2) + (level.Damage * level.CritMultiplier)) / (level.Cooldown * 3),
            },
            Mortar: {
                For: ['Mortar'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const clusterDPS = level.CanCluster ? ((level.ClusterDamage * 0.4) * level.ClusterCount) / level.Cooldown : 0;

                    return dps + clusterDPS;
                },
            },
            Sledger: {
                For: ['Sledger'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const aftershockDPS = level.Aftershock ? level.Damage * level.AftershockMult : 0;

                    return dps + aftershockDPS;
                },
            },
            Ace: {
                For: ['Ace Pilot'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const bombDps = level.BombDropping
                        ? level.ExplosionDamage / level.BombTime
                        : 0;

                    return dps + bombDps;
                },
            },
            Accel: {
                For: ['Accelerator'],
                Requires: ['Overcharge', 'ChargeTime', 'Cooldown', 'LaserTime'],
                Value: (level) => {
                    const totalDamage = level.Overcharge;

                    const burstCooldown =
                        level.ChargeTime + level.LaserCooldown;

                    return totalDamage / (level.LaserTime + burstCooldown);
                },
            },
            Brawler: {
                For: ['Brawler'],
                Value: (level) => {
                    if (level.ComboLength == 1) {
                        return level.Damage / level.Cooldown;
                    }

                    const totalNormalHits = level.ComboLength - 1;
                    const totalDamage =
                        totalNormalHits * level.Damage + level.FinalHitDamage;

                    const comboLength =
                        totalNormalHits * level.Cooldown + level.ComboCooldown;

                    return totalDamage / comboLength;
                },
            },
            BurnTower: {
                For: ['Pyromancer', 'Hallow Punk'],
                Requires: ['Damage', 'Cooldown', 'BurnDamage', 'BurnTick'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const burnDPS = level.BurnDamage / level.BurnTick;

                    return dps + burnDPS;
                },
            },
            Archer: {
                For: ['Archer'],
                Value: (level) => {
                    switch(level.ArrowType){
                        case "Flame":
                         const dps = level.Damage / level.Cooldown;
                         const burnDPS = level.BurnDamage / level.BurnTick;
        
                         return dps + burnDPS; 
                        case "Explosive":
                         return (level.Damage + level.ExplosionDamage) / level.Cooldown;
                        default:
                         return level.Damage / level.Cooldown;
                    };
                },
            },
            Gatling: {
                For: ['Gatling Gun'],
                Requires: [
                    'Damage',
                    'Cooldown',
                    'FireTime',
                    'ReloadTime',
                ],
                Value: (level) => {
                    const totalDamage =
                        (level.Damage / level.Cooldown) * level.FireTime;
                    const totalTime =
                        level.FireTime + level.ReloadTime;

                    return totalDamage / totalTime;
                },
            },
            Pursuit: {
                For: ['Pursuit'],
                Requires: [
                    'Damage',
                    'Cooldown',
                    'MissilesEnabled',
                    'ExplosionDamage',
                    'MissileAmount',
                    'MissileCooldown',
                ],
                Value: (level) => {
                    const dps = (level.Damage * level.Ammo) / (level.ReloadTime + (level.Cooldown * level.Ammo));
                    const missileDPS = level.MissilesEnabled
                        ? (level.ExplosionDamage * level.MissileAmount) / (level.MissileCooldown + (level.TimeBetweenMissiles * level.MissileAmount))
                        : 0;

                    return dps + missileDPS;
                },
            },
            Swarmer: {
                For: ['Swarmer'],
                Requires: ['StingTime', 'BeeDamage', 'TickRate'],
                Value: (level) => level.BeeDamage / level.TickRate,
            },
            Rocketeer: {
                For: ['Rocketeer'],
                Requires: ['Damage', 'RocketCount', 'Cooldown'],
                Value: (level) => (level.Damage * level.RocketCount) / level.Cooldown,
            },
            Cryomancer: {
                For: ['Cryomancer'],
                Value: (level) => {
                    const magDamage = level.Damage * level.MaxAmmo;
                    const magTime =
                        level.Cooldown * level.MaxAmmo + level.ReloadTime;

                    const gunDPS = magDamage / magTime;
                    const dotDPS = level.DebuffDamage / level.TickRate;

                    return gunDPS + dotDPS;
                },
            },
            SoldierBurst: {
                For: ['Soldier', 'Freezer'],
                Value: (level) => {
                    const totalDamage = level.Damage * level.Burst;
                    const totalTime =
                        level.Cooldown * level.Burst + level.BurstCooldown;

                    return totalDamage / totalTime;
                },
            },
            ToxicGunner: {
                For: ['Toxic Gunner'],
                Value: (level) => {
                    const totalDamage = level.Damage * level.Burst;
                    const totalTime =
                        level.Cooldown * level.Burst + level.BurstCooldown;

                    const burstDPS = totalDamage / totalTime;
                    const poisonDPS = level.PoisonDamage / level.PoisonTick;

                    return burstDPS + poisonDPS;
                },
            },
            Commando: { //whoever made this tower so complicated deserves an award
                For: ['Commando'],
                Value: (level) => {
                    return (level.Ammo * level.Damage) / (level.Ammo * level.Cooldown + (level.Ammo / level.BurstSize - 1) * level.BurstCooldown + level.ReloadTime);
                },
            },
            WarMachine: {
                For: ['War Machine'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const missileDPS =
                        (level.ExplosionDamage * level.MissileCount) / level.MissileTime;

                    return dps + missileDPS;
                },
            },
            Shotgun: {
                For: ['Shotgunner'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    return dps * level.ShotSize;
                },
            },
            Spawner: {
                For: ['Engineer', 'Crook Boss', 'Military Base', 'Mecha Base'],
                Value: (level) => {
                    const unitDPS = level.UnitDPS ?? 0;
                    const towerDPS = level.TowerDPS ?? 0;
                    const ramDPS = level.RamDPS ?? 0;

                    return unitDPS + towerDPS + ramDPS;
                },
            },
            Elementalist: {
                For: ['Elementalist'],
                Value: (level) => {
                    const burnDPS = level.BurnDamage / level.BurnTick;
                    const unitDPS = level.UnitDPS ?? 0;
                    const towerDPS = (level.Damage * level.BurstSize) / (((level.BurstSize) * level.Cooldown) + level.BurstCooldown);
                    
                    return unitDPS + burnDPS + towerDPS;
                },
            },
        },
        LimitDPS: {
            Default: {
                Requires: ['DPS', 'Limit'],

                Value: (level) => level.DPS * level.Limit,
            },
        },
        NetCost: {
            Default: {
                Value: (level) => (level.levels.levels.reduce(
					(total, nextLevel) => nextLevel.Level > level.Level ? total : total + nextLevel.Cost, 0)), // prettier-ignore
            },
            Pursuit: {
                For: ['Pursuit'],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    const addThisToTheNetCostAndCostEfficiencyPleaseAndThanks = skin == "Top Path (4A & 5A)" || skin == "Bottom Path (4B & 5B)";
                    
                    if (addThisToTheNetCostAndCostEfficiencyPleaseAndThanks){
                        return ((level.levels.levels.reduce(
                            (total, nextLevel) => nextLevel.Level > level.Level ? total : total + nextLevel.Cost, 0)) + 11050);
                    }else{
                        return (level.levels.levels.reduce(
                            (total, nextLevel) => nextLevel.Level > level.Level ? total : total + nextLevel.Cost, 0))
                    }
                },
            }
        },
        LimitNetCost: {
            Default: {
                Requires: ['NetCost', 'Limit'],
                Value: (level) => level.NetCost * level.Limit,
            },
        },
        CostEfficiency: {
            Default: {
                Requires: ['NetCost', 'DPS'],
                Value: (level) => level.NetCost / level.DPS,
            },
            Pursuit: {
                For: ['Pursuit'],
                Requires: ['NetCost', 'DPS'],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    const addThisToTheNetCostAndCostEfficiencyPleaseAndThanks = skin == "Top Path (4A & 5A)" || skin == "Bottom Path (4B & 5B)";
                    
                    if (addThisToTheNetCostAndCostEfficiencyPleaseAndThanks){
                        return (level.NetCost + 11050) / level.DPS;
                    }else{
                        return level.NetCost / level.DPS;
                    }
                },
            }
        },
        Coverage: {
            Default: {
                Requires: ['Range'],
                Value: (level) => {
                    let x = level.Range;
                    const a = -0.00229008361916565;
                    const b = 0.165383660474954;
                    const c = 0.234910819904625;
                    const d = 2.62040766713282;

                    if (x > 45) {
                        x = 45;
                    }

                    return a * x ** 3 + b * x ** 2 + c * x + d;
                },
            },
        },
        BossPotential: {
            Default: {
                Requires: ['Coverage', 'DPS'],
                Value: (level) => level.Coverage * level.DPS,
            },
        },
        LimitBossPotential: {
            Default: {
                Requires: ['BossPotential', 'Limit'],
                Value: (level) => level.BossPotential * level.Limit,
            },
        },
        BossValue: {
            Default: {
                Requires: ['BossPotential', 'NetCost'],
                Value: (level) => (60 * level.BossPotential) / level.NetCost,
            },
        },
        Value: {
            Default: {
                Requires: ['NetCost', 'DPS', 'Range'],
                Value: (level) =>
                    (1000 * level.DPS * level.Range ** 0.4) / level.NetCost,
            },
        },
        IncomeFactor: {
            Default: {
                Requires: ['NetCost', 'DPS'],
                For: ['Cowboy'],
                Value: (level) => {
                    const damagePerCylinder = level.Damage * level.CashShot;
                    return (
                        (level.Income + damagePerCylinder) / damagePerCylinder
                    );
                },
            },
        },
        IncomePerSecond: {
            Default: {
                Requires: ['Income', 'CashShot', 'SpinDuration'],
                For: ['Cowboy'],
                Value: (level) =>
                    level.Income /
                    (level.Cooldown * level.CashShot + level.SpinDuration),
            },
        },
        WavesUntilNetProfit: {
            Default: {
                Requires: ['Income', 'NetCost'],
                For: ['Farm'],
                Value: (level) => level.NetCost / level.Income,
            },
        },
        WavesUntilUpgradeProfit: {
            Default: {
                Requires: ['Income', 'NetCost'],
                For: ['Farm'],
                Value: (level) => {
                    const lastLevelIncome =
                        level.Level === 0
                            ? 0
                            : level.levels.levels[level.Level - 1].Income;
                    return level.Cost / (level.Income - lastLevelIncome);
                },
            },
        },
        SpikeDPS: {
            Default: {
                Requires: ['SpikeDamage', 'SpikeCooldown'],
                For: ['Trapper'],
                Value: (level) => level.SpikeDamage / level.SpikeCooldown,
            },
        },
        SpikePileDamage: {
            Default: {
                Requires: ['SpikeDamage', 'MaxTraps'],
                For: ['Trapper'],
                Value: (level) => level.SpikeDamage * level.MaxTraps,
            },
        },
        LandmineDPS: {
            Default: {
                Requires: ['LandmineDamage', 'LandmineCooldown', 'BurnDamage', 'BurnTick'],
                For: ['Trapper'],
                Value: (level) => {
                    const dps = level.LandmineDamage / level.LandmineCooldown;
                    const burnDPS = level.BurnDamage / level.BurnTick;
                    
                    return dps + burnDPS;
                },
            },
        },
        LandminePileDamage: {
            Default: {
                Requires: ['LandmineDamage', 'MaxTraps'],
                For: ['Trapper'],
                Value: (level) => level.LandmineDamage * level.MaxTraps,
            },
        },
        BearTrapDPS: {
            Default: {
                Requires: ['BearTrapDamage', 'BearTrapCooldown'],
                For: ['Trapper'],
                Value: (level) => level.BearTrapDamage / level.BearTrapCooldown,
            },
        },
        BearTrapPileDamage: {
            Default: {
                Requires: ['BearTrapDamage', 'MaxTraps'],
                For: ['Trapper'],
                Value: (level) => level.BearTrapDamage * level.MaxTraps,
            },
        },
        Cooldown: {
            Type: 'Override',

            Default: {
                Requires: ['Cooldown'],
                Value: (cooldown) => {
                    const { extraCooldown, firerateBuff } = window.state.boosts.tower; // prettier-ignore

                    return cooldown / (firerateBuff + 1) + extraCooldown;
                },
            },
        },
        BurstCooldown: {
            Type: 'Override',
            Default: {
                Requires: ['BurstCooldown'],
                Value: (cooldown) => {
                    const { extraCooldown, firerateBuff } = window.state.boosts.tower; // prettier-ignore

                    return cooldown / (firerateBuff + 1) + extraCooldown;
                },
            },
        },
        Damage: {
            Type: 'Override',

            Default: {
                Requires: ['Damage'],
                Value: (damage) => {
                    const { damageBuff } = window.state.boosts.tower; // prettier-ignore

                    return damage * (damageBuff + 1);
                },
            },
        },
        Range: {
            Type: 'Override',

            Default: {
                Requires: ['Range'],
                Value: (range) => {
                    const { rangeBuff } = window.state.boosts.tower; // prettier-ignore

                    return range * (rangeBuff + 1);
                },
            },
        },
        Cost: {
            Type: 'Override',

            Default: {
                Requires: ['Cost'],
                Value: (cost, level) => {
                    const { discount } = window.state.boosts.tower; // prettier-ignore

                    return level.Level == 0 && discount > 0
                        ? cost
                        : cost * (-discount + 1);
                },
            },
        },
        SpawnTime: {
            Type: 'Override',

            Default: {
                Requires: ['SpawnTime'],
                Value: (spawnTime) => {
                    const { spawnrateBuff } = window.state.boosts.unit; // prettier-ignore

                    return spawnTime / (spawnrateBuff + 1);
                },
            },
        },
    };

    getValue(calculatedField, skinData) {
        for (let [_, value] of Object.entries(calculatedField)) {
            if (value?.For?.includes(skinData.tower.name)) return value;
        }

        return calculatedField.Default;
    }

    /**
     *
     * @param {SkinData} skinData
     */
    validate(calculatedField, skinData) {
        let valid = true;

        if (calculatedField.Exclude) {
            valid &= !calculatedField.Exclude.includes(skinData.tower.name);
        }
        if (calculatedField.Requires) {
            valid &= calculatedField.Requires.reduce((a, v) => {
                return a && skinData.levels.attributes.includes(v);
            }, true);
        }

        if (calculatedField.For) {
            valid &= calculatedField.For.includes(skinData.tower.name);
        }

        return valid;
    }

    /**
     * @param {SkinData} skinData
     */
    #add(name, skinData) {
        const dpsValue = this.getValue(this.calculated[name], skinData);
        if (this.validate(dpsValue, skinData))
            skinData.levels.addCalculated(name, dpsValue.Value);
    }

    addCalculate(skinData) {
        this.unitManager.load();

        this.#add('Cooldown', skinData);
        this.#add('Damage', skinData);
        this.#add('Range', skinData);
        this.#add('Cost', skinData);
        this.#add('SpawnTime', skinData);
        this.#add('LaserDPS', skinData);
        this.#add('FireTime', skinData);
        this.#add('TowerDPS', skinData);
        this.#add('UnitDPS', skinData);
        this.#add('ThornsDPS', skinData);
        this.#add('HeatwaveDPS', skinData);
        this.#add('AggregateUnitDPS', skinData);
        this.#add('RamDPS', skinData);
        this.#add('LaserTime', skinData);
        this.#add('TotalStingDamage', skinData);
        this.#add('DPS', skinData);
        this.#add('SpikeDPS', skinData);
        this.#add('LandmineDPS', skinData);
        this.#add('BearTrapDPS', skinData);
        this.#add('SpikePileDamage', skinData);
        this.#add('LandminePileDamage', skinData);
        this.#add('BearTrapPileDamage', skinData);
        this.#add('LimitDPS', skinData);
        this.#add('NetCost', skinData);
        this.#add('LimitNetCost', skinData);
        this.#add('CostEfficiency', skinData);
        this.#add('Coverage', skinData);
        this.#add('BossPotential', skinData);
        this.#add('LimitBossPotential', skinData);
        this.#add('BossValue', skinData);
        this.#add('Value', skinData);
        this.#add('IncomeFactor', skinData);
        this.#add('IncomePerSecond', skinData);
        this.#add('WavesUntilNetProfit', skinData);
        this.#add('WavesUntilUpgradeProfit', skinData);
    }
}

export default CalculatedManager;
