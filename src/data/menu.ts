export interface MenuItemSize {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  sizes?: MenuItemSize[];
  flavours?: string[];
  extras?: { name: string; price: number }[];
  image: string;
  badge?: string;
  isSignature?: boolean;
  isBestSeller?: boolean;
  spicyLevel?: 1 | 2 | 3;
}

export interface DealItem {
  id: string;
  title: string;
  price: number;
  description: string;
  badge: string;
  image: string;
  items: string[];
  serves: string;
}

export const CATEGORIES = [
  { id: "all", name: "All Items", icon: "Utensils" },
  { id: "signature", name: "Signatures", icon: "Flame" },
  { id: "burgers", name: "Burgers", icon: "Sandwich" },
  { id: "broast", name: "Injected Broast", icon: "Drumstick" },
  { id: "deep-dish", name: "Deep Dish Pizza", icon: "Pizza" },
  { id: "special-pizza", name: "Special Pizza", icon: "Sparkles" },
  { id: "regular-pizza", name: "Regular Pizza", icon: "PieChart" },
  { id: "shawarma-wraps", name: "Shawarma & Wraps", icon: "Wrap" },
  { id: "rolls-sandwiches", name: "Rolls & Sandwiches", icon: "Layers" },
  { id: "fries-sides", name: "Fried & Fries", icon: "FrenchFries" },
  { id: "pasta-fish", name: "Pasta & Fish", icon: "Fish" },
  { id: "deals", name: "Special Deals", icon: "Tag" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // BEEF SMASH BURGER (Signature)
  {
    id: "beef-smash",
    name: "Beef Smash Burger",
    category: "signature",
    description: "Lacy-crisp edged 100% pure beef patties smashed on searing chrome, smothered in molten American cheddar, caramelized onions, house pickles and secret smash sauce.",
    price: 580,
    sizes: [
      { name: "Single Patty 120g", price: 580 },
      { name: "Double Patty 240g", price: 830 },
    ],
    image: "/images/smash-burger.jpg",
    badge: "House Specialty",
    isSignature: true,
    isBestSeller: true,
  },

  // BURGER CLUB (Chicken Eatery)
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    category: "burgers",
    description: "Golden crispy fried whole chicken fillet coated in spicy herb batter, crunchy iceberg lettuce, melted cheese, and creamy zesty mayo.",
    price: 430,
    image: "/images/zinger-burger.jpg",
    badge: "Top Seller",
    isBestSeller: true,
  },
  {
    id: "mighty-zinger",
    name: "Mighty Zinger Burger",
    category: "burgers",
    description: "Double crispy zinger chicken fillets stacked with double cheddar cheese, lettuce, and fiery secret sauce on a toasted sesame bun.",
    price: 680,
    image: "/images/zinger-burger.jpg",
    badge: "Big Appetite",
  },
  {
    id: "grill-burger",
    name: "Grill Burger",
    category: "burgers",
    description: "Char-grilled juicy seasoned chicken breast patty infused with smoked BBQ spices, fresh onions, tomatoes and garlic mayo.",
    price: 550,
    image: "/images/smash-burger.jpg",
  },
  {
    id: "grill-jalapeno-burger",
    name: "Grill Jalapeno Burger",
    category: "burgers",
    description: "Fire-grilled chicken fillet glazed in hot chipotle marinade, topped with sliced jalapenos and melted pepper jack cheese.",
    price: 550,
    image: "/images/smash-burger.jpg",
    spicyLevel: 2,
  },
  {
    id: "filly-burger",
    name: "Filly Burger",
    category: "burgers",
    description: "Tender shredded chicken fillet steak stir-fried with bell peppers, onions, melted cheese, and rich creamy cheese sauce.",
    price: 500,
    image: "/images/zinger-burger.jpg",
  },
  {
    id: "patty-burger",
    name: "Patty Burger",
    category: "burgers",
    description: "Classic golden fried minced chicken patty with crisp greens, tomato slice, and special signature mayo sauce.",
    price: 280,
    image: "/images/zinger-burger.jpg",
  },

  // INJECTED BROAST
  {
    id: "injected-broast",
    name: "Injected Broast",
    category: "broast",
    description: "Deeply marinated chicken pieces injected with Cheezy Bite secret spice brine, pressure-fried till shatteringly crisp outside and bursting with succulent juice inside.",
    price: 650,
    sizes: [
      { name: "Quarter (1 Leg, 1 Thigh, 1 Bun, Fries, 1 Dip)", price: 650 },
      { name: "Half (2 Leg, 2 Thigh, 1 Bun, Fries, 1 Dip)", price: 1200 },
      { name: "Full (4 Leg, 4 Thigh, 2 Bun, Fries, 1 Dip)", price: 2250 },
    ],
    extras: [
      { name: "Extra Dip Sauce", price: 70 },
      { name: "Extra Dinner Bun", price: 50 },
    ],
    image: "/images/injected-broast.jpg",
    badge: "Signature Must-Try",
    isSignature: true,
    isBestSeller: true,
  },

  // SIGNATURE DEEP DISH PIZZA
  {
    id: "deep-dish-pizza",
    name: "Signature Deep Dish Pizza",
    category: "deep-dish",
    description: "Authentic Chicago-style tall buttery crust loaded with over half a kilo of stretchy premium mozzarella, rich slow-simmered tomato sauce, and herb topping.",
    price: 1449,
    sizes: [
      { name: 'Medium 7"', price: 1449 },
      { name: 'Large 10"', price: 2499 },
    ],
    flavours: ["Cheezy Bite Special (Ranch)", "Peri Peri", "Spicy B.B.Q"],
    image: "/images/deep-dish-pizza.jpg",
    badge: "Kasur Famous",
    isSignature: true,
    isBestSeller: true,
  },

  // SPECIAL PIZZA (Medium 1300, Large 1800, no small size)
  {
    id: "special-pizza-cheezy-bite",
    name: "Cheezy Bite Special Pizza",
    category: "special-pizza",
    description: "Chef specialty loaded with smoked chicken tikka, spicy fajita strips, mushrooms, black olives, bell peppers and triple layer mozzarella cheese.",
    price: 1300,
    sizes: [
      { name: "Medium (No Small Available)", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
    badge: "Chef Pick",
    isBestSeller: true,
  },
  {
    id: "special-pizza-crown-crust",
    name: "Crown Crust Pizza",
    category: "special-pizza",
    description: "Regal crown-shaped folded crust stuffed with spiced chicken meatballs and creamy dip, topped with loaded mozzarella and chicken chunks.",
    price: 1300,
    sizes: [
      { name: "Medium", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "special-pizza-cheese-crust",
    name: "Cheese Crust Pizza",
    category: "special-pizza",
    description: "Outer ring infused with oozing warm mozzarella cheese ropes, center laden with savory toppings, olives, and golden melted cheese.",
    price: 1300,
    sizes: [
      { name: "Medium", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "special-pizza-malai-boti",
    name: "Malai Boti Special Pizza",
    category: "special-pizza",
    description: "Melt-in-mouth creamy malai boti chicken chunks over rich garlic mayo base, topped with sweet onions and gooey cheese.",
    price: 1300,
    sizes: [
      { name: "Medium", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "special-pizza-super-supreme",
    name: "Super Supreme Pizza",
    category: "special-pizza",
    description: "The ultimate feast featuring pepperoni slices, minced chicken, mushrooms, onions, capsicum, and endless mozzarella pull.",
    price: 1300,
    sizes: [
      { name: "Medium", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "special-pizza-behari-kabab",
    name: "Behari Kabab Pizza",
    category: "special-pizza",
    description: "Tender Bihari-spiced charcoal kabab chunks with pickled onions, mint cream drizzle, and bubbling melted cheese.",
    price: 1300,
    sizes: [
      { name: "Medium", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "special-pizza-calzone",
    name: "Calzone Folded Pizza",
    category: "special-pizza",
    description: "Italian folded golden crust pocket stuffed to the brim with spiced chicken, sauteed veggies, and melted Italian cheeses.",
    price: 1300,
    sizes: [
      { name: "Medium", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "special-pizza-kabab-stuffer",
    name: "Kabab Stuffer Pizza",
    category: "special-pizza",
    description: "Full Seekh Kababs rolled inside the crust edge with smoky chicken boti in center, blanketed in cheese.",
    price: 1300,
    sizes: [
      { name: "Medium", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "special-pizza-lazania",
    name: "Lazania Pizza",
    category: "special-pizza",
    description: "Decadent lasagna layers on pizza dough: bolognese sauce, white béchamel drizzle, tender chicken bits, and golden baked cheese.",
    price: 1300,
    sizes: [
      { name: "Medium", price: 1300 },
      { name: "Large", price: 1800 },
    ],
    image: "/images/special-pizza.jpg",
  },

  // REGULAR PIZZA (S 600, M 1050, L 1450)
  {
    id: "regular-pizza-tikka",
    name: "Chicken Tikka Pizza",
    category: "regular-pizza",
    description: "Traditional tandoori chicken tikka cubes, sliced red onions, capsicum, savory pizza sauce, and rich mozzarella.",
    price: 600,
    sizes: [
      { name: "Small", price: 600 },
      { name: "Medium", price: 1050 },
      { name: "Large", price: 1450 },
    ],
    image: "/images/special-pizza.jpg",
    badge: "Popular Classic",
  },
  {
    id: "regular-pizza-fajita",
    name: "Chicken Fajita Pizza",
    category: "regular-pizza",
    description: "Mexican spiced fajita chicken chunks, colorful bell peppers, sweet caramelized onions, and bubbly mozzarella.",
    price: 600,
    sizes: [
      { name: "Small", price: 600 },
      { name: "Medium", price: 1050 },
      { name: "Large", price: 1450 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "regular-pizza-cheeze",
    name: "Chicken Cheeze Pizza",
    category: "regular-pizza",
    description: "Extra loaded double mozzarella blend over herb-seasoned tender chicken pieces and zesty Italian pizza sauce.",
    price: 600,
    sizes: [
      { name: "Small", price: 600 },
      { name: "Medium", price: 1050 },
      { name: "Large", price: 1450 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "regular-pizza-bbq",
    name: "BBQ Chicken Pizza",
    category: "regular-pizza",
    description: "Smoky sweet BBQ glazed chicken strips, red onions, cilantro garnish, and melted gooey cheese.",
    price: 600,
    sizes: [
      { name: "Small", price: 600 },
      { name: "Medium", price: 1050 },
      { name: "Large", price: 1450 },
    ],
    image: "/images/special-pizza.jpg",
  },
  {
    id: "regular-pizza-veg",
    name: "Vegetable Garden Pizza",
    category: "regular-pizza",
    description: "Crisp bell peppers, sweet corn, mushrooms, fresh onions, black olives, and melted mozzarella on golden crust.",
    price: 600,
    sizes: [
      { name: "Small", price: 600 },
      { name: "Medium", price: 1050 },
      { name: "Large", price: 1450 },
    ],
    image: "/images/special-pizza.jpg",
  },

  // SHAWARMA
  {
    id: "shawarma-cheezy-bite",
    name: "Cheezy Bite Special Shawarma",
    category: "shawarma-wraps",
    description: "Stacked spit-roasted chicken shavings, melted cheddar cheese, house toum garlic sauce, and crisp fries wrapped in toasted pita.",
    price: 450,
    image: "/images/shawarma.jpg",
    badge: "Must Try",
    isBestSeller: true,
  },
  {
    id: "shawarma-chicken",
    name: "Chicken Shawarma",
    category: "shawarma-wraps",
    description: "Authentic Lebanese style shredded roasted chicken, pickled cucumbers, tahini, and garlic mayo in warm pita.",
    price: 300,
    image: "/images/shawarma.jpg",
  },
  {
    id: "shawarma-zinger",
    name: "Zinger Shawarma",
    category: "shawarma-wraps",
    description: "Crunchy fried zinger chicken tenders wrapped in pita with garlic sauce, melted cheese, and shredded iceberg.",
    price: 430,
    image: "/images/shawarma.jpg",
  },
  {
    id: "shawarma-chicken-platter",
    name: "Chicken Platter",
    category: "shawarma-wraps",
    description: "Generous serving of slow-roasted chicken shavings, crispy golden fries, fresh coleslaw, pickles, and 2 pita breads.",
    price: 650,
    image: "/images/gallery-platter.jpg",
  },
  {
    id: "shawarma-special-platter",
    name: "Special Chicken Platter",
    category: "shawarma-wraps",
    description: "Extra large platter with roasted chicken shawarma meat, cheesy loaded fries, 2 pita breads, garlic toum, and spicy dip.",
    price: 830,
    image: "/images/gallery-platter.jpg",
    badge: "Platter Feast",
  },

  // WRAPS
  {
    id: "wrap-cheezy-bite",
    name: "Cheezy Bite Special Wrap",
    category: "shawarma-wraps",
    description: "Char-grilled spicy chicken fillet slices, oozing cheese sauce, diced peppers, and ranch sauce grilled in a golden tortilla.",
    price: 530,
    image: "/images/chicken-wrap.jpg",
    badge: "Fan Favorite",
  },
  {
    id: "wrap-malai-boti",
    name: "Malai Boti Wrap",
    category: "shawarma-wraps",
    description: "Tender aromatic malai boti chicken chunks, mild green chutney, sweet onions, and melted cheese folded in a soft tortilla.",
    price: 530,
    image: "/images/chicken-wrap.jpg",
  },
  {
    id: "wrap-zinger",
    name: "Zinger Wrap",
    category: "shawarma-wraps",
    description: "Crispy fried spicy chicken tenders, lettuce, cheddar cheese slice, and garlic mayo tightly wrapped in toasted tortilla.",
    price: 480,
    image: "/images/chicken-wrap.jpg",
  },
  {
    id: "wrap-grill",
    name: "Grill Wrap",
    category: "shawarma-wraps",
    description: "Juicy grilled chicken breast strips, fresh veggies, BBQ ranch dressing, and melted cheese in a pressed tortilla.",
    price: 500,
    image: "/images/chicken-wrap.jpg",
  },

  // PARATHA ROLL
  {
    id: "paratha-roll-special",
    name: "Special Paratha Roll",
    category: "rolls-sandwiches",
    description: "Flaky golden fried lachha paratha stuffed with spicy BBQ chicken, melted cheese slice, tangy chutney and crunchy onions.",
    price: 480,
    image: "/images/chicken-wrap.jpg",
    badge: "Crispy & Cheesy",
  },
  {
    id: "paratha-roll-chicken",
    name: "Chicken Paratha Roll",
    category: "rolls-sandwiches",
    description: "Crisp hot paratha rolled around seasoned tender chicken cubes with sliced onions, mint raita, and mild spices.",
    price: 330,
    image: "/images/chicken-wrap.jpg",
  },
  {
    id: "paratha-roll-zinger",
    name: "Zinger Paratha Roll",
    category: "rolls-sandwiches",
    description: "Crunchy fried zinger chicken fillet nestled inside a flaky golden paratha with creamy garlic dressing.",
    price: 460,
    image: "/images/chicken-wrap.jpg",
  },

  // SANDWICH
  {
    id: "sandwich-zinger",
    name: "Zinger Sandwich",
    category: "rolls-sandwiches",
    description: "Crispy golden fried zinger fillet between toasted bread slices with melted cheese, lettuce, and secret house sauce.",
    price: 550,
    image: "/images/club-sandwich.jpg",
  },
  {
    id: "sandwich-club",
    name: "Club Sandwich",
    category: "rolls-sandwiches",
    description: "Triple-decker toasted sandwich layered with grilled chicken, fried egg, melted yellow cheddar cheese, tomatoes, and lettuce.",
    price: 450,
    image: "/images/club-sandwich.jpg",
    badge: "Classic Delight",
    isBestSeller: true,
  },
  {
    id: "sandwich-grill",
    name: "Grill Sandwich",
    category: "rolls-sandwiches",
    description: "Herb-marinated sliced grilled chicken, caramelized bell peppers, molten cheese, and smoky mustard dressing pressed golden brown.",
    price: 550,
    image: "/images/club-sandwich.jpg",
  },

  // PASTA (M / L)
  {
    id: "pasta-chicken-cheese",
    name: "Chicken Cheese Pasta",
    category: "pasta-fish",
    description: "Penne pasta tossed in velvety garlic cream alfredo sauce with grilled chicken, oven-baked until bubbling golden cheese crust forms.",
    price: 450,
    sizes: [
      { name: "Medium", price: 450 },
      { name: "Large", price: 650 },
    ],
    image: "/images/creamy-pasta.jpg",
    badge: "Rich & Cheesy",
  },
  {
    id: "pasta-special",
    name: "Special Pasta",
    category: "pasta-fish",
    description: "Cheezy Bite signature spicy pasta with shredded zinger chicken, red & white secret sauce blend, olives, and double melted mozzarella.",
    price: 550,
    sizes: [
      { name: "Medium", price: 550 },
      { name: "Large", price: 750 },
    ],
    image: "/images/creamy-pasta.jpg",
    badge: "Chef Special",
    isBestSeller: true,
  },

  // FISH
  {
    id: "fish-crispy-fried",
    name: "Crispy Fried Fish",
    category: "pasta-fish",
    description: "Fresh tender fish fillets coated in seasoned crunchy batter, fried to golden perfection, served with tartar dip and fresh lemon.",
    price: 2800,
    sizes: [
      { name: "Per KG (Cooked Weight)", price: 2800 },
    ],
    image: "/images/fried-fish.jpg",
    badge: "Winter Favorite",
  },
  {
    id: "fish-burger-single",
    name: "Fish Burger",
    category: "pasta-fish",
    description: "Golden battered crispy fried fish patty, zesty tartar sauce, crisp lettuce, and cheddar cheese on a toasted soft bun.",
    price: 650,
    sizes: [
      { name: "Single Patty", price: 650 },
      { name: "Double Patty", price: 1000 },
    ],
    image: "/images/fried-fish.jpg",
  },

  // FRIED & FRIES
  {
    id: "fries-loaded",
    name: "Loaded Fries",
    category: "fries-sides",
    description: "Wire basket of hot golden french fries covered in melted cheddar cheese sauce, crispy fried chicken chunks, and jalapenos.",
    price: 450,
    image: "/images/loaded-fries.jpg",
    badge: "Bestseller",
    isBestSeller: true,
  },
  {
    id: "fries-cheese-loaded",
    name: "Cheese Loaded Fries",
    category: "fries-sides",
    description: "Mega loaded fries with double molten mozzarella & cheddar cheese blanket, spicy chicken boti, and house garlic drizzle.",
    price: 600,
    image: "/images/loaded-fries.jpg",
    badge: "Extra Cheezy",
  },
  {
    id: "fries-plain",
    name: "Plain Fries",
    category: "fries-sides",
    description: "Classic crisp salted golden potato fries served with tomato ketchup.",
    price: 250,
    image: "/images/loaded-fries.jpg",
  },
  {
    id: "fries-masala",
    name: "Masala Fries",
    category: "fries-sides",
    description: "Crispy golden fries tossed in spicy chatpata house chaat masala seasoning.",
    price: 300,
    image: "/images/loaded-fries.jpg",
  },
  {
    id: "fries-garlic",
    name: "Garlic Fries",
    category: "fries-sides",
    description: "Crispy fries drizzled with aromatic roasted garlic butter and fresh herbs.",
    price: 350,
    image: "/images/loaded-fries.jpg",
  },
  {
    id: "nuggets-10pc",
    name: "Crispy Nuggets (10 Pcs)",
    category: "fries-sides",
    description: "10 pieces of golden tender breaded chicken breast nuggets served with tangy dipping sauce.",
    price: 550,
    image: "/images/deal-feast.jpg",
  },
  {
    id: "hot-wings-10pc",
    name: "Hot Wings (10 Pcs)",
    category: "fries-sides",
    description: "10 pieces of crispy chicken wings tossed in fiery spicy buffalo sauce.",
    price: 600,
    image: "/images/gallery-wings.jpg",
    badge: "Spicy",
    spicyLevel: 3,
  },
  {
    id: "oven-wings-10pc",
    name: "Oven Baked Wings (10 Pcs)",
    category: "fries-sides",
    description: "10 pieces of tender chicken wings glazed in sweet smoky BBQ sauce, slow roasted in the pizza oven.",
    price: 600,
    image: "/images/gallery-wings.jpg",
  },
];

export const DEALS: DealItem[] = [
  {
    id: "deal-1",
    title: "Deal 1 — Solo Feast",
    price: 850,
    description: "Perfect single-person meal with delicious freshly baked pizza and crispy sides.",
    badge: "Best Value",
    image: "/images/special-pizza.jpg",
    serves: "1 Person",
    items: [
      "1 Small Pizza (Regular Flavour)",
      "1 Plain Fries",
      "1 Regular Drink",
    ],
  },
  {
    id: "deal-2",
    title: "Deal 2 — Duo Delight",
    price: 1580,
    description: "Ideal combination for couples or friends sharing hot pizza and crispy nuggets.",
    badge: "Popular Pair",
    image: "/images/deal-feast.jpg",
    serves: "2 Persons",
    items: [
      "1 Medium Pizza (Regular Flavour)",
      "5 Pcs Golden Nuggets",
      "1 Plain Fries",
      "1 Half-Litre Chilled Drink",
    ],
  },
  {
    id: "deal-3",
    title: "Deal 3 — Deep Dish Mega Mix",
    price: 2880,
    description: "Showcasing our famous 7-inch Deep Dish pizza alongside a grand spread of appetizers and burgers.",
    badge: "Customer Favorite",
    image: "/images/deep-dish-pizza.jpg",
    serves: "3 - 4 Persons",
    items: [
      '1 Medium Deep Dish Pizza (7")',
      "1 Loaded Cheese Fries",
      "5 Pcs Crispy Nuggets",
      "5 Pcs Spicy Hot Wings",
      "1 Crispy Zinger Burger",
      "1.5 Litre Chilled Drink",
    ],
  },
  {
    id: "deal-4",
    title: "Deal 4 — Royal Family Feast",
    price: 4860,
    description: "The ultimate party package featuring both Large regular pizza and Deep Dish, double burgers, loaded fries and wings.",
    badge: "Ultimate Feast",
    image: "/images/gallery-feast.jpg",
    serves: "5 - 7 Persons",
    items: [
      "1 Large Pizza (Regular Flavour)",
      '1 Medium Deep Dish Pizza (7")',
      "2 Crispy Zinger Burgers",
      "1 Cheese Loaded Fries",
      "5 Pcs Crispy Nuggets",
      "5 Pcs Spicy Hot Wings",
      "1.5 Litre Chilled Drink",
    ],
  },
];

export const RESTAURANT_INFO = {
  name: "Cheezy Bite",
  tagline: "Lets Eat Together! Wah G Wah",
  phonePrimary: "0321-6610034",
  phoneSecondary: "0332-7376511",
  whatsappNumber: "923216610034",
  whatsappUrl: "https://wa.me/923216610034",
  address: "Cinema Morr, Near Ranger School, M.A Jinah Rd, Qadirabad, Kasur, Pakistan",
  plusCode: "4CJW+5VC",
  googleRating: 5.0,
  reviewCount: 142,
  hours: "11:00 AM – 3:00 AM Daily",
  openingHour: 11,
  closingHour: 3, // 3 AM next day
  minimumOrder: 700,
  deliveryNote: "Free Home Delivery on orders of Rs 700 or more",
  features: [
    "Dine-in & Takeaway",
    "Late-Night Delivery (Till 3 AM)",
    "Casual Family Atmosphere",
    "Good for Groups & Kids",
    "Free Street Parking",
    "Quick Bites & Fresh Prep",
  ],
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.7115852202685!2d74.4533008!3d31.1172462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919c72e2762eb99%3A0x6bfe7614d6428c04!2sCheezy%20Bite!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  directionsUrl: "https://maps.google.com/?q=Cheezy+Bite+Cinema+Morr+Kasur",
};

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Haseeb Tariq Jutt",
    role: "Local Guide",
    rating: 5,
    text: "Had fillet burger, quite expensive but good in taste. Excellent staff.",
    verified: true,
    isReal: true,
  },
  {
    id: "rev-2",
    author: "Hamza Malik",
    role: "Regular Customer",
    rating: 5,
    text: "The Injected Broast and Chicago Deep Dish in Kasur are unmatched! Piping hot delivery even at 2 AM. Wah G Wah!",
    verified: true,
    isReal: false,
    tag: "sample",
  },
  {
    id: "rev-3",
    author: "Ayesha Noor",
    role: "Food Enthusiast",
    rating: 5,
    text: "Best family dinner spot near Cinema Morr. The loaded cheese fries and crown crust pizza were so cheesy and fresh. Highly recommended!",
    verified: true,
    isReal: false,
    tag: "sample",
  },
];

export const GALLERY_IMAGES = [
  {
    title: "Artisan Burger Sizzle",
    category: "Kitchen",
    image: "/images/gallery-chef.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Chicago Deep Dish Cheese Pull",
    category: "Signature",
    image: "/images/gallery-cheese-pull.jpg",
    span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
  },
  {
    title: "Glazed Fiery Hot Wings",
    category: "Sides",
    image: "/images/gallery-wings.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Chicken Shawarma Feast Platter",
    category: "Special",
    image: "/images/gallery-platter.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Lively Dining Experience",
    category: "Atmosphere",
    image: "/images/gallery-dining.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Mega Deal Feast Spread",
    category: "Party Deal",
    image: "/images/gallery-feast.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];
