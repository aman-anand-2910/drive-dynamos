const vehicleConfigs = {
  "defaults": {
    "id": "toyota_4runner_5g",
    "lift": 0,
    "color": "#B91818",
    "roughness": 0,
    "addons": {
      "bumper_f": {
        "name": "Bumper",
        "price": 100,
        "required": true,
        "options": {
          "stock": {
            "name": "Stock",
            "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
          },
          "shrockworks": {
            "name": "Shrockworks",
            "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
          }
        }
      },
      "sliders": {
        "name": "Sliders",
        "price": 1000,
        "required": false,
        "options": {
          "stock": {
            "name": "Stock",
            "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
          },
          "steel": {
            "name": "Steel",
            "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
          }
        }
      },
      "rack": {
        "name": "Rack",
        "price": 290,
        "required": false,
        "options": {
          "stock": {
            "name": "Stock",
            "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
          },
          "whitson": {
            "name": "Whitson Metalworks",
            "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
          }
        }
      }
    },
    "price": 1000000,
    "specs": [
      {
        "name": "Power",
        "value": "88",
        "type": "Bar"
      },
      {
        "name": "Comfort",
        "value": "23",
        "type": "Bar"
      },
      {
        "name": "Mileage",
        "value": "88",
        "type": "Text"
      }
    ],
    "buying_trend": [
      {
        "month": "1",
        "value": "20"
      },
      {
        "month": "2",
        "value": "21"
      },
      {
        "month": "3",
        "value": "11"
      },
      {
        "month": "4",
        "value": "2"
      },
      {
        "month": "5",
        "value": "23"
      },
      {
        "month": "6",
        "value": "21"
      }
    ],
    "colors": [
      {
        "name": "Daytona Grey",
        "hex": "#123456"
      },
      {
        "name": "Daytona Grey",
        "hex": "#123456"
      },
      {
        "name": "Daytona Grey",
        "hex": "#123456"
      },
      {
        "name": "Daytona Grey",
        "hex": "#123456"
      },
      {
        "name": "Daytona Grey",
        "hex": "#123456"
      }
    ],
    "wheel_offset": 0,
    "rim": "xd_grenade",
    "rim_color": "silver",
    "rim_color_secondary": "silver",
    "rim_diameter": 17,
    "rim_width": 10,
    "tire": "bfg_at",
    "tire_diameter": 32,
    "spare": true,
    "addonsPriceConfig": {}
  },
  "vehicles": {
    "toyota_4runner_5g_late": {
      "name": "Toyota 4Runner (2014+)",
      "make": "Toyota",
      "model": "assets/models/vehicles/toyota/4runner/5g/4runner_late.glb",
      "wheel_offset": 0.8,
      "wheelbase": 2.789,
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    },
    "toyota_4runner_5g": {
      "name": "Toyota 4Runner (2011-2013)",
      "make": "Toyota",
      "model": "assets/models/vehicles/toyota/4runner/5g/4runner.glb",
      "wheel_offset": 0.76,
      "wheelbase": 2.789,
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#B91818"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    },
    "toyota_4runner_4g": {
      "name": "Toyota 4Runner (2002-2009)",
      "make": "Toyota",
      "model": "assets/models/vehicles/toyota/4runner/4g/4runner.glb",
      "wheel_offset": 0.76,
      "wheelbase": 2.79,
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    },
    "toyota_4runner_3g": {
      "name": "Toyota 4Runner (1996-2002)",
      "make": "Toyota",
      "model": "assets/models/vehicles/toyota/4runner/3g/4runner.glb",
      "wheel_offset": 0.75,
      "wheelbase": 2.675,
      "spare": [
        -0.175,
        0.7,
        -2.5
      ],
      "default_addons": {
        "bumper_f": "stock",
        "sliders": "stock",
        "rack": "stock"
      },
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "rim": "xd_grenade",
      "tire": "bfg_at",
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ]
    },
    "toyota_tacoma_2g_ac": {
      "name": "Toyota Tacoma (2005-2015)",
      "make": "Toyota",
      "model": "assets/models/vehicles/toyota/tacoma/2g/tacoma.glb",
      "wheel_offset": 0.81,
      "wheelbase": 3.245,
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    },
    "toyota_j80": {
      "name": "Toyota Land Cruiser (1990–2008)",
      "make": "Toyota",
      "model": "assets/models/vehicles/toyota/land_cruiser/j80/j80.glb",
      "wheel_offset": 0.78,
      "wheelbase": 2.85,
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    },
    "jeep_jku": {
      "name": "Jeep Wrangler (JKU)",
      "make": "Jeep",
      "model": "assets/models/vehicles/jeep/jk/jku.glb",
      "wheel_offset": 0.8,
      "wheelbase": 2.946,
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    },
    "jeep_yj": {
      "name": "Jeep Wrangler (YJ)",
      "make": "Jeep",
      "model": "assets/models/vehicles/jeep/yj/yj.glb",
      "wheel_offset": 0.7,
      "wheelbase": 2.372,
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    },
    "jeep_xj": {
      "name": "Jeep Cherokee (XJ)",
      "make": "Jeep",
      "model": "assets/models/vehicles/jeep/xj/xj.glb",
      "wheel_offset": 0.7,
      "wheelbase": 2.5,
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    },
    "ford_bronco_6g": {
      "name": "Ford Bronco",
      "make": "Ford",
      "model": "assets/models/vehicles/ford/bronco/6g/bronco.glb",
      "wheel_offset": 0.85,
      "wheelbase": 2.95,
      "spare": [
        0,
        0.7,
        -2.35
      ],
      "default_addons": {},
      "addons": {
        "bumper_f": {
          "name": "Bumper",
          "price": 245,
          "required": true,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_bumper.glb"
            },
            "shrockworks": {
              "name": "Shrockworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/shrockworks_bumper.glb"
            }
          }
        },
        "sliders": {
          "name": "Sliders",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb"
            },
            "steel": {
              "name": "Steel",
              "model": "assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb"
            }
          }
        },
        "rack": {
          "name": "Rack",
          "required": false,
          "options": {
            "stock": {
              "name": "Stock",
              "model": "assets/models/vehicles/toyota/4runner/3g/stock_rack.glb"
            },
            "whitson": {
              "name": "Whitson Metalworks",
              "model": "assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb"
            }
          }
        }
      },
      "price": 1000000,
      "specs": [
        {
          "name": "Power",
          "value": "88",
          "type": "Bar"
        },
        {
          "name": "Comfort",
          "value": "23",
          "type": "Bar"
        },
        {
          "name": "Mileage",
          "value": "88",
          "type": "Text"
        }
      ],
      "buying_trend": [
        {
          "month": "1",
          "value": "20"
        },
        {
          "month": "2",
          "value": "21"
        },
        {
          "month": "3",
          "value": "11"
        },
        {
          "month": "4",
          "value": "2"
        },
        {
          "month": "5",
          "value": "23"
        },
        {
          "month": "6",
          "value": "21"
        }
      ],
      "colors": [
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        },
        {
          "name": "Daytona Grey",
          "hex": "#123456"
        }
      ],
      "rim": "xd_grenade",
      "tire": "bfg_at"
    }
  },
  "wheels": {
    "rims": {
      "xd_grenade": {
        "make": "Grenade",
        "name": "XD Series Grenade",
        "model": "assets/models/wheels/rims/xd_grenade.glb",
        "img": "./assets/images/rims/rim6.png",
        "width": 0.5,
        "price": 100000,
        "od": 1
      },
      "xd_machete": {
        "make": "Machete",
        "name": "XD Machete",
        "model": "assets/models/wheels/rims/xd_machete.glb",
        "img": "./assets/images/rims/rim3.png",
        "width": 0.5,
        "price": 100000,
        "od": 1
      },
      "ar_mojave": {
        "make": "Mojave",
        "name": "American Racing Mojave",
        "model": "assets/models/wheels/rims/ar_mojave.glb",
        "img": "./assets/images/rims/rim1.png",
        "width": 0.5,
        "price": 100000,
        "od": 1
      },
      "toyota_4runner_5thgen": {
        "make": "4Runner",
        "name": "Toyota 4Runner 5th gen",
        "model": "assets/models/wheels/rims/toyota_4runner.glb",
        "img": "./assets/images/rims/rim4.png",
        "width": 0.5,
        "price": 100000,
        "od": 1
      }
    },
    "tires": {
      "nitto_mud_grappler": {
        "make": "Nitto",
        "name": "Nitto Mud Grappler",
        "model": "assets/models/wheels/tires/mud_grappler.glb",
        "width": 0.32,
        "price": 100000,
        "od": 0.883,
        "id": 0.48,
        "img": "./assets/images/tyres/typre1.png"
      },
      "bfg_at": {
        "make": "BF A/T",
        "name": "BFGoodrich A/T",
        "model": "assets/models/wheels/tires/bfg_at.glb",
        "width": 0.26,
        "price": 100000,
        "od": 0.895,
        "id": 0.43,
        "img": "./assets/images/tyres/typre2.png"
      },
      "bfg_km3": {
        "make": "BF KM3",
        "name": "BFGoodrich KM3",
        "model": "assets/models/wheels/tires/bfg_km3.glb",
        "width": 0.267,
        "price": 100000,
        "od": 0.849,
        "id": 0.48,
        "img": "./assets/images/tyres/typre3.png"
      },
      "bfg_km2": {
        "make": "BF M",
        "name": "BFGoodrich KM2",
        "model": "assets/models/wheels/tires/bfg_km2.glb",
        "width": 0.245,
        "price": 100000,
        "od": 0.837,
        "id": 0.44,
        "img": "./assets/images/tyres/typre4.png"
      },
      "maxxis_trepador": {
        "make": "Maxxis",
        "name": "Maxxis Trepador",
        "model": "assets/models/wheels/tires/maxxis_trepador.glb",
        "width": 0.34,
        "price": 100000,
        "od": 0.92,
        "id": 0.445,
        "img": "./assets/images/tyres/typre5.png"
      }
    }
  },
  "Coating": {
    "graphene": {
      "name": "Graphene",
      "model": "assets/models/wheels/rims/xd_grenade.glb",
      "img": "./assets/images/coatings/graphene.png",
      "width": 0.5,
      "price": 5000
    },
    "ceramic_pro": {
      "name": "Ceramic Pro",
      "model": "assets/models/wheels/rims/ceramic_pro.glb",
      "img": "./assets/images/coatings/ceramic_pro.png",
      "width": 0.6,
      "price": 2500
    },
    "nano_shield": {
      "name": "Nano Shield",
      "model": "assets/models/wheels/rims/nano_shield.glb",
      "img": "./assets/images/coatings/graphene.png",
      "width": 0.55,
      "price": 1200
    },
    "diamond_gloss": {
      "name": "Diamond Gloss",
      "model": "assets/models/wheels/rims/diamond_gloss.glb",
      "img": "./assets/images/coatings/diamond_gloss.png",
      "width": 0.65,
      "price": 6500
    },
    "titanium_coat": {
      "name": "Titanium Coat",
      "model": "assets/models/wheels/rims/titanium_coat.glb",
      "img": "./assets/images/coatings/titanium_coat.png",
      "width": 0.7,
      "price": 7000
    }
  },
  "Headlight": {
    "standard_headlight": {
      "name": "Standard Headlight",
      "model": "assets/models/lights/standard_headlight.glb",
      "img": "./assets/images/lights/standard_headlight.png",
      "width": 0.7,
      "price": 2000
    },
    "led_headlight": {
      "name": "LED Headlight",
      "model": "assets/models/lights/led_headlight.glb",
      "img": "./assets/images/lights/led_headlight.png",
      "width": 0.8,
      "price": 3500
    },
    "xenon_headlight": {
      "name": "Xenon Headlight",
      "model": "assets/models/lights/xenon_headlight.glb",
      "img": "./assets/images/lights/xenon_headlight.png",
      "width": 0.75,
      "price": 4000
    },
    "halogen_headlight": {
      "name": "Halogen Headlight",
      "model": "assets/models/lights/halogen_headlight.glb",
      "img": "./assets/images/lights/halogen_headlight.png",
      "width": 0.6,
      "price": 1500
    },
    "laser_headlight": {
      "name": "Laser Headlight",
      "model": "assets/models/lights/laser_headlight.glb",
      "img": "./assets/images/lights/laser_headlight.png",
      "width": 0.85,
      "price": 8000
    }
  },
  "points": [
    {
      "type": "rim",
      "slug": "xd_grenade",
      "text": "Most off-road enthusiasts prefer the XD Series Grenade rims for their rugged design and durability on tough terrains. Weighing in at 13.5 kg per rim, they are made from high-quality aluminum alloy. Fun fact: These rims are designed to withstand temperatures up to 150°C without compromising strength."
    },
    {
      "type": "rim",
      "slug": "xd_machete",
      "text": "The XD Machete rims are a top choice for those seeking a bold, aggressive look for their vehicles. With a weight of 14 kg per rim, they are built for durability. Fun fact: These rims have been a part of over 60 off-road races and have been proven to withstand extreme conditions."
    },
    {
      "type": "rim",
      "slug": "ar_mojave",
      "text": "American Racing Mojave rims are popular for their classic style and reliable performance on both urban roads and off-road trails. Priced at $750 each, they weigh 12 kg. Fun fact: The Mojave rims are named after the Mojave Desert, which is known for its harsh and unpredictable weather."
    },
    {
      "type": "rim",
      "slug": "toyota_4runner_5thgen",
      "text": "Toyota 4Runner 5th gen rims are favored for their perfect fit and sleek appearance on 4Runner models. Weighing 11.5 kg each and priced at $600, these rims provide an excellent balance of style and function. Fun fact: These rims are often chosen by overlanders for their ability to handle off-road adventures."
    },
    {
      "type": "tire",
      "slug": "nitto_mud_grappler",
      "text": "Off-roaders swear by the Nitto Mud Grappler tires for their superior grip and traction in muddy conditions. These tires weigh 36 kg each and are priced at $320. Fun fact: The Mud Grappler tires have a unique tread pattern that improves traction by 30% compared to other mud tires."
    },
    {
      "type": "tire",
      "slug": "bfg_at",
      "text": "BFGoodrich A/T tires are loved for their all-terrain versatility, making them perfect for both highway driving and off-road adventures. These tires have a 32-inch diameter and cost $280 each. Fun fact: BFGoodrich A/T tires have been tested in over 50 countries and are known for their longevity, lasting up to 60,000 miles."
    },
    {
      "type": "tire",
      "slug": "bfg_km3",
      "text": "BFGoodrich KM3 tires are the go-to choice for hardcore off-roaders looking for maximum traction in the toughest terrains. They weigh 38 kg each and cost $320. Fun fact: These tires were specifically designed for rock crawling and are used in extreme off-road races like the King of the Hammers."
    },
    {
      "type": "tire",
      "slug": "bfg_km2",
      "text": "BFGoodrich KM2 tires are perfect for rock crawling and rugged off-road driving. Each tire weighs 35 kg and is priced at $310. Fun fact: The KM2 tires were initially developed for military applications before being adapted for civilian use in off-road vehicles."
    },
    {
      "type": "tire",
      "slug": "maxxis_trepador",
      "text": "Maxxis Trepador tires are known for their aggressive tread pattern and superior off-road performance. They weigh 42 kg each and cost $350. Fun fact: The Trepador tires have been used in Baja 1000 races for over 10 years and are known for their durability in extreme conditions."
    },
    {
      "type": "coating",
      "slug": "graphene",
      "text": "Graphene coating is a revolutionary material known for its strength and durability. It costs around $5000 for a full vehicle coating. Fun fact: Graphene is 200 times stronger than steel and is thinner than a human hair, making it an ideal material for enhancing rim durability."
    },
    {
      "type": "coating",
      "slug": "ceramic_pro",
      "text": "Ceramic Pro coating is a popular choice for protecting rims and paintwork. It costs around $1500 for a full application. Fun fact: Ceramic Pro coatings are designed to withstand high temperatures and protect surfaces from UV damage, making them ideal for off-road vehicles exposed to harsh elements."
    }
  ]
}
export default vehicleConfigs
