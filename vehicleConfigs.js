const vehicleConfigs = {
  defaults: {
    id: "toyota_4runner_5g",
    lift: 0,
    color: "#B91818",
    roughness: 0,
    addons: {
      bumper_f: {
        name: "Bumper",
        required: true,
        options: {
          stock: {
            name: "Stock",
            model: "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
          },
          shrockworks: {
            name: "Shrockworks",
            model:
              "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
          },
        },
      },
      sliders: {
        name: "Sliders",
        required: false,
        options: {
          stock: {
            name: "Stock",
            model: "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
          },
          steel: {
            name: "Steel",
            model: "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
          },
        },
      },
      rack: {
        name: "Rack",
        required: false,
        options: {
          stock: {
            name: "Stock",
            model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
          },
          whitson: {
            name: "Whitson Metalworks",
            model: "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
          },
        },
      },
    },
    price: 1000000,
    specs: [
      {
        name: "Power",
        value: "88",
        type: "Bar",
      },
      {
        name: "Comfort",
        value: "23",
        type: "Bar",
      },
      {
        name: "Mileage",
        value: "88",
        type: "Text",
      },
    ],
    buying_trend: [
      {
        month: "1",
        value: "20",
      },
      {
        month: "2",
        value: "21",
      },
      {
        month: "3",
        value: "11",
      },
      {
        month: "4",
        value: "2",
      },
      {
        month: "5",
        value: "23",
      },
      {
        month: "6",
        value: "21",
      },
    ],
    colors: [
      {
        name: "Daytona Grey",
        hex: "#123456",
      },
      {
        name: "Daytona Grey",
        hex: "#123456",
      },
      {
        name: "Daytona Grey",
        hex: "#123456",
      },
      {
        name: "Daytona Grey",
        hex: "#123456",
      },
      {
        name: "Daytona Grey",
        hex: "#123456",
      },
    ],
    wheel_offset: 0,
    rim: "toyota_4runner_5thgen",
    rim_color: "silver",
    rim_color_secondary: "silver",
    rim_diameter: 17,
    rim_width: 10,
    tire: "bfg_at",
    tire_diameter: 32,
    spare: true,
  },
  vehicles: {
    toyota_4runner_5g_late: {
      name: "Toyota 4Runner (2014+)",
      make: "Toyota",
      model: "assets/models/vehicles/toyota/4runner/5g/4runner_late.glb",
      wheel_offset: 0.8,
      wheelbase: 2.789,
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
    toyota_4runner_5g: {
      name: "Toyota 4Runner (2011-2013)",
      make: "Toyota",
      model: "assets/models/vehicles/toyota/4runner/5g/4runner.glb",
      wheel_offset: 0.76,
      wheelbase: 2.789,
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#B91818",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
    toyota_4runner_4g: {
      name: "Toyota 4Runner (2002-2009)",
      make: "Toyota",
      model: "assets/models/vehicles/toyota/4runner/4g/4runner.glb",
      wheel_offset: 0.76,
      wheelbase: 2.79,
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
    toyota_4runner_3g: {
      name: "Toyota 4Runner (1996-2002)",
      make: "Toyota",
      model: "assets/models/vehicles/toyota/4runner/3g/4runner.glb",
      wheel_offset: 0.75,
      wheelbase: 2.675,
      spare: [-0.175, 0.7, -2.5],
      default_addons: {
        bumper_f: "stock",
        sliders: "stock",
        rack: "stock",
      },
      price: 10000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
    },
    toyota_tacoma_2g_ac: {
      name: "Toyota Tacoma (2005-2015)",
      make: "Toyota",
      model: "assets/models/vehicles/toyota/tacoma/2g/tacoma.glb",
      wheel_offset: 0.81,
      wheelbase: 3.245,
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
    toyota_j80: {
      name: "Toyota Land Cruiser (1990–2008)",
      make: "Toyota",
      model: "assets/models/vehicles/toyota/land_cruiser/j80/j80.glb",
      wheel_offset: 0.78,
      wheelbase: 2.85,
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
    jeep_jku: {
      name: "Jeep Wrangler (JKU)",
      make: "Jeep",
      model: "assets/models/vehicles/jeep/jk/jku.glb",
      wheel_offset: 0.8,
      wheelbase: 2.946,
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
    jeep_yj: {
      name: "Jeep Wrangler (YJ)",
      make: "Jeep",
      model: "assets/models/vehicles/jeep/yj/yj.glb",
      wheel_offset: 0.7,
      wheelbase: 2.372,
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
    jeep_xj: {
      name: "Jeep Cherokee (XJ)",
      make: "Jeep",
      model: "assets/models/vehicles/jeep/xj/xj.glb",
      wheel_offset: 0.7,
      wheelbase: 2.5,
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
    ford_bronco_6g: {
      name: "Ford Bronco",
      make: "Ford",
      model: "assets/models/vehicles/ford/bronco/6g/bronco.glb",
      wheel_offset: 0.85,
      wheelbase: 2.95,
      spare: [0, 0.7, -2.35],
      default_addons: {},
      addons: {
        bumper_f: {
          name: "Bumper",
          required: true,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb",
            },
            shrockworks: {
              name: "Shrockworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb",
            },
          },
        },
        sliders: {
          name: "Sliders",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model:
                "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb",
            },
            steel: {
              name: "Steel",
              model:
                "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb",
            },
          },
        },
        rack: {
          name: "Rack",
          required: false,
          options: {
            stock: {
              name: "Stock",
              model: "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb",
            },
            whitson: {
              name: "Whitson Metalworks",
              model:
                "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb",
            },
          },
        },
      },
      price: 1000000,
      specs: [
        {
          name: "Power",
          value: "88",
          type: "Bar",
        },
        {
          name: "Comfort",
          value: "23",
          type: "Bar",
        },
        {
          name: "Mileage",
          value: "88",
          type: "Text",
        },
      ],
      buying_trend: [
        {
          month: "1",
          value: "20",
        },
        {
          month: "2",
          value: "21",
        },
        {
          month: "3",
          value: "11",
        },
        {
          month: "4",
          value: "2",
        },
        {
          month: "5",
          value: "23",
        },
        {
          month: "6",
          value: "21",
        },
      ],
      colors: [
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
        {
          name: "Daytona Grey",
          hex: "#123456",
        },
      ],
    },
  },
  wheels: {
    rims: {
      xd_grenade: {
        make: "Grenade",
        name: "XD Series Grenade",
        model: "assets/models/wheels/rims/xd_grenade.glb",
        img: "./assets/images/rims/rim6.png",
        width: 0.5,
        price: 100000,
        od: 1,
      },
      xd_machete: {
        make: "Machete",
        name: "XD Machete",
        model: "assets/models/wheels/rims/xd_machete.glb",
        img: "./assets/images/rims/rim3.png",
        width: 0.5,
        price: 100000,
        od: 1,
      },
      ar_mojave: {
        make: "Mojave",
        name: "American Racing Mojave",
        model: "assets/models/wheels/rims/ar_mojave.glb",
        img: "./assets/images/rims/rim1.png",
        width: 0.5,
        price: 100000,
        od: 1,
      },
      toyota_4runner_5thgen: {
        make: "4Runner",
        name: "Toyota 4Runner 5th gen",
        model: "assets/models/wheels/rims/toyota_4runner.glb",
        img: "./assets/images/rims/rim4.png",
        width: 0.5,
        price: 100000,
        od: 1,
      },
    },
    tires: {
      nitto_mud_grappler: {
        make: "Nitto",
        name: "Nitto Mud Grappler",
        model: "assets/models/wheels/tires/mud_grappler.glb",
        width: 0.32,
        price: 100000,
        od: 0.883,
        id: 0.48,
        img: "./assets/images/tyres/typre1.png",
      },
      bfg_at: {
        make: "BF A/T",
        name: "BFGoodrich A/T",
        model: "assets/models/wheels/tires/bfg_at.glb",
        width: 0.26,
        price: 100000,
        od: 0.895,
        id: 0.43,
        img: "./assets/images/tyres/typre2.png",
      },
      bfg_km3: {
        make: "BF KM3",
        name: "BFGoodrich KM3",
        model: "assets/models/wheels/tires/bfg_km3.glb",
        width: 0.267,
        price: 100000,
        od: 0.849,
        id: 0.48,
        img: "./assets/images/tyres/typre3.png",
      },
      bfg_km2: {
        make: "BF M",
        name: "BFGoodrich KM2",
        model: "assets/models/wheels/tires/bfg_km2.glb",
        width: 0.245,
        price: 100000,
        od: 0.837,
        id: 0.44,
        img: "./assets/images/tyres/typre4.png",
      },
      maxxis_trepador: {
        make: "Maxxis",
        name: "Maxxis Trepador",
        model: "assets/models/wheels/tires/maxxis_trepador.glb",
        width: 0.34,
        price: 100000,
        od: 0.92,
        id: 0.445,
        img: "./assets/images/tyres/typre5.png",
      },
    },
  },
};
export default vehicleConfigs;
