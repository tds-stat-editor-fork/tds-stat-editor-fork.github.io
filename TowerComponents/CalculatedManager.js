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
                    const pvpText = skin == 'PVP' ? ' (PVP)' : '';

                    const pistolData = this.unitManager.unitData[`${goldText}Goon1${pvpText}`];
                    const tommyData = this.unitManager.unitData[`${goldText}Goon2${pvpText}`];
                    const bodyData = this.unitManager.unitData[`${goldText}Goon3${pvpText}`];

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
                Exclude: ['Engineer'],
                Requires: ['UnitToSend'],
                Value: (level) => {
                    this.unitManager.load();

                    const unitName = level.UnitToSend;
                    if (!this.unitManager.hasUnit(unitName)) return 0;

                    const unitData = this.unitManager.unitData[unitName];

                    let ramDPS = unitData.attributes.Health / level.SpawnTime;
                    if (level.SpawnTime == 0 | isNaN(level.SpawnTime)) ramDPS = unitData.attributes.Health / unitData.attributes.SpawnTime;

                    return unitData.attributes.DPS + ramDPS;
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
                    
                    return unitData.attributes.DPS;
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
                    const pvpText = skin == 'PVP' ? ' (PVP)' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1${pvpText}`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2${pvpText}`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3${pvpText}`];

                    let goon1DPS =
                        goon1.attributes.SpawnTime && goon1.attributes.DPS;
                    if (level.DoublePistolCrooks) goon1DPS *= 2;

                    let goon2DPS =
                        goon2.attributes.SpawnTime && goon2.attributes.DPS;
                    if (level.UpgradedTommyGoons) goon2DPS = goon3.attributes.DPS;

                    if (level.PistolCrooks == false) goon1DPS = 0;
                    if (level.TommyCrooks == false) goon2DPS = 0;

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

                    return goon1DPS + goon2DPS + goon1Ram + goon2Ram;
                },
            },
        },
        DamagePerBurst: {
            Default: {
                For: ['Soldier', 'Freezer', 'Elementalist', 'Toxic Gunner'],
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
                For: ['Soldier', 'Freezer', 'Elementalist', 'Toxic Gunner'],
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
        Uptime: {
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
                    const uptime = level.Ammo * level.Cooldown;
                    const downtime = level.ReloadTime;

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
        },
        TotalElapsedDamage: {
            Default: {
                For: ['Swarmer'],
                Requires: ['StingTime', 'BeeDamage', 'TickRate'],
                Value: (level) => {
                    if (level.TickRate == 0) return 0;
                    return Math.floor((level.StingTime * level.BeeDamage) / level.TickRate);
                },
            },
            Burn: {
                For: ['Archer', 'Pyromancer', 'Elementalist', 'Trapper', 'Hallow Punk'],
                Requires: ['BurnTime', 'BurnDamage', 'BurnTick'],
                Value: (level) => {
                    if (level.BurnTick == 0 || !level.BurnTick == true) return 0;
                    return Math.floor((level.BurnTime * level.BurnDamage) / level.BurnTick);
                }
            },
            Cryo: {
                For: ['Cryomancer'],
                Requires: ['TickRate', 'ChillDamage', 'ChillLength'],
                Value: (level) => {
                    if (level.TickRate == 0) return 0;
                    return Math.floor((level.ChillLength * level.ChillDamage) / level.TickRate);
                },
            },
            Harv: {
                For: ['Harvester'],
                Requires: ['ThornsDamage', 'ThornsTick', 'ThornsDuration'],
                Value: (level) => {
                    if (level.ThornsTick == 0) return 0;
                    return Math.floor((level.ThornsDuration * level.ThornsDamage) / level.ThornsTick);
                },
            },
            Poison: {
                For: ['Toxic Gunner'],
                Requires: ['PoisonTick', 'PoisonDamage', 'PoisonLength'],
                Value: (level) => {
                    if (level.PoisonTick == 0) return 0;
                    return Math.floor((level.PoisonLength * level.PoisonDamage) / level.PoisonTick);
                },
            },
        },
        TotalFireDamage: {
            Default: {
                For: ['Jester'],
                Requires: ['BurnTime', 'Damage', 'BurnTick'],
                Value: (level) => {
                    if (level.Fire == false) return 0;

                    return Math.floor((level.BurnTime * Math.ceil((level.Damage * level.BurnDamageMult))) / level.BurnTick);
                }
            },
        },
        TotalPoisonDamage: {
            Default: {
                For: ['Jester'],
                Requires: ['PoisonPuddleLifespan', 'Damage', 'PoisonTick'],
                Value: (level) => {
                    if (level.Poison == false) return 0;

                    return Math.floor((level.PoisonPuddleLifespan * (level.Damage * level.PoisonDamageMult)) / level.PoisonTick);
                }
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
                    'Military Base',
                    'PVP Sends',
                    'Medic',
                    'Archer',
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
                Math.ceil(((level.Damage * (level.CritSwing - 1)) + (level.Damage * level.CritMultiplier))) / (level.Cooldown * level.CritSwing),
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
                    let bombDps = level.BombDropping
                        ? level.BombDamage / level.BombTime
                        : 0;

                    if (!isFinite(bombDps)) return 0;

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
                    let burnDPS = (level.BurnDamage / level.BurnTick);

                    if (!isFinite(burnDPS)) burnDPS = 0;

                    return dps + burnDPS;
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
                    const dps = (level.Damage * level.Ammo) / (level.ReloadTime + (level.RevTime ?? 0) + (level.Cooldown * level.Ammo));
                    const missileDPS = level.Missiles
                        ? (level.ExplosionDamage * level.MissileCount) / (level.MissileCooldown + (level.BurstTime * level.MissileCount))
                        : 0;

                    return dps + missileDPS;
                },
            },
            Necromancer: {
                For: ['Necromancer'],
                Value: (level) => {
                    const beams = level.Beams == true;

                    if (beams) return (level.MaxHits * level.Damage) / level.Cooldown;

                    return level.Damage / level.Cooldown;
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
                Value: (level) => (level.Ammo * level.Damage) / ((level.Ammo * level.Cooldown) + level.ReloadTime),
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
                For: ['Engineer', 'Crook Boss'],
                Value: (level) => {
                    const unitDPS = level.UnitDPS ?? 0;
                    const towerDPS = level.TowerDPS ?? 0;

                    return unitDPS + towerDPS;
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
            AssSaved: {
                For: ['Assassin'],
                Value: (level) => {
                    //"realistically its only saved from being a buggy mess because its simple" - mentin
                    //yeah simple to use not to calculate for FUCKS SAKE
                    let baseDPS = level.WhirlwindSlash ? (level.Damage * (level.WhirlwindSwing - 1)) / (level.Cooldown * level.WhirlwindSwing) : level.Damage / level.Cooldown;
                    let susiesIdea = level.WhirlwindSlash ? level.WhirlwindDamage / (level.WhirlwindSwing * level.Cooldown) : 0;
                    const hitsToFan = (level.FanOfKnivesThreshold / level.Damage) + 1;
                    if (level.FanOfKnives){
                        let totalDamage = (level.FanOfKnivesThreshold + (level.KnifeDamage * level.KnifeCount));
                        let totalCooldown = (level.FanOfKnivesThreshold / ((level.Damage * (level.WhirlwindSwing - 1) + level.WhirlwindDamage) / level.WhirlwindSwing) * level.Cooldown + level.KnifeCooldown + level.Cooldown);
                        if (isNaN(totalDamage) || isNaN(totalCooldown) || totalCooldown == 0) return 0;
                        return totalDamage / totalCooldown;
                    };

                    return baseDPS + susiesIdea;
                },
            },
        },
        BaseDPS: {
            Default: {
                For: ['Pyromancer', 'Ace Pilot', 'Mortar', 'Ranger', 'Jester', 'Hallow Punk', 'War Machine'],
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
                Value: (level) => (level.Damage * level.Ammo) / (level.ReloadTime + (level.RevTime ?? 0) + (level.Cooldown * level.Ammo)),
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
            AssSaved: {
                For: ['Assassin'],
                Value: (level) => {
                    if (level.FanOfKnives){
                        return level.WhirlwindSlash ? ((level.Damage * (level.WhirlwindSwing - 1)) * (level.FanOfKnivesThreshold / ((level.Damage * (level.WhirlwindSwing - 1)) + level.WhirlwindDamage))) / ((level.FanOfKnivesThreshold / ((level.Damage * (level.WhirlwindSwing - 1) + level.WhirlwindDamage) / level.WhirlwindSwing) * level.Cooldown + level.KnifeCooldown + level.Cooldown)) : level.FanOfKnivesThreshold / ((level.FanOfKnivesThreshold / level.Damage) * level.Cooldown + level.KnifeCooldown + level.Cooldown);
                    };
                    return level.WhirlwindSlash ? (level.Damage * (level.WhirlwindSwing - 1)) / (level.Cooldown * level.WhirlwindSwing) : level.Damage / level.Cooldown;
                },
            },
        },
        MeleeDPS: {
            Default: {
                For: ['Warlock'],
                Value: (level) => (level.Damage + level.MeleeDamage) / level.MeleeCooldown,
            },
        },
        MeleeMaxDPS: {
            Default: {
                For: ['Warlock'],
                Value: (level) => ((level.Damage * level.MeleeMaxHits) + level.MeleeDamage) / level.MeleeCooldown,
            },
        },
        WhirlwindSlashDPS: {
            Default: {
                For: ['Assassin'],
                Value: (level) => {
                    if (level.FanOfKnives) {
                        return level.WhirlwindSlash ? (level.WhirlwindDamage * (level.FanOfKnivesThreshold / ((level.Damage * (level.WhirlwindSwing - 1)) + level.WhirlwindDamage))) / ((level.FanOfKnivesThreshold / ((level.Damage * (level.WhirlwindSwing - 1) + level.WhirlwindDamage) / level.WhirlwindSwing) * level.Cooldown + level.KnifeCooldown + level.Cooldown)): 0;
                    };
                    return level.WhirlwindSlash != 0 ? level.WhirlwindSlash ? level.WhirlwindDamage / (level.WhirlwindSwing * level.Cooldown) : 0 : 0;
                },
            },
        },
        KnifeThrowDPS: {
            Default: {
                For: ['Assassin'],
                Value: (level) => {
                    if (level.FanOfKnivesThreshold == 0 || !level.FanOfKnives) return 0;
                    let totalDamage = (level.KnifeDamage * level.KnifeCount);
                    let totalTime = (level.FanOfKnivesThreshold / ((level.Damage * (level.WhirlwindSwing - 1) + level.WhirlwindDamage) / level.WhirlwindSwing) * level.Cooldown + level.KnifeCooldown + level.Cooldown);
                    return totalDamage / totalTime;
                },
            },
        },
        ExplosiveDPS: {
            Default: {
                Requires: ['ExplosionDamage', 'Cooldown'],
                Exclude: ['Necromancer'],
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
                Value: (level) => {
                    if (level.BombDropping != true || !isFinite(level.BombTime) || level.BombTime == 0) return 0;
                    
                    return level.BombDamage / level.BombTime;
                },
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
                    let burnDPS = level.BurnDamage / level.BurnTick;

                    if (!isFinite(burnDPS)) burnDPS = 0;

                    return (dps * level.Limit) + burnDPS;
                },
            },
        },
        NetCost: {
            Default: {
                Exclude: ['PVP Sends'],
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
                Exclude: ['Jester'],
                Value: (level) => {
                    if (level.DPS == 0 || isNaN(level.DPS)) return 0;

                    return level.NetCost / level.DPS;
                },
            },
            Summoners: {
                For: ['Military Base', 'Mecha Base'],
                Requires: ['NetCost', 'UnitDPS'],
                Value: (level) => {
                    if (level.UnitDPS == 0 || isNaN(level.UnitDPS)) return 0;

                    return level.NetCost / level.UnitDPS;
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
                    const beams = level.Beams == true;

                    if (beams) return level.NetCost / level.MaxDPS;
                    
                    return level.NetCost / level.DPS;
                },
            },
            Sends: {
                For: ['PVP Sends'],
                Value: (level) => {
                    if (level.EconomyBonus == 0) return 0;

                    return level.SendCost / level.EconomyBonus;
                },
            },
        },
        MaxCE: {
            Default: {
                Requires: ['NetCost', 'MaxDPS'],
                Exclude: ['Jester'],
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

                    if (x > 50){
                        x = 50;
                    }

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

                    if (x > 50) {
                        x = 50;
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
                Requires: ['Coverage', 'DPS'],
                For: ['Necromancer'],
                Value: (level) => {
                    const beams = level.Beams == true;

                    let totalShots = Math.floor(level.Coverage / level.Cooldown);

                    if (beams) return totalShots * (level.Damage * level.MaxHits);

                    return totalShots * level.Damage;
                },
            },
            Minigunner: {
                Requires: ['Coverage', 'DPS', 'RevTime'],
                For: ['Minigunner'],
                Value: (level) => {
                    let totalDamage = level.Coverage * level.DPS;
                    let wastedDamage = level.DPS * level.RevTime;

                    totalDamage -= wastedDamage;

                    let totalShots = Math.floor(totalDamage / level.Damage);

                    return totalShots * level.Damage;
                },
            },
            Ordinary: { // remember to make this the new default when youre done
                Requires: ['Coverage', 'DPS'],
                For: ['Accelerator', 'Scout', 'Sniper', 'Paintballer', 'Demoman', 'Hunter', 'Soldier', 'Militant', 'Medic', 'Freezer', 'Turret', 'Gatling Gun', 'Cowboy', 'Commander', 'Electroshocker', 'Hacker', 'Gladiator', 'Commando', 'Frost Blaster', 'Sledger', 'Executioner', 'Harvester'],
                Value: (level) => {
                    if (level.Damage == 0 || isNaN(level.Damage) || level.Damage == Infinity) return 0;

                    let totalDamage = level.Coverage * level.DPS;

                    let totalShots = Math.floor(totalDamage / level.Damage);

                    return totalShots * level.Damage;
                },
            },
            Archer: {
                Requires: ['Coverage', 'DPS'],
                For: ['Archer'],
                Value: (level) => {
                    if (level.ArrowType == 'Flame'){
                        let totalDamage = level.Coverage * level.DPS;
                        let totalBurnTime = (Math.floor((level.Coverage + level.BurnTime) / level.BurnTime)) * level.BurnTime;
                        let totalBurnTicks = Math.floor(totalBurnTime / level.BurnTick);

                        let totalShots = Math.floor(totalDamage / level.Damage);

                        return (totalShots * level.Damage) + Math.floor(totalBurnTicks * level.BurnDamage);
                    }
                    else if (level.ArrowType == 'Explosive'){
                        let totalDamage = level.Coverage * level.DPS;

                        let totalShots = Math.floor(totalDamage / level.Damage);

                        return (totalShots * (level.Damage + level.ExplosionDamage));
                    }
                    else {
                        let totalDamage = level.Coverage * level.DPS;

                        let totalShots = Math.floor(totalDamage / level.Damage);

                        return totalShots * level.Damage;
                    }
                },
            },
            Splash: {
                Requires: ['Coverage', 'DPS', 'ExplosionDamage'],
                For: ['Ranger'],
                Value: (level) => {
                    let totalDamage = level.Coverage * level.DPS;

                    let totalShots = Math.floor(totalDamage / (level.Damage + level.ExplosionDamage));

                    return totalShots * (level.Damage + level.ExplosionDamage);
                },
            },
            Mortar: {
                Requires: ['Coverage', 'DPS'],
                For: ['Mortar'],
                Value: (level) => {
                    let totalCluster = 0;
                    let totalDamage = 0;

                    totalDamage = level.Coverage * level.BaseDPS;
                    let totalShots = Math.floor(totalDamage / level.Damage);

                    totalCluster = ((level.ClusterCount * level.ClusterDamage) * level.ClusterDamageMult) * totalShots;
                    totalDamage = totalShots * level.Damage;

                    return totalCluster + totalDamage;
                },
            },
            Shotgunner: {
                Requires: ['Coverage', 'DPS'],
                For: ['Shotgunner'],  
                Value: (level) => {
                    let totalDamage = level.Coverage * level.DPS;

                    let totalShots = Math.floor(totalDamage / (level.Damage * level.ShotSize));

                    return totalShots * (level.Damage * level.ShotSize);
                },
            },
            Rocketeer: {
                Requires: ['Coverage', 'DPS'],
                For: ['Rocketeer'],  
                Value: (level) => {
                    let totalDamage = level.Coverage * level.DPS;

                    let totalShots = Math.floor(totalDamage / (level.Damage * level.RocketCount));

                    return totalShots * (level.Damage * level.RocketCount);
                },
            },
            Ace: {
                Requires: ['Coverage', 'DPS'],
                For: ['Ace Pilot'],     
                Value: (level) => {
                    let totalDamage = level.Coverage * level.DPS;
                    let totalBombs = Math.floor(level.Coverage / level.BombTime)

                    if (totalBombs == Infinity || isNaN(totalBombs)) totalBombs = 0;

                    let totalShots = Math.floor(totalDamage / level.Damage);
                    let totalBombDamage = totalBombs * level.BombDamage;

                    return (totalShots * level.Damage) + totalBombDamage;
                },       
            },
            Pyro: {
                Requires: ['Coverage', 'DPS'],
                For: ['Pyromancer', 'Hallow Punk'],
                Value: (level) => {
                    let totalDamage = level.Coverage * level.BaseDPS;
                    let totalBurnTicks = Math.floor((level.BurnTime + level.Coverage) / level.BurnTick);

                    let totalShots = Math.floor(totalDamage / level.Damage);

                    if (!isFinite(totalBurnTicks)) totalBurnTicks = 0;

                    let burnDamage = level.BurnDamage;
                    if (!isFinite(burnDamage)) burnDamage = 0;

                    return (totalShots * level.Damage) + Math.floor(totalBurnTicks * burnDamage);
                },
            },
            Toyjick: {
                Requires: ['Coverage', 'DPS'],
                For: ['Toxic Gunner'],
                Value: (level) => {
                    let totalDamage = level.Coverage * level.DPS;
                    let totalPoisonTicks = Math.floor((level.PoisonLength + level.Coverage) / level.PoisonTick);

                    let totalShots = Math.floor(totalDamage / level.Damage);

                    return (totalShots * level.Damage) + Math.floor(totalPoisonTicks * level.PoisonDamage);
                },  
            },
            CryingCuzOfDepressionAndInstability: {
                Requires: ['Coverage', 'DPS'],
                For: ['Cryomancer'],
                Value: (level) => {
                    let totalDamage = level.Coverage * level.DPS;
                    let totalChillTicks = Math.floor((level.ChillLength + level.Coverage) / level.TickRate);

                    let totalShots = Math.floor(totalDamage / level.Damage);

                    if (!isFinite(totalChillTicks) || isNaN(totalChillTicks)) totalChillTicks = 0;

                    return (totalShots * level.Damage) + Math.floor(totalChillTicks * level.ChillDamage);
                },  
            },
            Crook: {
                Requires: ['Coverage', 'DPS'],
                For: ['Crook Boss'],
                Value: (level) => {
                    this.unitManager.load();

                    const skin = level.levels.skinData.name;

                    let totalTowerDamage = 0;
                    let pistolGoonTotal = 0;
                    let tommyGoonTotal = 0;

                    let totalShots = Math.floor(level.Coverage / level.Cooldown);

                    totalTowerDamage = totalShots * level.Damage;

                    if (level.PistolCrooks == true){
                        const goldText = skin == 'Golden' ? 'Golden' : '';
                        const pvpText = skin == 'PVP' ? ' (PVP)' : '';
                        const goon1 = this.unitManager.unitData[`${goldText}Goon1${pvpText}`];

                        let goon1DPS = goon1.attributes.DPS;
                        if (level.DoublePistolCrooks) goon1DPS *= 2;

                        let goon1Range = goon1.attributes.Range;
                        let goon1Coverage = -0.00229008361916565 * (goon1Range / 2) ** 3 + 0.165383660474954 * (goon1Range / 2) ** 2 + 0.234910819904625 * (goon1Range / 2) + 2.62040766713282;

                        let pistolGoonShots = Math.floor(goon1Coverage / goon1.attributes.Cooldown);

                        pistolGoonTotal = goon1.attributes.Damage * pistolGoonShots;

                        pistolGoonTotal += level.DoublePistolCrooks ? (goon1.attributes.Health * 2) : goon1.attributes.Health;
                    }
                    if (level.TommyCrooks == true){
                        const goldText = skin == 'Golden' ? 'Golden' : '';
                        const pvpText = skin == 'PVP' ? ' (PVP)' : '';
                        const goon2 = this.unitManager.unitData[`${goldText}Goon2${pvpText}`];
                        const goon3 = this.unitManager.unitData[`${goldText}Goon3${pvpText}`];

                        let goon2DPS = goon2.attributes.DPS;

                        if (level.UpgradedTommyGoons) goon2DPS = goon3.attributes.DPS;

                        let goon2Range = goon2.attributes.Range;
                        let goon3Range = goon3.attributes.Range;
                        let goon2Coverage = -0.00229008361916565 * (goon2Range / 2) ** 3 + 0.165383660474954 * (goon2Range / 2) ** 2 + 0.234910819904625 * (goon2Range / 2) + 2.62040766713282;
                        let goon3Coverage = -0.00229008361916565 * (goon3Range / 2) ** 3 + 0.165383660474954 * (goon3Range / 2) ** 2 + 0.234910819904625 * (goon3Range / 2) + 2.62040766713282;

                        let tommyGoonShots = Math.floor(goon2Coverage / goon2.attributes.Cooldown);
                        let bodyGuardShots = Math.floor(goon3Coverage / goon3.attributes.Cooldown);

                        tommyGoonTotal = level.UpgradedTommyGoons ? bodyGuardShots * goon3.attributes.Damage : tommyGoonShots * goon2.attributes.Damage;

                        tommyGoonTotal += level.UpgradedTommyGoons ? goon3.attributes.Health : goon2.attributes.Health;
                    }

                    return totalTowerDamage + pistolGoonTotal + tommyGoonTotal;
                },
            },
            CriticalShit: {
                For: ['Warden', 'Slasher'],
                Requires: ['Coverage', 'DPS'],
                Value: (level) => {
                    let totalKritz = Math.floor(level.Coverage / (level.Cooldown * level.CritSwing));
                    let totalHits = (Math.floor(level.Coverage / level.Cooldown)) - totalKritz;

                    let totalCritDamage = totalKritz * (level.Damage * level.CritMultiplier);
                    let totalDamage = totalHits * level.Damage;

                    return totalCritDamage + totalDamage;
                },
            },
            Brawlhalla: {
                For: ['Brawler'],
                Requires: ['Coverage', 'DPS'],
                Value: (level) => {
                    if (level.CritSwing == 1) return Math.floor((level.Coverage * level.DPS) / level.Damage) * level.Damage;

                    let totalKritz = Math.floor(level.Coverage / ((level.Cooldown * (level.CritSwing - 1)) + level.ComboCooldown));
                    let totalHits = (Math.floor(level.Coverage / (level.Cooldown * (level.CritSwing / (level.CritSwing - 1)))));

                    let totalCritDamage = totalKritz * level.FinalHitDamage;
                    let totalDamage = totalHits * level.Damage;

                    return totalCritDamage + totalDamage;
                },
            },
            Poopineer: {
                For: ['Engineer'],
                Requires: ['Coverage', 'DPS'],
                Value: (level) => {
                    this.unitManager.load();

                    let totalTowerDamage = 0;
                    let sentryTotal = 0;
                    let totalRocketDamage = 0;
                    let totalRockets = 0;

                    let totalShots = Math.floor(level.Coverage / level.Cooldown);

                    totalTowerDamage = totalShots * level.Damage;

                    const sentry = this.unitManager.unitData[level.UnitToSend];
                    let sentryRange = sentry.attributes.Range;

                    let sentryCoverage = -0.00229008361916565 * sentryRange ** 3 + 0.165383660474954 * sentryRange ** 2 + 0.234910819904625 * sentryRange + 2.62040766713282;

                    let totalSentryShots = Math.floor(sentryCoverage / sentry.attributes.Cooldown);

                    if(sentry.attributes.TimeBetweenMissiles != 0) {
                        totalRockets = Math.floor((sentryCoverage / sentry.attributes.TimeBetweenMissiles)) * sentry.attributes.MissileAmount;

                        if(!isFinite(totalRockets)) totalRockets = 0;

                        totalRocketDamage = totalRockets * sentry.attributes.ExplosionDamage;

                        if(!isFinite(totalRocketDamage)) totalRocketDamage = 0;
                    }

                    sentryTotal = (totalSentryShots * sentry.attributes.Damage) * level.MaxUnits;

                    return totalTowerDamage + sentryTotal + totalRocketDamage;
                },
            },
            MoltenMode: {
                For: ['Elementalist'],
                Requires: ['Coverage', 'DPS'],
                Value: (level) => {
                    this.unitManager.load();
                    
                    let totalTowerDamage = 0;
                    let totalTurretDamage = 0;
                    let totalBurnDamage = 0;

                    const skin = level.levels.skinData.name;

                    let totalShots = Math.floor(level.Coverage / (level.Cooldown / (level.Uptime / 100)));
                    
                    totalTowerDamage = totalShots * level.Damage;

                    if (skin == 'Frost Mode'){
                        const unitName = "IceTurret" + (level.Level - 1);
                        if (this.unitManager.hasUnit(unitName)){
                            let unitData = this.unitManager.unitData[unitName];
                            let turretRange = unitData.attributes.Range;

                            let turretCoverage = -0.00229008361916565 * turretRange ** 3 + 0.165383660474954 * turretRange ** 2 + 0.234910819904625 * turretRange + 2.62040766713282;

                            let totalTurretShots = Math.floor(turretCoverage / unitData.attributes.Cooldown);

                            totalTurretDamage = totalTurretShots * unitData.attributes.Damage;
                        }
                    }
                    if (skin == 'Fire Mode'){
                        let totalBurnTime = (Math.floor((level.Coverage + level.BurnTime) / level.BurnTime)) * level.BurnTime;
                        let totalBurnTicks = Math.floor(totalBurnTime / level.BurnTick);

                        totalBurnDamage = level.BurnDamage * totalBurnTicks;
                    }
                    return totalTowerDamage + totalTurretDamage + totalBurnDamage;
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
            Necromancer: {
                For: ['Necromancer'],
                Value: (level) => {
                    const beams = level.Beams == true;

                    if (beams) return level.DPS;

                    return level.DPS * level.MaxHits;
                },
            },
        },
        GlobalMaxDPS: {
            Default: {
                Requires: ['GlobalMaxStacks'],
                For: ['Swarmer'],
                Value: (level) => {
                    const beeDPS = (level.BeeDamage / level.TickRate) * level.GlobalMaxStacks;

                    return beeDPS;
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
        ArrowDPS: {
            Default: {
                Requires: ['Damage', 'Cooldown'],
                For: ['Archer'],
                Value: (level) => level.Damage / level.Cooldown,
            },
        },
        FlameArrowDPS: {
            Default: {
                Requires: ['Damage', 'Cooldown'],
                For: ['Archer'],
                Value: (level) => {
                    this.unitManager.load();

                    let baseDPS = level.Damage / level.Cooldown;
                    var unit = "Flame - Level " + level.Level;
                    if (!this.unitManager.hasUnit(unit) || level.FlameArrows == false) return 0;

                    const unitData = this.unitManager.unitData[unit];
                    let burnDPS = unitData.attributes.BurnDPS;

                    return baseDPS + burnDPS;
                },

            },
        },
        ShockArrowDPS: {
            Default: {
                Requires: ['Damage', 'Cooldown'],
                For: ['Archer'],
                Value: (level) => level.ShockArrows ? level.Damage / level.Cooldown : 0,
            },
        },
        ExplosiveArrowDPS: {
            Default: {
                Requires: ['Damage', 'Cooldown'],
                For: ['Archer'],
                Value: (level) => {
                    this.unitManager.load();

                    let baseDPS = level.Damage / level.Cooldown;
                    var unit = "Explosive - Level " + level.Level;
                    if (!this.unitManager.hasUnit(unit) || level.ExplosiveArrows == false) return 0;

                    const unitData = this.unitManager.unitData[unit];
                    let splashDPS = unitData.attributes.ExplosionDamage / level.Cooldown;

                    return baseDPS + splashDPS;
                },

            },
        },
        TimeForMaxStacks: {
            Default: {
                For: ['Swarmer'],
                Value: (level) => {
                    if (level.TickRate == 0 || level.Cooldown == 0) return 0;
                    const maxDPS = level.MaxBeeStacks * (level.BeeDamage / level.TickRate);
                    const dpsRate = ((level.BeeDamage / level.TickRate) / level.Cooldown);

                    return maxDPS / dpsRate;
                },
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
                Value: (level) => {
                    let burnDPS = level.BurnDamage / level.BurnTick

                    if (!isFinite(burnDPS)) return 0;

                    return burnDPS;
                }
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
                Value: (level) => Math.ceil((level.Damage * level.BurnDamageMult)) / level.BurnTick,
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

                    return Math.ceil((level.Damage * level.PoisonDamageMult)) / level.PoisonTick;
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
        ThornsUptime: {
            Default: {
                For: ['Harvester'],
                Requires: ['ThornsDuration', 'ThornsCooldown'],
                Value: (level) => (level.ThornsDuration / level.ThornsCooldown) * 100,
            },
        },
        StallUptime: {
            Default: {
                Requires: ['StunLength', 'Cooldown'],
                Value: (level) => (level.StunLength / level.Cooldown) * 100,
            },
            Shock: {
                Requires: ['MinStun', 'Cooldown'],
                For: ['Electroshocker', 'Archer'],
                Value: (level) => (level.MinStun / level.Cooldown) * 100,
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
        SpikeCE: {
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
        LandmineCE: {
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
        BearTrapCE: {
            Default: {
                For: ['Trapper'],
                Value: (level) => {
                    if (level.BearTraps == false) return 0;

                    const dps = level.BearTrapDamage / level.BearTrapCooldown;
                    
                    return level.NetCost / dps;
                },
            },
        },
        FireCE: {
            Default: {
                For: ['Jester'],
                Value: (level) => {
                    if (level.Fire == false || level.BurnTick == 0 || isNaN(level.BurnTick)) return 0;

                    const dps = level.Damage / level.Cooldown;
                    const burnDPS = Math.ceil((level.Damage * level.BurnDamageMult)) / level.BurnTick
                    
                    return level.NetCost / (dps + burnDPS);
                },
            },
        },
        IceCE: {
            Default: {
                For: ['Jester'],
                Value: (level) => {
                    if (level.Ice == false) return 0;

                    const dps = Math.ceil(level.Damage * level.IceDamageMult) / level.Cooldown;
                    
                    return level.NetCost / dps;
                },
            },
        },
        PoisonCE: {
            Default: {
                For: ['Jester'],
                Value: (level) => {
                    if (level.Poison == false || level.PoisonTick == 0 || isNaN(level.PoisonTick)) return 0;

                    const poisonDPS = Math.ceil((level.Damage * level.PoisonDamageMult)) / level.PoisonTick;
                    
                    return level.NetCost / poisonDPS;
                },
            },
        },
        ConfusionCE: {
            Default: {
                For: ['Jester'],
                Value: (level) => {
                    if (level.Confusion == false) return 0;

                    const dps = Math.ceil((level.Damage * level.ConfusionDamageMult)) / level.Cooldown;
                    
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
        BleedTickDamage: {
            Default: {
                For: ['Slasher', 'Warlock'],
                Value: (level) => {
                    const { damageBuff } = window.state.boosts.tower;
                    
                    let bleedDamage = level.BaseBleedDamage * (damageBuff + 1);

                    return Math.floor(((bleedDamage * (1 ** 0.9)) * (level.EnemyHP ** level.EV)) * (damageBuff + 1));
                },
            },
        },
        BleedCollapseDamage: {
            Default: {
                For: ['Slasher', 'Warlock'],
                Value: (level) => {
                    const { damageBuff } = window.state.boosts.tower;
                    
                    let bleedDamage = level.BaseBleedDamage * (damageBuff + 1);

                    return Math.floor(((bleedDamage * (level.MaxStacks ** 0.9)) * (level.EnemyHP ** level.EV)) * (damageBuff + 1));
                },
            },
        },
        EcoPerSecond: {
            Default: {
                For: ['PVP Sends'],
                Requires: ['EconomyBonus', 'SpawnTimer'],
                Value: (level) => level.EconomyBonus / (level.SpawnTimer * level.MinSendNumber),
            },
        },
        FlameArrowCE: {
            Default: {
                For: ['Archer'],
                Requires: ['FlameArrowDPS', 'NetCost'],
                Value: (level) =>  level.FlameArrows ? level.NetCost / level.FlameArrowDPS : 0,
            },
        },
        ShockArrowCE: {
            Default: {
                For: ['Archer'],
                Requires: ['ShockArrowDPS', 'NetCost'],
                Value: (level) =>  level.ShockArrows ? level.NetCost / level.ShockArrowDPS : 0,
            },
        },
        ExplosiveArrowCE: {
            Default: {
                For: ['Archer'],
                Requires: ['ExplosiveArrowDPS', 'NetCost'],
                Value: (level) =>  level.ExplosiveArrows ? level.NetCost / level.ExplosiveArrowDPS : 0,
            },
        },
        FlameArrowMaxCE: {
            Default: {
                For: ['Archer'],
                Requires: ['FlameArrowDPS', 'NetCost', 'MaxHits'],
                Value: (level) => {
                    this.unitManager.load();
                    let baseDPS = level.FlameArrows ? level.NetCost / level.FlameArrowDPS : 0;

                    var unit = "Flame - Level " + level.Level;
                    if (!this.unitManager.hasUnit(unit) || level.FlameArrows == false) return 0;

                    return baseDPS * unit.attributes.MaxHits;
                },
            },
        },
        ShockArrowMaxCE: {
            Default: {
                For: ['Archer'],
                Requires: ['ShockArrowDPS', 'NetCost', 'MaxHits'],
                Value: (level) => {      
                    this.unitManager.load();
                    let baseDPS = level.FlameArrows ? level.NetCost / level.FlameArrowDPS : 0;

                    var unit = "Shock - Level " + level.Level;
                    if (!this.unitManager.hasUnit(unit) || level.ShockArrows == false) return 0;

                    return baseDPS * unit.attributes.MaxHits;
                },
            },
        },
        Cooldown: {
            Type: 'Override',

            Default: {
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
                    'Military Base',
                ],
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
                For: ['Elementalist'],
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
                    'Military Base',
                ],
                Value: (damage) => {
                    const { damageBuff } = window.state.boosts.tower; // prettier-ignore

                    return Math.floor(damage * (damageBuff + 1));
                },
            },
        },
        Range: {
            Type: 'Override',

            Default: {
                Requires: ['Range'],
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
                    'Military Base',
                ],
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
                        ? Math.floor(cost)
                        : Math.floor(cost * (-discount + 1));
                },
            },
        },
        SpawnTime: {
            Type: 'Override',

            Default: {
                Requires: ['SpawnTime'],
                Value: (spawnTime) => {
                    const { spawnrateBuff } = window.state.boosts.unit; // prettier-ignore

                    return spawnTime * (1 - spawnrateBuff);
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
        this.#add('BurstCooldown', skinData);
        this.#add('SpawnTime', skinData);
        this.#add('LaserDPS', skinData);
        this.#add('FireTime', skinData);
        this.#add('TowerDPS', skinData);
        this.#add('UnitDPS', skinData);
        this.#add('ThornsDPS', skinData);
        this.#add('RepositionDPS', skinData);
        this.#add('HeatwaveDPS', skinData);
        this.#add('DamagePerBurst', skinData);
        this.#add('BurstTime', skinData);
        this.#add('Uptime', skinData);
        this.#add('TotalElapsedDamage', skinData);
        this.#add('DPS', skinData);
        this.#add('MeleeDPS', skinData);
        this.#add('MeleeMaxDPS', skinData);
        this.#add('ArrowDPS', skinData);
        this.#add('FlameArrowDPS', skinData);
        this.#add('ShockArrowDPS', skinData);
        this.#add('ExplosiveArrowDPS', skinData);
        this.#add('BleedTickDamage', skinData);
        this.#add('BleedCollapseDamage', skinData);
        this.#add('BeeDPS', skinData);
        this.#add('MaxDPS', skinData);
        this.#add("DPS Rate", skinData);
        this.#add('TimeForMaxStacks', skinData);
        this.#add('SpikeDPS', skinData);
        this.#add('LandmineDPS', skinData);
        this.#add('BaseDPS', skinData);
        this.#add('ExplosiveDPS', skinData);
        this.#add('WhirlwindSlashDPS', skinData);
        this.#add('KnifeThrowDPS', skinData);
        this.#add('ClusterDPS', skinData);
        this.#add('BurnDPS', skinData);
        this.#add('ChillDPS', skinData);
        this.#add('BearTrapDPS', skinData);
        this.#add('SpikePileDamage', skinData);
        this.#add('LandminePileDamage', skinData);
        this.#add('BearTrapPileDamage', skinData);
        this.#add('PoisonDPS', skinData);
        this.#add('LimitDPS', skinData);
        this.#add('GrenadeDPS', skinData);
        this.#add('GlobalMaxDPS', skinData);
        this.#add('MissileDPS', skinData);
        this.#add('SpikeCE', skinData);
        this.#add('LandmineCE', skinData);
        this.#add('BearTrapCE', skinData);
        this.#add('StallUptime', skinData);
        this.#add('ThornsUptime', skinData);
        this.#add('TotalFireDamage', skinData);
        this.#add('TotalPoisonDamage', skinData);
        this.#add('SunflowerMaxDPS', skinData);
        this.#add('IvyMaxDPS', skinData);
        this.#add('NightshadeMaxDPS', skinData);
        this.#add('NetCost', skinData);
        this.#add('LimitNetCost', skinData);
        this.#add('FireCE', skinData);
        this.#add('IceCE', skinData);
        this.#add('PoisonCE', skinData);
        this.#add('ConfusionCE', skinData);
        this.#add('FlameArrowCE', skinData);
        this.#add('ShockArrowCE', skinData);
        this.#add('ExplosiveArrowCE', skinData);
        this.#add('FlameArrowMaxCE', skinData);
        this.#add('ShockArrowMaxCE', skinData);
        this.#add('CostEfficiency', skinData);
        this.#add('EcoPerSecond', skinData);
        this.#add('MaxCE', skinData);
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
