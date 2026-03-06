export const productCategories = [
  {
    id: "coir",
    name: "Coir Products",
    tagline: "Nature's Strength, Woven for You",
    description: "Natural coir-based products for industrial, agricultural, and domestic applications.",
    image: "/coir/all.png",
    heroImage: "/top-view-simple-ropes-dark-surface.jpg",
    galleryImages: [
      "/coir/all.png",

      "/coir/1000_F_864711886_Lrf4KTk1fo78r5jYbyJ7BCTT0wv53nLR.jpeg",
      "/coir/coco-packaging.png",
      "/coir/c5.png",
      "/coir/c4.png",
      "/coir/c9.jpg",
      "/coir/geo.png",
      "/coir/geotext/image001.png",

      "/coir/1000_F_792302328_ZEFrtRZtgBGS2S2Gag1iP7Rmhjxe0uov.jpeg",
      "/coir/geotext/image002.png",
      "/coir/geotext/image003.png",
      "/coir/geotext/image004.jpg",
      "/coir/geotext/image005.png",
      "/coir/c18.png",
      "/coir/23A00131-870x457.jpg",

    ],
    items: [
      {
        name: "Coir-Rope",
        desc: "High-strength natural fiber ropes for marine and agricultural use.",
        image: "/coir/fibre/image007.png",
        images: [
          "/coir/fibre/image001.png",
          "/coir/fibre/image007.png",
        ],
        specifications: {
          diameter: "6mm to 50mm",
          material: "100% Coconut Fiber",
          ply: "2-Ply / 3-Ply",
          twist: "Hard / Medium / Soft",
        },
        subItems: [
          {
            name: "2-Ply Coir Yarn/Rope",
            image: "/coir/fibre/image001.png",
            price: "Get Best Quote",
            details: {
              "Ply": "2-Ply",
              "Diameter": "6mm - 10mm",
              "Breaking Strength": "High",
              "Twist per Meter": "15 - 20",
              "Usage": "Agricultural / Matting",
              "Packing": "50kg Bundles / 15kg Spools"
            },
            description: "Traditional 2-ply coir yarn, machine-spun or hand-spun. Perfect for hops cultivation, oyster farming, and mat weaving.",
            additionalInfo: "Custom twist and runnage (meters per kg) available upon request."
          },
          {
            name: "3-Ply Coir Rope",
            image: "/coir/fibre/image007.png",
            price: "Get Best Quote",
            details: {
              "Ply": "3-Ply",
              "Diameter": "12mm - 50mm",
              "Length": "100m - 200m Coils",
              "Breaking Load": "Exceeds 500kg (for 18mm)",
              "Material": "Bristle Fiber Mix"
            },
            description: "Heavy-duty 3-ply ropes used for marine applications, construction safety nets, and heavy industrial bundling.",
            additionalInfo: "Oil-treated or natural finishes available. Extremely resistant to salt water."
          }
        ],
        process: [
          "Husks extraction",
          "Retting",
          "Defibering",
          "Spinning",
          "Q.C. & Packing",
        ],
        applications: ["Marine", "Agriculture", "Matting", "Construction"],
        certifications: ["ISO 9001", "Eco-label"],
      },
      {
        name: "Coir-Mats",
        desc: "Durable and eco-friendly entrance mats.",
        image: "/coir/mat.png",
        images: ["/coir/c1.jpg", "/coir/c8.jpg", "/coir/c4.png", "/coir/mat.png"],
        specifications: {
          size: "40x60cm, 45x75cm, 60x90cm",
          thickness: "15mm - 30mm",
          backing: "PVC / Latex / Natural",
          design: "Plain / Stenciled",
        },
        subItems: [
          {
            name: "Creel Coir Mat",
            image: "/coir/mat.png",
            price: "Premium Range",
            details: {
              "Design": "Woven Creel",
              "Thickness": "15mm - 20mm",
              "Backing": "Natural Rubber",
              "Durability": "Heavy Traffic",
              "Edge": "Folded / Tucked"
            },
            description: "Densely woven creel mats with a professional finish. Ideal for high-traffic commercial entrances and luxury residential use.",
            additionalInfo: "Available in custom stenciled designs with eco-friendly dyes."
          },
          {
            name: "PVC Backed Coir Mat",
            image: "/coir/c1.jpg",
            price: "Economy Range",
            details: {
              "Backing": "Anti-slip PVC",
              "Thickness": "15mm",
              "Pile Height": "12mm",
              "Feature": "Easy Clean / Non-Shed",
              "Size": "Cut-to-size available"
            },
            description: "Modern coir mats with integrated PVC backing to prevent slipping and improve longevity. Perfect for indoor/outdoor transition areas.",
            additionalInfo: "Minimum order: 100 units for custom sizes."
          }
        ],
        process: ["Fiber extraction", "Yarn spinning", "Weaving", "Tufting", "Finishing"],
        applications: ["Home Entrance", "Offices", "Industrial Floors"],
        certifications: ["ISO 9001"],
      },
      {
        name: "Coco-Peat",
        desc: "Perfect organic growing medium for horticulture.",
        image: "/coir/1000_F_864711886_Lrf4KTk1fo78r5jYbyJ7BCTT0wv53nLR.jpeg",
        images: ["/coir/1000_F_864711886_Lrf4KTk1fo78r5jYbyJ7BCTT0wv53nLR.jpeg",],
        specifications: {
          pH: "5.5 - 6.5",
          moisture: "<15%",
          sieved: "6mm mesh",
          ecLevel: "Low / High available",
        },
        subItems: [
          {
            name: "Low EC Coco Peat (Washed)",
            image: "/coir/1000_F_864711886_Lrf4KTk1fo78r5jYbyJ7BCTT0wv53nLR.jpeg",
            price: "Bulk Pricing",
            details: {
              "EC Level": "< 0.5 mS/cm",
              "pH": "5.5 - 6.8",
              "Expansion": "15 Liters per Kg",
              "Moisture": "10% - 15%",
              "Sieve": "6mm / 8mm"
            },
            description: "Premium washed coco peat with low electrical conductivity. Best for sensitive plants, seedlings, and hydroponic systems.",
            additionalInfo: "Washed three times with fresh water to ensure minimum salinity."
          },
          {
            name: "High EC Coco Peat (Unwashed)",
            image: "/coir/c9.jpg",
            price: "Economy Pricing",
            details: {
              "EC Level": "> 1.0 mS/cm",
              "pH": "5.5 - 7.0",
              "Expansion": "12-14 Liters per Kg",
              "Moisture": "< 20%",
              "Sand Content": "< 3%"
            },
            description: "Natural unwashed coco peat suitable for soil conditioning and large-scale land development where salinity is less critical.",
            additionalInfo: "Cost-effective solution for soil amendments."
          }
        ],
        process: ["Washing", "Drying", "Sieving", "Compressing"],
        applications: ["Greenhouses", "Potting Mix", "Hydroponics"],
        certifications: ["Organic Certified"],
      },
      {
        name: "Coir-Blocks",
        desc: "Compressed coco peat blocks for easy transport.",
        image: "/coir/coco-packaging.png",
        images: ["/coir/coco-packaging.png"],
        specifications: {
          compression: "5:1",
          ec: "Low (<0.5 mS/cm)",
          loadability: "22-24 Tons per 40ft HC",
        },
        subItems: [
          {
            name: "5kg Industrial Block",
            image: "/coir/coco-packaging.png",
            price: "Export Rate",
            details: {
              "Weight": "5 Kg (+/- 0.3kg)",
              "Size": "30 x 30 x 10 cm",
              "Expansion": "70 - 75 Liters",
              "Packing": "Palletized / Naked",
              "EC": "Low EC Washed"
            },
            description: "Standard 5kg compressed blocks for large-scale horticultural projects and commercial greenhouses.",
            additionalInfo: "Standard export quality with consistent expansion rates."
          },
          {
            name: "650g Retail Briquette",
            image: "/coir/c5.png",
            price: "Retail Pack",
            details: {
              "Weight": "650 Grams",
              "Size": "20 x 10 x 5 cm",
              "Expansion": "8 - 10 Liters",
              "Moisture": "< 15%",
              "Packing": "Shrink Wrap with Label"
            },
            description: "Small compressed bricks ideal for home gardens and retail nurseries. Easy to store and expand in a bucket.",
            additionalInfo: "Available with private label branding for minimum orders."
          }
        ],
        process: ["Washing", "Drying", "Compression"],
        applications: ["Agriculture", "Landscaping", "Soil Amendment"],
        certifications: ["OMRI Listed"],
      },
      {
        name: "Coir-Geotextile",
        desc: "Erosion control blankets for slope stabilization.",
        image: "/coir/geo.png",
        images: ["/coir/geotext/image005.png", "/coir/geotext/image004.jpg", "/coir/geotext/image003.png", "/coir/geotext/image002.png", "/coir/geotext/image001.png", "/coir/geo.png"],
        specifications: {
          weight: "400gsm - 900gsm",
          width: "1m - 3m",
          lifeSpan: "3-5 years",
          biodegradable: "100%",
        },
        process: ["Spinning", "Woven mesh creation", "Rolling"],
        applications: ["Soil Erosion Control", "River Banks", "Road construction"],
        certifications: ["ASTM Standards"],
        subItems: [
          {
            name: "Woven Coir Geotextile",
            image: "/coir/geotext/image001.png",
            price: "Approx. Rs 42 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "all above gsm available",
              "Material": "Coir Fiber yarn",
              "Usage/Application": "Soil erosion control, slope protection, Road construction",
              "Thickness": "8 mm",
              "Brand": "mylittlegarden",
              "Yarn Thickness": "8 mm",
              "Roll size": "2 x 50 m",
              "Weight": "700gm/M2",
              "No of roll": "400 per 40'F",
              "Total area": "40000 s.meter"
            },
            description: "Used for soir errotion and ponds and lawns and landscapping, horticulture, constructions, constctions of roads etc. We have differnt GSM starting from 400,450,500,550,600,650,700,740,750,800,900 gsm. We have supply capasity of 1 lakhs sqm per month.",
            additionalInfo: "Production Capacity: 1 lack sqm per month | Delivery Time: Immediatly | Packaging Details: rolls"
          },
          {
            name: "900 GSM Coir Geotextiles",
            image: "/coir/geotext/image002.png",
            price: "Approx. Rs 50 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "900",
              "Roll width": "2 m",
              "Roll length": "50 m",
              "Weave type": "Woven",
              "Coir grade": "Mixed coir",
              "Application": "Landscaping, Slope protection, River bank, Road embankment, Canal lining, Railway cutting",
              "Material": "Coir Fiber Yarn",
              "Usage/Application": "Soil Erosion control , Slope Protection and Roads",
              "Thickness": "7-8 MM",
              "Moisture Content": "less than 10%",
              "Brand": "Mylittlegarden",
              "Packaging Type": "100 square meter rolls",
              "Feature": "Natural coir yarn",
              "Mesh size": "10x10 mm",
              "Color": "Natural Brown",
              "Life span": "4 years",
              "Roll Size": "100 Square meter",
              "Weight": "900 Grams per square meter",
              "Country of Origin": "Made in India",
              "Eco Friendly": "100% natural",
            },
            description: "Coir Geotextiles are also known as erosion control blankets as it increase soil stabilization, decrease erosion and allow vegetation. Coir is 100% nature fibre and best option for environment as it is eco-friendly and bio-degradable.",
            additionalInfo: "Production Capacity: 100,000 Sq Meters per month | Delivery Time: Based on Order Quantity | Packaging Details: 2 x 50 = 100 square meter compressed Rolls"
          },
          {
            name: "Coir Woven Geo-Textile - 700 GSM",
            image: "/coir/geotext/image003.png",
            price: "Approx. Rs 40 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "700",
              "Roll size": "2m x 50m",
              "Usage": "Subgrade Stabilization & Pavement Reinforcement",
              "Thickness": "8 to 10 MM",
              "Mesh size": "10x10 mm",
            },
            description: "Employed to improve the stability of the subgrade soil beneath rural roads, enhancing load-bearing capacity.",
            additionalInfo: "Item Code: 5315 | Production Capacity: 200,000 | Packaging Details: Tightly Rolled"
          },
          {
            name: "Geotextile Coir Mat",
            image: "/coir/geotext/image004.jpg",
            price: "Approx. Rs 39 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "All available (400 to 900)",
              "Roll width": "2 m",
              "Weave type": "Woven",
              "Life span": "4 years",
            },
            description: "Ideal for landscape like slope protection, soil erosion control, pond side protection, rural roads and railways.",
            additionalInfo: "Production Capacity: 1 lakh sqm per month | Packaging Details: tight winding rolls of 100 sqm per roll"
          },
          {
            name: "600 GSM Coir Geotextile Mat",
            image: "/coir/geotext/image005.png",
            price: "Approx. Rs 40 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "600",
              "Thickness": "7-8 MM",
              "Usage": "Civil engineering, roads, airfields, railroads, embankments",
              "Durability": "3 to 5 years",
            },
            description: "Used for sand dune armoring, mitigating shoreline erosion damage, and stabilizing flow in stream channels.",
            additionalInfo: "Production Capacity: 100,000 | Delivery Time: Based on Quantity"
          },
          {
            name: "Coir Fiber Yarn Geomat",
            image: "/coir/geo.png",
            price: "Approx. Rs 40 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "Material": "Coir Fiber Yarn",
              "Thickness": "7-8 MM",
              "Roll Size": "2 M X 50 METERS",
            },
            description: "SOIL EROSION CONTROL AND SLOPE PROTECTION MAT. WOVEN COIR GEOTEXTILES.",
            additionalInfo: "Production Capacity: 100,000 | Packaging: Compressed rolls"
          },
          {
            name: "Non Woven Coir Geo Textiles",
            image: "/coir/geotext/image001.png",
            price: "Approx. Rs 50 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "450",
              "Thickness": "7-8 MM",
              "Roll Size": "1.2 x 50 Meter",
            },
            description: "Non-woven 450 GSM coir geotextiles with double side HDPE net.",
            additionalInfo: "Production Capacity: 25,000 per week | Delivery Time: Based on Quantity"
          },
          {
            name: "Slope Protection Coir Geotextile For Ponds",
            image: "/coir/geotext/image002.png",
            price: "Approx. Rs 56 / Square Meter",
            details: {
              "Minimum Order Quantity": "5000 Square Meter",
              "Thickness": "7-8 MM",
              "Application": "Water ponds side wall protection",
              "Feature": "Coir Non woven with PP net top and bottom",
            },
            description: "Erosion control mats applied for side wall protection for water ponds.",
            additionalInfo: "Production Capacity: 25,000 sq.m per week | Delivery Time: Depends on Quantity"
          },
          {
            name: "Slope Production Coir Mat",
            image: "/coir/geotext/image003.png",
            price: "Approx. Rs 57 / Square Meter",
            details: {
              "Minimum Order Quantity": "5000 Square Meter",
              "Mat Size": "1.1 x 50 Meters",
              "Weight": "650gsm",
              "Design": "Plain with pp net",
            },
            description: "Mostly used for soil erosion control and landscaping, usually with pp net on top and bottom.",
            additionalInfo: "Item Code: 5312 | Production Capacity: 25,000 sq.m per week"
          },
          {
            name: "Erosion Control Coir Blankets",
            image: "/coir/geotext/image004.jpg",
            price: "Approx. Rs 40 / Square Meter",
            details: {
              "Minimum Order Quantity": "5000 Square Meter",
              "GSM": "400-1000",
              "Thickness": "10 MM",
              "Width": "3 meters",
            },
            description: "Non-woven coir fiber blanket with single side pp net. No patches and uniform coir fiber spread.",
            additionalInfo: "Production Capacity: 100,000 sqm | Delivery Time: based on order"
          },
          {
            name: "Non-Woven Coir Geo-Textile - 450 GSM",
            image: "/coir/geotext/image005.png",
            price: "Approx. Rs 35 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "450",
              "Thickness": "10-12 mm",
              "Width": "3 meter",
            },
            description: "Can be laid directly on bare soil surfaces to prevent erosion on road slopes and disturbed areas.",
            additionalInfo: "Item Code: 560 | Production Capacity: 100,000 sqm per month"
          },
          {
            name: "Coir Needle Felt Geotextile Rolls",
            image: "/coir/geo.png",
            price: "Approx. Rs 65 / Meter",
            details: {
              "Minimum Order Quantity": "100 Meter",
              "Weight": "750gm/m2",
              "Length": "30 meter",
              "Width": "1.2 meter",
            },
            description: "Coir Needle Felt Geotextile Rolls with or without latex. Used as Mulch mat, water filter, and road projects.",
            additionalInfo: "Brand: mylittlegarden | Packaging: As per need"
          },
          {
            name: "Jute Geotextile Fabric (Coir)",
            image: "/coir/geotext/image001.png",
            price: "Approx. Rs 54 / Square Meter",
            details: {
              "Minimum Order Quantity": "5000 Square Meter",
              "Material": "Coconut fiber (Coir)",
              "Thickness": "8-10 mm",
              "GSM": "450-650",
            },
            description: "Natural coconut fiber geotextiles woven and non-woven for soil erosion control and slope protection.",
            additionalInfo: "Production Capacity: 50,000 | Delivery Time: 15 days per 5000 S.M."
          },
          {
            name: "450 GSM Coir Geo Textile Mat",
            image: "/coir/geotext/image002.png",
            price: "Approx. Rs 39 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "450",
              "Roll width": "2 m",
              "Life span": "4 year",
              "Biodegradable": "100%",
            },
            description: "Used for sustainable and biodegradable slope erosion protection, soil stabilization, and displacement prevention.",
            additionalInfo: "Item Code: 450-5311 | Delivery Time: based on quantity"
          },
          {
            name: "400 GSM Woven Coir Geotextile",
            image: "/coir/geotext/image003.png",
            price: "Approx. Rs 42 / Square Meter",
            details: {
              "Minimum Order Quantity": "1000 Square Meter",
              "GSM": "400",
              "Thickness": "7-8 MM",
              "Applications": "Landscaping, Golf courses, Mine site reclamation, storm water channels",
            },
            description: "100% natural fiber and best option for environment. Increases soil stabilization.",
            additionalInfo: "Production Capacity: 100,000 per month | Delivery Time: based on Order quantity"
          }
        ]
      },
      {
        name: "Other Coir Products",
        desc: "Various other sustainable coir based solutions.",
        image: "/coir/c16.png",
        images: ["/coir/c16.png", "/coir/c10.png", "/coir/c5.png"],
        specifications: {
          type: "Custom",
          material: "100% Coir",
        },
        process: ["Custom processing based on product"],
        applications: ["Various industries"],
        certifications: ["ISO 9001"],
      }
    ],
    features: [
      "100% natural coconut husk fiber",
      "Fully biodegradable and compostable",
      "Non-toxic and safe for plants",
      "Weather-resistant and durable",
      "Affordable bulk pricing",
      "Handmade with precision",
    ],
    certifications: [
      "ISO 9001:2015",
      "Organic Certified",
      "Fair Trade",
      "Eco-label",
      "BIS Certified",
    ],
    // exportMarkets: ["USA", "Europe", "Middle East", "Australia", "Japan"],
  },
  {
    id: "areca",
    name: "Areca Leaf Products",
    tagline: "Sustainable Dining, Elegant Design",
    description: "Premium dining and food containers made from fallen areca palm leaves.",
    image: "/areca/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
    heroImage: "/areca/ai-generated-8544750_1280.jpg",
    galleryImages: [
      "/areca/areca-leaf-food-service-plates.jpg",
      "/areca/areca-leaf-disposable-plates-eco-friendly.jpg",
      "/areca/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
      "/areca/BigBoat-12-768x512.jpg",
      "/areca/biodegradable-dinnerware-made-from-areca-leaf-sheath.jpg",
      "/areca/en_product_76a48d7751-1024x651.jpg",
      "/areca/Gemini_Generated_Image_4yedmu4yedmu4yed.png",
      "/areca/Q9A1148-1024x682.jpg",

    ],
    items: [
      {
        name: "Round Plates",
        desc: "Classic round dinner and quarter plates for all occasions.",
        image: "/areca/areca-leaf-food-service-plates.jpg",
        images: [
          "/areca/areca-leaf-food-service-plates.jpg",
          "/areca/areca-leaf-disposable-plates-eco-friendly.jpg",

        ],
        specifications: {
          sizes: '6", 8", 10", 12"',
          depth: "Standard / Deep",
          pack: "25 / 50 pcs",
          feature: "Microwave Safe",
        },
        process: ["Washing", "Heat Pressing", "Trimming", "Cleaning", "UV Sterilization"],
        applications: ["Weddings", "Parties", "Picnics", "Catering"],
        certifications: ["Bio-degradable", "Compostable"],
      },
      {
        name: "Square Plates",
        desc: "Modern square design for a premium dining experience.",
        image: "/areca/8-inch-square-areca-leaf-plate-1661239194-6493900.jpeg",
        images: ["/areca/8-inch-square-areca-leaf-plate-1661239194-6493900.jpeg"],
        specifications: {
          material: "Natural Palm Leaf Plate",
          shape: "Square",
          style: "Modern",
          quality: "International Standard",
          grade: "TOP Grade",
          advantage: "100% Natural, Eco-friendly, Biodegradable"
        },
        subItems: [
          {
            name: "Areca Palm Leaf Square Plate",
            image: "/areca/8-inch-square-areca-leaf-plate-1661239194-6493900.jpeg",
            price: "Get Latest Price",
            details: {
              "Material": "Natural Palm Leaf Plate",
              "Plate Type": "Plate Dish",
              "Feature": "Disposable, Eco-Friendly, Stocked",
              "Shape": "Square",
              "Style": "Modern",
              "Pattern Type": "Plant",
              "Occasion": "Party",
              "Technique": "Engraving",
              "Dinnerware Type": "Dishes & Plates",
              "Model Number": "12",
              "Place of Origin": "Tamil Nadu, India",
              "Brand Name": "RR Esculents",
              "Raw Material": "100% Naturally Fallen Leaf",
              "Color": "Natural Color",
              "Size": "3\" to 10\"",
              "Packing": "Shrink Wrap, Carton Box"
            },
            description: "100% Natural, Eco-friendly, Biodegradable Areca Palm Leaf Square Plates. Grade: TOP Grade. Quality: International Standard. Perfect for Tableware and Party dinnerware.",
            additionalInfo: "Lead Time: 10 days for up to 2,00,000 pcs | Single Gross Weight: 0.200 kg | Customization: Logo, Packaging, and Graphics (Min. 100 pcs)"
          }
        ],
        process: ["Leaf Selection", "Pressing", "Cutting", "Sterilizing"],
        applications: ["Fine Dining", "Corporate Events", "Buffets"],
        certifications: ["FDA Approved"],
      },
      {
        name: "Areca Bowls",
        desc: "Sturdy bowls for soups, curries, and desserts.",
        image: "/areca/biodegradable-dinnerware-made-from-areca-leaf-sheath.jpg",
        images: ["/areca/download.jpg", "/areca/biodegradable-dinnerware-made-from-areca-leaf-sheath.jpg"],
        specifications: {
          material: "Natural Palm Leaf Plates",
          shape: "Square/Round",
          feature: "Disposable, Eco-Friendly, Stocked",
          quality: "International Standard",
          grade: "TOP Grade"
        },
        subItems: [
          {
            name: "Areca Palm Leaf Bowl",
            image: "/areca/biodegradable-dinnerware-made-from-areca-leaf-sheath.jpg",
            price: "Get Latest Price",
            details: {
              "Material": "Natural Palm Leaf Plates",
              "Plate Type": "Plate Dish",
              "Feature": "Disposable, Eco-Friendly, Stocked",
              "Shape": "Square",
              "Style": "Modern",
              "Pattern Type": "Plant",
              "Occasion": "Party",
              "Technique": "Engraving",
              "Dinnerware Type": "Dishes & Plates",
              "Model Number": "18",
              "Place of Origin": "Tamil Nadu, India",
              "Brand Name": "RR Esculents",
              "Raw Material": "100% Naturally Fallen Leaf",
              "Color": "Natural Color",
              "Size": "3\" to 10\"",
              "Packing": "Shrink Wrap, Carton Box",
              "Port of Dispatch": "Tuticorin / Chennai"
            },
            description: "Premium Areca Palm Leaf Bowls, 100% Natural and Biodegradable. International Standard quality with TOP Grade finish. Ideal for soup, desserts, and party tableware.",
            additionalInfo: "Packaging: Shrink wrapped in counts of 25 with Silica Gel. Export quality carton boxes. Customization available for Logo and Graphic (Min. 100 pcs)."
          }
        ],
        process: ["Deep Mold Pressing", "Edge Trimming", "Quality Check"],
        applications: ["Soups", "Ice Cream", "Salads", "Sauces"],
        certifications: ["Food Grade"],
      },
      {
        name: "Compartment Plates",
        desc: "Meal trays with partitions, perfect for Thalis and combo meals.",
        image: "/areca/download (1).jpg",
        images: ["/areca/download (1).jpg"],
        specifications: {
          partitions: "3, 4, or 5 CP",
          material: "Natural Palm Leaf",
          feature: "Sturdy / Leak Proof",
          quality: "International Standard",
        },
        subItems: [
          {
            name: "3-Compartment Areca Plate",
            image: "/areca/download (1).jpg",
            price: "Get Price",
            details: {
              "Partitions": "3 CP",
              "Size": "10\" x 12\"",
              "Shape": "Rectangular",
              "Grade": "TOP Grade",
              "Feature": "Disposable & Eco-Friendly"
            },
            description: "Traditional 3-compartment meal tray, perfect for serving a main dish and two sides. Extremely sturdy and leak-resistant.",
            additionalInfo: "Standard packing: 100 pcs per carton."
          },
          {
            name: "5-Compartment Areca Thali",
            image: "/areca/download (1).jpg",
            price: "Get Price",
            details: {
              "Partitions": "5 CP",
              "Size": "12\" Diameter",
              "Usage": "Full Indian Meals / Buffet",
              "Material": "100% Fallen Leaf",
              "Quality": "Premium"
            },
            description: "Large 5-compartment thali plate, designed for full multicourse meals. Provides an elegant, eco-friendly alternative to plastic trays.",
            additionalInfo: "Heat resistant up to 200°C. Microwave safe."
          }
        ],
        process: ["Precision Molding", "Trimming", "Sanitizing"],
        applications: ["Indian Thali", "Lunch Combos", "School Meals"],
        certifications: ["Eco-friendly"],
      },
      {
        name: "Cutlery & Spoons",
        desc: "Eco-friendly wooden/areca spoons and forks to match.",
        image: "/areca/Gemini_Generated_Image_4yedmu4yedmu4yed.png",
        images: ["/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg"],
        specifications: {
          items: "Spoons, Forks, Knives",
          finish: "Smooth / Splinter-free",
          material: "Birchwood / Areca Sheath",
        },
        subItems: [
          {
            name: "Premium Areca Spoon",
            image: "/areca/Gemini_Generated_Image_4yedmu4yedmu4yed.png",
            price: "Export Quality",
            details: {
              "Material": "Areca Leaf Sheath",
              "Length": "16 cm",
              "Finish": "Natural Polish",
              "Biodegradable": "100%",
              "Brand": "RR Esculents"
            },
            description: "Sturdy and elegant spoons made from the thickest part of the areca leaf. Much stronger than wooden equivalents.",
            additionalInfo: "Packed in 50s for retail or bulk cartons for catering."
          },
          {
            name: "Birchwood Cutlery Set",
            image: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
            price: "Bulk Rate",
            details: {
              "Set Includes": "Spoon, Fork, Knife",
              "Material": "Sustainably Sourced Birch",
              "Length": "14 cm",
              "Chemicals": "None",
              "Standard": "Food Grade"
            },
            description: "Sleek and smooth birchwood cutlery sets. A cost-effective and 100% compostable solution for takeaways and events.",
            additionalInfo: "Custom engraving available on the handles."
          }
        ],
        process: ["Cutting", "Polishing", "Sterilization"],
        applications: ["Takeaway", "Parties", "Events"],
        certifications: ["Compostable"],
      },
      {
        name: "Takeaway Containers",
        desc: "Lidded boxes for sustainable food packaging.",
        image: "/areca/disposable-areca-food-container-472.jpg",
        images: ["/areca/disposable-areca-food-container-472.jpg"],
        specifications: {
          volume: "250ml - 1000ml",
          lid: "Interlocking / Tight Fit",
          microwave: "Yes",
          freezer: "Yes",
        },
        subItems: [
          {
            name: "500ml Areca Meal Box",
            image: "/areca/disposable-areca-food-container-472.jpg",
            price: "Best Quote",
            details: {
              "Volume": "500 ml",
              "Size": "15 x 10 x 5 cm",
              "Lid Type": "Matching Areca Lid",
              "Oil Resistance": "High",
              "Leak Proof": "Yes"
            },
            description: "Eco-friendly food container with a secure lid. Keeps food warm and prevents leaks without the need for plastic linings.",
            additionalInfo: "Perfect for gravies and hot takeaways."
          },
          {
            name: "1000ml Family Pack Box",
            image: "/areca/disposable-areca-food-container-472.jpg",
            price: "Best Quote",
            details: {
              "Volume": "1000 ml",
              "Dimensions": "20 x 15 x 6 cm",
              "Strength": "Reinforced Edges",
              "Eco Feature": "Home Compostable",
              "Quality": "TOP Grade"
            },
            description: "Extra-large takeaway box for family-sized portions. Maintains structural integrity even with heavy, moist foods.",
            additionalInfo: "Min order: 5000 pcs for custom branding."
          }
        ],
        process: ["Box Forming", "Lid Molding", "Fitting Check"],
        applications: ["Food Delivery", "Meal Prep", "Restaurants"],
        certifications: ["Food Safe"],
      },],
    features: [
      "Microwave safe",
      "Chemical free",
      "Compostable",
      "Oven safe to 200°C",
      "Leak resistant",
      "FDA approved",
    ],
    certifications: ["FDA", "ISO 22000", "Compostable Certified", "FSC"],
    // exportMarkets: ["USA", "Canada", "Europe", "UAE", "Singapore"],
  },
  {
    id: "cashew",
    name: "Cashew-Products",
    tagline: "Premium Taste, Naturally Healthy",
    description: "High-quality raw and processed cashew nuts. Vietnamese industry standards: TCVN 4850, AFI, CENTA, and CEPCI specifications.",
    image: "/casu/image031.jpg",
    heroImage: "/casu/pexels-photo-1295572.jpeg",
    galleryImages: [
      "/casu/image005.jpg",
      "/casu/image013.jpg",
      "/casu/image015.jpg",
      "/casu/image025.jpg",
      "/casu/21.jpg",
      "/casu/25.jpg",
      "/casu/26.png",
      "/casu/27.png",
      "/casu/28.png",
      "/casu/29.png",
      "/casu/30.png",
      "/casu/31.png",
      "/casu/32.jpg",
      "/casu/33.png",
      "/casu/34.png",
      "/casu/35.png",
      "/casu/36.jpg",
    ],
    items: [
      {
        name: "Whole White Kernels",
        desc: "Premium whole cashew kernels (WW-180, WW-210, WW-240, WW-320, WW-450, WW-500).",
        image: "/casu/image019.png",
        images: ["/casu/image019.png", "/casu/image015.jpg", "/casu/image021.jpg"],
        specifications: {
          "Nutritional Quality": "High",
          "Testa Color": "Reddish-brown / Pink",
          "Kernel Color": "White",
          "Water Content": "5.90 gm / 100gm",
          "Protein": "21.00 gm / 100gm",
          "Fat": "47.0 gm / 100gm",
          "Carbohydrates": "22.00 gm / 100gm"
        },
        subItems: [
          {
            name: "WW-180 White Whole",
            image: "/casu/image019.png",
            price: "Premium Grade",
            details: {
              "Grade": "WW-180 (King of Cashew)",
              "Count per kg": "266 – 395 nuts",
              "Count per lb": "140 – 180 nuts",
              "Iron": "5.00 gm",
              "Potassium": "0.57 gm",
              "Calcium": "0.55 gm",
              "Phosphorus": "0.45 gm"
            },
            description: "The largest and premium grade of cashew kernels. White, high nutritional quality with a smooth finish.",
            additionalInfo: "Vietnam Grade Standard: TCVN 4850 1998. Source: FAO.org"
          },
          {
            name: "WW-210 White Whole",
            image: "/casu/image019.png",
            price: "Large Grade",
            details: {
              "Grade": "WW-210",
              "Count per kg": "395 – 465 nuts",
              "Count per lb": "180 – 210 nuts",
              "Protein": "21.00 gm",
              "Fat": "47.0 gm",
              "Carbohydrates": "22.00 gm"
            },
            description: "Large white wholes, excellent for premium snacking and gifting.",
            additionalInfo: "Vietnam Grade Standard. Nutritional high quality kernels."
          },
          {
            name: "WW-240 White Whole",
            image: "/casu/image019.png",
            price: "Popular Grade",
            details: {
              "Grade": "WW-240",
              "Count per kg": "485 – 530 nuts",
              "Count per lb": "220 – 240 nuts",
              "Iron": "5.00 gm",
              "Potassium": "0.57 gm"
            },
            description: "Commonly used in cooking and high-end confectionery. White, whole kernels.",
            additionalInfo: "AFI standard grade. Premium whole-grain kernel."
          },
          {
            name: "WW-320 White Whole",
            image: "/casu/image019.png",
            price: "Standard Grade",
            details: {
              "Grade": "WW-320",
              "Count per kg": "660 – 706 nuts",
              "Count per lb": "300 – 320 nuts",
              "Water": "5.90 gm",
              "Protein": "21.00 gm"
            },
            description: "The most widely used grade for snack packs and processed foods.",
            additionalInfo: "CEPCI standard specifications. High nutrition white wholes."
          }
        ],
        process: ["Harvesting", "Shelling", "Peeling", "Grading", "Packing"],
        applications: ["Snacking", "Cooking", "Desserts", "Gifting"],
        certifications: ["FSSAI", "ISO 22000"],
      },
      {
        name: "Plain Roasted Nuts",
        desc: "Dry roasted to perfection for a crunchy, oil-free healthy snack.",
        image: "/casu/image025.jpg",
        images: ["/casu/image025.jpg", "/casu/image029.png"],
        specifications: {
          roastLevel: "Medium / Dark",
          processing: "Oil-free Dry Roasted",
          salt: "0% (Unsalted)",
          shelfLife: "9-12 months",
        },
        subItems: [
          {
            name: "Medium Roasted Cashews",
            image: "/casu/image025.jpg",
            price: "Premium Grade",
            details: {
              "Roast Level": "Medium",
              "Nutrient Retention": "Maximum",
              "Crunch": "High",
              "Color": "Golden Brown",
              "Additive": "None"
            },
            description: "Lightly roasted to bring out the natural sweetness of the cashew while maintaining its nutritional value. Perfect for healthy snacking.",
            additionalInfo: "Vacuum packed to maintain freshness. Grade: WW-240/320."
          },
          {
            name: "Dark Roasted Cashews",
            image: "/casu/image029.png",
            price: "Premium Grade",
            details: {
              "Roast Level": "Dark / Bold",
              "Aroma": "Intense Nutty",
              "Texture": "Extra Crunchy",
              "Color": "Deep Brown",
              "Serving": "Gourmet / Trail Mix"
            },
            description: "Deeply roasted for a move intense, smoky flavor profile. A favorite for those who prefer an extra crunchy bite.",
            additionalInfo: "Zero oil used in the roasting process."
          }
        ],
        process: ["Grading", "Roasting", "Cooling", "Packing"],
        applications: ["Diet Snack", "Trail Mix", "Salads"],
        certifications: ["HACCP", "Organic"],
      },
      {
        name: "Salted Nuts",
        desc: "Classic roasted cashews lightly seasoned with premium sea salt.",
        image: "/casu/21.jpg",
        images: ["/casu/21.jpg", "/casu/22.png", "/casu/23.png", "/casu/24.png"],
        specifications: {
          saltType: "Sea Salt / Himalayan Pink",
          roastType: "Dry Roasted",
          texture: "Crunchy",
        },
        subItems: [
          {
            name: "Sea Salt Roasted Cashews",
            image: "/casu/21.jpg",
            price: "Market Rate",
            details: {
              "Seasoning": "Pure Sea Salt",
              "Salt Content": "2% - 3%",
              "Base Nut": "WW-320",
              "Grade": "Export Quality",
              "Packing": "Nitrogen Flushed Pouches"
            },
            description: "The classic salted cashew. Lightly seasoned with fine sea salt to enhance the rich creaminess of the nut.",
            additionalInfo: "Custom salt levels available for bulk orders."
          }
        ],
        process: ["Roasting", "Seasoning", "Quality Check", "Packing"],
        applications: ["Party Snack", "Bar Snack", "Gifting"],
        certifications: ["FSSAI"],
      },
      {
        name: "Namkeen Spicy Nuts",
        desc: "Masala coated cashews for a burst of traditional Indian flavors.",
        image: "/casu/25.jpg",
        images: ["/casu/25.jpg", "/casu/26.png", "/casu/27.png", "/casu/28.png", "/casu/29.png"],
        specifications: {
          flavor: "Masala / Peri-Peri",
          spiceLevel: "Adjustable",
          coating: "Natural Spice Mix",
        },
        subItems: [
          {
            name: "Traditional Masala Cashew",
            image: "/casu/25.jpg",
            price: "Gourmet Rate",
            details: {
              "Spice Mix": "Traditional Indian Masala",
              "Flavor Profile": "Spicy & Tangy",
              "Spice Level": "Medium",
              "Preservatives": "None",
              "Oil Used": "Nil (Dry Coated)"
            },
            description: "A burst of traditional flavors using a secret blend of Indian spices including black pepper, chili, and mango powder.",
            additionalInfo: "Shelf life: 6 months in airtight packaging."
          },
          {
            name: "Peri-Peri Spicy Cashew",
            image: "/casu/28.png",
            price: "Gourmet Rate",
            details: {
              "Spice Mix": "African Bird's Eye Chili",
              "Flavor Profile": "Hot & Bold",
              "Spice Level": "High",
              "Texture": "Smooth Coating"
            },
            description: "For those who love heat! Coated with authentic Peri-Peri seasoning for a modern, spicy kick.",
            additionalInfo: "Popular among younger consumers and party events."
          }
        ],
        process: ["Roasting", "Spicing/Coating", "Drying", "Packing"],
        applications: ["Festive Snack", "Tea Time", "Gifting"],
        certifications: ["FSSAI"],
      },
      {
        name: "Other Uses of Cashew Nuts",
        desc: "Broken cashews, splits, and pieces for culinary and industrial use.",
        image: "/casu/30.png",
        images: ["/casu/37.png", "/casu/36.jpg", "/casu/32.jpg"],
        specifications: {
          grades: "WS, LWP, SWP, BB",
          color: "White / Scorched",
          suitability: "Industrial / Culinary",
        },
        subItems: [
          {
            name: "Cashew Splits (WS)",
            image: "/casu/31.png",
            price: "Economical",
            details: {
              "Grade": "WS (White Splits)",
              "Shape": "Half Kernels",
              "Usage": "Toppings / Sweets",
              "Cost Efficiency": "High",
              "Quality": "Same as Wholes"
            },
            description: "Whole kernels split lengthwise. Provides the same premium taste as whole cashews but at a more economical price point.",
            additionalInfo: "Ideal for Kaju Katli and high-end bakery products."
          },
          {
            name: "Large White Pieces (LWP)",
            image: "/casu/30.png",
            price: "Bulk Rate",
            details: {
              "Grade": "LWP",
              "Shape": "Broken Pieces",
              "Size": "2mm - 4mm",
              "Industrial Use": "Pastes / Confectionery",
              "Moisture": "< 5%"
            },
            description: "Broken white pieces ideal for manufacturing cashew butter, industrial confectionery, and commercial cooking.",
            additionalInfo: "Min order: 500kg for industrial pricing."
          }
        ],
        process: ["Sorting", "Grading", "Cleaning"],
        applications: ["Curries", "Sweets (Kaju Katli)", "Bakery"],
        certifications: ["ISO 22000"],
      }
    ],
    features: [
      "High Protein",
      "Heart Healthy Fats",
      "Crunchy Texture",
      "Grade A Quality",
      "No Preservatives",
      "Gluten Free",
    ],
    certifications: [
      "USDA Organic",
      "Fair Trade",
      "HACCP",
      "ISO 22000",
      "Kosher",
      "Halal",
    ],
    // exportMarkets: ["USA", "Europe", "Middle East", "China", "Canada"],
  },
];