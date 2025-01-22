export default {
    Skeleton: {
        Health: 30,
        Speed: 4,
        Range: 2,
        Detections: {
            Hidden: false,
        },
        Attributes: {},
    },
    'Sword Skeleton': {
        Health: 30,
        Speed: 4,
        Range: 6,
        Cooldown: 0.8,
        Damage: 15,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
        Attributes: {},
    },
    'Skeleton Knight': {
        Health: 100,
        Speed: 3.5,
        Range: 7,
        Cooldown: 0.65,
        Damage: 35,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
        Attributes: {},
    },
    'Hallow Guard': {
        Health: 1250,
        Speed: 1.8,
        Range: 2,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
        Attributes: {},
    },
    'Executioner Skeleton': {
        Health: 3500,
        Speed: 1.8,
        Cooldown: 4,
        Range: 30,
        Damage: 50,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: true,
        },
        Attributes: {},
    },

    Goon1: {
        Range: 20,
        Health: 15,
        Cooldown: 1,
        Damage: 3,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    Goon2: {
        Range: 17,
        Health: 100,
        Cooldown: 0.2,
        Damage: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Goon3: {
        Range: 18,
        Health: 175,
        Cooldown: 0.12,
        Damage: 10,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    GoldenGoon1: {
        Range: 20,
        Health: 25,
        Cooldown: 0.6,
        Damage: 3,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    GoldenGoon2: {
        Range: 17.5,
        Health: 125,
        Cooldown: 0.18,
        Damage: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    GoldenGoon3: {
        Range: 20,
        Health: 225,
        Cooldown: 0.1,
        Damage: 12,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    // Mercenary base
    Rifleman1: {
        Unlocks: 0,
        Health: 40,
        Damage: 5,
        BurstAmount: 6,
        Spawnrate: 45,
        Cooldown: 0.15,
        BurstCooldown: 1.5,
        Range: 18,
        Lifespan: 240,
        Limit: 10,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    Rifleman2: {
        Unlocks: 12,
        Health: 70,
        Damage: 12,
        BurstAmount: 8,
        Spawnrate: 40,
        Cooldown: 0.15,
        BurstCooldown: 1.5,
        Range: 23,
        Lifespan: 240,
        Limit: 10,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    Rifleman3: {
        Unlocks: 6,
        Health: 250,
        Damage: 18,
        BurstAmount: 10,
        Spawnrate: 35,
        Cooldown: 0.15,
        BurstCooldown: 1,
        Range: 28,
        Lifespan: 240,
        Limit: 10,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    Grenadier1: {
        Unlocks: 1,
        Health: 50,
        Damage: 35,
        Spawnrate: 40,
        Cooldown: 1.75,
        Defense: 0,
        Range: 18,
        Lifespan: 240,
        Limit: 7,
        ExplosiveRange: 3,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },
    Grenadier2: {
        Unlocks: 3,
        Health: 125,
        Damage: 65,
        Spawnrate: 40,
        Cooldown: 1.5,
        Defense: 0,
        Range: 19,
        Lifespan: 240,
        Limit: 7,
        ExplosiveRange: 4.5,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },
    Grenadier3: {
        Unlocks: 6,
        Health: 260,
        Damage: 100,
        Spawnrate: 40,
        Cooldown: 1.25,
        Defense: 0.1,
        Range: 19,
        Lifespan: 240,
        Limit: 7,
        ExplosiveRange: 4.5,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },

    RiotGuard1: {
        Unlocks: 4,
        Health: 1200,
        Damage: 50,
        Spawnrate: 50,
        Defense: 0.1,
        Cooldown: 1.5,
        Range: 4,
        Lifespan: 240,
        Limit: 4,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    RiotGuard2: {
        Unlocks: 6,
        Health: 2500,
        Damage: 50,
        Spawnrate: 50,
        Defense: 0.15,
        Cooldown: 1,
        Range: 4,
        Lifespan: 240,
        Limit: 4,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },

    FieldMedic1: {
        Unlocks: 5,
        Health: 300,
        Damage: 0,
        Spawnrate: 35,
        Heal: 5,
        MaxTargets: 4,
        Cooldown: 0.2,
        Range: 30,
        Lifespan: 240,
        Limit: 3,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    FieldMedic2: {
        Unlocks: 6,
        Health: 600,
        Damage: 0,
        Spawnrate: 30,
        Heal: 10,
        MaxTargets: 8,
        Cooldown: 0.2,
        Range: 30,
        Lifespan: 240,
        Limit: 3,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },

    IceTurret1: {
        Range: 10,
        Damage: 10,
        Cooldown: 0.45,
        FreezeTime: 2,
        DebuffLength: 5,
        SlowPercent: 25,
        MaxSlow: 50,
        Lifespan: 45,
        Health: 1000,
    },
    IceTurret2: {
        Range: 12.5,
        Damage: 20,
        Cooldown: 0.35,
        FreezeTime: 2,
        DebuffLength: 5,
        SlowPercent: 25,
        MaxSlow: 50,
        Lifespan: 45,
        Health: 1000,
    },
    IceTurret3: {
        Range: 15,
        Damage: 30,
        Cooldown: 0.3,
        FreezeTime: 2,
        DebuffLength: 5,
        SlowPercent: 30,
        MaxSlow: 60,
        Lifespan: 45,
        Health: 1000,
    },
    Sentry1: {
        Range: 18,
        Health: 20,
        Lifetime: 30,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.45,
        Damage: 1,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
        Attributes: {
            SendTime: 1.25,
            ScrapCost: 16,
            Lifetime: 20,
        },
    },
    Sentry2: {
        Range: 20,
        Health: 40,
        Lifetime: 30,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.3,
        Damage: 2,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
        Attributes: {
            SendTime: 1.5,
            ScrapCost: 36,
            Lifetime: 30,
        },
    },
    Sentry3: {
        Range: 20,
        Health: 60,
        Lifetime: 45,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.16,
        Damage: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: true,
        },
        Attributes: {
            SendTime: 1.75,
            ScrapCost: 140,
            Lifetime: 45,
        },
    },
    Sentry4: {
        ExplosionDamage: 35,
        TimeBetweenMissiles: 4,
        MissileAmount: 2,
        Range: 24,
        Health: 250,
        Lifetime: 60,
        Speed: 1.5,
        IgnoreCollisionDamage: true,
        Cooldown: 0.12,
        Damage: 8,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: true,
        },
        Attributes: {
            SendTime: 1.75,
            ScrapCost: 300,
            Lifetime: 60,
        },
    },
    Humvee: {
        Health: 30,
        Damage: 0,
        Cooldown: 0.2,
        Range: 5,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    ['Humvee 2']: {
        Health: 60,
        Damage: 0,
        Cooldown: 0.2,
        Range: 5,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    ['Humvee 3']: {
        Health: 90,
        Damage: 3,
        Cooldown: 0.2,
        Range: 30,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Tank: {
        Health: 500,
        Damage: 10,
        Cooldown: 0.2,
        Range: 30,
        ExplosionDamage: 40,
        TimeBetweenMissiles: 2,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    ['Railgun Tank']: {
        Health: 1500,
        Damage: 24,
        Cooldown: 0.15,
        Range: 30,
        ExplosionDamage: 80,
        TimeBetweenMissiles: 3,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark1: {
        Health: 400,
        Damage: 8,
        Cooldown: 0.2,
        Range: 30,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark1Rocket: {
        Health: 400,
        Damage: 8,
        Cooldown: 0.2,
        Range: 30,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark2: {
        Health: 750,
        Damage: 12,
        Cooldown: 0.15,
        Range: 25,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark3: {
        Health: 1200,
        Damage: 10,
        Cooldown: 0.08,
        Range: 25,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark4: {
        Health: 2000,
        Damage: 10,
        Cooldown: 0.05,
        Range: 100,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        MissileAmount: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark5: {
        Health: 5000,
        Damage: 20,
        Cooldown: 0.05,
        Range: 100,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        MissileAmount: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
};
