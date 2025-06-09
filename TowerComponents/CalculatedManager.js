import SkinData from './SkinData.js';
import UnitManager from './UnitManager.js';

var defaultEarlyPrice = 0;

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
            Frostburner: {
                For: ['Elementalist'],
                Requires: ['Damage', 'Cooldown'],
                Value: (level) => (level.Damage * level.Burst) / (((level.Burst - 1) * level.Cooldown) + level.BurstCooldown),
            },
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'Damage',
                    'Cooldown',
                    'BackupCallTime',
                ],
                Value: (level) => {
                    this.unitManager.load();

                    const skin = level.levels.skinData.name;
                    const goldText = skin == 'Golden' ? 'Golden' : '';

                    const pistolData = this.unitManager.unitData[`${goldText}Goon1`];
                    const tommyData = this.unitManager.unitData[`${goldText}Goon2`];
                    const bodyData = this.unitManager.unitData[`${goldText}Goon3`];

                    const pistolDelayPerMinute =
                        pistolData.attributes.SpawnTime > 0 && level.PistolCrooks == true
                            ? level.BackupCallTime *
                              (60 / pistolData.attributes.SpawnTime)
                            : 0;
                    const tommyDelayPerMinute =
                        tommyData.attributes.SpawnTime > 0 && level.TommyCrooks == true
                            ? level.BackupCallTime *
                              (60 / (level.UpgradedTommyGoons == true ? bodyData.attributes.SpawnTime : tommyData.attributes.SpawnTime))
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
                Exclude: ['Engineer', 'Biologist', 'Elementalist'],
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
                    'DoublePistolCrooks',
                    'UpgradedTommyGoons',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1Ram =
                        goon1.attributes.SpawnTime &&
                        goon1.attributes.Health / goon1.attributes.SpawnTime;
                    if (level.DoublePistolCrooks) goon1Ram *= 2;

                    let goon2Ram =
                        goon2.attributes.SpawnTime &&
                        goon2.attributes.Health / goon2.attributes.SpawnTime;
                    if (level.UpgradedTommyGoons){
                        goon2Ram =
                            goon3.attributes.Health / goon3.attributes.SpawnTime;
                    }

                    if (level.PistolCrooks == false) goon1Ram = 0;
                    if (level.TommyCrooks == false) goon2Ram = 0;

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
        RepositionDPS: {
            Default: {
                For: ['Brawler'],
                Requires: ['RepositionDamage', 'RepositionCooldown'],
                Value: (level) => {
                    if (level.RepositionCooldown == 0 || isNaN(level.RepositionCooldown)) return 0;

                    return level.RepositionDamage / level.RepositionCooldown;
                },
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
                Requires: ['TurretCooldown'],
                Value: (level) => {
                    this.unitManager.load();
                    const unitName = "IceTurret" + (level.Level - 1);

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
                    'DoublePistolCrooks',
                    'UpgradedTommyGoons',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1DPS =
                        goon1.attributes.SpawnTime && goon1.attributes.DPS;
                    if (level.DoublePistolCrooks) goon1DPS *= 2;

                    let goon2DPS =
                        goon2.attributes.SpawnTime && goon2.attributes.DPS;
                    if (level.UpgradedTommyGoons) goon2DPS = goon3.attributes.DPS;

                    if (level.PistolCrooks == false) goon1DPS = 0;
                    if (level.TommyCrooks == false) goon2DPS = 0;

                    return goon1DPS + goon2DPS;
                },
            },
        },
        AggregateUnitDPS: {
            Default: {
                Exclude: ['Engineer', 'Biologist'],
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
                    'DoublePistolCrooks',
                    'UpgradedTommyGoons',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1DPS =
                        goon1.attributes.SpawnTime && goon1.attributes.DPS;
                    if (level.DoublePistolCrooks) goon1DPS *= 2;

                    let goon2DPS =
                        goon2.attributes.SpawnTime && goon2.attributes.DPS;
                    if (level.UpgradedTommyGoons) goon2DPS = goon3.attributes.DPS;

                    let damage = 0;
                    let remainingTime = 60;

                    if (goon1.attributes.SpawnTime > 0.1 && level.PistolCrooks == true) {
                        while (remainingTime > 0) {
                            damage += goon1DPS * remainingTime;

                            remainingTime -= goon1.attributes.SpawnTime;
                        }
                    }

                    remainingTime = 60;

                    if (goon2.attributes.SpawnTime > 0.1 && level.TommyCrooks == true) {
                        while (remainingTime > 0) {
                            damage += goon2DPS * remainingTime;

                            remainingTime -= goon2.attributes.SpawnTime;
                        }
                    }

                    return damage / 60;
                },
            },
        },
        DamagePerBurst: {
            Default: {
                For: ['Soldier', 'Freezer', 'Commando', 'Elementalist', 'Toxic Gunner'],
                Requires: ['BurstCooldown', 'Cooldown', 'Burst'],
                Value: (level) => (level.Damage * level.Burst),
            },
            CriticalShit: {
                For: ['Warden', 'Slasher'],
                Requires: ['CritSwing', 'Cooldown'],
                Value: (level) => Math.ceil(((level.Damage * (level.CritSwing - 1)) + (level.Damage * level.CritMultiplier))),
            },
            Brawler: {
                For: ['Brawler'],
                Requires: ['CritSwing', 'Cooldown', 'ComboCooldown'],
                Value: (level) => (level.Damage * (level.CritSwing - 1)) + level.FinalHitDamage,         
            },
        },
        BurstTime: {
            Default: {
                For: ['Accelerator'],
                Requires: ['Overcharge', 'LaserDPS'],
                Value: (level) => level.Overcharge / level.LaserDPS,
            },
            Burst: {
                For: ['Soldier', 'Freezer', 'Commando', 'Elementalist', 'Toxic Gunner'],
                Requires: ['BurstCooldown', 'Cooldown', 'Burst'],
                Value: (level) => (level.Cooldown * level.Burst),
            },
            CriticalShit: {
                For: ['Warden', 'Slasher'],
                Requires: ['CritSwing', 'Cooldown'],
                Value: (level) => level.Cooldown * level.CritSwing,
            },
            Brawler: {
                For: ['Brawler'],
                Requires: ['CritSwing', 'Cooldown', 'ComboCooldown'],
                Value: (level) => (level.Cooldown * (level.CritSwing - 1)) + level.ComboCooldown,         
            },
        },
        "Uptime %": {
            Default: {
                For: ['Accelerator'],
                Requires: ['BurstTime', 'LaserCooldown', 'ChargeTime'],
                Value: (level) => {
                    const downtime = level.LaserCooldown + level.ChargeTime;

                    return (level.BurstTime / (level.BurstTime + downtime)) * 100;
                },
            },
            Burst: {
                For: ['Soldier', 'Freezer', 'Elementalist', 'Toxic Gunner'],
                Requires: ['BurstCooldown', 'Cooldown', 'Burst'],
                Value: (level) => (level.BurstTime / (level.BurstTime + level.BurstCooldown)) * 100,
            },
            Mando: {
                For: ['Commando'],
                Requires: ['ReloadTime', 'Ammo', 'BurstCooldown', 'Cooldown', 'Burst'],
                Value: (level) => {
                    const burstCount = Math.floor(level.Ammo / level.Burst);
                    const uptime = level.Ammo * level.Cooldown;
                    const downtime = (burstCount * level.BurstCooldown) + level.ReloadTime;

                    return (uptime / (uptime + downtime)) * 100;
                },
            },
            Gyat: {
                For: ['Gatling Gun'],
                Requires: ['ReloadTime', 'FireTime'],
                Value: (level) => (level.FireTime / (level.FireTime + level.ReloadTime)) * 100,
            },
        },
        FireTime: {
            Default: {
                For: ['Gatling Gun'],
                Requires: ['MaxAmmo', 'Cooldown'],
                Value: (level) => level.MaxAmmo * level.Cooldown,
            },
            Mando: {
                For: ['Commando'],
                Requires: ['FireTime', 'Ammo'],
                Value: (level) => {
                    const burstCount = Math.floor(level.Ammo / level.Burst);

                    return ((level.FireTime + level.BurstCooldown) * burstCount);
                },
            },
        },
        TotalElapsedDamage: {
            Default: {
                For: ['Swarmer'],
                Requires: ['StingTime', 'BeeDamage', 'TickRate'],
                Value: (level) => {
                    if (level.TickRate == 0) return 0;
                    return (level.StingTime * level.BeeDamage) / level.TickRate;
                },
            },
            Burn: {
                For: ['Archer', 'Pyromancer', 'Elementalist', 'Trapper'],
                Requires: ['BurnTime', 'BurnDamage', 'BurnTick'],
                Value: (level) => {
                    if (level.BurnTick == 0) return 0;
                    return (level.BurnTime * level.BurnDamage) / level.BurnTick;
                }
            },
            Cryo: {
                For: ['Cryomancer'],
                Requires: ['TickRate', 'ChillDamage', 'ChillLength'],
                Value: (level) => {
                    if (level.TickRate == 0) return 0;
                    return (level.ChillLength * level.ChillDamage) / level.TickRate;
                },
            },
            Harv: {
                For: ['Harvester'],
                Requires: ['ThornsDamage', 'ThornsTick', 'ThornsDuration'],
                Value: (level) => {
                    if (level.ThornsTick == 0) return 0;
                    return (level.ThornsDuration * level.ThornsDamage) / level.ThornsTick;
                },
            },
            Poison: {
                For: ['Toxic Gunner'],
                Requires: ['PoisonTick', 'PoisonDamage', 'PoisonLength'],
                Value: (level) => {
                    if (level.PoisonTick == 0) return 0;
                    return (level.PoisonLength * level.PoisonDamage) / level.PoisonTick;
                },
            },
        },
        TotalFireDamage: {
            Default: {
                For: ['Jester'],
                Requires: ['BurnTime', 'Damage', 'BurnTick'],
                Value: (level) =>
                    (level.BurnTime * (level.Damage * level.BurnDamageMult)) / level.BurnTick,
            },
        },
        TotalPoisonDamage: {
            Default: {
                For: ['Jester'],
                Requires: ['PoisonLength', 'Damage', 'PoisonTick'],
                Value: (level) =>
                    (level.BurnTime * (level.Damage * level.BurnDamageMult)) / level.BurnTick,
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
                    'Biologist',
                    'Mercenary Base',
                ],
                Value: (level) => {
                    if (level.Cooldown == 0) return 0; 

                    return level.Damage / level.Cooldown;
                }
            },
            Ranger: {
                For: ['Ranger'],
                Value: (level) =>
                    (level.Damage + level.ExplosionDamage) /
                    level.Cooldown,
            },
            Cowboy: {
                For: ['Cowboy'],
                Value: (level) => {
                    const damagePerSpin = level.Damage * level.CashShot;
                    var shotsPerSpin = level.CashShot == 1 ? 1 : (level.CashShot - 1);
                    const fireratePerSpin = level.Cooldown * shotsPerSpin;

                    return (damagePerSpin / (fireratePerSpin + level.SpinDuration))
                }
            },
            Slasher: {
                For: ['Slasher', 'Warden'],
                Value: (level) =>
                ((level.Damage * (level.CritSwing - 1)) + (level.Damage * level.CritMultiplier)) / (level.Cooldown * level.CritSwing),
            },
            Mortar: {
                For: ['Mortar'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const clusterDPS = level.CanCluster ? ((level.ClusterDamage * level.ClusterDamageMult) * level.ClusterCount) / level.Cooldown : 0;

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
                        ? level.BombDamage / level.BombTime
                        : 0;

                    return dps + bombDps;
                },
            },
            Accel: {
                For: ['Accelerator'],
                Requires: ['Overcharge', 'ChargeTime', 'Cooldown', 'BurstTime'],
                Value: (level) => {
                    const totalDamage = level.Overcharge;

                    const burstCooldown =
                        level.ChargeTime + level.LaserCooldown;

                    return totalDamage / (level.BurstTime + burstCooldown);
                },
            },
            Brawler: {
                For: ['Brawler'],
                Value: (level) => {
                    if (level.CritSwing == 1) {
                        return level.Damage / level.Cooldown;
                    }

                    const totalNormalHits = level.CritSwing - 1;
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
                    const burnDPS = (level.BurnDamage / level.BurnTick) ?? 0;

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
                    'Missiles',
                    'ExplosionDamage',
                    'MissileCount',
                    'MissileCooldown',
                ],
                Value: (level) => {
                    const dps = (level.Damage * level.Ammo) / (level.ReloadTime + (level.Cooldown * level.Ammo));
                    const missileDPS = level.Missiles
                        ? (level.ExplosionDamage * level.MissileCount) / (level.MissileCooldown + (level.BurstTime * level.MissileCount))
                        : 0;

                    return dps + missileDPS;
                },
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
                    const dotDPS = level.ChillDamage / level.TickRate;

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
            Commando: {
                For: ['Commando'],
                Value: (level) => (level.Ammo * level.Damage) / (level.Ammo * level.Cooldown + (level.Ammo / (level.Burst - 1)) * level.BurstCooldown + level.ReloadTime),
            },
            WarMachine: {
                For: ['War Machine'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const missileDPS =
                        (level.ExplosionDamage * level.MissileCount) / level.MissileCooldown;

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
                    const skin = level.levels.skinData.name;
                    const towerDPS = (level.Damage * level.Burst) / (((level.Burst - 1) * level.Cooldown) + level.BurstCooldown);
                    
                    if(skin == 'Fire Mode') return burnDPS + towerDPS; else return towerDPS + unitDPS;
                },
            },
        },
        BaseDPS: {
            Default: {
                For: ['Pyromancer', 'Ace Pilot', 'Mortar', 'Ranger', 'Archer', 'Swarmer', 'Jester', 'Hallow Punk', 'War Machine'],
                Requires: ['Damage', 'Cooldown'],
                Value: (level) => level.Damage / level.Cooldown,
            },
            Trapper: {
                For: ['Trapper'],
                Requires: ['LandmineDamage', 'LandmineCooldown'],
                Value: (level) => {
                    if (level.Landmines == false) return 0;

                    return level.LandmineDamage / level.LandmineCooldown;
                },
            },
            Pursuit: {
                For: ['Pursuit'],
                Requires: ['Damage', 'Ammo', 'ReloadTime', 'Cooldown'],
                Value: (level) => (level.Damage * level.Ammo) / (level.ReloadTime + (level.Cooldown * level.Ammo)),
            },
            Cryomancer: {
                For: ['Cryomancer'],
                Requires: ['Damage', 'Cooldown', 'MaxAmmo', 'ReloadTime'],
                Value: (level) => (level.Damage * level.MaxAmmo) / ((level.Cooldown * level.MaxAmmo) + level.ReloadTime),
            },
            PW2: {
                For: ['Toxic Gunner'],
                Requires: ['Damage', 'Cooldown', 'BurstCooldown', 'Burst'],
                Value: (level) => (level.Damage * level.Burst) / ((level.Cooldown * level.Burst) + level.BurstCooldown),
            },
            Frostburner: {
                For: ['Elementalist'],
                Requires: ['Damage', 'Cooldown', 'BurstCooldown', 'Burst', 'BurnDamage'],
                Value: (level) => (level.Damage * level.Burst) / ((level.Cooldown * (level.Burst - 1)) + level.BurstCooldown),
            },
        },
        SplashDPS: {
            Default: {
                Requires: ['ExplosionDamage', 'Cooldown'],
                Value: (level) => level.ExplosionDamage / level.Cooldown,
            },
            Missile: {
                For: ['Pursuit'],
                Requires: ['Missiles', 'MissileCooldown', 'BurstTime', 'ExplosionDamage', 'MissileCount'],
                Value: (level) => level.Missiles ? (level.ExplosionDamage * level.MissileCount) / (level.MissileCooldown + (level.BurstTime * level.MissileCount)) : 0,
            },
            WM: {
                For: ['War Machine'],
                Requires: ['ExplosionDamage', 'MissileCount', 'MissileCooldown'],
                Value: (level) => (level.ExplosionDamage * level.MissileCount) / level.MissileCooldown,
            },
            Ace: {
                For: ['Ace Pilot'],
                Requires: ['BombDropping', 'BombDamage', 'BombTime'],
                Value: (level) => level.BombDropping ? level.BombDamage / level.BombTime : 0,
            },
        },
        ClusterDPS: {
            Default: {
                Requires: ['ClusterDamageMult', 'ClusterDamage', 'Cooldown', 'ClusterCount', 'CanCluster'],
                Value: (level) => {
                    const clusterDPS = level.CanCluster ? (((level.ClusterDamage * level.ClusterDamageMult) * level.ClusterCount) / level.Cooldown) : 0;

                    return clusterDPS;
                },
            },
        },
        LimitDPS: {
            Default: {
                Requires: ['DPS', 'Limit'],

                Value: (level) => level.DPS * level.Limit,
            },
            Burn: {
                Requires: ['DPS', 'Limit'],
                For: ['Hallow Punk'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const burnDPS = level.BurnDamage / level.BurnTick;

                    return (dps * level.Limit) + burnDPS;
                },
            },
        },
        NetCost: {
            Default: {
                Value: (level) => (level.levels.levels.reduce(
					(total, nextLevel) => nextLevel.Level > level.Level ? total : total + nextLevel.Cost, 0)), // prettier-ignore
            },
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
                Value: (level) => {
                    if (level.DPS == 0 || isNaN(level.DPS)) return 0;

                    return level.NetCost / level.DPS;
                },
            },
            Swarmer: {
                For: ['Swarmer'],
                Value: (level) => {
                    var dps = level.Damage / level.Cooldown;

                    return level.NetCost / (dps + level.BeeDPS);
                },
            },
            Necromancer: {
                For: ['Necromancer'],
                Value: (level) => {
                    var maxLevel = level.Level == 4;

                    if (maxLevel) return level.NetCost / level.MaxDPS; else return level.NetCost / level.DPS;
                },
            }
        },
        MaxCostEfficiency: {
            Default: {
                Requires: ['NetCost', 'MaxDPS'],
                Value: (level) => {
                    if (level.MaxDPS == 0 || isNaN(level.MaxDPS)) return 0;

                    return level.NetCost / level.MaxDPS;
                },
            },
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

                    return a * x ** 3 + b * x ** 2 + c * x + d;
                },
            },
            Pursuit: {
                For: ['Pursuit'],
                Requires: ['PatrolRange'],
                Value: (level) => {
                    let x = level.PatrolRange;
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
            Necromancer: {
                Requires: ['Coverage', 'MaxDPS'],
                For: ['Necromancer'],
                Value: (level) => {
                    var maxLevel = level.Level == 4;

                    if (maxLevel) return level.Coverage * level.MaxDPS; else return level.Coverage * level.DPS;
                },
            },
        },
        LimitBossPotential: {
            Default: {
                Requires: ['BossPotential', 'Limit'],
                Value: (level) => level.BossPotential * level.Limit,
            },
        },
        MaxDPS: {
            Default: {
                Requires: ['DPS', 'MaxHits'],
                Exclude: ['Executioner'],
                Value: (level) => level.DPS * level.MaxHits,
            },
            Pierce: {
                Requires: ['DPS', 'Pierce'],
                For: ['Shotgunner', 'Gatling Gun'],
                Value: (level) => level.DPS * level.Pierce,
            },
            Sledger: {
                Requires: ['DPS', 'MaxHits'],
                For: ['Sledger'],
                Value: (level) => (level.DPS * level.MaxHits) * level.FreezeBonusMult,
            },
            Swarmer: {
                Requires: ['Damage', 'Cooldown', 'MaxBeeStacks'],
                For: ['Swarmer'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const beeDPS = (level.BeeDamage / level.TickRate) * level.MaxBeeStacks;

                    return dps + beeDPS;
                },
            },
            Bug: {
                Requires: ['Damage', 'Cooldown', 'MaxHitsPerTick', 'MaxBounce'],
                For: ['Executioner'],
                Value: (level) => (level.Damage * (level.MaxHitsPerTick * level.MaxBounce)) / level.Cooldown,
            },
        },
        GlobalMaxDPS: {
            Default: {
                Requires: ['GlobalMaxStacks'],
                For: ['Swarmer'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const beeDPS = (level.BeeDamage / level.TickRate) * level.GlobalMaxStacks;

                    return dps + beeDPS;
                },
            },
        },
        "DPS Rate": {
            Default: {
                Requires: ['Cooldown'],
                For: ['Swarmer'],
                Value: (level) => (level.BeeDamage / level.TickRate) / level.Cooldown,
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
                Requires: ['SpikeHealth', 'SpikeCooldown'],
                For: ['Trapper'],
                Value: (level) => {
                    if (level.Spikes == false) return 0;
                    const enemiesHit = Math.ceil(level.SpikeHealth / level.SpikeDamage);

                    return ((level.SpikeDamage * enemiesHit) / level.SpikeCooldown);
                },
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
                    if (level.Landmines == false) return 0;

                    const dps = level.LandmineDamage / level.LandmineCooldown;
                    var burnDPS = level.BurnDamage / level.BurnTick;

                    if (isNaN(burnDPS)) burnDPS = 0;
                    
                    return dps + burnDPS;
                },
            },
        },
        BeeDPS: {
            Default: {
                For: ['Swarmer'],
                Requires: ['StingTime', 'BeeDamage', 'TickRate'],
                Value: (level) => (level.BeeDamage / level.TickRate) * level.BeeStacks,
            },
        },
        GrenadeDPS: {
            Default: {
                For: ['Swarmer'],
                Requires: ['GrenadeDamage', 'GrenadeCooldown'],
                Value: (level) => {
                    if (level.BeeGrenade == false) return 0;

                    return level.GrenadeDamage / level.GrenadeCooldown;
                },
            },
        },
        BurnDPS: {
            Default: {
                Requires: ['BurnDamage', 'BurnTick'],
                Value: (level) => level.BurnDamage / level.BurnTick,
            },
            Crapper: {
                For: ['Trapper'],
                Value: (level) => {
                    if (level.Landmines == false || !level.BurnTick == true || level.BurnTick == 0) return 0;

                    return level.BurnDamage / level.BurnTick;
                },
            },
            Jetser: {
                For: ['Jester'],
                Requires: ['BurnTick', 'BurnDamageMult'],
                Value: (level) => (level.Damage * level.BurnDamageMult) / level.BurnTick,
            }
        },
        ChillDPS: {
            Default: {
                Requires: ['ChillDamage', 'TickRate'],
                Value: (level) => level.ChillDamage / level.TickRate,
            },
        },
        PoisonDPS: {
            Default: {
                Requires: ['PoisonDamage', 'PoisonTick'],
                Value: (level) => level.PoisonDamage / level.PoisonTick,
            },
            Jetser: {
                For: ['Jester'],
                Requires: ['PoisonTick', 'PoisonDamageMult'],
                Value: (level) => {
                    if (level.Poison == false) return 0;

                    return (level.Damage * level.PoisonDamageMult) / level.PoisonTick;
                }
            }
        },
        MissileDPS: {
            Default: {
                For: ['Commando'],
                Requires: ['MissileCooldown', 'MissileDamage'],
                Value: (level) => { 
                    if (level.Missiles == false) return 0;

                    return level.MissileDamage / level.MissileCooldown;
                }
            },
        },
        "Thorns Uptime %": {
            Default: {
                For: ['Harvester'],
                Requires: ['ThornsDuration', 'ThornsCooldown'],
                Value: (level) => (level.ThornsDuration / level.ThornsCooldown) * 100,
            },
        },
        "Stall Uptime %": {
            Default: {
                Requires: ['StunLength', 'Cooldown'],
                Value: (level) => (level.StunLength / level.Cooldown) * 100,
            },
            Mando: {
                For: ['Commando'],
                Requires: ['MissileStun', 'MissileCooldown'],
                Value: (level) => {
                    if (level.Missiles == false) return 0;

                    return (level.MissileStun / level.MissileCooldown) * 100;
                },  
            },
            Crapper: {
                For: ['Trapper'],
                Requires: ['BearTrapCooldown', 'StunLength'],
                Value: (level) => {
                    if (level.BearTraps == false) return 0;

                    return (level.StunLength / level.BearTrapCooldown) * 100;    
                },
            },
            Minecraft: {
                For: ['Warden'],
                Requires: ['StunLength', 'Cooldown', 'StunEveryHit'],
                Value: (level) => {
                    const critSwing = level.StunEveryHit ? 1 : level.CritSwing;

                    return (level.StunLength / (level.Cooldown * critSwing)) * 100;
                }
            },
            FrostBlaster: {
                For: ['Frost Blaster'],
                Requires: ['FreezeTime', 'Cooldown'],
                Value: (level) => {
                    const freezeCooldown = level.Cooldown < 1;
                    const freezeEveryHit = Math.ceil(1 / level.Cooldown);

                    if (freezeCooldown){
                        return ((level.FreezeTime / level.Cooldown) / freezeEveryHit) * 100;
                    }
                    else{
                        return (level.FreezeTime / level.Cooldown) * 100;
                    }
                }
            },
            Jester: {
                For: ['Jester'],
                Requires: ['Confusion', 'ConfusionDuration', 'ConfusionCooldown'],
                Value: (level) => level.Confusion ? (level.ConfusionDuration / level.ConfusionCooldown) * 100 : 0,
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
                Value: (level) => {
                  if (level.BearTraps == false) return 0;

                  return level.BearTrapDamage / level.BearTrapCooldown;
                },
            },
        },
        BearTrapPileDamage: {
            Default: {
                Requires: ['BearTrapDamage', 'MaxTraps'],
                For: ['Trapper'],
                Value: (level) => level.BearTrapDamage * level.MaxTraps,
            },
        },
        SpikeCostEfficiency: {
            Default: {
                For: ['Trapper'],
                Value: (level) => {
                    if (level.Spikes == false) return 0;
                    
                    const enemiesHit = Math.ceil(level.SpikeHealth / level.SpikeDamage);

                    const dps = (level.SpikeDamage * enemiesHit) / level.SpikeCooldown;
                    
                    return level.NetCost / dps;
                },
            },
        },
        LandmineCostEfficiency: {
            Default: {
                For: ['Trapper'],
                Value: (level) => {
                    if (level.Landmines == false) return 0;

                    const dps = level.LandmineDamage / level.LandmineCooldown;
                    let burnDPS = level.BurnDamage / level.BurnTick;

                    if (isNaN(burnDPS)) burnDPS = 0; 
                    
                    return level.NetCost / (dps + burnDPS);
                },
            },
        },
        BearTrapCostEfficiency: {
            Default: {
                For: ['Trapper'],
                Value: (level) => {
                    if (level.BearTraps == false) return 0;

                    const dps = level.BearTrapDamage / level.BearTrapCooldown;
                    
                    return level.NetCost / dps;
                },
            },
        },
        SunflowerMaxDPS: {
            Default: {
                For: ['Biologist'],
                Value: (level) => {
                    this.unitManager.load();
                    var unit = "Sunflower" + level.Level;
                    if (!this.unitManager.hasUnit(unit) || level.Sunflower == false) return 0;

                    const unitData = this.unitManager.unitData[unit];

                    return unitData.attributes.DPS * level.UnitQueues;
                },
            },
        },
        IvyMaxDPS: {
            Default: {
                For: ['Biologist'],
                Value: (level) => {
                    this.unitManager.load();
                    var unit = "Ivy" + level.Level;
                    if (!this.unitManager.hasUnit(unit) || level.Ivy == false) return 0;

                    const unitData = this.unitManager.unitData[unit];
                    var unitDPS = this.unitManager.hasUnit(unit) ? unitData.attributes.Damage / unitData.attributes.Cooldown : 0;
                    var poisonDPS = this.unitManager.hasUnit(unit) ? unitData.attributes.PoisonDPS : 0;

                    return (unitDPS * level.UnitQueues) + poisonDPS;
                },
            },
        },
        NightshadeMaxDPS: {
            Default: {
                For: ['Biologist'],
                Value: (level) => {
                    this.unitManager.load();
                    var unit = "Nightshade" + level.Level;
                    if (!this.unitManager.hasUnit(unit) || level.Nightshade == false) return 0;

                    const unitData = this.unitManager.unitData[unit];

                    return unitData.attributes.DPS * level.UnitQueues;
                },
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
                For: ['Commando', 'Elementalist'],
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
        this.#add('RepositionDPS', skinData);
        this.#add('HeatwaveDPS', skinData);
        this.#add('AggregateUnitDPS', skinData);
        this.#add('RamDPS', skinData);
        this.#add('DamagePerBurst', skinData);
        this.#add('BurstTime', skinData);
        this.#add('Uptime %', skinData);
        this.#add('TotalElapsedDamage', skinData);
        this.#add('DPS', skinData);
        this.#add('MaxDPS', skinData);
        this.#add('GlobalMaxDPS', skinData);
        this.#add("DPS Rate", skinData);
        this.#add('SpikeDPS', skinData);
        this.#add('LandmineDPS', skinData);
        this.#add('BaseDPS', skinData);
        this.#add('SplashDPS', skinData);
        this.#add('ClusterDPS', skinData);
        this.#add('BurnDPS', skinData);
        this.#add('ChillDPS', skinData);
        this.#add('BearTrapDPS', skinData);
        this.#add('SpikePileDamage', skinData);
        this.#add('LandminePileDamage', skinData);
        this.#add('BearTrapPileDamage', skinData);
        this.#add('PoisonDPS', skinData);
        this.#add('LimitDPS', skinData);
        this.#add('BeeDPS', skinData);
        this.#add('GrenadeDPS', skinData);
        this.#add('MissileDPS', skinData);
        this.#add('SpikeCostEfficiency', skinData);
        this.#add('LandmineCostEfficiency', skinData);
        this.#add('BearTrapCostEfficiency', skinData);
        this.#add('Stall Uptime %', skinData);
        this.#add('Thorns Uptime %', skinData);
        this.#add('SunflowerMaxDPS', skinData);
        this.#add('IvyMaxDPS', skinData);
        this.#add('NightshadeMaxDPS', skinData);
        this.#add('NetCost', skinData);
        this.#add('LimitNetCost', skinData);
        this.#add('CostEfficiency', skinData);
        this.#add('MaxCostEfficiency', skinData);
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
