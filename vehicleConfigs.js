const vehicleConfigs = {
    defaults: {
        id: 'toyota_4runner_5g',
        lift: 0,
        color: '#B91818',
        roughness: 0,
        addons: {},
        wheel_offset: 0,
        rim: 'toyota_4runner_5thgen',
        rim_color: 'silver',
        rim_color_secondary: 'silver',
        rim_diameter: 17,
        rim_width: 10,
        tire: 'bfg_at',
        tire_diameter: 32,
        spare: true,
    },
    vehicles: {
        toyota_4runner_5g_late: {
            name: 'Toyota 4Runner (2014+)',
            make: 'Toyota',
            model: 'assets/models/vehicles/toyota/4runner/5g/4runner_late.glb',
            wheel_offset: 0.8,
            wheelbase: 2.789,
            default_addons: {},
            addons: {},
        },
        toyota_4runner_5g: {
            name: 'Toyota 4Runner (2011-2013)',
            make: 'Toyota',
            model: 'assets/models/vehicles/toyota/4runner/5g/4runner.glb',
            wheel_offset: 0.76,
            wheelbase: 2.789,
            default_addons: {},
            addons: {},
        },
        toyota_4runner_4g: {
            name: 'Toyota 4Runner (2002-2009)',
            make: 'Toyota',
            model: 'assets/models/vehicles/toyota/4runner/4g/4runner.glb',
            wheel_offset: 0.76,
            wheelbase: 2.79,
            default_addons: {},
            addons: {},
        },
        toyota_4runner_3g: {
            name: 'Toyota 4Runner (1996-2002)',
            make: 'Toyota',
            model: 'assets/models/vehicles/toyota/4runner/3g/4runner.glb',
            wheel_offset: 0.75,
            wheelbase: 2.675,
            spare: [-0.175, 0.7, -2.5],
            default_addons: {
                bumper_f: 'stock',
                sliders: 'stock',
                rack: 'stock',
            },
            addons: {
                bumper_f: {
                    name: 'Bumper',
                    required: true,
                    options: {
                        stock: {
                            name: 'Stock',
                            model: 'assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb',
                        },
                        shrockworks: {
                            name: 'Shrockworks',
                            model: 'assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb',
                        },
                    },
                },
                sliders: {
                    name: 'Sliders',
                    required: false,
                    options: {
                        stock: {
                            name: 'Stock',
                            model: 'assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb',
                        },
                        steel: {
                            name: 'Steel',
                            model: 'assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb',
                        },
                    },
                },
                rack: {
                    name: 'Rack',
                    required: false,
                    options: {
                        stock: {
                            name: 'Stock',
                            model: 'assets/models/vehicles/toyota/4runner/3g/stock_rack.glb',
                        },
                        whitson: {
                            name: 'Whitson Metalworks',
                            model: 'assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb',
                        },
                    },
                },
            },
        },
        toyota_tacoma_2g_ac: {
            name: 'Toyota Tacoma (2005-2015)',
            make: 'Toyota',
            model: 'assets/models/vehicles/toyota/tacoma/2g/tacoma.glb',
            wheel_offset: 0.81,
            wheelbase: 3.245,
            default_addons: {},
            addons: {},
        },
        toyota_j80: {
            name: 'Toyota Land Cruiser (1990–2008)',
            make: 'Toyota',
            model: 'assets/models/vehicles/toyota/land_cruiser/j80/j80.glb',
            wheel_offset: 0.78,
            wheelbase: 2.85,
            default_addons: {},
            addons: {},
        },
        jeep_jku: {
            name: 'Jeep Wrangler (JKU)',
            make: 'Jeep',
            model: 'assets/models/vehicles/jeep/jk/jku.glb',
            wheel_offset: 0.85,
            wheelbase: 2.946,
            default_addons: {},
            addons: {},
        },
        jeep_yj: {
            name: 'Jeep Wrangler (YJ)',
            make: 'Jeep',
            model: 'assets/models/vehicles/jeep/yj/yj.glb',
            wheel_offset: 0.7,
            wheelbase: 2.372,
            default_addons: {},
            addons: {},
        },
        jeep_xj: {
            name: 'Jeep Cherokee (XJ)',
            make: 'Jeep',
            model: 'assets/models/vehicles/jeep/xj/xj.glb',
            wheel_offset: 0.7,
            wheelbase: 2.5,
            default_addons: {},
            addons: {},
        },
        ford_bronco_6g: {
            name: 'Ford Bronco',
            make: 'Ford',
            model: 'assets/models/vehicles/ford/bronco/6g/bronco.glb',
            wheel_offset: 0.85,
            wheelbase: 2.95,
            spare: [0, 0.7, -2.35],
            default_addons: {},
            addons: {},
        },
    },
    wheels: {
        rims: {
            xd_grenade: {
                make: 'XD Wheels',
                name: 'XD Series Grenade',
                model: 'assets/models/wheels/rims/xd_grenade.glb',
                width: 0.5,
                od: 1,
            },
            xd_machete: {
                make: 'XD Wheels',
                name: 'XD Machete',
                model: 'assets/models/wheels/rims/xd_machete.glb',
                width: 0.5,
                od: 1,
            },
            level_8_strike_6: {
                make: 'Level 8',
                name: 'Level 8 Strike 6',
                model: 'assets/models/wheels/rims/level_8_strike_6.glb',
                width: 0.5,
                od: 1,
            },
            konig_countersteer: {
                make: 'Konig',
                name: 'Konig Countersteer',
                model: 'assets/models/wheels/rims/konig_countersteer.glb',
                width: 0.5,
                od: 1,
            },
            cragar_soft_8: {
                make: 'Crager',
                name: 'Cragar Soft 8',
                model: 'assets/models/wheels/rims/cragar_soft_8.glb',
                width: 0.5,
                od: 1,
            },
            moto_metal_mO951: {
                make: 'Moto Metal',
                name: 'Moto Metal MO951',
                model: 'assets/models/wheels/rims/moto_metal_mO951.glb',
                width: 0.5,
                od: 1,
            },
            ar_mojave: {
                make: 'American Racing',
                name: 'American Racing Mojave',
                model: 'assets/models/wheels/rims/ar_mojave.glb',
                width: 0.5,
                od: 1,
            },
            toyota_4runner_5thgen: {
                make: 'Toyota',
                name: 'Toyota 4Runner 5th gen',
                model: 'assets/models/wheels/rims/toyota_4runner.glb',
                width: 0.5,
                od: 1,
            },
            toyota_trd: {
                make: 'Toyota',
                name: 'Toyota TRD Pro',
                model: 'assets/models/wheels/rims/toyota_trd.glb',
                width: 0.5,
                od: 1,
            },
            ford_bronco: {
                make: 'Ford',
                name: 'Ford Bronco',
                model: 'assets/models/wheels/rims/ford_bronco.glb',
                width: 0.5,
                od: 1,
            },
        },
        tires: {
            nitto_mud_grappler: {
                make: 'Nitto',
                name: 'Nitto Mud Grappler',
                model: 'assets/models/wheels/tires/mud_grappler.glb',
                width: 0.32,
                od: 0.883,
                id: 0.48,
            },
            bfg_at: {
                make: 'BFGoodrich',
                name: 'BFGoodrich A/T',
                model: 'assets/models/wheels/tires/bfg_at.glb',
                width: 0.26,
                od: 0.895,
                id: 0.43,
            },
            bfg_km3: {
                make: 'BFGoodrich',
                name: 'BFGoodrich KM3',
                model: 'assets/models/wheels/tires/bfg_km3.glb',
                width: 0.267,
                od: 0.849,
                id: 0.48,
            },
            bfg_km2: {
                make: 'BFGoodrich',
                name: 'BFGoodrich KM2',
                model: 'assets/models/wheels/tires/bfg_km2.glb',
                width: 0.245,
                od: 0.837,
                id: 0.44,
            },
            maxxis_trepador: {
                make: 'Maxxis',
                name: 'Maxxis Trepador',
                model: 'assets/models/wheels/tires/maxxis_trepador.glb',
                width: 0.34,
                od: 0.92,
                id: 0.445,
            },
        },
    },
}

export default vehicleConfigs
