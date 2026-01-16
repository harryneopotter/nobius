export interface ProductSpecs {
  frequencyResponse?: string;
  impedance?: string;
  sensitivity?: string;
  dimensions?: string;
  weight?: string;
  cabinetType?: string;
  drivers?: string;
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
  category: 'Bookshelf' | 'Monitor' | 'Bass Module';
  features: string[];
  specs: ProductSpecs;
}

export const products: Product[] = [
  {
    id: 's1-2',
    name: 'S1-2',
    slug: 's1-2',
    tagline: 'Starter Stereo, Vintage Soul',
    description: 'A 12.7L sealed monitor designed for the nearfield. Delivers fast transient response and tight bass control without port noise.',
    longDescription: 'The S1-2 is built on the belief that desktop audio shouldn\'t be an afterthought. By utilizing a 12.7-liter sealed enclosure, we prioritize transient speed and bass texture over artificial boominess. The phase-coherent crossover ensures a stable stereo image even at close listening distances.',
    price: '$899',
    image: '/images/products/s1-2.png',
    category: 'Monitor',
    features: ['Sealed Cabinet Architecture', 'Phase-Coherent Crossover', 'Warm / Reference Voicing Switch'],
    specs: {
      frequencyResponse: '55 Hz – 17 kHz (±3 dB)',
      impedance: '8 Ohms Nominal',
      sensitivity: '84-86 dB SPL (2.83V / 1m)',
      dimensions: '340mm x 200mm x 260mm',
      weight: '7.2 kg per speaker',
      cabinetType: 'Sealed (Acoustic Suspension)',
      drivers: '6.5" Paper Cone Woofer, 1" Silk Dome Tweeter',
    },
  },
  {
    id: 'n1-9',
    name: 'N1-9',
    slug: 'n1-9',
    tagline: 'Natural. Refined. Intimate.',
    description: 'Our premium compact bookshelf speaker. Engineered for transparency and emotional connection in smaller listening spaces.',
    longDescription: 'The N1-9 is the purest expression of the Nobius philosophy. It vanishes into the room, leaving only the music. Every component, from the crossover capacitors to the cabinet bracing, is selected to reduce coloration and enhance micro-dynamics.',
    price: '$1,299',
    image: '/images/products/n1-9.png',
    category: 'Bookshelf',
    features: ['Premium Drivers', 'Hand-Finished Walnut Veneer', 'Reference Quality Crossover Components'],
    specs: {
      frequencyResponse: '48 Hz – 22 kHz (±3 dB)',
      impedance: '6 Ohms Nominal',
      sensitivity: '85 dB SPL',
      dimensions: '320mm x 190mm x 280mm',
      weight: '8.5 kg per speaker',
      cabinetType: 'Rear Ported (Bass Reflex)',
      drivers: '5.25" Mineral-Loaded Poly Cone, 1" Ceramic Dome',
    },
  },
  {
    id: 'n2-5',
    name: 'N2-5',
    slug: 'n2-5',
    tagline: 'Contemporary Energy with Extended Bass',
    description: 'A contemporary bookshelf design with extended low-end response for a fuller, more energetic presentation.',
    longDescription: 'For those who want the Nobius clarity but need more impact. The N2-5 features a larger cabinet volume and a high-excursion woofer, making it capable of filling medium-sized rooms with ease.',
    price: '$1,599',
    image: '/images/products/n2-5.png',
    category: 'Bookshelf',
    features: ['Extended Bass Response', 'Modern Voicing', 'High Dynamic Range'],
    specs: {
      frequencyResponse: '42 Hz – 20 kHz (±3 dB)',
      impedance: '4 Ohms Nominal',
      sensitivity: '87 dB SPL',
      dimensions: '380mm x 220mm x 310mm',
      weight: '10.5 kg per speaker',
      cabinetType: 'Rear Ported',
      drivers: '7" Aluminum Cone Woofer, 1" Aluminum Dome Tweeter',
    },
  },
  {
    id: 'n1-9b',
    name: 'N1-9B',
    slug: 'n1-9b',
    tagline: 'The True 3-Way Transformation',
    description: 'A dedicated bass module that transforms the N1-9 into a full-range 3-way system.',
    longDescription: 'The N1-9B isn\'t just a subwoofer; it\'s the bottom half of a full-range system. Designed to sit perfectly beneath the N1-9, it integrates seamlessly via an active crossover, relieving the main speakers of bass duties for improved clarity.',
    price: '$999',
    image: '/images/products/n1-9b.png',
    category: 'Bass Module',
    features: ['Active Crossover Integration', 'Seamless Design Match', 'Deep Lows to 28Hz'],
    specs: {
      frequencyResponse: '28 Hz – 100 Hz',
      impedance: 'Active (Built-in Amplification)',
      sensitivity: 'N/A',
      dimensions: '450mm x 250mm x 400mm',
      weight: '18 kg',
      cabinetType: 'Sealed',
      drivers: '10" Long-Throw Paper Cone',
    },
  },
];
