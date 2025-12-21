const foodItems = [
  {
    id: 1,
    name: "Chicken Burger",
    image: "assets/images/food-pictures/food 1.jfif",
    price: 140,
    originalPrice: 190,
    type: "Non-veg",
    description: "A delicious chicken burger featuring a juicy grilled chicken breast patty, topped with fresh lettuce, ripe tomatoes, pickles, and melted cheese. Served on a soft toasted bun with our signature sauce and a side of crispy fries.",
    ingredients: "Grilled chicken breast patty, fresh lettuce, tomatoes, pickles, cheddar cheese, soft toasted bun, mayonnaise, ketchup, signature sauce",
    nutrients: { energy: 450, fats: 20, carbs: 35, fiber: 4, protein: 37 }
  },
  {
    id: 2,
    name: "Chicken Momo",
    image: "assets/images/food-pictures/chickenMomo.jpg",
    price: 120,
    originalPrice: 140,
    type: "Non-veg",
    description: "Traditional Nepali steamed dumplings filled with seasoned minced chicken, onions, and aromatic spices. Served hot with our special spicy tomato chutney. A local favorite that's both flavorful and satisfying.",
    ingredients: "Minced chicken, wheat flour wrapper, onions, garlic, ginger, coriander, Nepali spices, served with tomato chutney",
    nutrients: { energy: 280, fats: 8, carbs: 38, fiber: 3, protein: 18 }
  },
  {
    id: 3,
    name: "Buff Momo",
    image: "assets/images/food-pictures/buffMomo.webp",
    price: 120,
    originalPrice: 140,
    type: "Non-veg",
    description: "Authentic Nepali dumplings made with tender buffalo meat, mixed with fresh herbs and traditional spices. Steamed to perfection and served with our homemade spicy achar (pickle sauce). A must-try for momo lovers!",
    ingredients: "Minced buffalo meat, wheat flour wrapper, onions, garlic, ginger, green onions, Nepali spices, served with spicy achar",
    nutrients: { energy: 295, fats: 10, carbs: 36, fiber: 3, protein: 20 }
  },
  {
    id: 4,
    name: "Cheese Pizza",
    image: "assets/images/food-pictures/cheesepizza.jpg",
    price: 320,
    originalPrice: 380,
    type: "Veg",
    description: "Classic Italian-style pizza with a crispy thin crust, rich tomato sauce, and a generous layer of melted mozzarella cheese. Simple, delicious, and perfect for cheese lovers. Baked fresh in our wood-fired oven.",
    ingredients: "Pizza dough, tomato sauce, mozzarella cheese, oregano, olive oil, fresh basil",
    nutrients: { energy: 520, fats: 22, carbs: 58, fiber: 3, protein: 24 }
  },
  {
    id: 5,
    name: "Banana Walnut Cake",
    image: "assets/images/food-pictures/food 8.jpeg",
    price: 180,
    originalPrice: 220,
    type: "Veg",
    description: "Moist and fluffy banana cake studded with crunchy walnuts. Baked to perfection with ripe bananas and a hint of cinnamon. A perfect tea-time treat or dessert.",
    ingredients: "Ripe bananas, flour, walnuts, brown sugar, cinnamon, eggs, butter",
    nutrients: { energy: 320, fats: 14, carbs: 45, fiber: 2, protein: 5 }
  },
  {
    id: 6,
    name: "Rich Chocolate Cake",
    image: "assets/images/food-pictures/food 9.jpg",
    price: 320,
    originalPrice: 380,
    type: "Veg",
    description: "Decadent multi-layered chocolate cake with rich ganache frosting. Made with premium cocoa for an intense chocolate flavor. A slice of heaven for chocolate lovers.",
    ingredients: "Dark chocolate, cocoa powder, flour, sugar, butter, cream, eggs",
    nutrients: { energy: 480, fats: 25, carbs: 55, fiber: 4, protein: 6 }
  },
  {
    id: 7,
    name: "Sizzling Brownie",
    image: "assets/images/food-pictures/food 10.jpg",
    price: 250,
    originalPrice: 300,
    type: "Veg",
    description: "Warm, gooey chocolate brownie served with a scoop of vanilla ice cream and drizzled with hot chocolate sauce. A classic dessert combination.",
    ingredients: "Chocolate brownie, vanilla ice cream, chocolate sauce, nuts",
    nutrients: { energy: 550, fats: 28, carbs: 65, fiber: 3, protein: 7 }
  },
  {
    id: 8,
    name: "Veg Club Sandwich",
    image: "assets/images/food-pictures/food 11.JPG",
    price: 280,
    originalPrice: 320,
    type: "Veg",
    description: "Triple-decker sandwich filled with fresh vegetables, cheese, and our special sandwich spread. Grilled to golden perfection and served with potato chips.",
    ingredients: "Bread slices, cucumber, tomato, lettuce, cheese slice, mayonnaise, butter",
    nutrients: { energy: 380, fats: 16, carbs: 48, fiber: 6, protein: 10 }
  },
  {
    id: 9,
    name: "Dal Bhat Set",
    image: "assets/images/food-pictures/food 12.jpeg",
    price: 250,
    originalPrice: 300,
    type: "Veg",
    description: "The quintessential Nepali meal. Steamed rice served with lentil soup (Dal), seasonal vegetable curry (Tarkari), spinach (Saag), and pickle (Achar). Wholesome and filling.",
    ingredients: "Steamed rice, lentil soup, mixed vegetable curry, spinach, tomato pickle, papad",
    nutrients: { energy: 650, fats: 12, carbs: 110, fiber: 12, protein: 22 }
  },
  {
    id: 10,
    name: "Nepali Thali",
    image: "assets/images/food-pictures/food 13.jpeg",
    price: 450,
    originalPrice: 550,
    type: "Non-veg",
    description: "A grand feast on a plate. Includes rice, choice of chicken or mutton curry, dal, mixed vegetables, saag, yogurt (curd), and dessert (lalmohan or sikarni).",
    ingredients: "Rice, chicken/mutton curry, dal, mixed veg, saag, curd, dessert, salad",
    nutrients: { energy: 850, fats: 28, carbs: 120, fiber: 14, protein: 45 }
  },
  {
    id: 11,
    name: "Samosa Chaat",
    image: "assets/images/food-pictures/food 4.JPG",
    price: 120,
    originalPrice: 150,
    type: "Veg",
    description: "Crushed samosas topped with spicy chickpea curry, yogurt, tamarind chutney, mint chutney, and crispy sev. A burst of sweet, spicy, and tangy flavors.",
    ingredients: "Samosa, chickpea curry, yogurt, tamarind chutney, mint chutney, sev, onions, coriander",
    nutrients: { energy: 350, fats: 14, carbs: 48, fiber: 5, protein: 8 }
  },
  {
    id: 12,
    name: "Chole Bhature",
    image: "assets/images/food-pictures/food 5.JPG",
    price: 180,
    originalPrice: 220,
    type: "Veg",
    description: "A popular North Indian dish featuring spicy chickpea curry (Chole) served with fluffy deep-fried bread (Bhature) and pickled onions. Hearty and delicious.",
    ingredients: "Chickpeas, spices, flour (for bhature), onions, pickles",
    nutrients: { energy: 620, fats: 26, carbs: 80, fiber: 10, protein: 16 }
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = foodItems;
}