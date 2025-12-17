const foodItems = [
  // ATG, Trending
  {
    id: 1,
    name: "Chicken Burger",
    image: "chickenBurger.jfif",
    price: 140,
    originalPrice: 190,
    type: "Non-veg",
    description:
      "A classic sandwich featuring a grilled or fried chicken patty served in a bun with fresh toppings and savory sauces. A versatile and popular alternative to beef burgers globally.",
    ingredients:
      "Chicken breast patty, lettuce, tomatoes, pickles, cheese, toasted bun, mayonnaise, ketchup, signature sauce.",
    nutrients: { energy: 450, fats: 20, carbs: 35, fiber: 4, protein: 37 },
  },
  // ATG, Trending
  {
    id: 2,
    name: "Cheese Pizza",
    image: "cheesepizza.jpg",
    price: 120,
    originalPrice: 140,
    type: "Veg",
    description:
      "The quintessential comfort food: dough topped with rich tomato sauce and a generous blanket of melted mozzarella cheese. Celebrated for its simple, perfect blend of textures and flavors.",
    ingredients:
      "Pizza dough (flour, yeast), tomato sauce (tomatoes, herbs), mozzarella cheese, olive oil.",
    nutrients: { energy: 280, fats: 10, carbs: 32, fiber: 2, protein: 13 },
  },
  // ATG, Trending, NC
  {
    id: 3,
    name: "Chicken Momo",
    image: "chickenMomo.jpg",
    price: 120,
    originalPrice: 140,
    type: "Non-veg",
    description:
      "Delicious, bite-sized Himalayan dumplings (Nepal, Tibet, India) filled with seasoned minced chicken, commonly served steamed with a spicy dipping sauce.",
    ingredients:
      "Flour dough, minced chicken, onions, ginger, garlic, coriander, spices (cumin, turmeric), oil.",
    nutrients: { energy: 320, fats: 12, carbs: 30, fiber: 3, protein: 25 },
  },
  // ATG, Trending, NC
  {
    id: 4,
    name: "Buff Momo",
    image: "buffMomo.webp",
    price: 110,
    originalPrice: 130,
    type: "Non-veg",
    description:
      "Savory Nepali dumplings filled with finely minced and richly spiced buffalo meat (buff). Offers a distinct, aromatic flavor profile, popular as street food.",
    ingredients:
      "Flour dough, minced buffalo meat, onions, ginger, garlic, coriander, spices (cumin, turmeric), oil.",
    nutrients: { energy: 360, fats: 18, carbs: 30, fiber: 3, protein: 22 },
  },
  // ATG
  {
    id: 5,
    name: "Fried Chicken",
    image: "friedChicken.webp",
    price: 150,
    originalPrice: 180,
    type: "Non-veg",
    description:
      "Globally recognized dish of chicken pieces coated in seasoned batter and deep-fried, resulting in a crispy, golden-brown exterior and tender, juicy meat inside.",
    ingredients:
      "Chicken piece, wheat flour, seasoning (salt, pepper), egg, buttermilk, deep-frying oil.",
    nutrients: { energy: 280, fats: 18, carbs: 12, fiber: 1, protein: 18 },
  },
  // Trending, Others
  {
    id: 6,
    name: "Bubble Tea",
    image: "bubbleTea.jpg",
    price: 180,
    originalPrice: 220,
    type: "Veg",
    description:
      "Trending Taiwanese tea-based drink with signature chewy tapioca pearls (boba). Available in various milk and fruit tea flavors, offering a unique, sweet drinking experience.",
    ingredients: "Black tea, milk, sugar/syrup, tapioca pearls (boba), ice.",
    nutrients: { energy: 350, fats: 8, carbs: 65, fiber: 1, protein: 2 },
  },
  // Dessert
  {
    id: 7,
    name: "Lakhamari",
    image: "Lakhamari.webp",
    price: 80,
    originalPrice: 100,
    type: "Veg",
    description:
      "Large, decorative, semi-sweet traditional Newari bread, deep-fried and often used ceremonially during festivals and weddings in Nepal.",
    ingredients:
      "Wheat/rice flour, ghee or oil, sugar, yeast/leavening agent, water.",
    nutrients: { energy: 300, fats: 15, carbs: 35, fiber: 1, protein: 4 },
  },
  // Dessert
  {
    id: 8,
    name: "Juju Dhau",
    image: "jujuDhau.webp",
    price: 120,
    originalPrice: 150,
    type: "Veg",
    description:
      "Known as the 'King of Yogurt,' this specialty from Bhaktapur, Nepal, is a creamy, sweet, and rich curd traditionally set in clay pots.",
    ingredients: "Cow's milk, starter culture (yogurt), sugar/jaggery.",
    nutrients: { energy: 180, fats: 10, carbs: 14, fiber: 0, protein: 8 },
  },
  // Dessert
  {
    id: 9,
    name: "Jerry",
    image: "Jerry.webp",
    price: 60,
    originalPrice: 80,
    type: "Veg",
    description:
      "A famous South Asian sweet made by deep-frying flour batter coils and soaking them immediately in warm sugar syrup for a crunchy, intensely syrupy finish.",
    ingredients:
      "Maida (flour), yogurt, sugar, water, cardamom, oil for frying.",
    nutrients: { energy: 250, fats: 12, carbs: 35, fiber: 0, protein: 2 },
  },
  // Dessert
  {
    id: 10,
    name: "Rasbari",
    image: "rasbari.webp",
    price: 100,
    originalPrice: 120,
    type: "Veg",
    description:
      "Soft, spongy cheese balls (chhena/paneer) delicately cooked in a light, fragrant sugar syrup. Cherished for its delicate sweetness and melt-in-mouth texture.",
    ingredients: "Chhena (fresh cheese), sugar, water, cardamom, rose water.",
    nutrients: { energy: 150, fats: 6, carbs: 20, fiber: 0, protein: 4 },
  },
  // Healthy
  {
    id: 11,
    name: "Lentil Soup",
    image: "LentilSoup.webp",
    price: 140,
    originalPrice: 170,
    type: "Veg",
    description:
      "A highly nourishing, hearty, and protein-packed soup made from various lentils simmered with vegetables and mild spices. A low-fat, high-fiber meal.",
    ingredients:
      "Lentils (red/brown), vegetable broth, carrots, celery, onion, garlic, herbs (thyme, bay leaf), olive oil.",
    nutrients: { energy: 200, fats: 4, carbs: 30, fiber: 10, protein: 12 },
  },
  // Healthy
  {
    id: 12,
    name: "Veggie Stir-Fry",
    image: "veggiestir.webp",
    price: 130,
    originalPrice: 160,
    type: "Veg",
    description:
      "A vibrant, customizable dish of fresh vegetables rapidly cooked in a wok with minimal healthy oil and light, savory seasoning. Excellent source of vitamins and fiber.",
    ingredients:
      "Broccoli, bell peppers, carrots, snap peas, mushrooms, soy sauce (low sodium), ginger, garlic, sesame oil.",
    nutrients: { energy: 150, fats: 5, carbs: 20, fiber: 6, protein: 5 },
  },
  // Healthy
  {
    id: 13,
    name: "Grilled Chicken",
    image: "grilledChicken.webp",
    price: 200,
    originalPrice: 240,
    type: "Non-veg",
    description:
      "Lean, protein-packed, skinless chicken breast cooked over a grill with minimal fat. A staple for health-conscious diets, seasoned with herbs and spices.",
    ingredients:
      "Skinless chicken breast, minimal olive oil, lemon juice, herbs (rosemary, oregano), salt, pepper.",
    nutrients: { energy: 180, fats: 4, carbs: 0, fiber: 0, protein: 35 },
  },
  // Healthy
  {
    id: 14,
    name: "Fresh Juices",
    image: "FreshJuice.webp",
    price: 90,
    originalPrice: 120,
    type: "Veg",
    description:
      "Naturally refreshing beverages made from the pure extracted liquid of fresh fruits and vegetables, providing concentrated vitamins and hydration without added sugars.",
    ingredients:
      "Freshly squeezed fruit (e.g., oranges, apples) or vegetable pulp, water (optional).",
    nutrients: { energy: 110, fats: 0, carbs: 26, fiber: 1, protein: 1 },
  },
  // Healthy
  {
    id: 15,
    name: "Lentil Pancake",
    image: "NepaliBara.webp",
    price: 70,
    originalPrice: 90,
    type: "Veg",
    description:
      "A savory, protein-rich pancake made from ground lentil batter, naturally gluten-free. A wholesome base often enjoyed plain or with toppings.",
    ingredients:
      "Ground lentil batter (soaked), ginger, garlic, cumin powder, turmeric, salt, oil for pan frying.",
    nutrients: { energy: 150, fats: 7, carbs: 15, fiber: 5, protein: 8 },
  },
  // NC (Nepali Cuisine)
  {
    id: 16,
    name: "Thakali Khana Set",
    image: "thakali-khana-set.webp",
    price: 280,
    originalPrice: 320,
    type: "Non-veg",
    description:
      "Nepal's national meal (Daal Bhat). A balanced set of steamed rice, soupy lentils, vegetable curry, greens, and savory pickles, traditionally refillable.",
    ingredients:
      "Rice (bhat), lentils (daal), vegetable curry (tarkari), seasonal greens, pickles (achar), ghee, optional meat curry.",
    nutrients: { energy: 700, fats: 25, carbs: 90, fiber: 10, protein: 30 },
  },
  // NC (Nepali Cuisine)
  {
    id: 17,
    name: "Newari Khaja",
    image: "NewariKhaja.webp",
    price: 260,
    originalPrice: 300,
    type: "Non-veg",
    description:
      "A traditional Newari assortment platter (Samay Baji) featuring beaten rice (chiura), marinated meats, soybeans, pickles, and dried ginger. Served during feasts.",
    ingredients:
      "Beaten rice (chiura), black soybeans, marinated meat (chhwela), potato salad (aloo achar), boiled egg, lentil pancake (wo).",
    nutrients: { energy: 650, fats: 30, carbs: 70, fiber: 8, protein: 25 },
  },
  // NC (Nepali Cuisine)
  {
    id: 18,
    name: "Chhwela",
    image: "choilla.webp",
    price: 180,
    originalPrice: 220,
    type: "Non-veg",
    description:
      "A highly flavored Newari appetizer of boiled and roasted/pan-fried meat (buff or chicken), heavily spiced with mustard oil, ginger, garlic, and chilies.",
    ingredients:
      "Boiled/marinated meat, mustard oil, ginger, garlic, fenugreek seeds, turmeric, chili powder, salt.",
    nutrients: { energy: 240, fats: 15, carbs: 5, fiber: 2, protein: 20 },
  },
  // Others
  {
    id: 19,
    name: "Cold Drinks",
    image: "coca-colawebp.webp",
    price: 50,
    originalPrice: 70,
    type: "Veg",
    description:
      "Globally leading brands of sweet, carbonated soft drinks: Coca Cola (classic cola), Fanta (orange), Sprite (lemon-lime), and Mountain Dew (citrus, high caffeine).",
    ingredients:
      "Carbonated water, high fructose corn syrup or sugar, flavors, coloring agents, acids, caffeine (except Sprite/Fanta).",
    nutrients: { energy: 160, fats: 0, carbs: 40, fiber: 0, protein: 0 },
  },
];

const dialog = document.getElementById("dialog");
const desc = document.getElementById("desc");
function showDialog(itemId) {
  const item = foodItems.find((food) => food.id === itemId);

  if (!item) {
    console.error("Item not found!");
    return;
  }
  updateDialogContent(item);
  dialog.showModal();
}
function updateDialogContent(item) {
  const imgElement = dialog.querySelector(".food-description-picture");
  imgElement.src = `assets/images/food-pictures/${item.image}`;
  imgElement.alt = item.name;
  dialog.querySelector(".food-name").textContent = item.name;
  dialog.querySelector(
    ".original-price"
  ).textContent = `₹ ${item.originalPrice}`;
  dialog.querySelector(".discounted-price").textContent = `₹ ${item.price}`;
  dialog.querySelector(".description-content").textContent = item.description;
  const vegIcon = dialog.querySelector(".food-sticker");
  const vegText = dialog.querySelector(".veg-non");

  if (item.type === "Veg") {
    vegIcon.src = "assets/images/food-pictures/icn-veg.svg";
    vegText.textContent = "Veg";
  } else {
    vegIcon.src = "assets/images/food-pictures/icn-non-veg.svg";
    vegText.textContent = "Non-veg";
  }

  dialog.querySelector(".ingredients-content").textContent = item.ingredients;

  const nutrientValues = dialog.querySelectorAll(".nutrients-value");
  nutrientValues[0].querySelector(".nutrients-number").textContent =
    item.nutrients.energy;
  nutrientValues[1].querySelector(".nutrients-number").textContent =
    item.nutrients.fats;
  nutrientValues[2].querySelector(".nutrients-number").textContent =
    item.nutrients.carbs;
  nutrientValues[3].querySelector(".nutrients-number").textContent =
    item.nutrients.fiber;
  nutrientValues[4].querySelector(".nutrients-number").textContent =
    item.nutrients.protein;
}

function closeDialog() {
  dialog.close();
}

dialog.addEventListener("click", (e) => {
  if (!desc.contains(e.target)) {
    closeDialog();
  }
});
