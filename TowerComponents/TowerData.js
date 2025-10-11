export default {
  Accelerator: {
    Default: {
      Upgrades: [
        {
          Stats: { Detections: { Hidden: true }, Damage: 15 },
          Image: 11821094308,
          Title: "Extra Juice",
          Cost: 1000,
        },
        {
          Stats: {
            Extras: ["Overcharge: 300 > 600"],
            Range: 20,
            Attributes: { Overcharge: 600 },
          },
          Image: 11821094198,
          Title: "Second Energy Canister",
          Cost: 2500,
        },
        {
          Stats: {
            Damage: 40,
          },
          Image: 11821093989,
          Title: "Powerhouse Armor",
          Cost: 4750,
        },
        {
          Stats: {
            Cooldown: 0.15,
            Extras: ["Overcharge: 600 > 1280", "Faster Charge"],
            Range: 22.5,
            Attributes: { ChargeTime: 1.5, Overcharge: 1280},
          },
          Image: 11821093828,
          Title: "Supercharger",
          Cost: 11250,
        },
        {
          Stats: {
            Cooldown: 0.1,
            Attributes: {Overcharge: 2400},
            Range: 25,
            Extras: ["Overcharge: 1050 > 4800", "Faster Charge"],
            Damage: 100,
          },
          Image: 11821093672,
          Title: "Vessel Of Infinite Destruction",
          Cost: 36000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Limit: 8,
        Cooldown: 0.2,
        Price: 4500,
        Attributes: { ChargeTime: 2.5, LaserCooldown: 2.5, Overcharge: 300},
        Range: 18,
        Damage: 10,
      },
    },
    PVP: {
      Upgrades: [
        {
          Stats: { Detections: { Hidden: true }, Damage: 15 },
          Image: 11821094308,
          Title: "Extra Juice",
          Cost: 750,
        },
        {
          Stats: {
            Extras: ["Overcharge: 300 > 600"],
            Attributes: { Overcharge: 600 },
          },
          Image: 11821094198,
          Title: "Second Energy Canister",
          Cost: 2000,
        },
        {
          Stats: {
            Damage: 35,
            Cooldown: 0.15,
          },
          Image: 11821093989,
          Title: "Powerhouse Armor",
          Cost: 4500,
        },
        {
          Stats: {
            Cooldown: 0.1,
            Extras: ["Overcharge: 600 > 1280", "Faster Charge"],
            Range: 20,
            Attributes: { ChargeTime: 1.5, Overcharge: 1280},
          },
          Image: 11821093828,
          Title: "Supercharger",
          Cost: 12000,
        },
        {
          Stats: {
            Attributes: {Overcharge: 2400},
            Range: 23,
            Extras: ["Overcharge: 1050 > 4800", "Faster Charge"],
            Damage: 90,
          },
          Image: 11821093672,
          Title: "Vessel Of Infinite Destruction",
          Cost: 28500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Limit: 8,
        Cooldown: 0.2,
        Price: 4250,
        Attributes: { ChargeTime: 2.5, LaserCooldown: 2, Overcharge: 300},
        Range: 18,
        Damage: 10,
      },
    },
  },
  "Ace Pilot": {
    Default: {
      Upgrades: [
        {
          Image: 17847640091,
          Stats: {
            Damage: 3,
          },
          Title: "Greased Guns",
          Cost: 200,
        },
        {
          Image: 17847639896,
          Stats: {
            Extras: ["Bomb Dropping", "Figure8"],
            Attributes: {
              BombDamage: 10,
              Figure8: true,
              ExplosionRadius: 2.5,
              BombDropping: true,
              BombTime: 4,
            },
          },
          Title: "Bombs away!",
          Cost: 350,
        },
        {
          Image: 17847640366,
          Stats: {
            Extras: ["Upgraded Bombs"],
            Attributes: {
              ExplosionRadius: 2.5,
              BombDamage: 20,
            },
            Cooldown: 0.1,
            Range: 8,
            Damage: 4,
          },
          Title: "Aerial  Ace",
          Cost: 1850,
        },
        {
          Image: 17847640366,
          Stats: {
            Extras: ["Nearby towers get Hidden Detection", "Upgraded Bombs"],
            Attributes: {
              BombDamage: 30,
              BombTime: 2,
              HiddenDetectionBuff: true,
              BuffRange: 7,
              ExplosionRadius: 2.75,
            },
            Detections: {Hidden: true},
            Range: 8.5,
            Damage: 7,
          },
          Title: "Spy plane",
          Cost: 3200,
        },
        {
          Image: 17847640211,
          Stats: {
            Extras: ["Speed increased by 35%", "Upgraded Bombs"],
            Attributes: {
              FlightSpeedMult: 1.35,
              BombTime: 1.5,
              ExplosionRadius: 3,
              BombDamage: 40,
            },
            Cooldown: 0.1,
            Range: 9.5,
            Damage: 14,
          },
          Title: "The Surging Sky",
          Cost: 8000,
        },
      ],
      Defaults: {
        Limit: 8,
        Detections: { Flying: true, Hidden: false, Lead: false },
        Range: 7.5,
        Price: 550,
        Attributes: {
          FlightSpeedMult: 1,
          BombDropping: false,
          BombDamage: 0,
          BombTime: 0,
          HiddenDetectionBuff: false,
          BuffRange: 0,
          Figure8: false,
          Reverse: true,
          ReverseCooldown: 8,
        },
        Cooldown: 0.2,
        Damage: 2,
      },
    },
  },
  Archer: {
    "Fire Arrows": {
      Upgrades: [
        {
          Image: 78487255054043,
          Stats: {
            Range: 19,
          },
          Title: "Eagle Eye",
          Cost: 100,
        },
        {
          Image: 118177062176518,
          Stats: {
            Extras: ["Max Hits: 2 > 3"],
            Detections: { Hidden: true},
            Cooldown: 1.6,
            Damage: 6,
            Attributes: {MaxHits: 2},
          },
          Title: "Deadshot",
          Cost: 400,
        },
        {
          Image: 83003777730604,
          Stats: {
            Extras: ["Flame Arrows"],
            Cooldown: 1.5,
            Damage: 8,
            Range: 22,
            Attributes: {
              MaxHits: 3,
              ArrowType: "Flame",
              BurnDamage: 1,
              BurnTime: 2,
            },
          },
          Title: "Flame-tipped Arrows",
          Cost: 1000,
        },
        {
          Image: 115104563492355,
          Stats: {
            Extras: ["Max Hits: 3 > 4", "Stronger Flame Arrows"],
            Attributes: {
              BurnDamage: 4,
              MaxHits: 4,
              BurnTime: 3,
            },
            Range: 23,
            Damage: 16,
          },
          Title: "Mechanical Bow",
          Cost: 2750,
        },
        {
          Image: 73857609172576,
          Stats: {
            Extras: ["Max Hits: 4 > 6", "Stronger Flame Arrows"],
            Attributes: {
              BurnDamage: 8,
              MaxHits: 5,
              BurnTime: 4,
            },
            Cooldown: 1.25,
            Range: 24,
            Damage: 32,
          },
          Title: "Shot of the Century",
          Cost: 7375,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Attributes: {
          BurnDamage: 0,
          MaxHits: 2,
          BurnTick: 0.5,
          BurnTime: 0,
          ArrowType: "Normal",
        },
        Price: 600,
        Range: 16,
        Cooldown: 1.7,
        Limit: 15,
        Damage: 4,
      },
    },
    "Shock Arrows": {
      Upgrades: [
        {
          Image: 78487255054043,
          Stats: {
            Range: 19,
          },
          Title: "Eagle Eye",
          Cost: 100,
        },
        {
          Image: 118177062176518,
          Stats: {
            Extras: ["Max Hits: 2 > 3"],
            Detections: { Hidden: true},
            Cooldown: 1.6,
            Damage: 6,
            Attributes: {MaxHits: 2},
          },
          Title: "Deadshot",
          Cost: 400,
        },
        {
          Image: 83003777730604,
          Stats: {
            Extras: ["Flame Arrows"],
            Cooldown: 1.5,
            Damage: 8,
            Range: 22,
            Attributes: {
              MaxHits: 3,
            },
          },
          Title: "Flame-tipped Arrows",
          Cost: 1000,
        },
        {
          Image: 115104563492355,
          Stats: {
            Extras: ["Max Hits: 3 > 4", "Stronger Flame Arrows"],
            Attributes: {
              MinStun: 0.3,
              MaxStun: 0.3,
              MaxHits: 3,
              ArrowType: "Shock",
            },
            Range: 23,
            Damage: 16,
          },
          Title: "Mechanical Bow",
          Cost: 2750,
        },
        {
          Image: 73857609172576,
          Stats: {
            Extras: ["Max Hits: 4 > 6", "Stronger Flame Arrows"],
            Attributes: {
              MinStun: 0.45,
              MaxStun: 0.45,
              MaxHits: 5,
            },
            Cooldown: 1.25,
            Range: 24,
            Damage: 32,
          },
          Title: "Shot of the Century",
          Cost: 7375,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Attributes: {
          MaxHits: 2,
          MinStun: 0,
          MaxStun: 0,
          ArrowType: "Normal",
        },
        Price: 600,
        Range: 16,
        Cooldown: 1.7,
        Limit: 15,
        Damage: 4,
      },
    },
    "Explosive Arrows": {
      Upgrades: [
        {
          Image: 78487255054043,
          Stats: {
            Range: 19,
          },
          Title: "Eagle Eye",
          Cost: 100,
        },
        {
          Image: 118177062176518,
          Stats: {
            Extras: ["Max Hits: 2 > 3"],
            Detections: { Hidden: true},
            Cooldown: 1.6,
            Damage: 6,
            Attributes: {MaxHits: 2},
          },
          Title: "Deadshot",
          Cost: 400,
        },
        {
          Image: 83003777730604,
          Stats: {
            Extras: ["Flame Arrows"],
            Cooldown: 1.5,
            Damage: 8,
            Range: 22,
            Attributes: {
              MaxHits: 3,
            },
          },
          Title: "Flame-tipped Arrows",
          Cost: 1000,
        },
        {
          Image: 115104563492355,
          Stats: {
            Extras: ["Max Hits: 3 > 4", "Stronger Flame Arrows"],
            Attributes: {
              MaxHits: 4,
            },
            Range: 23,
            Damage: 16,
          },
          Title: "Mechanical Bow",
          Cost: 2750,
        },
        {
          Image: 73857609172576,
          Stats: {
            Extras: ["Max Hits: 4 > 6", "Stronger Flame Arrows"],
            Attributes: {
              ExplosionDamage: 48,
              ExplosionRadius: 5,
              MaxHits: 1,
              ArrowType: "Explosive",
            },
            Cooldown: 1.25,
            Range: 24,
            Damage: 32,
          },
          Title: "Shot of the Century",
          Cost: 7375,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Attributes: {
          MaxHits: 2,
          ArrowType: "Normal",
        },
        Price: 600,
        Range: 16,
        Cooldown: 1.7,
        Limit: 15,
        Damage: 4,
      },
    },
  },
  Assassin: {
    Default: {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Price: 200,
        Range: 6,
        Cooldown: 0.65,
        Damage: 2,
        Attributes: {
            WhirlwindSlash: false,
            WhirlwindDamage: 0,
            WhirlwindRange: 0,
            WhirlwindSwing: 0,
            FanOfKnives: false,
            FanOfKnivesThreshold: 0,
            KnifeDamage: 0,
            KnifeCooldown: 0,
            KnifeCount: 0,
            KnifeRange: 0,
            KnifeMaxHits: 0,
        },
      },
      Upgrades: [
        {
          Image: 111493227843909,
          Stats: {
            Damage: 3,
            Cooldown: 0.5,
          },
          Title: "CQC Training",
          Cost: 250,
        },
        {
          Image: 92894447316956,
          Stats: {
            Detections: { Hidden: true },
            Damage: 12,
            Cooldown: 0.6,
            Attributes: {
              WhirlwindSlash: true,
              WhirlwindSwing: 3,
              WhirlwindDamage: 6,
              WhirlwindRange: 6, 
            },
          },
          Title: "Advanced Hand to Hand Training",
          Cost: 1000,
        },
        {
          Image: 71356771597575,
          Stats: {
            Damage: 24,
            Attributes: {
              WhirlwindDamage: 18,
            },
          },
          Title: "Upgraded Blades",
          Cost: 2750,
        },
        {
          Image: 88526006090438,
          Stats: {
            Damage: 40,
            Cooldown: 0.5,
            Range: 7,
            Attributes: {
              WhirlwindDamage: 30,
              WhirlwindRange: 7,
              FanOfKnives: true,
              FanOfKnivesThreshold: 500,
              KnifeDamage: 60,
              KnifeCooldown: 0.5,
              KnifeCount: 3,
              KnifeRange: 10,
              KnifeMaxHits: 3,
            },
          },
          Title: "Black Ops",
          Cost: 7600,
        },
      ],
    },
    PVP: {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Price: 300,
        Range: 5.5,
        Cooldown: 0.6,
        Damage: 2,
        Attributes: {
            WhirlwindSlash: false,
            WhirlwindDamage: 0,
            WhirlwindRange: 0,
            WhirlwindSwing: 0,
            FanOfKnives: false,
            FanOfKnivesThreshold: 0,
            KnifeDamage: 0,
            KnifeCooldown: 0,
            KnifeCount: 0,
            KnifeRange: 0,
            KnifeMaxHits: 0,
        },
      },
      Upgrades: [
        {
          Image: 0,
          Stats: {
            Damage: 3,
            Range: 6.5,
          },
          Title: "CQC Training",
          Cost: 150,
        },
        {
          Image: 0,
          Stats: {
            Detections: { Hidden: true },
            Damage: 8,
            Range: 6.5,
            Attributes: {
              WhirlwindSlash: true,
              WhirlwindSwing: 3,
              WhirlwindDamage: 6,
              WhirlwindRange: 6, 
            },
          },
          Title: "Advanced Hand to Hand Training",
          Cost: 600,
        },
        {
          Image: 0,
          Stats: {
            Damage: 14,
            Attributes: {
              WhirlwindDamage: 14,
            },
          },
          Title: "Upgraded Blades",
          Cost: 1700,
        },
        {
          Image: 0,
          Stats: {
            Damage: 25,
            Cooldown: 0.5,
            Range: 7,
            Attributes: {
              WhirlwindDamage: 25,
              WhirlwindRange: 7,
              FanOfKnives: true,
              FanOfKnivesThreshold: 150,
              KnifeDamage: 25,
              KnifeCooldown: 0.5,
              KnifeCount: 3,
              KnifeRange: 10,
              KnifeMaxHits: 3,
            },
          },
          Title: "Black Ops",
          Cost: 4750,
        },
      ],
    },
  },
  Biologist: {
    Default: {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Limit: 8,
        Range: 4,
        Damage: 0,
        Cooldown: 1,
        Attributes: {
          UnitQueues: 1,
          Sunflower: true,
          Ivy: false,
          Nightshade: false,
          Deadzone: 1.5,
          ProjectileSpeed: 5,
        },
        Price: 750,
      },
      Upgrades: [
        {
          Image: 95317340543936,
          Stats: {
            Attributes: {
              Ivy: true,
            },
            Extras: ['Upgraded Sunflowers', 'Unlocks Ivy'],
          },
          Title: "Bio Chemistry",
          Cost: 600,
        },
        {
          Image: 91087216328467,
          Stats: {
            Attributes: {
              UnitQueues: 2,
            },
            Extras: ['Unit Queues: 1 > 2', 'Upgraded Sunflowers', 'Upgraded Ivy'],
          },
          Title: "Scientific Breakthrough",
          Cost: 1850,
        },
        {
          Image: 101480107243808,
          Stats: {
            Attributes: {
              Nightshade: true,
            },
            Extras: ['Upgraded Sunflowers', 'Upgraded Ivy', 'Unlocks Nightshade'], 
          },
          Title: "Flower Power",
          Cost: 4500,
        },
        {
          Image: 121014188542772,
          Stats: {
            Attributes: {
              UnitQueues: 3,
            },
            Extras: ['Unit Queues: 2 > 3', 'Upgraded Sunflowers', 'Upgraded Ivy', 'Unlocks Nightshade'], 
          },
          Title: "Botanical Berserker!",
          Cost: 20000,
        },
      ],
    },
  },
  Brawler: {
    Default: {
      Upgrades: [
        {
          Image: 0,
          Stats: {
            Damage: 9,
          },
          Title: "Swift Strikes",
          Cost: 300,
        },
        {
          Image: 17522564142,
          Stats: {
            Extras: ["Attack Combo", "Combo Count: 3", "Combo Cooldown: 0.75", "Final Hit Damage: 24", "Knockback Force: 17.5"],
            Detections: {Hidden: true},
            Attributes: {
              FinalHitDamage: 24,
              ComboCooldown: 0.75,
              CritSwing: 3,
              KnockbackForce: 17.5,
              KnockbackCooldown: 2.5,
            },
            Cooldown: 0.6,
            Damage: 12,
          },
          Title: "Combo Crusher",
          Cost: 850,
        },
        {
          Image: 17522564023,
          Stats: {
            Extras: ["Unlocks Reposition (deals no damage)", "Final Hit Damage: 40", "Combo Cooldown: 0.75 > 0.65"],
            Attributes: {
              Reposition: true,
              RepositionDamage: 0,
              RepositionCooldown: 20,
              FinalHitDamage: 40,
              ComboCooldown: 0.65,
              KnockbackForce: 20,
            },
            Damage: 20,
          },
          Title: "Pack-a-Punch",
          Cost: 2000,
        },
        {
          Image: 17522564307,
          Stats: {
            Extras: ["Final Hit Damage: 80", "Combo Cooldown: 0.65 > 0.5", "Reposition Damage: 100"],
            Attributes: {
              FinalHitDamage: 80,
              RepositionDamage: 100,
              KnockbackForce: 24,
              ComboCooldown: 0.5,
              RepositionKnockbackForce: 25,
              RepositionRadius: 10,
            },
            Cooldown: 0.5,
            Range: 6.5,
            Damage: 40,
          },
          Title: "Prototype Frame",
          Cost: 5000,
        },
        {
          Image: 17522563932,
          Stats: {
            Extras: ["Final Hit Damage: 170", "Reposition Damage: 200"],
            Attributes: {
              FinalHitDamage: 170,
              RepositionDamage: 200,
              KnockbackForce: 30,
            },
            Damage: 85,
            Range: 7,
          },
          Title: "Hydraulic Havoc",
          Cost: 12500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: {
          Reposition: false,
          FinalHitDamage: 0,
          RepositionDamage: 0,
          ComboCooldown: 0,
          CritSwing: 1,
          KnockbackForce: 0,
          KnockbackCooldown: 0,
          RepositionCooldown: 0,
          RepositionRadius: 0,
          RepositionKnockbackForce: 0,
        },
        Limit: 6,
        Price: 600,
        Range: 6,
        Cooldown: 0.6,
        Damage: 6,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 0,
          Stats: {
            Cooldown: 0.6,
          },
          Title: "Swift Strikes",
          Cost: 300,
        },
        {
          Image: 17522564142,
          Stats: {
            Extras: ["Attack Combo", "Combo Count: 3", "Combo Cooldown: 0.75", "Final Hit Damage: 24", "Knockback Force: 17.5"],
            Attributes: {
              FinalHitDamage: 24,
              ComboCooldown: 0.75,
              CritSwing: 3,
              KnockbackForce: 17.5,
              KnockbackCooldown: 2.5,
            },
            Damage: 12,
          },
          Title: "Combo Crusher",
          Cost: 950,
        },
        {
          Image: 17522564023,
          Stats: {
            Extras: ["Unlocks Reposition (deals no damage)", "Final Hit Damage: 40", "Combo Cooldown: 0.75 > 0.65"],
            Detections: {Hidden: true},
            Attributes: {
              Reposition: true,
              RepositionDamage: 20,
              RepositionCooldown: 20,
              FinalHitDamage: 40,
              ComboCooldown: 0.65,
              KnockbackForce: 20,
            },
            Damage: 20,
          },
          Title: "Pack-a-Punch",
          Cost: 2250,
        },
        {
          Image: 17522564307,
          Stats: {
            Extras: ["Final Hit Damage: 80", "Combo Cooldown: 0.65 > 0.5", "Reposition Damage: 100"],
            Attributes: {
              FinalHitDamage: 70,
              RepositionDamage: 80,
              KnockbackForce: 24,
              ComboCooldown: 0.5,
              RepositionKnockbackForce: 25,
              RepositionRadius: 10,
            },
            Cooldown: 0.5,
            Range: 6.5,
            Damage: 40,
          },
          Title: "Prototype Frame",
          Cost: 5200,
        },
        {
          Image: 17522563932,
          Stats: {
            Extras: ["Final Hit Damage: 170", "Reposition Damage: 200"],
            Attributes: {
              FinalHitDamage: 150,
              RepositionDamage: 150,
              KnockbackForce: 30,
            },
            Damage: 75,
            Range: 7,
          },
          Title: "Hydraulic Havoc",
          Cost: 12000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: {
          Reposition: false,
          FinalHitDamage: 0,
          RepositionDamage: 0,
          ComboCooldown: 0,
          CritSwing: 1,
          KnockbackForce: 0,
          KnockbackCooldown: 0,
          RepositionCooldown: 0,
          RepositionRadius: 0,
          RepositionKnockbackForce: 0,
        },
        Limit: 6,
        Price: 600,
        Range: 6,
        Cooldown: 0.9,
        Damage: 10,
      },
    },
  },
  Commander: {
    Default: {
      Upgrades: [
        {
          Image: 5525000768,
          Stats: {
            Extras: ["Firerate Buff: 12.5% > 15%"],
            Attributes: { FirerateBuff: 15 },
          },
          Title: "Leadership",
          Cost: 300,
        },
        {
          Image: 4594880289,
          Stats: {
            Extras: [
              "Call to Arms (30s Cooldown)",
              "Give surrounding towers +15% Firerate for 10s",
            ],
            Attributes: { CallToArms: true, CallToArmsBuff: 15, CallToArmsCooldown: 30},
            Detections: { Lead: true },
            Cooldown: 0.6,
            Range: 11,
            Damage: 10,
          },
          Title: "Call to Arms",
          Cost: 2500,
        },
        {
          Image: 5525002879,
          Stats: {
            Extras: [
              "Firerate Buff: 15% > 17.5%",
              "Call to Arms (22.5% Firerate Buff)",
            ],
            Attributes: { FirerateBuff: 17.5, CallToArmsBuff: 22.5},
            Range: 12.5,
            Damage: 15,
          },
          Title: "Intense Training",
          Cost: 5500,
        },
        {
          Image: 5525003528,
          Stats: {
            Extras: [
              "Firerate Buff: 17.5% > 20%",
              "Support Caravan (60s Cooldown)",
              "Call to Arms (30% Firerate Buff)",
            ],
            Attributes: { FirerateBuff: 20, CallToArmsBuff: 30, SupportCaravan: true, SupportCaravanCooldown: 60, SupportCaravanCost: 2000},
            Range: 14,
            Damage: 25,
          },
          Title: "Strength in Numbers",
          Cost: 15000,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: true, Lead: false },
        Attributes: { FirerateBuff: 12.5, CallToArms: false, CallToArmsBuff: 0, CallToArmsCooldown: 0, SupportCaravan: false, SupportCaravanCooldown: 0, SupportCaravanCost: 0,},
        Price: 850,
        Range: 9,
        Limit: 4,
        Cooldown: 0,
        Damage: 0,
      },
    },
  },
  Commando: {
    Default: {
      Upgrades: [
        {
          Image: 119448063654848,
          Stats: {
            Cooldown: 0.15,
            Attributes: {
              ReloadTime: 2,
            },
          },
          Title: "Recon Mission",
          Cost: 935,
        },
        {
          Image: 72540829223100,
          Stats: {
            Extras: ["Ammo: 30 > 45", "Reload Time: 2.5 > 2"],
            Detections: {
              Hidden: true,
            },
            Range: 14.5,
            Damage: 8,
            Attributes: {
              Ammo: 45,
            },
          },
          Title: "Titanium Rounds",
          Cost: 3250,
        },
        {
          Image: 111526844050563,
          Stats: {
            Extras: ["Burst Cooldown: 0.5 > 0.35", "Burst: 5 > 6", "Pierce: 2 > 3", "Ammo: 45 > 60", "Reload Time: 2 > 1.5", "Unlock Missiles"],
            Cooldown: 0.13,
            Range: 16,
            Damage: 15,
            Attributes: {
              ReloadTime: 1.5,
              Ammo: 60,
              Missiles: true,
              MissileStun: 0.5,
              MissileDamage: 100,
              MissileCooldown: 20,
              MissileLifespan: 360,
              MaxMissiles: 2,
              ExplosionRadius: 4,
            },
          },
          Title: "Jericho Missiles",
          Cost: 8500,
        },
        {
          Image: 113494545335861,
          Stats: {
            Extras: ["Really Cool Armor", "Burst Cooldown: 0.35 > 0,3", "Burst: 6 > 10", "Ammo: 60 > 80", "Reload Time: 1.5 > 1.25", "Upgraded Missiles"],
            Range: 17,
            Damage: 24,
            Attributes: {
              ReloadTime: 1.25,
              Ammo: 80,
              MissileStun: 1,
              MissileDamage: 125,
              MissileCooldown: 10,
              MaxMissiles: 4,
              ExplosionRadius: 6,
            },
          },
          Title: "Death and Taxes",
          Cost: 18000,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Price: 2350,
        Range: 13,
        Cooldown: 0.2,
        Damage: 5,
        Limit: 8,
        Attributes: {
          ReloadTime: 3,
          Ammo: 30,
          MaxHits: 2,
          Missiles: false,
          MissileLifespan: 0,
          MissileStun: 0,
          MissileCooldown: 0,
        },
      },
    },
  },
  Cowboy: {
    Default: {
      Upgrades: [
        {
          Image: 4999425200,
          Stats: {
            Extras: ["Spin: 1.5 > 1.25 secs"],
            Attributes: { SpinDuration: 1.25 },
            Cooldown: 0.75,
          },
          Title: "Steady Hand",
          Cost: 150,
        },
        {
          Image: 5523233366,
          Stats: {
            Income: 50,
            Range: 16,
            Damage: 5,
          },
          Title: "Lucky Shot",
          Cost: 550,
        },
        {
          Image: 5523231844,
          Stats: {
            Attributes: { SpinDuration: 1 },
            Extras: ["Spin: 1.25 > 1 secs"],
            Detections: {
              Hidden: true,
            },
            Cooldown: 0.5,
            Range: 18,
            Damage: 8,
          },
          Title: "Faster Instincts",
          Cost: 1500,
        },
        {
          Image: 5523234030,
          Stats: {
            Attributes: { CashShot: 12 },
            Income: 100,
            Cooldown: 0.25,
            Damage: 8,
            Range: 20,
          },
          Title: "Double Tap",
          Cost: 3000,
        },
        {
          Image: 5523234990,
          Stats: {
            Income: 200,
            Cooldown: 0.25,
            Damage: 15,
          },
          Title: "Outlawed",
          Cost: 5250,
        },
      ],
      Defaults: {
        Income: 30,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Range: 14,
        Price: 500,
        Attributes: { CashShot: 6, SpinDuration: 1.5 },
        Cooldown: 1,
        Damage: 3,
        Limit: 10,
      },
    },
    Golden: {
      Upgrades: [
        {
          Image: 5523231844,
          Stats: {
            Attributes: { SpinDuration: 1.25 },
            Extras: ["Spin: 1.5 > 1.25 secs"],
            Cooldown: 0.75,
          },
          Title: "Headshot Practice",
          Cost: 150,
        },
        {
          Image: 4999425200,
          Stats: {
            Income: 60,
            Damage: 6,
            Range: 16,
          },
          Title: "Gold Shot",
          Cost: 600,
        },
        {
          Image: 5523233366,
          Stats: {
            Attributes: { SpinDuration: 1 },
            Extras: ["Spin: 1.25 > 1 secs"],
            Detections: {
              Hidden: true,
            },
            Range: 18,
            Cooldown: 0.5,
            Damage: 10,
          },
          Title: "Faster Instincts",
          Cost: 1750,
        },
        {
          Image: 5523234030,
          Stats: {
            Attributes: { CashShot: 12 },
            Extras: ["Cash Shot: 6 > 12"],
            Income: 150,
            Cooldown: 0.25,
            Range: 20,
          },
          Title: "Double Tap II",
          Cost: 4750,
        },
        {
          Image: 5523234990,
          Stats: {
            Income: 225,
            Damage: 24,
          },
          Title: "Wildest Of The West",
          Cost: 9500,
        },
      ],
      Defaults: {
        Income: 35,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Range: 14,
        Limit: 10,
        Price: 600,
        Attributes: { CashShot: 6, SpinDuration: 1.5 },
        Cooldown: 1,
        Damage: 4,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 4999425200,
          Stats: {
            Extras: ["Spin: 1.5 > 1.25 secs"],
            Attributes: { SpinDuration: 1 },
            Cooldown: 0.8,
          },
          Title: "Steady Hand",
          Cost: 200,
        },
        {
          Image: 5523233366,
          Stats: {
            Income: 60,
            Range: 16,
            Damage: 6,
          },
          Title: "Lucky Shot",
          Cost: 500,
        },
        {
          Image: 5523231844,
          Stats: {
            Attributes: { SpinDuration: 0.75 },
            Extras: ["Spin: 1.25 > 1 secs"],
            Detections: {
              Hidden: true,
            },
            Cooldown: 0.5,
            Range: 18,
            Income: 75,
            Damage: 10,
          },
          Title: "Faster Instincts",
          Cost: 2000,
        },
        {
          Image: 5523234030,
          Stats: {
            Attributes: { CashShot: 12 },
            Income: 175,
            Cooldown: 0.25,
            Range: 20,
          },
          Title: "Double Tap",
          Cost: 3500,
        },
        {
          Image: 5523234990,
          Stats: {
            Income: 300,
            Damage: 18,
          },
          Title: "Outlawed",
          Cost: 7000,
        },
      ],
      Defaults: {
        Income: 50,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Range: 14,
        Price: 500,
        Attributes: { CashShot: 6, SpinDuration: 1.25 },
        Cooldown: 1,
        Damage: 4,
        Limit: 10,
      },
    },
  },
  "Crook Boss": {
    Default: {
      Upgrades: [
        {
          Stats: {
            Cooldown: 0.75,
            Damage: 4,
          },
          Image: 3032133716,
          Title: "Quick Getaway",
          Cost: 300,
        },
        {
          Stats: {
            Attributes: { DoublePistolCrooks: true },
            Range: 14,
            Detections: { Hidden: true, Flying: true },
            Extras: ["2 Pistol Crooks spawn at a time."],
            Damage: 6,
          },
          Image: 3444643559,
          Title: "Double Trouble",
          Cost: 900,
        },
        {
          Stats: {
            Range: 15,
            Attributes: {
              TommyCrooks: true,
            },
            Extras: [
              "Tommy Crooks (50s Spawn Time)",
              "4 Damage, 0.2 Firerate",
            ],
            Cooldown: 0.2,
          },
          Image: 3838914605,
          Title: "Tommy Goons",
          Cost: 4250,
        },
        {
          Stats: {
            Attributes: {
              UpgradedTommyGoons: true,
            },
            Range: 16.5,
            Extras: [
              "Upgraded Tommy Crooks",
              "10 Damage, 0.12 Firerate",
            ],
            Cooldown: 0.12,
            Damage: 18,
          },
          Image: 3444644903,
          Title: "The Godfather",
          Cost: 20000,
        },
      ],
      Defaults: {
        Range: 12.5,
        Attributes: { 
          BackupCallTime: 1.5,
          PistolCrooks: true,
          DoublePistolCrooks: false,
          TommyCrooks: false,
          UpgradedTommyGoons: false,
        },
        Limit: 5,
        Price: 600,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Cooldown: 0.9,
        Damage: 3,
      },
    },
    Golden: {
      Upgrades: [
        {
          Stats: {
            Cooldown: 0.7,
            Damage: 6,
          },
          Image: 3032133716,
          Title: "Lvl 1. Broke",
          Cost: 500,
        },
        {
          Stats: {
            Attributes: { DoublePistolCrooks: true },
            Range: 15,
            Detections: { Hidden: true, Flying: true},
            Extras: ["2 Pistol Crooks spawn at a time."],
            Damage: 10,
          },
          Image: 3444643559,
          Title: "Lvl. 2 Normie",
          Cost: 1500,
        },
        {
          Stats: {
            Range: 16,
            Attributes: {
              TommyCrooks: true,
            },
            Extras: [
              "Golden Tommy Crooks (50s Spawn Time)",
              "5 Damage, 0.18 Firerate",
            ],
            Cooldown: 0.18,
          },
          Image: 3838914605,
          Title: "Lvl 3. Gamer",
          Cost: 6000,
        },
        {
          Stats: {
            Attributes: {
              UpgradedTommyGoons: true,
            },
            Range: 17.5,
            Extras: [
              "Upgraded Gold Tommy Crooks",
              "12 Damage, 0.1 Firerate",
            ],
            Cooldown: 0.1,
            Damage: 20,
          },
          Image: 3444644903,
          Title: "Lvl. 4 GOD",
          Cost: 30000,
        },
      ],
      Defaults: {
        Range: 14,
        Attributes: { 
          BackupCallTime: 1.5,
          PistolCrooks: true,
          DoublePistolCrooks: false,
          TommyCrooks: false,
          UpgradedTommyGoons: false,
        },
        Limit: 5,
        Price: 800,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Cooldown: 0.9,
        Damage: 4,
      },
    },
    PVP: {
      Upgrades: [
        {
          Stats: {
            Cooldown: 0.6,
            Damage: 6,
          },
          Image: 3032133716,
          Title: "Quick Getaway",
          Cost: 525,
        },
        {
          Stats: {
            Attributes: { DoublePistolCrooks: true },
            Range: 15,
            Detections: { Hidden: true, Flying: true },
            Extras: ["2 Pistol Crooks spawn at a time."],
            Damage: 10,
          },
          Image: 3444643559,
          Title: "Double Trouble",
          Cost: 1000,
        },
        {
          Stats: {
            Range: 16.5,
            Attributes: {
              TommyCrooks: true,
            },
            Extras: [
              "Tommy Crooks (50s Spawn Time)",
              "4 Damage, 0.2 Firerate",
            ],
            Cooldown: 0.2,
          },
          Image: 3838914605,
          Title: "Tommy Goons",
          Cost: 5000,
        },
        {
          Stats: {
            Attributes: {
              UpgradedTommyGoons: true,
            },
            Range: 17.5,
            Extras: [
              "Upgraded Tommy Crooks",
              "10 Damage, 0.12 Firerate",
            ],
            Cooldown: 0.12,
            Damage: 18,
          },
          Image: 3444644903,
          Title: "The Godfather",
          Cost: 16000,
        },
      ],
      Defaults: {
        Range: 14,
        Attributes: { 
          BackupCallTime: 1.5,
          PistolCrooks: true,
          DoublePistolCrooks: false,
          TommyCrooks: false,
          UpgradedTommyGoons: false,
        },
        Limit: 5,
        Price: 800,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Cooldown: 1,
        Damage: 5,
      },
    },
  },
  Cryomancer: {
    Default: {
      Upgrades: [
        {
          Stats: {
            Range: 12,
            Extras: ["Ammo: 40 > 50", "❄️ Max Slowness: 50% > 65%"],
            Attributes: {MaxChill: 65, MaxAmmo: 50,},
          },
          Image: 15686403377,
          Title: "Frosty Gear",
          Cost: 250,
        },
        {
          Stats: {
            Extras: [
              "Ammo: 50 > 80",
              "Chilled Enemies take tick-based damage",
              "❄️ Tick Damage: (1)",
            ],
            Attributes: { ChillDamage: 1, MaxAmmo: 80,},
            Range: 13.5,
          },
          Image: 15686403176,
          Title: "Freezing Tanks",
          Cost: 935,
        },
        {
          Stats: {
            Extras: [
              "Chill Slowness: 5% > 10%",
              "Larger Frost Beam",
              "Debuff Duration: 2 > 4",
              "❄️ Max Slowness: 65% > 75%",
            ],
            Attributes: {
              ChillLength: 4,
              ChillPercent: 10,
              HitboxWidth: 1.75,
              MaxChill: 75,
            },
            Damage: 1,
          },
          Image: 15686403037,
          Title: "Ice Commando",
          Cost: 4000,
        },
        {
          Stats: {
            Extras: [
              "🧊 Enemies now freeze at max 'Chill'",
              "Even Larger Frost Beam",
              "❄️ Tick Damage: 1 > 3",
              "Max Hits: 3 > 6",
            ],
            Attributes: {
              CanFreeze: true,
              FreezeTime: 2,
              MaxHits: 6,
              ChillDamage: 3,
              HitboxWidth: 2,
            },
            Range: 15,
            Damage: 2,
          },
          Image: 15686402849,
          Title: "Winter's Fury",
          Cost: 9500,
        },
      ],
      Defaults: {
        Attributes: {
          MaxAmmo: 40,
          CanFreeze: false,
          HitboxSpeed: 2,
          ChillPercent: 5,
          HitboxWidth: 1.25,
          MaxHits: 3,
          ChillDamage: 0,
          FreezeTime: 0,
          DefenseMelt: 10,
          MaxDefenseMelt: 33,
          ReloadTime: 2,
          TickRate: 0.25,
          MaxChill: 50,
          ChillLength: 2,
        },
        Range: 10,
        Price: 300,
        Detections: { Flying: false, Hidden: false, Lead: true },
        Cooldown: 0.2,
        Damage: 0,
      },
    },
  },
  Demoman: {
    Default: {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: {
          Velocity: 30,
          ExplosionRadius: 3.5,
          AimTime: 1,
          MustAim: true,
        },
        Price: 575,
        Cooldown: 2.6,
        Range: 9,
        Damage: 6,
      },
      Upgrades: [
        {
          Stats: {
            Range: 11,
            Cooldown: 2.25,
          },
          Image: 0,
          Title: "Further Throwing",
          Cost: 150,
        },
        {
          Stats: {
            Attributes: { ExplosionRadius: 4 },
            Damage: 10,
          },
          Image: 5523227714,
          Title: "Steil Grenade",
          Cost: 475,
        },
        {
          Stats: {
            Cooldown: 1.75,
            Attributes: {
              Velocity: 20,
              MustAim: false,
              AimTime: 0,
            },
            Extras: ["Faster Projectile", "No Aim Time"],
            Range: 14,
            Damage: 18,
          },
          Image: 5523228733,
          Title: "Chinalake",
          Cost: 1650,
        },
        {
          Stats: {
            Attributes: { ExplosionRadius: 4.5 },
            Extras: ["Bigger Explosion"],
            Cooldown: 1.5,
            Range: 15,
            Damage: 50,
          },
          Image: 5523229364,
          Title: "Collateral Damage",
          Cost: 6250,
        },
      ],
    },
    PVP: {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: {
          Velocity: 30,
          ExplosionRadius: 4.5,
          AimTime: 1,
          MustAim: true,
        },
        Price: 575,
        Cooldown: 1.75,
        Range: 9,
        Damage: 6,
      },
      Upgrades: [
        {
          Stats: {
            Range: 11,
            Cooldown: 1.5,
          },
          Image: 0,
          Title: "Further Throwing",
          Cost: 150,
        },
        {
          Stats: {
            Attributes: { ExplosionRadius: 5.5 },
            Damage: 10,
          },
          Image: 5523227714,
          Title: "Steil Grenade",
          Cost: 500,
        },
        {
          Stats: {
            Cooldown: 1.75,
            Attributes: {
              Velocity: 20,
              MustAim: false,
              AimTime: 0,
            },
            Extras: ["Faster Projectile", "No Aim Time"],
            Range: 14,
            Cooldown: 1.35,
            Damage: 15,
          },
          Image: 5523228733,
          Title: "Chinalake",
          Cost: 1500,
        },
        {
          Stats: {
            Extras: ["Bigger Explosion"],
            Cooldown: 1,
            Range: 16,
            Damage: 35,
          },
          Image: 5523229364,
          Title: "Collateral Damage",
          Cost: 6000,
        },
      ],
    },
  },
  "DJ Booth": {
    Default: {
      Upgrades: [
        {
          Stats: {
            Range: 15,
          },
          Image: 95144637961093,
          Title: "Laptop Studio",
          Cost: 300,
        },
        {
          Stats: {
            Extras: ["Upgraded Purple and Green Track", "Unlocks Red Track"],
            Attributes: {
              RangeBuff: 15,
              DiscountBuff: 7.5,
              DamageBuff: 10,
            },
          },
          Image: 113548130163293,
          Title: "Party Mode",
          Cost: 1250,
        },
        {
          Stats: {
            Attributes: {
              RangeBuff: 17.5,
              DiscountBuff: 10,
              DamageBuff: 12.5,
              KnockbackForce: 20,
              PulseCount: 3,
              PurpleTrackMaxHits: 8,
              SlowDuration: 6,
              Slowdown: 20,
              SlowPerTower: 1,
              MaxSlow: 35,
              BaseCash: 250,
              MaxCash: 600,
              DefenseMelt: 5,
              DefenseMeltPerTower: 1,
            },
            Extras: ["Drop the Beat Ability", "Upgraded Tracks"],
            Damage: 15,
          },
          Image: 101877307760287,
          Title: "Thrifty Music",
          Cost: 3000,
        },
        {
          Stats: {
            Attributes: {
              RangeBuff: 22.5,
              KnockbackForce: 22.5,
              PurpleTrackMaxHits: 9, 
              SlowDuration: 8,
              DiscountBuff: 12.5,
              BaseCash: 500,
              CashPerTower: 50,
              MaxCash: 1250,
              DamageBuff: 15,
              DefenseMelt: 7,
            },
            Damage: 25,
            Range: 16.5,
            Extras: ["Upgraded Tracks"],
          },
          Image: 123117801948681,
          Title: "Audio Visualizer",
          Cost: 8000,
        },
        {
          Stats: {
            Attributes: {
              TrinityBuffPercent: 50,
              RangeBuff: 25,
              PulseCount: 4,
              KnockbackForce: 20,
              PurpleTrackMaxHits: 10,
              SlowDuration: 10,
              Slowdown: 30,
              MaxSlow: 50,
              DiscountBuff: 15,
              BaseCash: 750,
              CashPerTower: 75,
              MaxCash: 2250,
              DamageBuff: 20,
              DefenseMelt: 10,
            },
            Damage: 50,
            Range: 18.5,
            Extras: ["Trinity Buffs", "Upgraded Tracks"],
          },
          Image: 113854542319656,
          Title: "Apocalypse Rave",
          Cost: 20000,
        },
      ],
      Defaults: {
        Detections: { Hidden: false, Flying: false },
        Price: 1200,
        Range: 12,
        Limit: 1,
        Attributes: {
          TrinityBuffPercent: 0,
          RangeBuff: 12.5,
          KnockbackForce: 0,
          PulseCount: 0,
          PurpleTrackMaxHits: 0,
          SlowDuration: 0,
          Slowdown: 0,
          SlowPerTower: 0,
          MaxSlow: 0,
          DiscountBuff: 5,
          BaseCash: 0,
          CashPerTower: 0,
          MaxCash: 0,
          DamageBuff: 0,
          DefenseMelt: 0,
          DefenseMeltPerTower: 0,
          MaxDefenseMelt: 0,
        },
        Cooldown: 1,
        Damage: 0,
      },
    },
  },
  Electroshocker: {
    Default: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Cooldown: 0.75,
            Range: 9,
          },
          Title: "Improved Handling",
          Cost: 300,
        },
        {
          Image: 4675534331,
          Stats: {
            Extras: ["3 Max Hits"],
            Attributes: {
              MaxHits: 3,
            },
            Detections: { Flying: true },
            Range: 10,
            Damage: 4,
          },
          Title: "Outside Support",
          Cost: 600,
        },
        {
          Image: 4675521746,
          Stats: {
            Extras: ["4 Max Hits", "More Defense Melting"],
            Attributes: {
              MaxHits: 4,
              DefenseMelt: 10,
            },
            Range: 12,
            Damage: 8,
          },
          Title: "Faraday's Vest",
          Cost: 2000,
        },
        {
          Image: 4675504505,
          Stats: {
            Extras: ["Shock Time: 0.3 > 1", "More Defense Melting", "6 Max Hits", "Increased Chain Range"],
            Attributes: {
              MinStun: 1,
              MaxStun: 1,
              MaxHits: 6,
              DefenseMelt: 15,
              ChainRange: 10,
            },
            Cooldown: 2.5,
            Range: 14,
            Damage: 50,
          },
          Title: "Lightning Cannon",
          Cost: 5000,
        },
        {
          Image: 4675504640,
          Stats: {
            Extras: [
              "Shock Time: 1 > 1.25",
              "8 Max Hits",
            ],
            Attributes: {
              MinStun: 1.25,
              MaxStun: 1.25,
              MaxHits: 8,
            },
            Damage: 100,
          },
          Title: "Zeus Cannon",
          Cost: 15000,
        },
      ],
      Defaults: {
        Limit: 4,
        Detections: { Flying: false, Hidden: false, Lead: true },
        Range: 7.5,
        Price: 725,
        Attributes: {
          MinStun: 0.3,
          MaxStun: 0.3,
          MaxHits: 2,
          DefenseMelt: 5,
          MaxDefenseMelt: 20,
          ChainRange: 7,
        },
        Cooldown: 0.85,
        Damage: 3,
      },
    },
  },
  Elementalist: {
    "Frost Mode":
    {
      Defaults: {
        Price: 2000,
        Damage: 3,
        Range: 12,
        Cooldown: 0.2,
        Limit: 5,
        Attributes: {
          Burst: 3,
          BurstCooldown: 0.6,
          ChillPercent: 5,
          MaxChill: 45,
          ChillLength: 2,
          TurretCooldown: 0,
          TickRate: 0.25,
        },
        Detections: {Lead: false, Flying: false, Hidden: false},
      },
      Upgrades: [
        {
          Image: 136223791844063,
          Stats: {
            Damage: 5,
            Range: 15,
            Attributes: {
              Burst: 4,
              ChillPercent: 7.5,
            },
          },
          Title: "Elemental Armory",
          Cost: 1500,
        },
        {
          Image: 124219033045691,
          Stats: {
            Attributes: {
              TurretCooldown: 50,
              MaxChill: 50,
            },
            Detections: {Hidden: true},
            Damage: 10,
            Range: 17,
          },
          Title: "Experimental Tech",
          Cost: 4000,
        },
        {
          Image: 77890912829468,
          Stats: {
            Attributes: {
              Burst: 5,
              BurstCooldown: 0.5,
              ChillPercent: 10,
            },
            Damage: 13,
          },
          Cost: 8000,
          Title: "Improved Exhaust Systems",
        },
        {
          Image: 77890912829468,
          Stats: {
            Attributes: {
              Burst: 7,
              BurstCooldown: 0.4,
              ChillPercent: 12.5,
              MaxChill: 60,
            },
            Damage: 18,
            Cooldown: 0.125,
          },
          Cost: 15000,
          Title: "Frost Fire Specialist",
        },
      ],
    },
    "Fire Mode":
    {
      Defaults: {
        Price: 2000,
        Damage: 3,
        Range: 12,
        Cooldown: 0.2,
        Limit: 5,
        Attributes: {
          BurnDamage: 5,
          BurnTick: 0.5,
          Burst: 3,
          BurstCooldown: 0.6,
          BurnTime: 2,
          HeatwaveBurnTick: 0.5,
          HeatwaveCooldown: 40,
        },
        Detections: {Lead: false, Flying: false, Hidden: false},
      },
      Upgrades: [
        {
          Image: 136223791844063,
          Stats: {
            Damage: 5,
            Range: 15,
            Attributes: {
              Burst: 4,
              BurnDamage: 8,
              BurnTime: 3,
            },
          },
          Title: "Elemental Armory",
          Cost: 1500,
        },
        {
          Image: 124219033045691,
          Stats: {
            Damage: 10,
            Range: 17,
            Detections: {Hidden: true},
            Attributes: {
              BurnTime: 4,
              HeatwaveDamage: 150,
              HeatwaveRange: 12.5,
              HeatwaveBurnTime: 5,
              HeatwaveBurnDamage: 10,
              KnockbackForce: 20,
            },
          },
          Title: "Experimental Tech",
          Cost: 4000,
        },
        {
          Image: 77890912829468,
          Stats: {
            Damage: 13,
            Attributes: {
              Burst: 5,
              BurstCooldown: 0.5,
              BurnDamage: 10,
              BurnTick: 0.25,
              BurnTime: 2,
              HeatwaveDamage: 250,
              HeatwaveRange: 13.5,
              HeatwaveBurnDamage: 15,
              KnockbackForce: 22.5,
            },
          },
          Cost: 8000,
          Title: "Improved Exhaust Systems",
        },
        {
          Image: 77890912829468,
          Stats: {
            Damage: 18,
            Cooldown: 0.125,
            Attributes: {
              Burst: 7,
              BurstCooldown: 0.4,
              BurnTime: 4,
              HeatwaveDamage: 400,
              HeatwaveRange: 15,
              HeatwaveBurnDamage: 20,
              KnockbackForce: 25,
            },
          },
          Cost: 15000,
          Title: "Frost Fire Specialist",
        },
      ],
    },
  },
  "Elf Camp": {
    Default: {
      Upgrades: [
        {
          Image: 11756694085,
          Stats: {
            Extras: ["Faster spawning"],
            Attributes: {
              ElfSpawnTime: 12,
            },
          },
          Title: "Winter Training",
          Cost: 150,
        },
        {
          Image: 11866247025,
          Stats: {
            Extras: ["Snowball Elfs"],
            Attributes: {
              SnowballElf: true,
            },
          },
          Title: "Snowball Fight",
          Cost: 325,
        },
        {
          Image: 11866247585,
          Stats: {
            Extras: ["Bomber Elfs"],
            Attributes: {
              BomberElf: true,
            },
          },
          Title: "Explosive Surprise",
          Cost: 1500,
        },
        {
          Image: 11866248209,
          Stats: {
            Extras: ["Guardian Elfs", "Cannoneer Elfs"],
            Attributes: {
              GuardianElf: true,
              CannoneerElf: true,
              Elf: false,
              SnowballElf: false,
            },
          },
          Title: "Winter Workshop",
          Cost: 3500,
        },
        {
          Image: 11866248664,
          Stats: {
            Extras: ["Ripped Elfs", "Gift Bombers", "Gunner Elfs"],
            Attributes: {
              RippedElf: true,
              GunnerElf: true,
              GiftBomber: true,
              BomberElf: false,
              CannoneerElf: false,
            },
          },
          Title: "X-Mas Army",
          Cost: 9500,
        },
      ],
      Defaults: {
        Limit: 2,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Range: 0,
        Price: 300,
        Attributes: {
          Elf: true,
          ElfSpawnTime: 15,
          GuardianElf: false,
          SnowballElf: false,
          CannoneerElf: false,
          GunnerElf: false,
          BomberElf: false,
          GiftBomber: false,
          RippedElf: false,
        },
        Cooldown: 0,
        Damage: 0,
      },
    },
  },
  Engineer: {
    Default: {
      Upgrades: [
        {
          Image: 4517035597,
          Stats: {
            Range: 16,
            Cooldown: 1,
            Damage: 6,
          },
          Title: "Precise Calculations",
          Cost: 350,
        },
        {
          Image: 149177741,
          Stats: {
            Detections: { Flying: true, Hidden: true},
            Cooldown: 1.2,
            Damage: 10,
            Range: 18,
          },
          Title: "Makeshift Radar",
          Cost: 400,
        },
        {
          Image: 8998290803,
          Stats: {
            Extras: ["Rifle Sentry"],
            Attributes: {
              UnitToSend: "RifleSentry",
              MaxUnits: 2,
            },
            Damage: 15,
          },
          Title: "Auto Converter",
          Cost: 2250,
        },
        {
          Image: 31857714,
          Stats: {
            Extras: ["3 Max Units", "Sentry Shield"],
            Attributes: {
              MaxUnits: 3,
              SentryShield: true,
              Buildzone: 3,
            },
            Cooldown: 0.75,
            Range: 20,
            Damage: 30,
          },
          Title: "Improved Blueprints",
          Cost: 4750,
        },
        {
          Image: 155526941,
          Stats: {
            Extras: ["Minigun Sentry", "Sentry Shield"],
            Attributes: {
              UnitToSend: "MinigunSentry",
            },
            Damage: 60,
          },
          Title: "Heavy Construction",
          Cost: 13500,
        },
        {
          Image: 7852911857,
          Stats: {
            Extras: ["War Machine Sentry", "4 Max Units"],
            Attributes: {
              MaxUnits: 4,
              UnitToSend: "WarMachineSentry",
              Buildzone: 2,
            },
            Cooldown: 0.6,
            Range: 22.5,
            Damage: 85,
          },
          Title: "Illegal Gun Parts",
          Cost: 35000,
        },
      ],
      Defaults: {
        Limit: 6,
        Detections: { Flying: false, Hidden: false, Lead: true },
        Range: 13,
        Price: 600,
        Attributes: {
          MaxUnits: 1,
          UnitToSend: "Sentry",
          SpawnTime: 1,
          SentryShield: false,
          Buildzone: 4,
          Deadzone: 1.25,
        },
        Cooldown: 1.2,
        Damage: 4,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 4517035597,
          Stats: {
            Range: 15,
            Damage: 6,
          },
          Title: "Precise Calculations",
          Cost: 250,
        },
        {
          Image: 149177741,
          Stats: {
            Extras: ["2 Max Units"],
            Attributes: {
              MaxUnits: 2,
            },
            Detections: { Flying: true, Hidden: true},
            Cooldown: 1.2,
            Range: 17,
          },
          Title: "Makeshift Radar",
          Cost: 400,
        },
        {
          Image: 8998290803,
          Stats: {
            Extras: ["Rifle Sentry"],
            Attributes: {
              UnitToSend: "RifleSentry (PVP)",
            },
            Damage: 16,
          },
          Title: "Auto Converter",
          Cost: 1800,
        },
        {
          Image: 31857714,
          Stats: {
            Extras: ["3 Max Units", "Sentry Shield"],
            Attributes: {
              SentryShield: true,
            },
            Cooldown: 0.75,
            Range: 20,
            Damage: 22,
          },
          Title: "Improved Blueprints",
          Cost: 2600,
        },
        {
          Image: 155526941,
          Stats: {
            Extras: ["Minigun Sentry", "Sentry Shield"],
            Attributes: {
              MaxUnits: 3,
              UnitToSend: "MinigunSentry (PVP)",
            },
            Damage: 30,
          },
          Title: "Heavy Construction",
          Cost: 11500,
        },
        {
          Image: 7852911857,
          Stats: {
            Extras: ["War Machine Sentry", "4 Max Units"],
            Attributes: {
              UnitToSend: "WarMachineSentry (PVP)",
              Deadzone: 0.5,
            },
            Cooldown: 0.6,
            Range: 22,
            Damage: 50,
          },
          Title: "Illegal Gun Parts",
          Cost: 27500,
        },
      ],
      Defaults: {
        Limit: 5,
        Detections: { Flying: false, Hidden: false, Lead: true },
        Range: 13,
        Price: 700,
        Attributes: {
          MaxUnits: 1,
          UnitToSend: "Sentry (PVP)",
          SpawnTime: 1,
          SentryShield: false,
          Buildzone: 4,
          Deadzone: 1,
        },
        Cooldown: 1.2,
        Damage: 4,
      },
    },
  },
  Executioner: {
    Default: {
      Upgrades: [
        {
          Image: 129697807,
          Stats: {
            Cooldown: 2,
          },
          Title: "Improved Throwing",
          Cost: 250,
        },
        {
          Image: 542098553,
          Stats: {
            Damage: 8,
          },
          Title: "Double Head Axe",
          Cost: 750,
        },
        {
          Image: 6426220009,
          Stats: {
            Extras: ["Bounces: 5"],
            Attributes: {
              MaxBounce: 5,
            },
            Range: 18,
            Damage: 15,
          },
          Title: "Blood Seeking",
          Cost: 2500,
        },
        {
          Image: 27386833,
          Stats: {
            Extras: [],
            Attributes: {
              MaxBounce: 5,
            },
            Detections: { Hidden: true },
            Cooldown: 2,
            Range: 18,
            Damage: 30,
          },
          Title: "Tactical Ops",
          Cost: 6000,
        },
        {
          Image: 143769378,
          Stats: {
            Extras: ["Bounces: 7"],
            Attributes: {
              MaxBounce: 7,
            },
            Damage: 80,
          },
          Title: "Head Chopping",
          Cost: 12500,
        },
      ],
      Defaults: {
        Limit: 8,
        Detections: { Flying: true, Hidden: false, Lead: false },
        Range: 14,
        Price: 800,
        Attributes: { MaxBounce: 3, MaxHitsPerTick: 3, TickRate: 0.15 },
        Cooldown: 3,
        Damage: 4,
      },
    },
  },
  Farm: {
    Default: {
      Upgrades: [
        {
          Image: 3294497195,
          Stats: {
            Income: 100,
            Attributes: { ThornPower: 60 },
          },
          Title: "Carrot Farm",
          Cost: 200,
        },
        {
          Image: 3294496318,
          Stats: {
            Attributes: { ThornPower: 70 },
            Income: 250,
          },
          Title: "Wheat Farm",
          Cost: 550,
        },
        {
          Image: 3294498124,
          Stats: {
            Attributes: { ThornPower: 80 },
            Income: 500,
          },
          Title: "Tree Farm",
          Cost: 1000,
        },
        {
          Image: 3294499153,
          Stats: {
            Attributes: { ThornPower: 90 },
            Income: 750,
          },
          Title: "Apple Farm",
          Cost: 2500,
        },
        {
          Image: 3294500097,
          Stats: {
            Attributes: { ThornPower: 100 },
            Income: 1500,
          },
          Title: "Space Fruit Farm",
          Cost: 5000,
        },
      ],
      Defaults: {
        Income: 50,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { ThornPower: 50 },
        Range: 5,
        Price: 250,
        Limit: 8,
        Cooldown: 0,
        Damage: 0,
      },
    },
  },
  "Firework Technician": {
    Default: {
      Upgrades: [
        {
          Image: 113918271734207,
          Stats: {
            Attributes: {
              FireworkDamage: 10,
              BuffDuration: 20,
              FireworkChanceCap: 0.6,
              BurnDamage: 2,
            },
          },
          Title: "Pyrotechnics",
          Cost: 2000,
        },
        {
          Image: 102159060729309,
          Stats: {
            Attributes: {
              FireworkDamage: 20,
              BuffDuration: 25,
              FireworkChanceCap: 0.7,
              ExplosionRadius: 2,
              BurnTick: 0.25,
            },
            Range: 9,
          },
          Title: "Bigger Boom",
          Cost: 6500,
        },
        {
          Image: 76789690706169,
          Stats: {
            Attributes: {
              FireworkDamage: 30,
              BuffDuration: 30,
              FireworkChanceCap: 0.85,
              BurnDamage: 4,
            },
          },
          Title: "Light the Sky",
          Cost: 12000,
        },
        {
          Image: 83889465749773,
          Stats: {
            Attributes: {
              FireworkDamage: 45,
              BuffDuration: 40,
              FireworkChanceCap: 1,
              BurnDamage: 7,
            },
            Range: 10,
          },
          Title: "The Finale",
          Cost: 22000,
        },
      ],
      Defaults: {
        Limit: 1,
        Price: 1500,
        Range: 8,
        Cooldown: 0,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          BuffDuration: 15,
          FireworkChanceCap: 0.5,
          FireworkDamage: 5,
          ExplosionRadius: 1,
          BurnDamage: 1,
          BurnTick: 0.5,
          BurnTime: 5,
        },
      },
    },
  },
  Freezer: {
    Default: {
      Upgrades: [
        {
          Image: 15686418975,
          Stats: {
            Extras: ["Max Slowness: 50% > 60%", "Chill Slowness: 10% > 15%"],
            Attributes: {
              ChillPercent: 15,
              MaxChill: 60,
            },
            Damage: 2,
          },
          Title: "Expedition Gear",
          Cost: 225,
        },
        {
          Image: 15686418835,
          Stats: {
            Extras: ["Freezes enemies on max chill", "🧊Freeze Time: 0 > 2", "Chill Slowness: 15% > 20%"],
            Attributes: {
              FreezeTime: 2,
              ChillPercent: 20,
              CanFreeze: true,
            },
            Detections: {
              Hidden: true,
            },
            Range: 14,
          },
          Title: "Bundled Up!",
          Cost: 650,
        },
        {
          Image: 15686418748,
          Stats: {
            Extras: [
              "Burst: 1 > 3",
              "Burst Cooldown: 0.75",
              "Max Slowness: 60% > 75%",
              "Chill Slowness: 20% > 25%",
              "Freeze Time: 2 > 2.5",
              "Defense Melt: 10",
            ],
            Attributes: {
              Burst: 3,
              DefenseMelt: 10,
              BurstCooldown: 0.75,
              ChillPercent: 25,
              MaxChill: 75,
              FreezeTime: 2.5,
            },
            Cooldown: 0.15,
            Damage: 3,
          },
          Title: "Arctic Soldier",
          Cost: 2000,
        },
        {
          Image: 15686418571,
          Stats: {
            Extras: [
              "Burst: 3 > 6",
              "Frost Grenade Ability",
            ],
            Attributes: {
              Burst: 6,
              FreezeTime: 3,
              FrostGrenade: true,
              FrostGrenadeFreezeTime: 6,
              FrostGrenadeCooldown: 15,
              FrostGrenadeMaxHits: 5,
              FrostGrenadeRadius: 6,
            },
            Cooldown: 0.15,
            Range: 16,
            Damage: 5,
          },
          Title: "Frost Bite!",
          Cost: 4500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          DefenseMelt: 0,
          MaxDefenseMelt: 33,
          FreezeTime: 0,
          Burst: 1,
          BurstCooldown: 0,
          CanFreeze: false,
          ChillPercent: 10,
          MaxChill: 50,
          TickRate: 0.25,
          FrostGrenade: false,
          ChillLength: 5,
        },
        Price: 425,
        Range: 12,
        Cooldown: 0.5,
        Damage: 1,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 15686418975,
          Stats: {
            Extras: ["Max Slowness: 50% > 60%", "Chill Slowness: 10% > 15%"],
            Attributes: {
              MaxChill: 40,
            },
            Damage: 2,
          },
          Title: "Expedition Gear",
          Cost: 225,
        },
        {
          Image: 15686418835,
          Stats: {
            Extras: ["Freezes enemies on max chill", "🧊Freeze Time: 0 > 2", "Chill Slowness: 15% > 20%"],
            Attributes: {
              FreezeTime: 2,
              ChillPercent: 20,
              CanFreeze: true,
            },
            Detections: {
              Hidden: true,
            },
            Range: 14,
          },
          Title: "Bundled Up!",
          Cost: 650,
        },
        {
          Image: 15686418748,
          Stats: {
            Extras: [
              "Burst: 1 > 3",
              "Burst Cooldown: 0.75",
              "Max Slowness: 60% > 75%",
              "Chill Slowness: 20% > 25%",
              "Freeze Time: 2 > 2.5",
              "Defense Melt: 10",
            ],
            Attributes: {
              Burst: 3,
              DefenseMelt: 10,
              BurstCooldown: 0.8,
              ChillPercent: 20,
              MaxChill: 60,
              FreezeTime: 2.5,
            },
            Cooldown: 0.15,
            Damage: 3,
          },
          Title: "Arctic Soldier",
          Cost: 2000,
        },
        {
          Image: 15686418571,
          Stats: {
            Extras: [
              "Burst: 3 > 6",
              "Frost Grenade Ability",
            ],
            Attributes: {
              Burst: 6,
              FreezeTime: 3,
              FrostGrenade: true,
              FrostGrenadeFreezeTime: 6,
              FrostGrenadeCooldown: 15,
              FrostGrenadeMaxHits: 5,
              FrostGrenadeRadius: 6,
            },
            Range: 16,
            Damage: 5,
          },
          Title: "Frost Bite!",
          Cost: 4500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          DefenseMelt: 0,
          MaxDefenseMelt: 33,
          FreezeTime: 0,
          Burst: 1,
          BurstCooldown: 0,
          CanFreeze: false,
          ChillPercent: 10,
          MaxChill: 30,
          TickRate: 0.25,
          FrostGrenade: false,
          ChillLength: 5,
        },
        Price: 425,
        Range: 12,
        Cooldown: 0.5,
        Damage: 1,
      },
    },
  },
  "Frost Blaster": {
    Default: {
      Upgrades: [
        {
          Image: "15686412605",
          Stats: {
            Extras: [],
            Detections: { Hidden: true },
            Cooldown: 1,
            Range: 15,
          },
          Title: "Endurance",
          Cost: 300,
        },
        {
          Image: 15686412501,
          Stats: {
            Extras: ["Max Hits: 3 > 4"],
            Attributes: {
              MaxHits: 4,
            },
            Damage: 10,
          },
          Title: "Piercing Cold",
          Cost: 1000,
        },
        {
          Image: 15686412400,
          Stats: {
            Extras: ["Freeze Time: 0.75 > 1", "Max Hits: 4 > 5"],
            Attributes: {
              FreezeTime: 1,
              MaxHits: 5,
            },
            Range: 17.5,
            Damage: 20,
          },
          Title: "Frosty Gear",
          Cost: 2500,
        },
        {
          Image: 15686412306,
          Stats: {
            Extras: [
              "Freeze Time: 0.75 > 1.5",
              "Max Hits: 5 > 7",
              "Faster Projectile Speed",
            ],
            Detections: { Flying: true },
            Attributes: {
              FreezeTime: 1.5,
              MaxHits: 7,
            },
            Cooldown: 1.5,
            Range: 23,
            Damage: 60,
          },
          Title: "Hyper Icer Trooper",
          Cost: 7500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: { DefenseMelt: 10, MaxDefenseMelt: 33, FreezeTime: 0.75, MaxHits: 3, ChillPercent: 30, MaxChill: 30, ChillDuration: 2, TickRate: 0.25},
        Price: 800,
        Range: 12,
        Cooldown: 1.2,
        Damage: 6,
      },
    },
  },
  "Gatling Gun": {
    Default: {
      Defaults: {
        Detections: { Flying: true },
        Price: 5250,
        Range: 25,
        Attributes: {
          ReloadTime: 2.5,
          Angle: 40,
          Recoil: 0.08,
          Spread: 10,
          Pierce: 2.5,
          MaxAmmo: 50,
        },
        Limit: 1,
        Cooldown: 0.15,
        Damage: 5,
      },
      Upgrades: [
        {
          Stats: {
            Range: 30,
            Damage: 8,
          },
          Image: 70569444235865,
          Title: "Heavier Bullets",
          Cost: 3000,
        },
        {
          Stats: {
            Attributes: {
              Spread: 9,
              Angle: 45,
              ReloadTime: 2,
              MaxAmmo: 100,
            },
            Cooldown: 0.15,
            Damage: 12,
            Extras: ["Ammo: 50 > 100", "Faster Reload", "Tighter Spread", "Wider Angle"],
          },
          Image: 104227180979769,
          Title: "Bigger Magazine",
          Cost: 7500,
        },
        {
          Stats: {
            Attributes: {
              Angle: 55,
              Spread: 7.5,
              MaxAmmo: 200,
            },
            Range: 35,
            Cooldown: 0.12,
            Damage: 16,
            Extras: ["Ammo: 100 > 200", "Wider Angle", "Tighter Spread"],
            Detections: { Hidden: true },
          },
          Image: 71764582498505,
          Title: "Double Trouble",
          Cost: 15000,
        },
        {
          Stats: {
            Attributes: {
              Spread: 6.5,
              Angle: 55,
              Deadzone: 1.25,
              Recoil: 0.06,
            },
            Cooldown: 0.09,
            Range: 45,
            Damage: 25,
            Extras: ["Wider Angle", "Tighter Spread", "Less Recoil"],
          },
          Image: 128136625170591,
          Title: "Minigun Barrel",
          Cost: 32500,
        },
        {
          Stats: {
            Attributes: {
              Angle: 65,
              Deadzone: 2,
              ReloadTime: 6,
              Recoil: 0.03,
              MaxAmmo: 400,
            },
            Range: 50,
            Damage: 45,
            Extras: ["Ammo: 200 > 400", "Wider Angle", "Less Recoil", "Slower Reload Time"],
          },
          Image: 125372339735512,
          Title: "Impenetrable Fortress",
          Cost: 50000,
        },
        {
          Stats: {
            Attributes: {
              MaxAmmo: 600,
              Angle: 70,
            },
            Cooldown: 0.09,
            Damage: 85,
            Extras: ["Ammo: 400 > 600", "Wider Angle"],
          },
          Image: 139181863986914,
          Title: "Destruction-Oriented Output Machine",
          Cost: 100000,
        },
      ],
    },
    PVP: {
      Defaults: {
        Detections: { Flying: true },
        Price: 4500,
        Range: 25,
        Attributes: {
          ReloadTime: 2.5,
          Angle: 40,
          Recoil: 0.08,
          Spread: 10,
          Pierce: 2.5,
          MaxAmmo: 50,
        },
        Limit: 1,
        Cooldown: 0.15,
        Damage: 5,
      },
      Upgrades: [
        {
          Stats: {
            Range: 30,
            Damage: 8,
          },
          Image: 70569444235865,
          Title: "Heavier Bullets",
          Cost: 2500,
        },
        {
          Stats: {
            Attributes: {
              Spread: 9,
              Angle: 45,
              ReloadTime: 2,
              MaxAmmo: 100,
            },
            Cooldown: 0.15,
            Damage: 15,
            Extras: ["Ammo: 50 > 100", "Faster Reload", "Tighter Spread", "Wider Angle"],
          },
          Image: 104227180979769,
          Title: "Bigger Magazine",
          Cost: 7500,
        },
        {
          Stats: {
            Attributes: {
              Angle: 55,
              Spread: 7.5,
              MaxAmmo: 200,
            },
            Range: 35,
            Cooldown: 0.12,
            Damage: 20,
            Extras: ["Ammo: 100 > 200", "Wider Angle", "Tighter Spread"],
            Detections: { Hidden: true },
          },
          Image: 71764582498505,
          Title: "Double Trouble",
          Cost: 15000,
        },
        {
          Stats: {
            Attributes: {
              Spread: 6.5,
              Angle: 55,
              Deadzone: 1.25,
              Recoil: 0.06,
            },
            Cooldown: 0.09,
            Range: 45,
            Damage: 30,
            Extras: ["Wider Angle", "Tighter Spread", "Less Recoil"],
          },
          Image: 128136625170591,
          Title: "Minigun Barrel",
          Cost: 32500,
        },
        {
          Stats: {
            Attributes: {
              Angle: 65,
              Deadzone: 2,
              ReloadTime: 6,
              Recoil: 0.03,
              MaxAmmo: 400,
            },
            Range: 50,
            Damage: 50,
            Extras: ["Ammo: 200 > 400", "Wider Angle", "Less Recoil", "Slower Reload Time"],
          },
          Image: 125372339735512,
          Title: "Impenetrable Fortress",
          Cost: 42000,
        },
        {
          Stats: {
            Attributes: {
              MaxAmmo: 600,
              Angle: 70,
            },
            Cooldown: 0.09,
            Damage: 100,
            Extras: ["Ammo: 400 > 600", "Wider Angle"],
          },
          Image: 139181863986914,
          Title: "Destruction-Oriented Output Machine",
          Cost: 100000,
        },
      ],
    },
  },
  Gladiator: {
    Default: {
      Upgrades: [
        {
          Image: 3356186535,
          Stats: {
            Damage: 3,
          },
          Title: "Warrior Armor",
          Cost: 250,
        },
        {
          Image: 141745478,
          Stats: {
            Detections: {
              Hidden: true,
            },
            Damage: 5,
          },
          Title: "Dangersense",
          Cost: 500,
        },
        {
          Image: 4118882122,
          Stats: {
            Extras: ["Warrior's Call"],
            Attributes: {
              "Warrior's Call": true,
              "Warrior's Call Buff": 35,
              "Warrior's Call Cooldown": 30,
              "Warrior's Call Length": 15,
            },
            Damage: 10,
          },
          Title: "Extra Protection",
          Cost: 1500,
        },
        {
          Image: 16620737,
          Stats: {
            Cooldown: 0.75,
            Damage: 25,
          },
          Title: "Illumina",
          Cost: 2500,
        },
        {
          Image: 16868189,
          Stats: {
            Cooldown: 0.5,
            Range: 6,
            Damage: 40,
          },
          Title: "Darkheart Swordsman",
          Cost: 6000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { MaxHits: 3, "Warrior's Call": false, "Warrior's Call Buff": 0, "Warrior's Call Cooldown": 0, "Warrior's Call Length": 0, ParryCooldown: 5, ParryLength: 1.25 },
        Price: 300,
        Range: 5,
        Cooldown: 1,
        Damage: 2,
      },
    },
  },
  Hacker: {
    "Top Path": {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          MaxHits: 1,
          Slowdown: 0,
          EV: 0.6,
          EnemyCashMult: 1,
          HologramCooldown: 0,
          HologramLifetime: 0,
          TowerCloningCost: 0,
        },
        Limit: 2,
        Price: 1400,
        Range: 11,
        Cooldown: 0.8,
        Damage: 4,
      },
      Upgrades: [
        {
          Image: 116572141213630,
          Stats: {
            Cooldown: 0.5,
            Range: 14,
            Attributes: {
              EnemyCashMult: 1.075,
            },
          },
          Title: "Upgraded Rig",
          Cost: 600,
        },
        {
          Image: 84772480553742,
          Stats: {
            Damage: 6,
            Detections: { Hidden: true },
            Attributes: {
              MaxHits: 2,
              Slowdown: 15,
              EnemyCashMult: 1.1,
              EV: 0.65,
            },
          },
          Title: "Shady Business",
          Cost: 1250,
        },
        {
          Image: 73779458293742,
          Stats: {
            Damage: 20,
            Range: 15,
            Attributes: {
              TowerCloningCost: 90,
              HologramLifetime: 60,
              EV: 0.725,
              HologramCooldown: 60,
            },
          },
          Title: "Teleportation Tech",
          Cost: 7500,
        },
        {
          Image: 71327152036764,
          Stats: {
            Range: 16,
            Cooldown: 0.3,
            Attributes: {
              EnemyCashMult: 1.125,
              Slowdown: 20,
              EV: 0.825,
              HologramLifetime: 75,
            },
          },
          Title: "5th Gen I9 3260590327",
          Cost: 22000,
        },
        {
          Image: 78547724037844,
          Stats: {
            Range: 18.5,
            Cooldown: 0.1,
            Damage: 15,
            Attributes: {
              MaxHits: 4,
              EV: 0.9,
            },
          },
          Title: "Overclock",
          Cost: 63500,
        },
      ],
    },
    "Bottom Path": {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          MaxHits: 1,
          Slowdown: 0,
          EV: 0.6,
          EnemyCashMult: 1,
          HologramCooldown: 0,
          HologramLifetime: 0,
          TowerCloningCost: 0,
        },
        Limit: 2,
        Price: 1400,
        Range: 11,
        Cooldown: 0.8,
        Damage: 4,
      },
      Upgrades: [
        {
          Image: 116572141213630,
          Stats: {
            Cooldown: 0.5,
            Range: 14,
            Attributes: {
              EnemyCashMult: 1.075,
            },
          },
          Title: "Upgraded Rig",
          Cost: 600,
        },
        {
          Image: 84772480553742,
          Stats: {
            Damage: 6,
            Detections: { Hidden: true },
            Attributes: {
              MaxHits: 2,
              Slowdown: 15,
              EnemyCashMult: 1.1,
              EV: 0.65,
            },
          },
          Title: "Shady Business",
          Cost: 1250,
        },
        {
          Image: 73779458293742,
          Stats: {
            Damage: 20,
            Range: 15,
            Attributes: {
              TowerCloningCost: 90,
              HologramLifetime: 60,
              EV: 0.725,
              HologramCooldown: 60,
            },
          },
          Title: "Teleportation Tech",
          Cost: 7500,
        },
        {
          Image: 71327152036764,
          Stats: {
            Range: 16,
            Cooldown: 0.3,
            Attributes: {
              EnemyCashMult: 1.125,
              Slowdown: 20,
              EV: 0.825,
              HologramLifetime: 75,
            },
          },
          Title: "5th Gen I9 3260590327",
          Cost: 22000,
        },
        {
          Image: 105579078081734,
          Stats: {
            Range: 21,
            Damage: 18,
            Attributes: {
              MaxHits: 3,
              HologramLifetime: 120,
              Slowdown: 25,
              TowerCloningCost: 65,
              EnemyCashMult: 1.2,
            },
          },
          Title: "Rug Pull",
          Cost: 48000,
        },
      ],
    },
    "Top Path (PVP)": {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          MaxHits: 1,
          Slowdown: 0,
          EV: 0.6,
          EnemyCashMult: 1,
          HologramCooldown: 0,
          HologramLifetime: 0,
          TowerCloningCost: 0,
        },
        Limit: 2,
        Price: 1400,
        Range: 11,
        Cooldown: 0.8,
        Damage: 4,
      },
      Upgrades: [
        {
          Image: 116572141213630,
          Stats: {
            Cooldown: 0.5,
            Range: 14,
            Attributes: {
              EnemyCashMult: 1.075,
            },
          },
          Title: "Upgraded Rig",
          Cost: 600,
        },
        {
          Image: 84772480553742,
          Stats: {
            Damage: 6,
            Detections: { Hidden: true },
            Attributes: {
              MaxHits: 2,
              Slowdown: 15,
              EnemyCashMult: 1.1,
              EV: 0.65,
            },
          },
          Title: "Shady Business",
          Cost: 1250,
        },
        {
          Image: 73779458293742,
          Stats: {
            Damage: 20,
            Range: 15,
            Attributes: {
              TowerCloningCost: 35,
              HologramLifetime: 60,
              EV: 0.725,
              HologramCooldown: 60,
            },
          },
          Title: "Teleportation Tech",
          Cost: 7500,
        },
        {
          Image: 71327152036764,
          Stats: {
            Range: 16,
            Cooldown: 0.3,
            Attributes: {
              EnemyCashMult: 1.125,
              TowerCloningCost: 30,
              Slowdown: 20,
              EV: 0.825,
              HologramLifetime: 75,
            },
          },
          Title: "5th Gen I9 3260590327",
          Cost: 22000,
        },
        {
          Image: 78547724037844,
          Stats: {
            Range: 18.5,
            Cooldown: 0.1,
            Damage: 15,
            Attributes: {
              MaxHits: 4,
              EV: 0.9,
            },
          },
          Title: "Overclock",
          Cost: 63500,
        },
      ],
    },
    "Bottom Path (PVP)": {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          MaxHits: 1,
          Slowdown: 0,
          EV: 0.6,
          EnemyCashMult: 1,
          HologramCooldown: 0,
          HologramLifetime: 0,
          TowerCloningCost: 0,
        },
        Limit: 2,
        Price: 1400,
        Range: 11,
        Cooldown: 0.8,
        Damage: 4,
      },
      Upgrades: [
        {
          Image: 116572141213630,
          Stats: {
            Cooldown: 0.5,
            Range: 14,
            Attributes: {
              EnemyCashMult: 1.075,
            },
          },
          Title: "Upgraded Rig",
          Cost: 600,
        },
        {
          Image: 84772480553742,
          Stats: {
            Damage: 6,
            Detections: { Hidden: true },
            Attributes: {
              MaxHits: 2,
              Slowdown: 15,
              EnemyCashMult: 1.1,
              EV: 0.65,
            },
          },
          Title: "Shady Business",
          Cost: 1250,
        },
        {
          Image: 73779458293742,
          Stats: {
            Damage: 20,
            Range: 15,
            Attributes: {
              TowerCloningCost: 35,
              HologramLifetime: 60,
              EV: 0.725,
              HologramCooldown: 60,
            },
          },
          Title: "Teleportation Tech",
          Cost: 7500,
        },
        {
          Image: 71327152036764,
          Stats: {
            Range: 16,
            Cooldown: 0.3,
            Attributes: {
              EnemyCashMult: 1.125,
              TowerCloningCost: 30,
              Slowdown: 20,
              EV: 0.825,
              HologramLifetime: 75,
            },
          },
          Title: "5th Gen I9 3260590327",
          Cost: 22000,
        },
        {
          Image: 105579078081734,
          Stats: {
            Range: 21,
            Damage: 18,
            Attributes: {
              MaxHits: 3,
              HologramLifetime: 120,
              Slowdown: 25,
              TowerCloningCost: 25,
              EnemyCashMult: 1.2,
            },
          },
          Title: "Rug Pull",
          Cost: 48000,
        },
      ],
    },
  },
  Harvester: {
    Default: {
      Upgrades: [
        {
          Stats: {
            Damage: 8,
            Range: 15,
            Attributes: {
              ThornsDamage: 4,
            },
          },
          Title: "Thorns",
          Image: 84794687219284,
          Cost: 650,
        },
        {
          Stats: {
            Damage: 10,
            Cooldown: 0.85,
            Attributes: {
              MaxHits: 3,
              ThornsDamage: 6,
              ThornsRange: 12,
              ThornsDuration: 10,
              ThornsSlow: 20,
            },
          },
          Title: "Early Harvest",
          Image: 128833693887182,
          Cost: 2000,
        },
        {
          Stats: {
            Damage: 20,
            Attributes: {
              ThornsDamage: 12,
              ThornsRange: 16,
            },
          },
          Title: "Nature's Vengence",
          Image: 140040939003373,
          Cost: 5000,
        },
        {
          Stats: {
            Damage: 30,
            Cooldown: 0.75,
            Range: 17.5,
            Attributes: {
              ThornsDamage: 20,
              ThornsRange: 18,
              ThornsDuration: 16,
              ThornsSlow: 25,
            },
          },
          Title: "Cold-Hearted Scarecrow",
          Image: 83141210249578,
          Cost: 8500,
        },
        {
          Stats: {
            Damage: 90,
            Cooldown: 1.5,
            Range: 22.5,
            Attributes: {
              MaxHits: 4,
              ThornsRange: 20,
              ThornsSlow: 30,
              ThornsDamage: 30,
            },
          },
          Title: "Reaper",
          Image: 117691212648454,
          Cost: 20000,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false},
        Damage: 6,
        Cooldown: 1.2,
        Range: 13,
        Limit: 4,
        Attributes: {
          MaxHits: 2,
          ProjectileSpeed: 45,
          ThornsCooldown: 40,
          ThornsDamage: 2,
          ThornsRange: 10,
          ThornsDuration: 8,
          ThornsSlow: 15,
          ThornsTick: 0.5,
          "Nature's Bond": true,
        },
        Price: 1400,
      },
    },
  },
  "Hallow Punk": {
    Default: {
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Damage: 3,
        Cooldown: 5,
        Range: 18,
        Limit: 12,
        Price: 300,
        Attributes: {
          ExplosionRadius: 3.5,
          KnockbackForce: 10,
          RocketSpeed: 20,
          BurnDamage: 0,
          BurnTick: 0,
          BurnTime: 0,
        },
      },
      Upgrades: [
        {
          Image: 87280920444213,
          Stats: {
            Damage: 6,
            Cooldown: 3.75,
            Range: 20,
          },
          Title: "Rapid Reload",
          Cost: 450,
        },
        {
          Image: 103271630916907,
          Stats: {
            Damage: 25,
            Range: 22.5,
            Attributes: {
              RocketSpeed: 25,
              KnockbackForce: 12.5,
              ExplosionRadius: 5,
            }
          },
          Title: "Bigger Boom",
          Cost: 2750,
        },
        {
          Image: 98952678277583,
          Stats: {
            Detections: {Flying: true},
            Damage: 60,
            Range: 26,
            Attributes: {
              KnockbackForce: 17.5,
              ExplosionRadius: 5.5,
              BurnTime: 16,
              BurnDamage: 3,
              BurnTick: 0.25,
            },
          },
          Title: "Vengeful Missiles",
          Cost: 5000,
        },
      ]
    }
  },
  Hunter: {
    Default: {
      Upgrades: [
        {
          Image: 3839040358,
          Stats: {
            Cooldown: 1.75,
          },
          Title: "Hunter’s Instincts",
          Cost: 200,
        },
        {
          Image: 3839041547,
          Stats: {
            Detections: {Hidden: true},
            Range: 22,
            Damage: 14,
          },
          Title: "Longshot",
          Cost: 800,
        },
        {
          Image: 3839042767,
          Stats: {
            Cooldown: 1.6,
            Range: 25,
            Damage: 36,
          },
          Title: "Survivor’s Kit",
          Cost: 3250,
        },
        {
          Image: 3839043838,
          Stats: {
            Cooldown: 2,
            Range: 28,
            Damage: 120,
          },
          Title: "Greatest Huntsman",
          Cost: 9400,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Price: 750,
        Range: 18,
        Cooldown: 2.25,
        Damage: 8,
        Limit: 12,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 3839040358,
          Stats: {
            Cooldown: 1.2,
            Range: 21,
          },
          Title: "Hunter’s Instincts",
          Cost: 750,
        },
        {
          Image: 3839041547,
          Stats: {
            Detections: {Hidden: true},
            Damage: 35,
          },
          Title: "Longshot",
          Cost: 1800,
        },
        {
          Image: 3839042767,
          Stats: {
            Damage: 85,
          },
          Title: "Survivor’s Kit",
          Cost: 6250,
        },
        {
          Image: 3839043838,
          Stats: {
            Range: 24,
            Damage: 165,
          },
          Title: "Greatest Huntsman",
          Cost: 12000,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Price: 1600,
        Range: 18,
        Cooldown: 1.7,
        Damage: 20,
        Limit: 10,
      },
    },
  },
  Jester: {
    Default: {
      Upgrades: [
        {
          Stats: { Cooldown: 1, Range: 12 },
          Image: 15332518871,
          Title: "Trained Juggling",
          Cost: 100,
        },
        {
          Stats: {
            Extras: [
              "Fire Time: 3 > 4",
              "Ice Bomb",
              "1/2 Base Damage, 30% Chill, 60% Max Chill",
            ],
            Attributes: {
              BurnTime: 4, 
              Ice: true, 
              IceTick: 0.25, 
              IceDamageMult: 0.5,
              SlowDuration: 2,
              ChillPercent: 30,
              MaxSlow: 60,
            },
            Damage: 4,
          },
          Image: 15332518503,
          Title: "Cold Humor",
          Cost: 550,
        },
        {
          Stats: {
            Extras: [
              "Fire Time: 4 > 6",
              "Acid Puddle Bomb",
              "3/10 Base Damage, 0.5 Tick, 10s Duration, Defense Melt",
            ],
            Attributes: { 
              BurnTime: 6, 
              Poison: true,
              PoisonDefenseMelt: 1,
              MaxDefenseMelt: 50,
              PoisonDamageMult: 0.3,
              PoisonPuddleRadius: 3.5,
              PoisonPuddleLifespan: 10,
              PoisonTick: 0.5,
            },
            Detections: { Hidden: true },
            Damage: 12,
          },
          Image: 15332518237,
          Title: "Potent Bombs",
          Cost: 2250,
        },
        {
          Stats: {
            Attributes: {
              BurnTime: 6, 
              BurnTick: 0.5,
              BombCount: 2,
              Confusion: true,
              ConfusionDamageMult: 0.5,
              ConfusionDuration: 2,
              ConfusionCooldown: 8,
            },
            Extras: [
              "Double Bombs",
              "Confusion Bomb",
              "No Damage, makes enemies walk backwards for 2s",
            ],
            Cooldown: 0.75,
            Range: 14,
            Damage: 22,
          },
          Image: 15332519184,
          Title: "Harlequin of Doom",
          Cost: 8500,
        },
      ],
      Defaults: {
        Range: 10,
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: {
          AimTime: 0.2,
          EquipTime: 0.4,
          ProjectileSpeed: 30,
          ExplosionRadius: 3,
          BombCount: 1,
          Fire: true,
          Ice: false,
          Poison: false,
          Confusion: false,
          BurnDamageMult: 0.5,
          BurnTick: 1,
          BurnTime: 3,
          IceDamageMult: 0,
          SlowDuration: 0,
          ChillPercent: 0,
          MaxSlow: 0,
          IceTick: 0,
          PoisonDefenseMelt: 0,
          MaxDefenseMelt: 0,
          PoisonDamageMult: 0,
          PoisonPuddleRadius: 0,
          PoisonPuddleLifespan: 0,
          PoisonTick: 0,
          MaxHits: 5,
          ConfusionDamageMult: 0,
          ConfusionDuration: 0,
          ConfusionCooldown: 0,
        },
        Price: 500,
        Limit: 8,
        Cooldown: 1.5,
        Damage: 2,
      },
    },
  },
  "Mecha Base": {
    Default: {
      Upgrades: [
        {
          Image: 4119547116,
          Stats: {
            Attributes: {
              UnitToSend: "Mark1Rocket",
            },
          },
          Title: "Mechanics",
          Cost: 400,
        },
        {
          Image: 4119547593,
          Stats: {
            Attributes: { UnitToSend: "Mark2" },
          },
          Title: "Missile Launcher",
          Cost: 900,
        },
        {
          Image: 4119548000,
          Stats: {
            Attributes: { UnitToSend: "Mark3" },
          },
          Title: "Minigun Mech",
          Cost: 2400,
        },
        {
          Image: 4119548431,
          Stats: {
            Attributes: { UnitToSend: "Mark4" },
          },
          Title: "Destroyer Mech",
          Cost: 4500,
        },
        {
          Image: 4119548907,
          Stats: {
            Attributes: { UnitToSend: "Mark5" },
          },
          Title: "Void Walker",
          Cost: 6500,
        },
      ],
      Defaults: {
        Limit: 4,
        Detections: { Flying: false, Hidden: false, Lead: false },
        Range: 0,
        Price: 5000,
        Attributes: { UnitToSend: "Mark1" },
        Cooldown: 0,
        Damage: 0,
      },
    },
  },
  Medic: {
    Default: {
      Upgrades: [
        {
          Image: 117008581932706,
          Stats: {
            Attributes: { MaxTargets: 2 },
          },
          Title: "Medical Precautions",
          Cost: 500,
        },
        {
          Image: 71546954858462,
          Stats: {
            Attributes: { 
              OverhealLimit: 5,
              MaxTargets: 3,
              ShieldRechargeSpeed: 6,
            },
            Range: 14,
          },
          Title: "Prescribed Vitamins",
          Cost: 750,
        },
        {
          Image: 130592941614779,
          Stats: {
            Attributes: { 
              OverhealLimit: 10,
              Healing: 10,
              MaxTargets: 3,
              DamageBuff: 20,
              UberchargeDuration: 7.5,
              UberchargeCooldown: 60,
            },
            Range: 15,
          },
          Title: "BIG BRAIN",
          Cost: 2700,
        },
        {
          Image: 112504548905627,
          Stats: {
            Attributes: { 
              Healing: 20,
              OverhealLimit: 20,
              MaxTargets: 4,
              ShieldRechargeSpeed: 4.5,
              UberchargeDuration: 10,
              DamageBuff: 27.5,
            },
            Range: 18,
          },
          Title: "Medical Pack",
          Cost: 6000,
        },
        {
          Image: 112504548905627,
          Stats: {
            Attributes: { 
              Healing: 25,
              OverhealLimit: 50,
              ShieldRechargeSpeed: 2,
              MaxTargets: 5,
              DamageBuff: 40,
              UberchargeDuration: 15,
            },
            Range: 20,
          },
          Title: "PHD",
          Cost: 16000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: { Healing: 5, OverhealLimit: 0, FirerateBuff: 15, DamageBuff: 0, MaxTargets: 1, ShieldRechargeSpeed: 8, TowerSelectionCooldown: 0.5, UberchargeDuration: 0, UberchargeCooldown: 0,},
        Price: 500,
        Range: 12,
        Limit: 5,
      },
    },
  },
  "Mercenary Base": {
    Default: {
      Defaults: {
        Detections: { Flying: false, Hidden: false },
        Attributes: {
          UnitQueues: 1,
          Rifleman: true,
          Grenadier: false,
          RiotGuard: false,
          FieldMedic: false,
          DamageBuff: 0,
          AirDrop: false,
          AirDropCost: 0,
          AirDropCooldown: 0,
        },
        Price: 2000,
        Cooldown: 0,
        Limit: 3,
        Range: 6,
        Damage: 0,
      },
      Upgrades: [
        {
          Stats: {
            Range: 8,
            Extras: ["Unlocks Grenadier"],
            Attributes: {
              Grenadier: true,
            },
          },
          Image: 17196819847,
          Title: "Explosive Experts",
          Cost: 1000,
        },
        {
          Stats: {
            Extras: ["Unit Queues: 1 > 2"],
            Attributes: {
              UnitQueues: 2,
            },
          },
          Image: 17196820389,
          Title: "Upgraded Barracks",
          Cost: 2000,
        },
        {
          Stats: {
            Extras: ["Upgraded Units", "10% Damage Buff"],
            Attributes: {
              DamageBuff: 10,
            },
            Range: 10,
          },
          Image: 17196819964,
          Title: "Improved Training",
          Cost: 7000,
        },
        {
          Stats: {
            Extras: ["Unlocks Riot Guards", "Unit Queues: 2 > 3"],
            Attributes: {
              UnitQueues: 3,
              RiotGuard: true,
            },
          },
          Image: 13019520315,
          Title: "Riot Control",
          Cost: 10000,
        },
        {
          Stats: {
            Extras: ["Unlocks Field Medic"],
            Attributes: {
              AirDrop: true,
              AirDropCost: 2500,
              AirDropCooldown: 75,
              FieldMedic: true,
            },
          },
          Image: 17196820108,
          Title: "Air Transport",
          Cost: 15000,
        },
        {
          Stats: {
            Extras: ["Upgraded Units", "20% Damage Buff"],
            Attributes: {
              DamageBuff: 20,
            },
          },
          Image: 17196820275,
          Title: "Enhanced Equipment",
          Cost: 35000,
        },
      ],
    },
  },
  Militant: {
    Default: {
      Upgrades: [
        {
          Image: 5523212631,
          Stats: {
            Detections: { Flying: true, Hidden: true },
            Cooldown: 0.18,
            Range: 16,
          },
          Title: "Radio Comms",
          Cost: 200,
        },
        {
          Image: 5523215135,
          Stats: {
            Damage: 2,
          },
          Title: "Bigger Rifle",
          Cost: 900,
        },
        {
          Image: 5523216332,
          Stats: {
            Cooldown: 0.15,
            Range: 18,
            Damage: 4,
          },
          Title: "Upskill",
          Cost: 2750,
        },
        {
          Image: 5523217773,
          Stats: {
            Range: 21,
            Damage: 12,
          },
          Title: "Stealth Mercenary",
          Cost: 9000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Price: 700,
        Range: 13,
        Cooldown: 0.2,
        Damage: 1,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 5523212631,
          Stats: {
            Detections: { Flying: true, Hidden: true },
            Cooldown: 0.15,
            Range: 17,
          },
          Title: "Radio Comms",
          Cost: 600,
        },
        {
          Image: 5523215135,
          Stats: {
            Cooldown: 0.1,
            Damage: 3,
          },
          Title: "Bigger Rifle",
          Cost: 2600,
        },
        {
          Image: 5523216332,
          Stats: {
            Range: 20,
            Damage: 6,
          },
          Title: "Upskill",
          Cost: 5000,
        },
        {
          Image: 5523217773,
          Stats: {
            Damage: 12,
          },
          Title: "Stealth Mercenary",
          Cost: 10000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Price: 1600,
        Range: 15,
        Cooldown: 0.2,
        Damage: 2,
      },
    },
  },
  "Military Base": {
    Default: {
      Upgrades: [
        {
          Image: 3877874591,
          Stats: {
            Extras: [],
            Attributes: { SpawnTime: 30 },
          },
          Title: "Mechanics",
          Cost: 200,
        },
        {
          Image: 3877875003,
          Stats: {
            Extras: ["Health: 50 > 80"],
            Attributes: { UnitToSend: "Humvee 2" },
          },
          Title: "Barbed Wire",
          Cost: 400,
        },
        {
          Image: 3877873543,
          Stats: {
            Extras: ["Mounted gunner", "Health: 80 > 90"],
            Attributes: { UnitToSend: "Humvee 3" },
          },
          Title: "Mounted Gunner",
          Cost: 1750,
        },
        {
          Image: 3444568329,
          Stats: {
            Extras: [
              "Health: 90 > 500",
              "Explosive Damage: 50",
              "Airstrike ability",
              "Airstrike damage: 450",
            ],
            Attributes: { UnitToSend: "Tank", AirstrikeDamage: 75, AirstrikeBombs: 6, AirstrikeRadius: 8, AirstrikeCooldown: 45, AirstrikeCost: 250},
          },
          Title: "Tank",
          Cost: 7500,
        },
        {
          Image: 3444568580,
          Stats: {
            Extras: [
              "Health: 500 > 1500",
              "Explosive damage: 50 > 80",
              "Airstrike damage: 450 > 750",
              "Airstrike explosion range: 8 > 12",
            ],
            Attributes: {
              UnitToSend: "Railgun Tank",
              AirstrikeDamage: 125,
              AirstrikeRadius: 12,
            },
          },
          Title: "Railgun Tank",
          Cost: 25000,
        },
      ],
      Defaults: {
        Attributes: { 
          SpawnTime: 45, 
          UnitToSend: "Humvee",
          AirstrikeDamage: 0, 
          AirstrikeBombs: 0, 
          AirstrikeRadius: 0, 
          AirstrikeCooldown: 0, 
          AirstrikeCost: 0
        },
        Price: 400,
        Limit: 5,
        Damage: 0,
        Cooldown: 0,
        Range: 0,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 3877874591,
          Stats: {
            Extras: [],
            Attributes: { SpawnTime: 25 },
          },
          Title: "Mechanics",
          Cost: 200,
        },
        {
          Image: 3877875003,
          Stats: {
            Extras: ["Health: 50 > 80"],
            Attributes: { UnitToSend: "Humvee 2 (PVP)" },
          },
          Title: "Barbed Wire",
          Cost: 400,
        },
        {
          Image: 3877873543,
          Stats: {
            Extras: ["Mounted gunner", "Health: 80 > 90"],
            Attributes: { UnitToSend: "Humvee 3 (PVP)" },
          },
          Title: "Mounted Gunner",
          Cost: 1750,
        },
        {
          Image: 3444568329,
          Stats: {
            Extras: [
              "Health: 90 > 500",
              "Explosive Damage: 50",
              "Airstrike ability",
              "Airstrike damage: 450",
            ],
            Attributes: { UnitToSend: "Tank (PVP)", AirstrikeDamage: 75, AirstrikeBombs: 6, AirstrikeRadius: 8, AirstrikeCooldown: 45, AirstrikeCost: 250},
          },
          Title: "Tank",
          Cost: 7500,
        },
        {
          Image: 3444568580,
          Stats: {
            Extras: [
              "Health: 500 > 1500",
              "Explosive damage: 50 > 80",
              "Airstrike damage: 450 > 750",
              "Airstrike explosion range: 8 > 12",
            ],
            Attributes: {
              UnitToSend: "Railgun Tank (PVP)",
              AirstrikeDamage: 125,
              AirstrikeRadius: 12,
            },
          },
          Title: "Railgun Tank",
          Cost: 25000,
        },
      ],
      Defaults: {
        Attributes: { 
          SpawnTime: 40, 
          UnitToSend: "Humvee (PVP)",
          AirstrikeDamage: 0, 
          AirstrikeBombs: 0, 
          AirstrikeRadius: 0, 
          AirstrikeCooldown: 0, 
          AirstrikeCost: 0
        },
        Price: 400,
        Limit: 5,
        Damage: 0,
        Cooldown: 0,
        Range: 0,
      },
    },
  },
  Minigunner: {
    Default: {
      Upgrades: [
        {
          Image: 15184753790,
          Stats: {
            Extras: ["Rev Time: 1.4 > 1.2"],
            Attributes: { RevTime: 1.2 },
            Cooldown: 0.12,
          },
          Title: "Improved Handling",
          Cost: 400,
        },
        {
          Image: 15184753514,
          Stats: {
            Range: 18,
            Damage: 3,
            Detections: { Hidden: true},
          },
          Title: "Specialized Tech",
          Cost: 1500,
        },
        {
          Image: 15184753289,
          Stats: {
            Extras: ["Rev Time: 1.2 > 1"],
            Attributes: { RevTime: 1 },
            Cooldown: 0.1,
            Damage: 7,
          },
          Title: "Geared Up",
          Cost: 7000,
        },
        {
          Image: 15184752970,
          Stats: {
            Cooldown: 0.1,
            Range: 20,
            Damage: 17,
          },
          Title: "Death Machine",
          Cost: 17500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { RevTime: 1.4 },
        Price: 1850,
        Range: 15,
        Cooldown: 0.15,
        Damage: 2,
      },
    },
    Golden: {
      Upgrades: [
        {
          Image: 15184753790,
          Stats: {
            Extras: ["Rev Time: 1.4 > 1.2"],
            Attributes: { RevTime: 1.2 },
            Damage: 4,
          },
          Title: "Improved Handling",
          Cost: 900,
        },
        {
          Image: 15184753514,
          Stats: {
            Detections: {
              Hidden: true,
            },
            Range: 18,
            Damage: 5,
          },
          Title: "Thermal Vision",
          Cost: 2000,
        },
        {
          Image: 15184753289,
          Stats: {
            Attributes: { RevTime: 1 },
            Extras: ["Rev Time: 1.2 > 1"],
            Cooldown: 0.1,
            Damage: 10,
          },
          Title: "High-Tech Armory",
          Cost: 8500,
        },
        {
          Image: 15184752970,
          Stats: {
            Extras: [
              "Fires 24K cartridges at 10,000 RPM",
              "Really cool armor!"
            ],
            Range: 20,
            Damage: 28,
          },
          Title: "24 Karat Gatling Gun",
          Cost: 30000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { RevTime: 1.4 },
        Price: 3000,
        Range: 15,
        Cooldown: 0.12,
        Damage: 3,
        Limit: 12,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 15184753790,
          Stats: {
            Extras: ["Rev Time: 1.4 > 1.2"],
            Attributes: { RevTime: 1.2 },
            Cooldown: 0.17,
            Range: 17,
            Damage: 4,
          },
          Title: "Improved Handling",
          Cost: 850,
        },
        {
          Image: 15184753514,
          Stats: {
            Range: 18.5,
            Damage: 6,
            Detections: { Hidden: true},
          },
          Title: "Specialized Tech",
          Cost: 1550,
        },
        {
          Image: 15184753289,
          Stats: {
            Extras: ["Rev Time: 1.2 > 1"],
            Attributes: { RevTime: 1 },
            Cooldown: 0.15,
            Damage: 15,
            Range: 19,
          },
          Title: "Geared Up",
          Cost: 8500,
        },
        {
          Image: 15184752970,
          Stats: {
            Cooldown: 0.1,
            Range: 20,
            Damage: 24,
          },
          Title: "Death Machine",
          Cost: 18750,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { RevTime: 1.4 },
        Price: 2550,
        Limit: 12,
        Range: 16,
        Cooldown: 0.18,
        Damage: 3,
      },
    },
  },
  Mortar: {
    Default: {
      Upgrades: [
        {
          Stats: {
            Cooldown: 3,
          },
          Image: 4538447265,
          Title: "Improved Handling",
          Cost: 325,
        },
        {
          Stats: {
            Attributes: {
              ExplosionRadius: 7.5,
            },
            Range: 24,
            Extras: ["Explosion Radius: 6 > 7.5"],
            Damage: 24,
          },
          Image: 4538447347,
          Title: "Upgraded Armaments",
          Cost: 1400,
        },
        {
          Stats: {
            Attributes: {
              ExplosionRadius: 8.5,
            },
            Range: 27,
            Extras: ["Explosion Radius: 7.5 > 8.5"],
            Damage: 55,
          },
          Image: 4538447424,
          Title: "Bigger Cannon",
          Cost: 3250,
        },
        {
          Stats: {
            Attributes: {
              CanCluster: true,
              ClusterRadius: 5,
              ClusterDamageMult: 0.4,
              ClusterCount: 3,
              ClusterDamage: 40,
            },
            Extras: ["Cluster Bombs (40 Damage)"],
            Damage: 100,
          },
          Image: 4538447493,
          Title: "Loaded Warhead",
          Cost: 12000,
        },
        {
          Stats: {
            Attributes: {
              CanCluster: true,
              ClusterCount: 6,
              ClusterDamage: 50,
              ExplosionRadius: 9,
            },
            Range: 30,
            Extras: [
              "Explosion Radius: 8.5 > 9",
              "Stronger Cluster Bombs (50 Damage)",
              "Mushroom Cloud",
            ],
            Damage: 150,
          },
          Image: 4538447579,
          Title: "City Buster",
          Cost: 25000,
        },
      ],
      Defaults: {
        Range: 20,
        Attributes: {
          CanCluster: false,
          ClusterDamageMult: 0,
          ClusterRadius: 0,
          ExplosionRadius: 6,
          ClusterCount: 0,
          ClusterDamage: 0,
        },
        Limit: 5,
        Price: 900,
        Detections: { Flying: true, Hidden: false, Lead: true },
        Cooldown: 4,
        Damage: 12,
      },
    },
    PVP: {
      Upgrades: [
        {
          Stats: {
            Cooldown: 3.25,
            Damage: 15,
            Range: 22,
          },
          Image: 4538447265,
          Title: "Improved Handling",
          Cost: 300,
        },
        {
          Stats: {
            Attributes: {
              ExplosionRadius: 7,
            },
            Range: 25,
            Extras: ["Explosion Radius: 6 > 7.5"],
            Damage: 25,
          },
          Image: 4538447347,
          Title: "Upgraded Armaments",
          Cost: 1400,
        },
        {
          Stats: {
            Attributes: {
              ExplosionRadius: 8,
            },
            Range: 30,
            Extras: ["Explosion Radius: 7.5 > 8.5"],
            Damage: 50,
            Cooldown: 3,
          },
          Image: 4538447424,
          Title: "Bigger Cannon",
          Cost: 3000,
        },
        {
          Stats: {
            Attributes: {
              CanCluster: true,
              ClusterRadius: 5,
              ClusterDamageMult: 0.4,
              ClusterCount: 3,
              ClusterDamage: 40,
            },
            Extras: ["Cluster Bombs (40 Damage)"],
            Damage: 100,
            Range: 32,
          },
          Image: 4538447493,
          Title: "Loaded Warhead",
          Cost: 10000,
        },
        {
          Stats: {
            Attributes: {
              CanCluster: true,
              ClusterCount: 6,
              ClusterDamage: 50,
              ExplosionRadius: 8.5,
            },
            Range: 35,
            Extras: [
              "Explosion Radius: 8.5 > 9",
              "Stronger Cluster Bombs (50 Damage)",
              "Mushroom Cloud",
            ],
            Damage: 150,
          },
          Image: 4538447579,
          Title: "City Buster",
          Cost: 20000,
        },
      ],
      Defaults: {
        Range: 20,
        Attributes: {
          CanCluster: false,
          ClusterDamageMult: 0,
          ClusterRadius: 0,
          ExplosionRadius: 5.5,
          ClusterCount: 0,
          ClusterDamage: 0,
        },
        Limit: 5,
        Price: 1000,
        Detections: { Flying: true, Hidden: false, Lead: true },
        Cooldown: 4,
        Damage: 12,
      },
    },
  },
  Necromancer: {
    Default: {
      Upgrades: [
        {
          Stats: {
            Extras: ["Soul Meter: 50 > 60", "Max Hits: 1 > 2", "Max Graves: 2 > 4"],
            Attributes: { MaxGraves: 4, MaxHits: 2, SoulMeter: 60, BuildTime: 1 },
            Damage: 12,
            Cooldown: 1.2
          },
          Image: 15332519996,
          Title: "Spirit Tuning",
          Cost: 1150,
        },
        {
          Stats: {
            Extras: [
              "Soul Meter: 60 > 96",
              "Gravestone Spawn Count: 2 > 3",
              "Max Graves: 4 > 6",
              "Spawns Sword Skeletons",
            ],
            Attributes: { SpawnCount: 3, MaxGraves: 6, SoulMeter: 96},
            Range: 24,
            Detections: { Hidden: true },
          },
          Image: 15332520691,
          Title: "Soul Forge",
          Cost: 3950,
        },
        {
          Stats: {
            Extras: [
              "Soul Meter: 96 > 450",
              "Max Graves: 6 > 7",
              "Unlocks lv. 2 gravestone",
              "Spawns Giant Skeletons",
              "Spawns Skeleton Knights",
            ],
            Attributes: {
              MaxGraveLevel: 2,
              SoulMeter: 450,
              BuildTime: 0.8,
            },
            Range: 26,
            Damage: 30,
            Cooldown: 0.8,
          },
          Image: 15332520335,
          Title: "Skull Centrifuge",
          Cost: 11320,
        },
        {
          Stats: {
            Attributes: {
              MaxGraveLevel: 3,
              MaxHits: 3,
              MaxGraves: 9,
              SoulMeter: 1440,
              ProjectileSpeed: 0,
              Beams: true,
              GraveExplosions: true,
              ExplosionDamage: 500,
              ExplosionRadius: 4,
            },
            Cooldown: 0.4,
            Range: 32,
            Extras: [
              "Soul Meter: 450 > 1440", 
              "Max Hits: 2 > 3",
              "Projectiles replaced with hitscan beam",
              "Beam can stack on enemies if not enough are in range",
              "Unlocks lv. 3 gravestone",
              "Spawns Executioner Skeletons",
              "Spawns Hallow Guards",
              "Gravestone Explosions",
            ],
            Damage: 20,
          },
          Image: 15332519505,
          Title: "Apostle of Hades",
          Cost: 44000,
        },
      ],
      Defaults: {
        Range: 21,
        Detections: { Flying: true, Hidden: false, Lead: false },
        Limit: 3,
        Price: 1650,
        Attributes: {
          MaxGraves: 2,
          SpawnCount: 2,
          MaxHits: 1,
          SummonDelay: 0.4,
          BuildTime: 1.5,
          Buildzone: 6.5,
          BuildDelay: 0.4,
          AimTime: 0.4,
          SummonDebounce: 0.1,
          Beams: false,
          ProjectileSpeed: 50,
          SoulMeter: 50,
          MaxGraveLevel: 1,
          GraveExplosions: false,
          ExplosionDamage: 0,
          ExplosionRadius: 0,
        },
        Cooldown: 1.5,
        Damage: 10,
      },
    },
      PVP: {
      Upgrades: [
        {
          Stats: {
            Extras: ["Soul Meter: 50 > 60", "Max Hits: 1 > 2", "Max Graves: 2 > 4"],
            Attributes: { MaxGraves: 4, MaxHits: 2, SoulMeter: 60 },
            Damage: 12,
            Cooldown: 1.2
          },
          Image: 15332519996,
          Title: "Spirit Tuning",
          Cost: 1000,
        },
        {
          Stats: {
            Extras: [
              "Soul Meter: 60 > 96",
              "Gravestone Spawn Count: 2 > 3",
              "Max Graves: 4 > 6",
              "Spawns Sword Skeletons",
            ],
            Attributes: { SpawnCount: 3, MaxGraves: 6, SoulMeter: 96},
            Range: 24,
            Detections: { Hidden: true },
          },
          Image: 15332520691,
          Title: "Soul Forge",
          Cost: 3500,
        },
        {
          Stats: {
            Extras: [
              "Soul Meter: 96 > 450",
              "Max Graves: 6 > 7",
              "Unlocks lv. 2 gravestone",
              "Spawns Giant Skeletons",
              "Spawns Skeleton Knights",
            ],
            Attributes: {
              MaxGraveLevel: 2,
              SoulMeter: 450,
            },
            Range: 26,
            Damage: 30,
            Cooldown: 0.8,
          },
          Image: 15332520335,
          Title: "Skull Centrifuge",
          Cost: 10000,
        },
        {
          Stats: {
            Attributes: {
              MaxGraveLevel: 3,
              MaxHits: 3,
              MaxGraves: 9,
              SoulMeter: 1440,
              ProjectileSpeed: 0,
              Beams: true,
              GraveExplosions: true,
              ExplosionDamage: 500,
              ExplosionRadius: 4,
            },
            Cooldown: 0.4,
            Range: 32,
            Extras: [
              "Soul Meter: 450 > 1440", 
              "Max Hits: 2 > 3",
              "Projectiles replaced with hitscan beam",
              "Beam can stack on enemies if not enough are in range",
              "Unlocks lv. 3 gravestone",
              "Spawns Executioner Skeletons",
              "Spawns Hallow Guards",
              "Gravestone Explosions",
            ],
            Damage: 20,
          },
          Image: 15332519505,
          Title: "Apostle of Hades",
          Cost: 40000,
        },
      ],
      Defaults: {
        Range: 21,
        Detections: { Flying: true, Hidden: false, Lead: false },
        Limit: 3,
        Price: 1500,
        Attributes: {
          MaxGraves: 2,
          SpawnCount: 2,
          MaxHits: 1,
          SummonDelay: 0.4,
          BuildTime: 0.8,
          Buildzone: 6.5,
          BuildDelay: 0.4,
          AimTime: 0.4,
          SummonDebounce: 0.1,
          Beams: false,
          ProjectileSpeed: 50,
          SoulMeter: 50,
          MaxGraveLevel: 1,
          GraveExplosions: false,
          ExplosionDamage: 0,
          ExplosionRadius: 0,
        },
        Cooldown: 1.5,
        Damage: 10,
      },
    },
  },
  Paintballer: {
    Default: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Detections: { Hidden: true },
            Range: 8,
            Damage: 3,
          },
          Title: "Paintball Gear",
          Cost: 200,
        },
        {
          Image: 3319083300,
          Stats: {
            Extras: ["Explosion Radius = 3.5"],
            Attributes: { ExplosionRadius: 3.5 },
            Damage: 6,
          },
          Title: "Shoulder Pads",
          Cost: 675,
        },
        {
          Image: 3280082028,
          Stats: {
            Cooldown: 0.9,
          },
          Title: "Double Barrel Gun",
          Cost: 1000,
        },
        {
          Image: 3319084508,
          Stats: {
            Extras: ["Explosion Radius = 4"],
            Attributes: { ExplosionRadius: 4 },
            Cooldown: 0.75,
            Range: 9,
            Damage: 10,
          },
          Title: "Competitive Gear",
          Cost: 2250,
        },
        {
          Image: 3319085582,
          Stats: {
            Extras: ["Explosion Radius = 4.5"],
            Attributes: { ExplosionRadius: 4.5 },
            Cooldown: 0.6,
            Range: 10,
            Damage: 15,
          },
          Title: "Paintball Champion",
          Cost: 4000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { ExplosionRadius: 3, MaxHits: 5 },
        Price: 400,
        Range: 7,
        Cooldown: 1.6,
        Damage: 2,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Detections: { Hidden: true },
            Range: 9.5,
            Damage: 3,
          },
          Title: "Paintball Gear",
          Cost: 125,
        },
        {
          Image: 3319083300,
          Stats: {
            Extras: ["Explosion Radius = 3.5"],
            Attributes: { ExplosionRadius: 3.5 },
            Damage: 6,
            Cooldown: 1.3,
          },
          Title: "Shoulder Pads",
          Cost: 500,
        },
        {
          Image: 3280082028,
          Stats: {
            Cooldown: 0.9,
            Damage: 8,
          },
          Title: "Double Barrel Gun",
          Cost: 800,
        },
        {
          Image: 3319084508,
          Stats: {
            Extras: ["Explosion Radius = 4"],
            Attributes: { ExplosionRadius: 4 },
            Cooldown: 0.75,
            Range: 11,
            Damage: 12,
          },
          Title: "Competitive Gear",
          Cost: 1500,
        },
        {
          Image: 3319085582,
          Stats: {
            Extras: ["Explosion Radius = 4.5"],
            Attributes: { ExplosionRadius: 4.5 },
            Cooldown: 0.6,
            Range: 13,
            Damage: 18,
          },
          Title: "Paintball Champion",
          Cost: 3000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { ExplosionRadius: 3, MaxHits: 5 },
        Price: 200,
        Range: 9,
        Cooldown: 1.6,
        Damage: 2,
      },
    },
  },
  Pursuit: {
    "Top Path": {
      Defaults: {
        Limit: 5,
        Detections: { Flying: true, Hidden: false, Lead: false },
        Range: 7,
        Price: 3000,
        Attributes: {
          PatrolCooldown: 20,
          Missiles: false,
          Speed: 30,
          ReloadTime: 4,
          PatrolRange: 14,
          Ammo: 35,
          MissileSpeed: 0,
          RevTime: 0,
          BurstTime: 0,
          MissileCooldown: 0,
        },
        Cooldown: 0.25,
        Damage: 6,
      },
      Upgrades: [
        {
          Image: 117186100008439,
          Stats: {
            Extras: [],
            Attributes: {
              Speed: 16,
            },
            Detections: { Lead: true },
            Damage: 8,
            Range: 8,
          },
          Title: ".50 Caliber",
          Cost: 1200,
        },
        {
          Image: 117186100008439,
          Stats: {
            Attributes: {
              Speed: 30,
              PatrolRange: 16,
            },
            Range: 9.5,
            Damage: 10,
          },
          Title: "Enhanced Radar",
          Cost: 1850,
        },
        {
          Image: 98101516586169,
          Stats: {
            Attributes: {
              MissileCooldown: 7,
              MissileCount: 2,
              Missiles: true,
              BurstTime: 0.5,
              ExplosionRadius: 3,
              ExplosionDamage: 35,
              MissileSpeed: 20,
              Ammo: 75,
              ReloadTime: 3.5,
            },
            Cooldown: 0.2,
            Range: 10.5,
          },
          Title: "Air to Ground Missiles",
          Cost: 5000,
        },
        {
          Image: 110652411715254,
          Stats: {
            Attributes: {
              MissileCooldown: 6,
              Ammo: 150,
              ReloadTime: 3,
              PatrolRange: 18.5,
              RevTime: 1.5,
              MissileCount: 4,
            },
            Cooldown: 0.1,
            Range: 11,
            Damage: 12, 
          },
          Title: "Tri-Barrel Minigun",
          Cost: 16000,      
        },
        {
          Image: 110652411715254,
          Stats: {
            Attributes: {
              BurstTime: 0.25,
              ExplosionRadius: 4,
              PatrolRange: 21,
              Ammo: 200,
              ReloadTime: 2.5,
            },
            Cooldown: 0.085,
            Range: 12,
            Damage: 26,
          },
          Title: "Sky Shredder",
          Cost: 42500,
        },
      ],
    },
    "Bottom Path": {
      Defaults: {
        Limit: 5,
        Detections: { Flying: true, Hidden: false, Lead: false },
        Range: 7,
        Price: 3000,
        Attributes: {
          PatrolCooldown: 20,
          Missiles: false,
          Speed: 30,
          ReloadTime: 4,
          PatrolRange: 14,
          Ammo: 35,
          MissileSpeed: 0,
          MissileCooldown: 0,
        },
        Cooldown: 0.25,
        Damage: 6,
      },
      Upgrades: [
        {
          Image: 117186100008439,
          Stats: {
            Extras: [],
            Attributes: {
              Speed: 16,
            },
            Detections: { Lead: true },
            Cooldown: 0.25,
            Range: 8,
            Damage: 8,
          },
          Title: ".50 Caliber",
          Cost: 1200,
        },
        {
          Image: 117186100008439,
          Stats: {
            Attributes: {
              Speed: 30,
              PatrolRange: 16,
            },
            Detections: { Flying: true, Hidden: false, Lead: true },
            Cooldown: 0.25,
            Range: 9.5,
            Damage: 10,
          },
          Title: "Enhanced Radar",
          Cost: 1850,
        },
        {
          Image: 98101516586169,
          Stats: {
            Attributes: {
              MissileCooldown: 7,
              MissileCount: 2,
              Missiles: true,
              BurstTime: 0.5,
              ExplosionRadius: 3,
              ExplosionDamage: 35,
              MissileSpeed: 20,
              Ammo: 75,
              ReloadTime: 3.5,
            },
            Cooldown: 0.2,
            Range: 10.5,
            Damage: 10,
          },
          Title: "Air to Ground Missiles",
          Cost: 5000,
        },
        {
          Image: 138033956206562,
          Stats: {
            Attributes: {
              MissileCooldown: 3,
              ReloadTime: 3.5,
              PatrolRange: 17.5,
              MissileCount: 6,
              ExplosionRadius: 6,
              ExplosionDamage: 25,
              BurstTime: 0.25,
            },
            Detections: { Hidden: true },
            Range: 11,
            Damage: 10,
          },
          Cost: 10000,
          Title: "Upgraded Payload",
      },
      {
        Image: 138033956206562,
        Stats: {
          Attributes: {
            ReloadTime: 2.25,
            PatrolRange: 19.5,
            MissileCount: 8,
            ExplosionDamage: 60,
            BurstTime: 0.15,
          },
          Range: 12,
          Damage: 12,
        },
        Title: "Demolition Gunship",
        Cost: 28500,
      },
     ],
    },
    "Top Path (PVP)": {
      Defaults: {
        Limit: 5,
        Detections: { Flying: true, Hidden: false, Lead: false },
        Range: 7,
        Price: 2500,
        Attributes: {
          PatrolCooldown: 20,
          Missiles: false,
          Speed: 30,
          ReloadTime: 4,
          PatrolRange: 14,
          Ammo: 35,
          MissileSpeed: 0,
          RevTime: 0,
          BurstTime: 0,
          MissileCooldown: 0,
        },
        Cooldown: 0.25,
        Damage: 6,
      },
      Upgrades: [
        {
          Image: 117186100008439,
          Stats: {
            Extras: [],
            Attributes: {
              Speed: 16,
            },
            Detections: { Lead: true },
            Damage: 8,
            Range: 8,
          },
          Title: ".50 Caliber",
          Cost: 750,
        },
        {
          Image: 117186100008439,
          Stats: {
            Attributes: {
              Speed: 30,
              PatrolRange: 16,
            },
            Range: 9.5,
            Damage: 10,
          },
          Title: "Enhanced Radar",
          Cost: 1500,
        },
        {
          Image: 98101516586169,
          Stats: {
            Attributes: {
              MissileCooldown: 7,
              MissileCount: 2,
              Missiles: true,
              BurstTime: 0.5,
              ExplosionRadius: 3,
              ExplosionDamage: 35,
              MissileSpeed: 20,
              Ammo: 75,
              ReloadTime: 3.5,
            },
            Cooldown: 0.2,
            Range: 10.5,
          },
          Title: "Air to Ground Missiles",
          Cost: 3500,
        },
        {
          Image: 110652411715254,
          Stats: {
            Attributes: {
              MissileCooldown: 6,
              Ammo: 150,
              ReloadTime: 3,
              PatrolRange: 18.5,
              RevTime: 1.5,
              MissileCount: 4,
            },
            Cooldown: 0.1,
            Range: 11,
            Damage: 12, 
          },
          Title: "Tri-Barrel Minigun",
          Cost: 12500,      
        },
        {
          Image: 110652411715254,
          Stats: {
            Attributes: {
              BurstTime: 0.25,
              ExplosionRadius: 4,
              PatrolRange: 21,
              Ammo: 200,
              ReloadTime: 2.5,
            },
            Cooldown: 0.085,
            Range: 12,
            Damage: 26,
          },
          Title: "Sky Shredder",
          Cost: 30000,
        },
      ],
    },
    "Bottom Path (PVP)": {
      Defaults: {
        Limit: 5,
        Detections: { Flying: true, Hidden: false, Lead: false },
        Range: 7,
        Price: 2500,
        Attributes: {
          PatrolCooldown: 20,
          Missiles: false,
          Speed: 30,
          ReloadTime: 4,
          PatrolRange: 14,
          Ammo: 35,
          MissileSpeed: 0,
          MissileCooldown: 0,
        },
        Cooldown: 0.25,
        Damage: 6,
      },
      Upgrades: [
        {
          Image: 117186100008439,
          Stats: {
            Extras: [],
            Attributes: {
              Speed: 16,
            },
            Detections: { Lead: true },
            Cooldown: 0.25,
            Range: 8,
            Damage: 8,
          },
          Title: ".50 Caliber",
          Cost: 750,
        },
        {
          Image: 117186100008439,
          Stats: {
            Attributes: {
              Speed: 30,
              PatrolRange: 16,
            },
            Detections: { Flying: true, Hidden: false, Lead: true },
            Cooldown: 0.25,
            Range: 9.5,
            Damage: 10,
          },
          Title: "Enhanced Radar",
          Cost: 1500,
        },
        {
          Image: 98101516586169,
          Stats: {
            Attributes: {
              MissileCooldown: 7,
              MissileCount: 2,
              Missiles: true,
              BurstTime: 0.5,
              ExplosionRadius: 3,
              ExplosionDamage: 35,
              MissileSpeed: 20,
              Ammo: 75,
              ReloadTime: 3.5,
            },
            Cooldown: 0.2,
            Range: 10.5,
            Damage: 10,
          },
          Title: "Air to Ground Missiles",
          Cost: 3500,
        },
        {
          Image: 138033956206562,
          Stats: {
            Attributes: {
              MissileCooldown: 3,
              ReloadTime: 3.5,
              PatrolRange: 17.5,
              MissileCount: 6,
              ExplosionRadius: 6,
              ExplosionDamage: 25,
              BurstTime: 0.25,
            },
            Detections: { Hidden: true },
            Range: 11,
            Damage: 10,
          },
          Cost: 7500,
          Title: "Upgraded Payload",
      },
      {
        Image: 138033956206562,
        Stats: {
          Attributes: {
            ReloadTime: 2.25,
            PatrolRange: 19.5,
            MissileCount: 8,
            ExplosionDamage: 60,
            BurstTime: 0.15,
          },
          Range: 12,
          Damage: 12,
        },
        Title: "Demolition Gunship",
        Cost: 22500,
      },
     ],
    },
  },
  'PVP Sends': {
    'Basic Arena':
    {
      Defaults: {
        Price: 0,
        Range: 0,
        Cooldown: 0,
        Damage: 0,
        EnemyName: 'Normal',
        Health: 4,
        WaveUnlock: 2,
        SendCost: 45,
        EconomyBonus: 3,
        MinSendNumber: 3,
        MaxSendNumber: 5,
        SpawnTimer: 1.2,
      },
      Upgrades: [
        {
          Stats: {
            EnemyName: 'Speedy',
            Health: 6,
            WaveUnlock: 3,
            SendCost: 65,
            EconomyBonus: 4,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 1.2,
          },
        },
        {
          Stats: {
            EnemyName: 'Slow',
            Health: 20,
            WaveUnlock: 5,
            SendCost: 75,
            EconomyBonus: 5,
            MinSendNumber: 3,
            MaxSendNumber: 5,
            SpawnTimer: 1.2,
          },
        },
        {
          Stats: {
            EnemyName: 'Hidden',
            Health: 25,
            WaveUnlock: 8,
            SendCost: 100,
            EconomyBonus: 8,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 0.8,
          },
        },
        {
          Stats: {
            EnemyName: 'Breaker2',
            Health: 40,
            WaveUnlock: 10,
            SendCost: 120,
            EconomyBonus: 10,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 1.2,
          },
        },
        {
          Stats: {
            EnemyName: 'Normal Boss',
            Health: 200,
            WaveUnlock: 10,
            SendCost: 150,
            EconomyBonus: 12,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 2,
          },
        },
        {
          Stats: {
            EnemyName: 'Hazmat',
            Health: 150,
            WaveUnlock: 15,
            SendCost: 210,
            EconomyBonus: 15,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 1,
          },
        },
        {
          Stats: {
            EnemyName: 'Necromancer',
            Health: 500,
            WaveUnlock: 18,
            SendCost: 260,
            EconomyBonus: 0,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 1.5,
          },
        },
        {
          Stats: {
            EnemyName: 'Hidden Boss',
            Health: 750,
            WaveUnlock: 20,
            SendCost: 480,
            EconomyBonus: 0,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 3,
          },
        },
        {
          Stats: {
            EnemyName: 'Slow Boss',
            Health: 2800,
            WaveUnlock: 23,
            SendCost: 750,
            EconomyBonus: -10,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 3,
          },
        },
        {
          Stats: {
            EnemyName: 'Speedy Boss',
            Health: 4000,
            WaveUnlock: 26,
            SendCost: 3000,
            EconomyBonus: -25,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 4,
          },
        },
        {
          Stats: {
            EnemyName: 'Brute',
            Health: 10000,
            WaveUnlock: 30,
            SendCost: 6000,
            EconomyBonus: -50,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 5,
          },
        },
      ],
    },
    'Molten Arena':
    {
      Defaults: {
        Price: 0,
        Range: 0,
        Cooldown: 0,
        Damage: 0,
        EnemyName: 'Normal',
        Health: 6,
        WaveUnlock: 2,
        SendCost: 50,
        EconomyBonus: 4,
        MinSendNumber: 3,
        MaxSendNumber: 5,
        SpawnTimer: 1.2,
      },
      Upgrades: [
        {
          Stats: {
            EnemyName: 'Speedy',
            Health: 8,
            WaveUnlock: 3,
            SendCost: 65,
            EconomyBonus: 5,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 1.2,
          },
        },
        {
          Stats: {
            EnemyName: 'Slow',
            Health: 30,
            WaveUnlock: 5,
            SendCost: 90,
            EconomyBonus: 8,
            MinSendNumber: 3,
            MaxSendNumber: 5,
            SpawnTimer: 1.2,
          },
        },
        {
          Stats: {
            EnemyName: 'Hidden',
            Health: 30,
            WaveUnlock: 8,
            SendCost: 105,
            EconomyBonus: 10,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 0.8,
          },
        },
        {
          Stats: {
            EnemyName: 'Elite Abnormal',
            Health: 120,
            WaveUnlock: 10,
            SendCost: 200,
            EconomyBonus: 15,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 2,
          },
        },
        {
          Stats: {
            EnemyName: 'Molten',
            Health: 160,
            WaveUnlock: 12,
            SendCost: 210,
            EconomyBonus: 12,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 1.2,
          },
        },
        {
          Stats: {
            EnemyName: 'Molten Hazmat',
            Health: 300,
            WaveUnlock: 15,
            SendCost: 300,
            EconomyBonus: 20,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 1.4,
          },
        },
        {
          Stats: {
            EnemyName: 'Reaver',
            Health: 1000,
            WaveUnlock: 18,
            SendCost: 600,
            EconomyBonus: 0,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 1.75,
          },
        },
        {
          Stats: {
            EnemyName: 'Molten Necromancer',
            Health: 2000,
            WaveUnlock: 20,
            SendCost: 800,
            EconomyBonus: 0,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 3,
          },
        },
        {
          Stats: {
            EnemyName: 'Molten Golem',
            Health: 3000,
            WaveUnlock: 22,
            SendCost: 1000,
            EconomyBonus: -25,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 4,
          },
        },
        {
          Stats: {
            EnemyName: 'Failed Experiment',
            Health: 4000,
            WaveUnlock: 24,
            SendCost: 2000,
            EconomyBonus: -60,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 5,
          },
        },
        {
          Stats: {
            EnemyName: 'Molten Titan',
            Health: 6000,
            WaveUnlock: 26,
            SendCost: 4000,
            EconomyBonus: -150,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 7,
          },
        },
      ],
    },
    'Fallen Arena':
    {
      Defaults: {
        Price: 0,
        Range: 0,
        Cooldown: 0,
        Damage: 0,
        EnemyName: 'Abnormal',
        Health: 8,
        WaveUnlock: 2,
        SendCost: 50,
        EconomyBonus: 4,
        MinSendNumber: 3,
        MaxSendNumber: 5,
        SpawnTimer: 1.2,
      },
      Upgrades: [
        {
          Stats: {
            EnemyName: 'Quick',
            Health: 8,
            WaveUnlock: 3,
            SendCost: 65,
            EconomyBonus: 5,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 1,
          },
        },
        {
          Stats: {
            EnemyName: 'Heavy',
            Health: 40,
            WaveUnlock: 5,
            SendCost: 90,
            EconomyBonus: 8,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 1.6,
          },
        },
        {
          Stats: {
            EnemyName: 'Fallen Soul',
            Health: 60,
            WaveUnlock: 9,
            SendCost: 150,
            EconomyBonus: 10,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 1.5,
          },
        },
        {
          Stats: {
            EnemyName: 'Fallen Hazmat',
            Health: 150,
            WaveUnlock: 11,
            SendCost: 250,
            EconomyBonus: 16,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 1.4,
          },
        },
        {
          Stats: {
            EnemyName: 'Fallen',
            Health: 250,
            WaveUnlock: 14,
            SendCost: 350,
            EconomyBonus: 20,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 2,
          },
        },
        {
          Stats: {
            EnemyName: 'Fallen Necromancer',
            Health: 1350,
            WaveUnlock: 17,
            SendCost: 1650,
            EconomyBonus: 0,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 5,
          },
        },
        {
          Stats: {
            EnemyName: 'Possessed Armor',
            Health: 450,
            WaveUnlock: 18,
            SendCost: 1000,
            EconomyBonus: 20,
            MinSendNumber: 2,
            MaxSendNumber: 3,
            SpawnTimer: 3,
          },
        },
        {
          Stats: {
            EnemyName: 'Fallen Hero',
            Health: 2259,
            WaveUnlock: 20,
            SendCost: 1250,
            EconomyBonus: 5,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 3,
          },
        },
        {
          Stats: {
            EnemyName: 'Fallen Tank',
            Health: 3500,
            WaveUnlock: 23,
            SendCost: 1500,
            EconomyBonus: -10,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 5,
          },
        },
        {
          Stats: {
            EnemyName: 'Fallen Shield',
            Health: 8000,
            WaveUnlock: 26,
            SendCost: 5000,
            EconomyBonus: -40,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 7,
          },
        },
        {
          Stats: {
            EnemyName: 'Fallen Guardian',
            Health: 20000,
            WaveUnlock: 27,
            SendCost: 5000,
            EconomyBonus: -75,
            MinSendNumber: 1,
            MaxSendNumber: 1,
            SpawnTimer: 7.5,
          },
        },
      ],
    },
  },
  Pyromancer: {
    Default: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Extras: ["Faster Burn Tick", "Bigger Flames"],
            Attributes: {
              Width: 1.5,
              BurnTick: 0.75,
            },
            Range: 9,
          },
          Title: "Improved Handling",
          Cost: 350,
        },
        {
          Image: 3304823121,
          Stats: {
            Extras: ["Max Hits: 3 > 5", "Morn Burn Damage"],
            Attributes: {
              BurnDamage: 2,
              MaxHits: 5,
            },
            Detections: { Flying: false, Hidden: true, Lead: true },
            Damage: 2,
          },
          Title: "Fire Fighting",
          Cost: 950,
        },
        {
          Image: 3304823988,
          Stats: {
            Extras: ["More Burn Damage", "Longer Burn Time", "Faster Burn Tick", "Defense Melting"],
            Attributes: {
              BurnDamage: 3,
              DefenseMelt: 5,
              BurnTick: 0.5,
              BurnTime: 5,
            },
            Range: 10,
          },
          Title: "Fire Hazard",
          Cost: 1500,
        },
        {
          Image: 3304824958,
          Stats: {
            Extras: ["More Burn Damage", "Longer Burn Time", "Bigger Flames"],
            Attributes: {
              BurnDamage: 4,
              BurnTime: 7.5,
              Width: 1.75,
            },
            Damage: 3,
          },
          Title: "Napalm Thrower",
          Cost: 3800,
        },
        {
          Image: 3304825822,
          Stats: {
            Extras: [
              "Max Hits: 5 > 8",
              "More Burn Damage",
              "Longer Burn Time",
              "Bigger flames",
              "More Defense Melting",
            ],
            Attributes: {
              BurnDamage: 8,
              DefenseMelt: 10,
              BurnTime: 10,
              Width: 2.5,
              MaxHits: 8,
            },
            Range: 12,
            Damage: 6,
          },
          Title: "Pyromaniac",
          Cost: 9000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: {
          BurnDamage: 1,
          DefenseMelt: 0,
          MaxDefenseMelt: 50,
          TurningSpeed: 4,
          BurnTick: 1,
          BurnTime: 3,
          Width: 1.25,
          MaxHits: 3,
        },
        Price: 850,
        Range: 7,
        Cooldown: 0.25,
        Damage: 1,
      },
    },
    Golden: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Extras: ["Faster Burn Tick", "Bigger Flames"],
            Attributes: {
              BurnTick: 0.75,
              Width: 1.5,
            },
            Range: 10,
          },
          Title: "Better Handling",
          Cost: 350,
        },
        {
          Image: 3304823121,
          Stats: {
            Extras: ["Max Hits: 4 > 6", 'More Burn Damage'],
            Attributes: {
              BurnDamage: 2,
              MaxHits: 6,
            },
            Damage: 2,
          },
          Title: "Golden Flare",
          Cost: 750,
        },
        {
          Image: 3304823988,
          Stats: {
            Extras: ["More Burn Damage", "Faster Burn Tick", "Longer Burn Time", "Defense Melting"],
            Attributes: {
              BurnDamage: 3,
              DefenseMelt: 5,
              BurnTick: 0.5,
              BurnTime: 6,
            },
            Damage: 3,
          },
          Title: "Ring Of Fire",
          Cost: 1750,
        },
        {
          Image: 3304824958,
          Stats: {
            Extras: [
              "More Fire Damage",
              "Longer Burn Time",
              "Bigger Flames",
              "More Defense Melting",
            ],
            Attributes: {
              BurnDamage: 6,
              DefenseMelt: 10,
              BurnTime: 12,
              Width: 1.75,
            },
            Damage: 4,
          },
          Title: "Gilded Arsonist",
          Cost: 5750,
        },
        {
          Image: 3304825822,
          Stats: {
            Extras: ["Max Hits: 6 > 10", "More Burn Damage", "Longer Burn Time", "Bigger Flames"],
            Attributes: {
              BurnDamage: 8,
              BurnTime: 20,
              Width: 2.5,
              MaxHits: 10,
            },
            Range: 12,
            Damage: 8,
          },
          Title: "Kagutsuchi's Fury",
          Cost: 9500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: true, Lead: true },
        Attributes: {
          BurnDamage: 1,
          DefenseMelt: 0,
          MaxDefenseMelt: 50,
          TurningSpeed: 4,
          BurnTick: 1,
          BurnTime: 3,
          Width: 1.25,
          MaxHits: 4,
        },
        Price: 800,
        Range: 7.5,
        Cooldown: 0.25,
        Damage: 1,
      },
    },
  },
  Ranger: {
    Default: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Cooldown: 3.5,
          },
          Title: "Quicker Reload",
          Cost: 1500,
        },
        {
          Image: 3381734408,
          Stats: {
            Extras: [
              "Nearby towers get a 15% range buff at the start of waves for 20 seconds",
              "Buff Range: 12",
            ],
            Attributes: {
              RangeAssist: true,
              RangeBuff: 15,
              BuffRange: 12,
              BuffDuration: 20,
            },
            Damage: 140,
          },
          Title: "Intelligence Radio",
          Cost: 4500,
        },
        {
          Image: 3381735232,
          Stats: {
            Cooldown: 3.25,
            Damage: 300,
          },
          Title: "Trained Outlaw",
          Cost: 13500,
        },
        {
          Image: 3381735846,
          Stats: {
            Extras: [
              "Explosive Impact",
              "150 Damage (Stacks w/ base damage)",
            ],
            Attributes: {
              ExplosionDamage: 150,
            },
            Cooldown: 7,
            Damage: 1050,
          },
          Title: "Experimental Weapon of Destruction",
          Cost: 30000,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: true },
        Limit: 7,
        Price: 4500,
        Range: 50,
        Cooldown: 4.5,
        Damage: 80,
        Attributes: {
          ExplosionDamage: 0,
          RangeAssist: false,
          RangeBuff: 0,
          BuffRange: 0,
          BuffDuration: 0,
        },
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Cooldown: 2.5,
          },
          Title: "Quicker Reload",
          Cost: 650,
        },
        {
          Image: 3381734408,
          Stats: {
            Extras: [
              "Nearby towers get a 15% range buff at the start of waves for 20 seconds",
              "Buff Range: 12",
            ],
            Attributes: {
              RangeAssist: true,
              RangeBuff: 15,
              BuffRange: 12,
              BuffDuration: 120,
            },
            Damage: 75,
          },
          Title: "Intelligence Radio",
          Cost: 2400,
        },
        {
          Image: 3381735232,
          Stats: {
            Cooldown: 2,
            Damage: 150,
          },
          Title: "Trained Outlaw",
          Cost: 8500,
        },
        {
          Image: 3381735846,
          Stats: {
            Extras: [
              "Explosive Impact",
              "150 Damage (Stacks w/ base damage)",
            ],
            Attributes: {
              ExplosionDamage: 25,
            },
            Damage: 275,
          },
          Title: "Experimental Weapon of Destruction",
          Cost: 17000,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: true },
        Limit: 8,
        Price: 2000,
        Range: 50,
        Cooldown: 3,
        Damage: 40,
        Attributes: {
          ExplosionDamage: 0,
          RangeAssist: false,
          RangeBuff: 0,
          BuffRange: 0,
          BuffDuration: 0,
        },
      },
    },
  },
  Rocketeer: {
    Default: {
      Upgrades: [
        {
          Image: 84475876520565,
          Stats: {
            Extras: [],
            Cooldown: 3,
          },
          Title: "Faster Reloading",
          Cost: 250,
        },
        {
          Image: 76900038470572,
          Stats: {
            Extras: [],
            Detections: {Hidden: true},
            Range: 19,
            Damage: 50,
          },
          Title: "Heavier Payload",
          Cost: 1750,
        },
        {
          Image: 103303357353083,
          Stats: {
            Extras: ["Explosion Radius: 3 > 4"],
            Attributes: { ExplosionRadius: 4 },
            Damage: 135,
            Range: 22.5,
          },
          Title: "Explosive Risks",
          Cost: 6500,
        },
        {
          Image: 133610100963797,
          Stats: {
            Extras: ["Explosion Radius: 4 > 5", "Quad Targeting", "4 Missiles", "60° Spread Angle", "1 > 0.5 Accuracy"],
            Range: 24,
            Damage: 65,
            RocketCount: 4,
            Cooldown: 2.75,
            Attributes: { ExplosionRadius: 5, RocketCount: 4, Accuracy: 0.5, SpreadAngle: 60},       
          },
          Title: "Missile Maelstrom",
          Cost: 20000,
        },
      ],
      Defaults: {
        Attributes: { ExplosionRadius: 3, RocketCount: 1, SpreadAngle: 0, Accuracy: 1},
        Detections: { Flying: false, Hidden: false, Lead: true },
        Range: 17,
        Price: 1500,
        Limit: 8,
        Cooldown: 3.5,
        Damage: 25,
      },
    },
  },
  Scout: {
    Default: {
      Upgrades: [
        {
          Image: 3278746120,
          Stats: {
            Cooldown: 0.8,
          },
          Title: "Faster Reloading",
          Cost: 50,
        },
        {
          Image: 3278749117,
          Stats: {
            Detections: {
              Hidden: true,
            },
            Range: 14,
            Damage: 2,
          },
          Title: "Precise Aiming",
          Cost: 200,
        },
        {
          Image: 3278741672,
          Stats: {
            Cooldown: 0.7,
            Damage: 6,
          },
          Title: "Stronger Equipment",
          Cost: 950,
        },
        {
          Image: 3279537687,
          Stats: {
            Cooldown: 0.35,
            Range: 16,
            Damage: 8,
          },
          Title: "Akimbo Handguns",
          Cost: 2500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Price: 150,
        Range: 12,
        Cooldown: 1.1,
        Damage: 1,
      },
    },
    Golden: {
      Upgrades: [
        {
          Image: 3032133716,
          Stats: {
            Damage: 4,
          },
          Title: "Higher Caliber",
          Cost: 100,
        },
        {
          Image: 115730014,
          Stats: {
            Detections: {
              Hidden: true,
            },
            Cooldown: 0.75,
            Range: 16,
            Damage: 6,
          },
          Title: "Precise Aiming",
          Cost: 500,
        },
        {
          Image: 3278741672,
          Stats: {
            Detections: {
              Lead: true,
            },
            Cooldown: 0.6,
            Range: 18,
            Damage: 12,
          },
          Title: "Golden Deagle",
          Cost: 1500,
        },
        {
          Image: 3279537687,
          Stats: {
            Cooldown: 0.3,
            Damage: 16,
          },
          Title: "Double Tap",
          Cost: 4500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Price: 300,
        Range: 14,
        Cooldown: 1,
        Damage: 3,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 3278746120,
          Stats: {
            Damage: 4,
            Range: 15,
          },
          Title: "Faster Reloading",
          Cost: 100,
        },
        {
          Image: 3278749117,
          Stats: {
            Detections: {
              Hidden: true,
            },
            Range: 16,
            Cooldown: 0.75,
            Damage: 8,
          },
          Title: "Precise Aiming",
          Cost: 650,
        },
        {
          Image: 3278741672,
          Stats: {
            Cooldown: 0.5,
            Damage: 12,
            Range: 17,
          },
          Title: "Stronger Equipment",
          Cost: 1800,
        },
        {
          Image: 3279537687,
          Stats: {
            Cooldown: 0.3,
            Damage: 14,
          },
          Title: "Akimbo Handguns",
          Cost: 3250,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Price: 300,
        Range: 14,
        Cooldown: 0.9,
        Damage: 3,
      },
    },
  },
  Shotgunner: {
    Default: {
      Upgrades: [
        {
          Image: 5587697635,
          Stats: {
            Cooldown: 1.4,
          },
          Title: "Faster Reloading",
          Cost: 150,
        },
        {
          Image: 5587697884,
          Stats: {
            Extras: ["10 Shots", "Tighter Spread"],
            Attributes: { Spread: 40, ShotSize: 10 },
            Detections: { Hidden: true, Lead: true },
            Cooldown: 1.2,
            Range: 9,
            Damage: 2,
          },
          Title: "Shotgun Knowledge",
          Cost: 950,
        },
        {
          Image: 5587698104,
          Stats: {
            Cooldown: 1.1,
            Range: 9.5,
            Damage: 4,
          },
          Title: "O'Block Training",
          Cost: 2500,
        },
        {
          Image: 5587698246,
          Stats: {
            Extras: ["10 Pellets", "Tighter Spread"],
            Attributes: { Spread: 30, ShotSize: 12 },
            Cooldown: 0.95,
            Range: 11,
            Damage: 6,
          },
          Title: "Tactical Blowback",
          Cost: 6500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { Spread: 45, ShotSize: 8, Pierce: 2.5,},
        Price: 300,
        Range: 7.5,
        Cooldown: 2,
        Damage: 1,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 5587697635,
          Stats: {
            Cooldown: 1.5,
          },
          Title: "Faster Reloading",
          Cost: 150,
        },
        {
          Image: 5587697884,
          Stats: {
            Extras: ["10 Shots", "Tighter Spread"],
            Attributes: { Spread: 40, ShotSize: 10 },
            Detections: { Hidden: true, Lead: true },
            Range: 9,
            Damage: 2,
          },
          Title: "Shotgun Knowledge",
          Cost: 1050,
        },
        {
          Image: 5587698104,
          Stats: {
            Cooldown: 1.25,
            Range: 9.5,
            Damage: 4,
          },
          Title: "O'Block Training",
          Cost: 3000,
        },
        {
          Image: 5587698246,
          Stats: {
            Extras: ["10 Pellets", "Tighter Spread"],
            Attributes: { Spread: 30, ShotSize: 12 },
            Cooldown: 1,
            Range: 11,
            Damage: 8,
          },
          Title: "Tactical Blowback",
          Cost: 8500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { Spread: 45, ShotSize: 8, Pierce: 2.5,},
        Price: 400,
        Range: 7.5,
        Cooldown: 2,
        Damage: 1,
      },
    },
  },
  Slasher: {
    Default: {
      Upgrades: [
        {
          Image: 92740435796975,
          Stats: {
            Attributes: {
              CritMultiplier: 3,
            },
            Extras: ["Crit Multiplier: 2.5 > 3"],
            Detections: {
              Hidden: true,
            },
            Cooldown: 0.35,
            Damage: 6,
          },
          Title: "Sleight of Hands",
          Cost: 800,
        },
        {
          Image: 93224058728799,
          Stats: {
            Attributes: {
              Bleed: true,
              BaseBleedDamage: 2,
              BleedTick: 1,
              EV: 0.31,
              BleedStacks: 1,
              MaxStacks: 30,
              EnemyHP: 5000,
            },
            Extras: ["Bleed"],
            Cooldown: 0.7,
            Range: 5.5,
            Damage: 20,
          },
          Title: "Bloodlust",
          Cost: 3000,
        },
        {
          Image: 102669883500047,
          Stats: {
            Attributes: {
              CritMultiplier: 3.5,
            },
            Extras: ["Crit Multiplier: 3 > 3.5"],
            Cooldown: 0.6,
            Damage: 45,
          },
          Title: "Swords Dance",
          Cost: 6500,
        },
        {
          Image: 102686099141752,
          Stats: {
            Attributes: {
              CritMultiplier: 4,
              BleedStacks: 2,
            },
            Extras: ["Bleed Stacks: 1 > 2", "Crit Multiplier: 3.5 > 4"],
            Cooldown: 0.5,
            Range: 6,
            Damage: 60,
          },
          Title: "Serial Killer",
          Cost: 20000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          CritMultiplier: 2.5,
          CritSwing: 3,
          Bleed: false,
          BleedTick: 0,
          EnemyHP: 0,
          BaseBleedDamage: 0,
          EV: 0,
          BleedStacks: 0,
          MaxStacks: 0,
        },
        Price: 1250,
        Limit: 12,
        Range: 5,
        Cooldown: 0.4,
        Damage: 5,
      },
    },
  },
  Sledger: {
    Default: {
      Upgrades: [
        {
          Image: 127760357589893,
          Stats: {
            Extras: [],
            Attributes: {
              MaxHits: 4,
              ChillPercent: 25,
            },
            Damage: 12,
          },
          Title: "Heavier Swings",
          Cost: 400,
        },
        {
          Image: 129569296351035,
          Stats: {
            Extras: ["Max Hits: 2 > 3"],
            Attributes: {
              MaxHits: 5,
            },
            Range: 7,
            Damage: 25,
          },
          Title: "Better Sledge",
          Cost: 1650,
        },
        {
          Image: 90580826193030,
          Stats: {
            Extras: [
              "🧊Freeze enemies on max chills",
              "Slow Debuff: 30% > 50%",
            ],
            Attributes: {
              CanFreeze: true,
              ChillPercent: 30,
              MaxChill: 60,
            },
            Damage: 45,
          },
          Title: "Freezing Point",
          Cost: 3200,
        },
        {
          Image: 87639607914634,
          Stats: {
            Extras: ["Frozen enemies take x2 damage.", "Max Hits: 3 > 4"],
            Attributes: {
              FreezeBonus: true,
              FreezeBonusMult: 2,
              ChillPercent: 45,
              ChillLength: 5,
              MaxChill: 65,
            },
            Range: 7.5,
            Damage: 75,
          },
          Title: "Ice Breaker",
          Cost: 8250,
        },
        {
          Image: 92990655062231,
          Stats: {
            Extras: ["Max Hit: 4 > 5", "Longer Freeze Time"],
            Attributes: {
              MaxHits: 7,
              ChillPercent: 80,
              FreezeTime: 1.75,
              ChillLength: 6,
              MaxChill: 80,
              Aftershock: true,
              AftershockMult: 0.2,
            },
            Damage: 140,
          },
          Title: "Arctic Aftershocks",
          Cost: 16000,
        },
      ],
      Defaults: {
        Attributes: {
          CanFreeze: false,
          FreezeBonus: false,
          FreezeBonusMult: 1,
          MaxHits: 3,
          ChillPercent: 15,
          FreezeTime: 1.5,
          ChillLength: 4,
          MaxChill: 45,
          TickRate: 0.25,
          Aftershock: false,
        },
        Detections: { Flying: false, Hidden: false, Lead: true },
        Range: 6.5,
        Price: 950,
        Limit: 6,
        Cooldown: 1.2,
        Damage: 8,
      },
    },
  },

  Sniper: {
    Default: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Cooldown: 3.5,
            Damage: 6,
          },
          Title: "Faster Reloading",
          Cost: 150,
        },
        {
          Image: 3280367022,
          Stats: {
            Detections: { Hidden: true },
            Range: 32.5,
            Damage: 12,
          },
          Title: "Geared Up",
          Cost: 500,
        },
        {
          Image: 3280367963,
          Stats: {
            Detections: { Lead: true },
            Range: 35,
            Damage: 30,
          },
          Title: "Frontlines Sniping",
          Cost: 1500,
        },
        {
          Image: 3280368786,
          Stats: {
            Cooldown: 2,
            Range: 45,
            Damage: 40,
          },
          Title: "Spec Ops",
          Cost: 4000,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Price: 300,
        Range: 27.5,
        Cooldown: 4,
        Damage: 4,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 3280081327,
          Stats: {
            Cooldown: 1.3,
          },
          Title: "Faster Reloading",
          Cost: 350,
        },
        {
          Image: 3280367022,
          Stats: {
            Detections: { Hidden: true },
            Range: 22.5,
            Damage: 15,
          },
          Title: "Geared Up",
          Cost: 800,
        },
        {
          Image: 3280367963,
          Stats: {
            Detections: { Lead: true },
            Cooldown: 0.5,
            Range: 25,
          },
          Title: "Frontlines Sniping",
          Cost: 3250,
        },
        {
          Image: 3280368786,
          Stats: {
            Range: 30,
            Damage: 30,
          },
          Title: "Spec Ops",
          Cost: 5000,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Price: 500,
        Range: 20,
        Cooldown: 1.65,
        Damage: 6,
      },
    },
  },
  Snowballer: {
    Default: {
      Upgrades: [
        {
          Stats: {
           Damage: 5,
           Cooldown: 2,
           Attributes: {
            ChillPercent: 20,
            MaxChill: 40,
           },
           Range: 13,    
          },
          Cost: 100,
          Title: "Snow Day",
          Image: 15686418975,
        },
        {
          Stats: {
           Damage: 10,
           Range: 15,
           Attributes: {
            ChillPercent: 30,
            MaxChill: 60,
            ChillLength: 4,
           },
          },
          Cost: 450,
          Title: "Frigid Temperatures",
          Image: 15686418835,
        },
        {
          Stats: { 
           Attributes: {
            CanFreeze: true,
            FreezeTime: 2,
            ExplosionRadius: 4,
            MaxHits: 4,
           },
           Detections: {Flying: true},
           Cooldown: 1.75,
           Damage: 25,
           Range: 19,
          },
          Cost: 1850,
          Title: "Snowball Cannon",
          Image: 15686418748,
        },
      ],
      Defaults: {
        Price: 300,
        Damage: 4,
        Range: 11,
        Cooldown: 3,
        Detections: {Lead: true, Flying: false, Hidden: false},
        Attributes: {
          CanFreeze: false,
          ChillPercent: 15,
          MaxChill: 30,
          CanFreeze: false,
          FreezeTime: 0,
          ProjectileSpeed: 20,
          ExplosionRadius: 2,
          MaxHits: 1,
          ChillLength: 3,
          TickRate: 0.25,
        },
      },
    },
  },
  Soldier: {
    Default: {
      Upgrades: [
        {
          Image: 5523192002,
          Stats: {
            Range: 15,
          },
          Title: "Better Vision",
          Cost: 100,
        },
        {
          Image: 5523193619,
          Stats: {
            Attributes: { Burst: 4 },
            Detections: {
              Hidden: true,
            },
            Range: 16,
            Damage: 2,
          },
          Title: "Better Aiming",
          Cost: 400,
        },
        {
          Image: 5523195646,
          Stats: {
            Extras: ["Increased burst (5)"],
            Attributes: { Burst: 5, BurstCooldown: 0.8 },
            Damage: 4,
          },
          Title: "Equipment Upgrades",
          Cost: 1500,
        },
        {
          Image: 5523196519,
          Stats: {
            Extras: ["Increased burst (7)"],
            Attributes: { Burst: 7 },
            Cooldown: 0.12,
            Range: 18,
            Damage: 8,
          },
          Title: "Deadliest Soldier",
          Cost: 4750,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { Burst: 3, BurstCooldown: 1 },
        Price: 350,
        Range: 13,
        Cooldown: 0.15,
        Damage: 1,
      },
    },
    Golden: {
      Upgrades: [
        {
          Image: 5523192002,
          Stats: {
            Extras: ["Decreased burst cooldown"],
            Attributes: { BurstCooldown: 0.5, Burst: 5 },
            Cooldown: 0.08,
          },
          Title: "Trigger Finger",
          Cost: 250,
        },
        {
          Image: 5523193619,
          Stats: {
            Detections: { Hidden: true },
            Range: 20,
            Damage: 2,
          },
          Title: "Field Training",
          Cost: 800,
        },
        {
          Image: 5523195646,
          Stats: {
            Extras: ["Increased Burst (20)", "Increased burst cooldown"],
            Detections: { Lead: true },
            Attributes: { BurstCooldown: 0 },
            Damage: 4,
          },
          Title: "Gilded Gear",
          Cost: 5750,
        },
        {
          Image: 5523196519,
          Stats: {
            Extras: ["Increased Burst (30)"],
            Range: 24,
            Damage: 10,
          },
          Title: "Maximum Potential",
          Cost: 14500,
        },
      ],
      Defaults: {
        Detections: { Flying: true, Hidden: false, Lead: false },
        Attributes: { Burst: 4, BurstCooldown: 0.75 },
        Price: 500,
        Range: 18,
        Cooldown: 0.1,
        Damage: 1,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 5523192002,
          Stats: {
            Attributes: { Burst: 6, BurstCooldown: 0.3 },
            Cooldown: 0.12,
            Damage: 1,
          },
          Title: "Better Vision",
          Cost: 200,
        },
        {
          Image: 5523193619,
          Stats: {
            Detections: {
              Hidden: true,
            },
            Range: 19,
            Damage: 2,
          },
          Title: "Better Aiming",
          Cost: 800,
        },
        {
          Image: 5523195646,
          Stats: {
            Extras: ["Increased burst (5)"],
            Attributes: { Burst: 8 },
            Range: 21,
            Damage: 5,
          },
          Title: "Equipment Upgrades",
          Cost: 3000,
        },
        {
          Image: 5523196519,
          Stats: {
            Extras: ["Increased burst (7)"],
            Attributes: { Burst: 10, BurstCooldown: 0.2 },
            Cooldown: 0.1,
            Damage: 10,
          },
          Title: "Deadliest Soldier",
          Cost: 8000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: { Burst: 4, BurstCooldown: 0.4 },
        Price: 450,
        Range: 17,
        Cooldown: 0.15,
        Damage: 1,
      },
    },
  },
  Swarmer: {
    Default: {
      Upgrades: [
        {
          Image: 125107182964673,
          Stats: {
            Extras: [],
            Attributes: {
              BeeDamage: 2,
              MaxBeeStacks: 10,
            },
            Damage: 2,
          },
          Title: "Extra Honey",
          Cost: 300,
        },
        {
          Image: 119703739718324,
          Stats: {
            Extras: [],
            Attributes: {
              StingTime: 4.5,
              TickRate: 0.75,
              MaxBeeStacks: 15,
            },
            Cooldown: 1.5,
            Range: 15,
            Damage: 4,
          },
          Title: "Aggressive Bees",
          Cost: 600,
        },
        {
          Image: 111277904554322,
          Stats: {
            Attributes: {
              StingTime: 5.25,
              BeeGrenade: true,
              GrenadeCooldown: 15,
              GrenadeDamage: 10,
              GrenadeRadius: 6,
              MaxBeeStacks: 20,
            },
            Cooldown: 1.25,
            Range: 18,
            Damage: 10,
          },
          Title: "Bee Certified Weapons",
          Cost: 2000,
        },
        {
          Image: 115125540733937,
          Stats: {
            Attributes: {
              StingTime: 5.5,
              BeeDamage: 3,
              TickRate: 0.75,
              GrenadeDamage: 30,
              GrenadeRadius: 7,
              MaxBeeStacks: 25,
            },
            Damage: 15,
            Range: 20,
            Cooldown: 1,
          },
          Title: "Beehive of Madness",
          Cost: 5000,
        },
        {
          Image: 115125540733937,
          Stats: {
            Extras: ["More bee damage", "Faster tick", "Longer strings"],
            Attributes: {
              StingTime: 8,
              BeeDamage: 3,
              TickRate: 0.5,
              GrenadeDamage: 50,
              GrenadeRadius: 8,
              MaxBeeStacks: 30,
            },
            Cooldown: 0.5,
            Damage: 25,
          },
          Title: "Beekeeper of Death",
          Cost: 9500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          StingTime: 4,
          BeeDamage: 1,
          TickRate: 1,
          BeeStacks: 1,
          MaxBeeStacks: 5,
          GlobalMaxStacks: 1500,
          BeeGrenade: false,
          GrenadeRadius: 0,
          GrenadeCooldown: 0,
          GrenadeDamage: 0,
        },
        Price: 450,
        Range: 13,
        Damage: 1,
        Cooldown: 2,
      },
    },
  },
  "Toxic Gunner": {
    Default: {
      Upgrades: [
        {
          Image: 5523192002,
          Stats: {
            Extras: ["x2 Reload Speed"],
            Attributes: {
              BurstCooldown: 0.6,
            },
          },
          Title: "Faster Reloading",
          Cost: 200,
        },
        {
          Image: 5523193619,
          Stats: {
            Attributes: {
              Burst: 8,
              Slowdown: 20,
              PoisonDamage: 4,
            },
            Range: 14,
          },
          Title: "Poisonous Bullets",
          Cost: 800,
        },
        {
          Image: 5523195646,
          Stats: {
            Extras: ["Burst 6 > 20"],
            Attributes: {
              Burst: 20,
              DefenseMelt: 3,
            },
            Cooldown: 0.085,
            Damage: 3,
          },
          Title: "Sinister Gear",
          Cost: 3000,
        },
        {
          Image: 5523196519,
          Stats: {
            Extras: [
              "Full Auto Minigun",
              "Poison Duration: 6 > 10",
              "Poison Damage: 4 > 10",
            ],
            Attributes: {
              BurstCooldown: 0,
              PoisonLength: 10,
              PoisonDamage: 10,
              Slowdown: 30,
            },
            Detections: {
              Flying: false,
              Hidden: false,
              Lead: true,
            },
            Range: 18,
            Damage: 7,
          },
          Title: "Going Nuclear!",
          Cost: 14000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: true },
        Attributes: {
          PoisonTick: 1,
          Burst: 4,
          DefenseMelt: 0,
          MaxDefenseMelt: 50,
          BurstCooldown: 1.2,
          Slowdown: 10,
          PoisonLength: 6,
          PoisonDamage: 1,
        },
        Price: 525,
        Range: 10,
        Cooldown: 0.1,
        Damage: 1,
      },
    },
  },
  Trapper: {
    Default: {
      Defaults: {
        Limit: 7,
        Attributes: {
          MaxTraps: 4,
          TrapPlacementTime: 0.5,
          SpikeDamage: 10,
          SpikeHealth: 10,
          SpikeCooldown: 5.25,
          Spikes: true,
          Landmines: false,
          BearTraps: false,
          ExplosionRadius: 0,
          BurnDamage: 0,
          BurnTime: 0,
          BurnTick: 0,
          LandmineDamage: 0,
          LandmineCooldown: 0,
          BearTrapDamage: 0,
          BearTrapCooldown: 0,
          StunLength: 0,
        },
        Cooldown: 5.25,
        Damage: 0,
        Price: 500,
        Range: 7,
      },
      Upgrades: [
        {
          Stats: {
            Attributes: {
              MaxTraps: 5,
              SpikeHealth: 20,
              SpikeDamage: 20,
              SpikeCooldown: 5,
            },
            Cooldown: 5,
            Extras: ["Max Traps: 5", "Upgraded Spikes"],
          },
          Image: 16493201931,
          Title: "Faster Throwing",
          Cost: 500,
        },
        {
          Stats: {
            Range: 9,
            Attributes: {
              MaxTraps: 6,
              SpikeDamage: 25,
              SpikeHealth: 60,
              LandmineDamage: 50,
              LandmineCooldown: 5,
              ExplosionRadius: 5,
              Landmines: true,
            },
            Extras: ["Max Traps: 6", "Upgraded Spikes", "Unlocked Landmines"],
          },
          Image: 16493202507,
          Title: "Watch your step",
          Cost: 1500,
        },
        {
          Stats: {
            Range: 10,
            Attributes: {
              MaxTraps: 7,
              SpikeDamage: 40,
              SpikeHealth: 280,
              SpikeCooldown: 5,
              LandmineDamage: 80,
              BurnDamage: 5,
              LandmineCooldown: 4,
              BurnTick: 0.25,
              BurnTime: 2,
              BurnDamage: 5,
            },
            Extras: ["Max Traps: 8", "Upgraded Spikes", "Upgraded Landmines"],
            Cooldown: 4,
          },
          Image: 16493202350,
          Title: "Better Traps",
          Cost: 5000,
        },
        {
          Stats: {
            Attributes: {
              MaxTraps: 9,
              SpikeDamage: 60,
              SpikeHealth: 600,
              SpikeCooldown: 4.5,
              ExplosionRadius: 6,
              BurnDamage: 7,
              BurnTime: 5,
              BurnTick: 0.25,
              LandmineDamage: 140,
              LandmineCooldown: 2.5,
              BearTrapDamage: 350,
              BearTrapCooldown: 3.5,
              StunLength: 3,
              BearTraps: true,
            },
            Extras: [
              "Max Traps: 10",
              "Upgraded Spikes",
              "Upgraded Landmines",
              "Unlocked Bear Traps",
            ],
            Cooldown: 2,
          },
          Image: 16493202129,
          Title: "Don't try this at home",
          Cost: 13500,
        },
      ],
    },
  },
  Turret: {
    Default: {
      Upgrades: [
        {
          Image: 149177741,
          Stats: {
            Detections: {
              Hidden: true,
            },
            Range: 20,
            Cooldown: 0.3,
          },
          Title: "Radar",
          Cost: 1250,
        },
        {
          Image: 149177741,
          Stats: {
            Detections: { Lead: true },
            Damage: 20,
          },
          Title: "Stronger Ammunition",
          Cost: 7250,
        },
        {
          Image: 3584258139,
          Stats: {
            Cooldown: 0.15,
            Range: 22,
          },
          Title: "Dual Turret",
          Cost: 15000,
        },
        {
          Image: 3584280869,
          Stats: {
            Range: 24,
            Damage: 40,
          },
          Title: "Even Heavier Ammo",
          Cost: 30000,
        },
        {
          Image: 3584258608,
          Stats: {
            Range: 26,
            Damage: 75,
          },
          Title: "XR-200 Turret",
          Cost: 52500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Limit: 3,
        Price: 5000,
        Range: 15,
        Cooldown: 0.35,
        Damage: 10,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 149177741,
          Stats: {
            Detections: {
              Hidden: true,
            },
            Cooldown: 0.3,
            Range: 21,
          },
          Title: "Radar",
          Cost: 1000,
        },
        {
          Image: 149177741,
          Stats: {
            Detections: { Lead: true },
            Damage: 15,
          },
          Title: "Stronger Ammunition",
          Cost: 2750,
        },
        {
          Image: 3584258139,
          Stats: {
            Cooldown: 0.15,
            Range: 23,
          },
          Title: "Dual Turret",
          Cost: 9000,
        },
        {
          Image: 3584280869,
          Stats: {
            Range: 24.5,
            Damage: 32,
          },
          Title: "Even Heavier Ammo",
          Cost: 20000,
        },
        {
          Image: 3584258608,
          Stats: {
            Cooldown: 0.12,
            Range: 26.5,
            Damage: 55,
          },
          Title: "XR-200 Turret",
          Cost: 42500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Limit: 5,
        Price: 4000,
        Range: 16.5,
        Cooldown: 0.35,
        Damage: 10,
      },
    },
  },
  "War Machine": {
    Default: {
      Upgrades: [
        {
          Image: 4989372339,
          Stats: {
            Range: 18,
          },
          Title: "IMPROVED HANDLING",
          Cost: 250,
        },
        {
          Image: 4989372568,
          Stats: {
            Extras: ["Missile", "20 damage", "5 sec reload"],
            Attributes: {
              Missiles: true,
              MissileCooldown: 5,
              ExplosionRadius: 5,
              MissileCount: 1,
              ExplosionDamage: 20,
            },
            Range: 22,
            Damage: 3,
          },
          Title: "STARK MISSILE",
          Cost: 650,
        },
        {
          Image: 4989372868,
          Stats: {
            Extras: ["Nearby troops get 10% DMG buff"],
            Attributes: {
              DamageBuff: 10,
            },
            Damage: 8,
          },
          Title: "EPIC ARMOR PLATING",
          Cost: 5000,
        },
        {
          Image: 4989373124,
          Stats: {
            Extras: ["Quad Missile Launcher", "25 damage", "Bigger boom"],
            Attributes: {
              ExplosionRadius: 6,
              MissileCount: 4,
              ExplosionDamage: 40,
            },
            Range: 24,
            Damage: 12,
          },
          Title: "ULTRA CHARGED BODY ARMOR",
          Cost: 12500,
        },
        {
          Image: 4989373460,
          Stats: {
            Extras: [
              "Faster missile reloading",
              "Nearby troops get 20% DMG buff",
            ],
            Attributes: {
              MissileCooldown: 4,
              DamageBuff: 20,
              ExplosionDamage: 80,
            },
            Detections: {
              Flying: true,
              Hidden: true,
              Lead: true,
            },
            Range: 26,
            Damage: 40,
          },
          Title: "To The Void and Back",
          Cost: 50000,
        },
      ],
      Defaults: {
        Attributes: {
          Missiles: false,
          MissileCooldown: 5,
          MissileCount: 0,
          DamageBuff: 0,
          ExplosionRadius: 5,
          ExplosionDamage: 20,
        },
        Detections: { Flying: false, Hidden: false, Lead: false },
        Range: 12,
        Price: 2000,
        Limit: 10,
        Cooldown: 0.1,
        Damage: 2,
      },
    },
  },
  Warden: {
    Default: {
      Upgrades: [
        {
          Image: 11415010529,
          Stats: {
            Extras: [],
            Detections: {
              Hidden: true,
            },
            Range: 6,
            Damage: 8,
          },
          Title: "Night Shift",
          Cost: 400,
        },
        {
          Image: 11415012702,
          Stats: {
            Extras: ["Stun Time: 1 > 2"],
            Attributes: {
              StunLength: 2,
            },
            Cooldown: 0.75,
            Damage: 18,
          },
          Title: "Heavier Stick",
          Cost: 1250,
        },
        {
          Image: 11415014676,
          Stats: {
            Extras: ["Stuns Enemies Every Hit"],
            Attributes: {
              StunEveryHit: true,
            },
            Detections: { Lead: true},
            Range: 7,
            Damage: 40,
          },
          Title: "Stunning Blows",
          Cost: 4500,
        },
        {
          Image: 11415015418,
          Stats: {
            Extras: ["Riot Shield: Block Stuns", "Stun Time: 2 > 2.5"],
            Attributes: {
              CanBlock: true,
              StunLength: 2.5,
            },
            Damage: 115,
          },
          Title: "Class Foxtrot Defense Level",
          Cost: 15000,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          StunLength: 1,
          StunEveryHit: false,
          CritMultiplier: 1.5,
          CritSwing: 3,
          CanBlock: false,
          ParryLength: 1.25,
          ParryCooldown: 0.25,
        },
        Limit: 15,
        Price: 1000,
        Range: 5,
        Cooldown: 0.55,
        Damage: 6,
      },
    },
    PVP: {
      Upgrades: [
        {
          Image: 11415010529,
          Stats: {
            Extras: [],
            Detections: {
              Hidden: true,
            },
            Damage: 8,
          },
          Title: "Night Shift",
          Cost: 350,
        },
        {
          Image: 11415012702,
          Stats: {
            Extras: ["Stun Time: 1 > 2"],
            Attributes: {
              StunLength: 1.25,
            },
            Damage: 16,
            Range: 7,
          },
          Title: "Heavier Stick",
          Cost: 1250,
        },
        {
          Image: 11415014676,
          Stats: {
            Extras: ["Stuns Enemies Every Hit"],
            Attributes: {
              StunEveryHit: true,
            },
            Detections: { Lead: true},
            Damage: 35,
          },
          Title: "Stunning Blows",
          Cost: 4500,
        },
        {
          Image: 11415015418,
          Stats: {
            Extras: ["Riot Shield: Block Stuns", "Stun Time: 2 > 2.5"],
            Attributes: {
              CanBlock: true,
              StunLength: 1.75,
            },
            Cooldown: 0.5,
            Range: 7.5,
            Damage: 85,
          },
          Title: "Class Foxtrot Defense Level",
          Cost: 17500,
        },
      ],
      Defaults: {
        Detections: { Flying: false, Hidden: false, Lead: false },
        Attributes: {
          StunLength: 0.65,
          StunEveryHit: false,
          CritMultiplier: 1.5,
          CritSwing: 3,
          CanBlock: false,
          ParryLength: 1.25,
          ParryCooldown: 0.25,
        },
        Limit: 15,
        Price: 1000,
        Range: 6,
        Cooldown: 0.65,
        Damage: 6,
      },
    },
  },
};