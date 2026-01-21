export interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: string;
  image: string;
  category: string;
  features: string[];
  specs: ProductSpecs;
}

export const products: Product[] = [
  {
    "id": "n1-9",
    "name": "N1-9",
    "slug": "n1-9",
    "tagline": "The Reference Monitor",
    "description": "A BBC-inspired classic designed for absolute tonal honesty. The N1-9 vanishes into the room, leaving only the music.",
    "longDescription": "Reference Voicing\nClassic, linear, and vocal-forward. A BBC-inspired monitor designed for long sessions, vintage sources, and honest midrange reproduction.",
    "price": "$TBD",
    "image": "/images/products/n1-9.jpg",
    "category": "Speakers",
    "features": ["BBC-inspired voicing", "Paper cone midrange", "Baltic Birch cabinet"],
    "specs": {
      "frequencyResponse": "45Hz - 20kHz (-3dB)",
      "sensitivity": "87dB @ 1W/1m",
      "impedance": "8 Ohms nominal",
      "cabinetType": "Sealed (Acoustic Suspension)",
      "drivers": "6.5\" Paper Cone Woofer, 1\" Silk Dome Tweeter",
      "dimensions": "14\" H x 8\" W x 10\" D",
      "weight": "18 lbs each"
    }
  },
  {
    "id": "n2-5",
    "name": "N2-5",
    "slug": "n2-5",
    "tagline": "Modern Energy",
    "description": "Clean, room-filling authority. An evolution of our sound with extended bass response and greater power handling.",
    "longDescription": "Modern Balance\nClean, composed, and room-filling. A more refined evolution with increased scale, modern neutrality, and greater power handling.",
    "price": "$TBD",
    "image": "/images/products/n2-5.jpg",
    "category": "Speakers",
    "features": ["Modern neutral voicing", "Extended bass response", "High power handling"],
    "specs": {
      "frequencyResponse": "38Hz - 22kHz (-3dB)",
      "sensitivity": "89dB @ 1W/1m",
      "impedance": "6 Ohms nominal",
      "cabinetType": "Ported (Bass Reflex)",
      "drivers": "7\" Treated Paper Woofer, 1\" Beryllium Dome Tweeter",
      "dimensions": "16\" H x 9\" W x 12\" D",
      "weight": "24 lbs each"
    }
  },
  {
    "id": "n1-9-bass",
    "name": "N1-9 Bass",
    "slug": "n1-9-bass",
    "tagline": "Bass Extension Module",
    "description": "Transforms the N1-9 into a full-range 3-way system. Adds weight and scale while preserving signature clarity.",
    "longDescription": "Bass Extension Module\nA dedicated low-frequency foundation that transforms the N1-9 into a true three-way system. Adds weight, scale, and dynamic impact while preserving the N1-9's signature clarity.",
    "price": "$TBD",
    "image": "/images/products/n1-9b.png",
    "category": "Speakers",
    "features": ["Dedicated subwoofer module", "Matches N1-9 aesthetics", "Passive design"],
    "specs": {
      "frequencyResponse": "28Hz - 150Hz",
      "sensitivity": "86dB @ 1W/1m",
      "impedance": "4 Ohms nominal",
      "cabinetType": "Sealed",
      "drivers": "10\" Long-throw Woofer",
      "dimensions": "20\" H x 12\" W x 14\" D",
      "weight": "32 lbs"
    }
  },
  {
    "id": "s1-2",
    "name": "S1-2",
    "slug": "s1-2",
    "tagline": "Vintage Soul",
    "description": "Punchy, fast, and incredibly fun. A sealed nearfield monitor that prioritizes rhythm and texture.",
    "longDescription": "Starter Stereo, Vintage Soul\nPunchy, compact, and fun. A sealed bookshelf with surprising bass presence and adjustable high-frequency voicing for small rooms and nearfield listening.",
    "price": "$2499",
    "image": "/images/products/s1-2-hero.jpg",
    "category": "Speakers",
    "features": ["Sealed nearfield design", "Adjustable HF voicing", "Compact footprint"],
    "specs": {
      "frequencyResponse": "55Hz - 20kHz (-3dB)",
      "sensitivity": "85dB @ 1W/1m",
      "impedance": "8 Ohms nominal",
      "cabinetType": "Sealed (Acoustic Suspension)",
      "drivers": "5.25\" Paper Cone Woofer, 0.75\" Silk Dome Tweeter",
      "dimensions": "11\" H x 7\" W x 9\" D",
      "weight": "12 lbs each"
    }
  },
  {
    "id": "cable-riser",
    "name": "Cable riser",
    "slug": "cable-riser",
    "tagline": "1, 2 or 3 cable riser, 2",
    "description": "1, 2 or 3 cable riser, 2.5 to 6 inches",
    "longDescription": "1, 2 or 3 cable riser, 2.5 to 6 inches",
    "price": "$TBD",
    "image": "/images/placeholder.jpg",
    "category": "Audio Tools",
    "features": [],
    "specs": {}
  },
  {
    "id": "speaker-riser",
    "name": "Speaker riser",
    "slug": "speaker-riser",
    "tagline": "+/- 8 or +/- 13 or 0 degree riser",
    "description": "+/- 8 or +/- 13 or 0 degree riser",
    "longDescription": "+/- 8 or +/- 13 or 0 degree riser",
    "price": "$TBD",
    "image": "/images/placeholder.jpg",
    "category": "Audio Tools",
    "features": [],
    "specs": {}
  },
  {
    "id": "spiral-stands",
    "name": "Spiral Stands",
    "slug": "spiral-stands",
    "tagline": "Elegant Modular Design",
    "description": "Customizable spiral speaker stands with adjustable height. Combines minimalist aesthetics with exceptional stability.",
    "longDescription": "Our Spiral Stands feature a unique helical design that provides both rigidity and visual elegance. The modular construction allows height adjustment to optimize speaker placement for your listening position. Available in multiple finishes to complement any décor.",
    "price": "$TBD",
    "image": "/images/products/spiral-stands.jpg",
    "category": "Stands",
    "features": ["Adjustable height", "Modular design", "Vibration dampening", "Multiple finishes"],
    "specs": {
      "material": "Powder-coated steel",
      "heightRange": "24\" - 36\" adjustable",
      "baseDiameter": "12\"",
      "loadCapacity": "50 lbs per stand",
      "weight": "15 lbs each"
    }
  },
  {
    "id": "space-saver",
    "name": "Space Saver",
    "slug": "space-saver",
    "tagline": "Complete Audio Solution",
    "description": "All-in-one stand system integrating receiver, amplifier, and bookshelf speakers in a compact footprint.",
    "longDescription": "The Space Saver is our most versatile stand system, designed for complete audio setups in compact spaces. Each shelf is independently adjustable with vibration-dampening rubber isolation. Perfect for apartments, offices, or anywhere space is at a premium.",
    "price": "$TBD",
    "image": "/images/products/space-saver.jpg",
    "category": "Stands",
    "features": ["Integrated equipment shelves", "Compact footprint", "Speaker platforms", "Cable management"],
    "specs": {
      "dimensions": "36\" H x 24\" W x 16\" D",
      "material": "Steel frame with MDF shelves",
      "loadCapacity": "75 lbs per shelf",
      "shelves": "3 adjustable shelves",
      "assembly": "30 minutes, tools included"
    }
  },
  {
    "id": "n2-5",
    "name": "N2-5",
    "slug": "n2-5",
    "tagline": "WLM La Scala Baffle on the MDF V2",
    "description": "WLM La Scala Baffle on the MDF V2",
    "longDescription": "WLM La Scala Baffle on the MDF V2",
    "price": "$TBD",
    "image": "/images/placeholder.jpg",
    "category": "Speakers",
    "features": [],
    "specs": {}
  },
  {
    "id": "n5-2",
    "name": "N5-2",
    "slug": "n5-2",
    "tagline": "2-Way Large bookshelf or floor stander for musicality and depth",
    "description": "2-Way Large bookshelf or floor stander for musicality and depth. Sealed. ",
    "longDescription": "2-Way Large bookshelf or floor stander for musicality and depth. Sealed. ",
    "price": "$TBD",
    "image": "/images/placeholder.jpg",
    "category": "Speakers",
    "features": [],
    "specs": {}
  },
  {
    "id": "s1-7",
    "name": "S1-7",
    "slug": "s1-7",
    "tagline": "Starter/Stereo series for phase alignment and timing",
    "description": "Starter/Stereo series for phase alignment and timing. Sealed",
    "longDescription": "Starter/Stereo series for phase alignment and timing. Sealed",
    "price": "$TBD",
    "image": "/images/placeholder.jpg",
    "category": "Speakers",
    "features": [],
    "specs": {}
  }
];
