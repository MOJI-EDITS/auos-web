export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  colors: string[];
  features: string[];
  specs: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Quantum Smartphone X1",
    description: "Experience the future of mobile technology with our revolutionary Quantum Smartphone X1. Featuring holographic display, quantum processing, and AI-powered personal assistant.",
    price: 1299.99,
    image: "📱",
    category: "Electronics",
    rating: 4.8,
    reviews: 1245,
    stock: 50,
    colors: ["Cosmic Black", "Stellar Silver", "Nebula Blue"],
    features: [
      "Holographic 3D Display",
      "Quantum Processing Unit",
      "AI Personal Assistant",
      "Biometric Security",
      "Wireless Charging"
    ],
    specs: {
      "Display": "6.7\" Holographic 3D",
      "Processor": "Quantum Q8",
      "RAM": "16GB",
      "Storage": "1TB",
      "Battery": "5000mAh",
      "Camera": "108MP Quad"
    }
  },
  {
    id: 2,
    name: "Neural Headset Pro",
    description: "Connect your mind to the digital world with our advanced Neural Headset Pro. Experience virtual reality like never before with direct neural interface technology.",
    price: 899.99,
    image: "🎮",
    category: "Gaming",
    rating: 4.9,
    reviews: 876,
    stock: 30,
    colors: ["Midnight Black", "Cyber Red"],
    features: [
      "Neural Interface",
      "8K Resolution",
      "Haptic Feedback",
      "Voice Control",
      "Brain-Computer Interface"
    ],
    specs: {
      "Resolution": "8K per eye",
      "Refresh Rate": "240Hz",
      "Field of View": "180°",
      "Latency": "<1ms",
      "Battery Life": "8 hours",
      "Weight": "350g"
    }
  },
  {
    id: 3,
    name: "Smart Home Hub Elite",
    description: "Transform your living space into a futuristic smart home with our all-in-one Smart Home Hub Elite. Control everything with voice commands and AI automation.",
    price: 499.99,
    image: "🏠",
    category: "Smart Home",
    rating: 4.7,
    reviews: 2341,
    stock: 100,
    colors: ["Pearl White", "Space Gray"],
    features: [
      "AI Home Assistant",
      "Voice Control",
      "Energy Management",
      "Security System",
      "Climate Control"
    ],
    specs: {
      "Processor": "AI Neural Engine",
      "Connectivity": "Wi-Fi 6E",
      "Compatibility": "All major platforms",
      "Sensors": "Temperature, Humidity, Motion",
      "Voice Recognition": "Multi-user",
      "Power": "AC/DC"
    }
  },
  {
    id: 4,
    name: "Drone Vision X",
    description: "Capture stunning aerial footage with our advanced Drone Vision X. Featuring AI-powered obstacle avoidance and 8K video recording capabilities.",
    price: 799.99,
    image: "🚁",
    category: "Drones",
    rating: 4.6,
    reviews: 567,
    stock: 25,
    colors: ["Carbon Black", "Arctic White"],
    features: [
      "8K Video Recording",
      "AI Obstacle Avoidance",
      "30km Range",
      "40min Flight Time",
      "Follow Me Mode"
    ],
    specs: {
      "Camera": "8K 60fps",
      "Battery": "5000mAh",
      "Range": "30km",
      "Max Speed": "72km/h",
      "Weight": "800g",
      "Charging Time": "60min"
    }
  },
  {
    id: 5,
    name: "Smart Watch Ultra",
    description: "Stay connected and monitor your health with our feature-packed Smart Watch Ultra. Advanced health tracking and seamless smartphone integration.",
    price: 399.99,
    image: "⌚",
    category: "Wearables",
    rating: 4.5,
    reviews: 1892,
    stock: 75,
    colors: ["Black", "Silver", "Rose Gold"],
    features: [
      "Health Monitoring",
      "Fitness Tracking",
      "Smart Notifications",
      "Water Resistant",
      "Long Battery Life"
    ],
    specs: {
      "Display": "1.5\" AMOLED",
      "Battery": "14 days",
      "Water Resistance": "50m",
      "Sensors": "Heart Rate, SpO2, ECG",
      "Connectivity": "Bluetooth 5.2",
      "Weight": "45g"
    }
  }
]; 