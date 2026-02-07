// food description data
const foodItems = [
  // ATG, Trending
  {
    id: 1,
    name: "Chicken Burger",
    image: "chickenBurger.jpg",
    price: 140,
    originalPrice: 190,
    rating: 4.5,
    shortDescription: "Juicy grilled chicken patty with fresh toppings and savory sauces",
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
    rating: 5,
    shortDescription: "Classic pizza with rich tomato sauce and melted mozzarella cheese",
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
    rating: 4.5,
    shortDescription: "Steamed Himalayan dumplings filled with seasoned minced chicken",
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
    rating: 4,
    shortDescription: "Savory Nepali dumplings with richly spiced buffalo meat filling",
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
    rating: 5,
    shortDescription: "Crispy golden-brown chicken with tender, juicy meat inside",
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
    rating: 4.5,
    shortDescription: "Trending Taiwanese tea with signature chewy tapioca pearls",
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
    rating: 4,
    shortDescription: "Traditional Newari sweet bread, deep-fried and decorative",
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
    rating: 5,
    shortDescription: "The 'King of Yogurt' - creamy, sweet specialty from Bhaktapur",
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
    rating: 4,
    shortDescription: "Crispy fried flour coils soaked in warm sugar syrup",
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
    rating: 5,
    shortDescription: "Soft cheese balls in fragrant sugar syrup, melt-in-mouth texture",
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
    rating: 4.5,
    shortDescription: "Nourishing protein-packed soup with vegetables and mild spices",
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
    rating: 4,
    shortDescription: "Vibrant fresh vegetables cooked with minimal oil and light seasoning",
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
    rating: 5,
    shortDescription: "Lean protein-packed chicken breast with herbs and spices",
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
    rating: 4.5,
    shortDescription: "Pure extracted fruit juices with concentrated vitamins",
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
    rating: 4,
    shortDescription: "Protein-rich savory pancake made from ground lentil batter",
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
    rating: 5,
    shortDescription: "Nepal's national meal - balanced set with rice, lentils, and curry",
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
    rating: 4.5,
    shortDescription: "Traditional Newari feast platter with beaten rice and marinated meats",
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
    rating: 4,
    shortDescription: "Spiced Newari appetizer with roasted meat and mustard oil",
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
    rating: 4,
    shortDescription: "Popular carbonated soft drinks - Coca Cola, Fanta, Sprite",
    type: "Veg",
    description:
      "Globally leading brands of sweet, carbonated soft drinks: Coca Cola (classic cola), Fanta (orange), Sprite (lemon-lime), and Mountain Dew (citrus, high caffeine).",
    ingredients:
      "Carbonated water, high fructose corn syrup or sugar, flavors, coloring agents, acids, caffeine (except Sprite/Fanta).",
    nutrients: { energy: 160, fats: 0, carbs: 40, fiber: 0, protein: 0 },
  },
];
// Team Member Data
const teamData = {
  1: {
    id: 1,
    name: "Sahil Bhujel",
    role: "Head Chef",
    photo: "assets/images/Team/SahilBhujel.jpg",
    description:
      "With over a decade of culinary excellence, Sahil combines traditional flavors with modern techniques. His philosophy centers on using locally sourced, organic ingredients to tell a story through every dish served.",
    contributions:
      "Curated the signature seasonal menu, established farm-to-table partnerships, and oversees total quality control.",
    extras:
      "12+ years experience, Winner of 'Chef of the Year 2023', Himalayan Fusion Specialist",
  },
  2: {
    id: 2,
    name: "Anjali Maharjan",
    role: "Restaurant Manager",
    photo: "assets/images/Team/Anjali Maharjan.png",
    description:
      "Anjali is the heartbeat of our front-of-house operations. Her dedication to impeccable service ensures that every guest feels at home, fostering an atmosphere of warmth and sophisticated hospitality.",
    contributions:
      "Revamped guest service protocols, led staff training workshops, and increased repeat customer rate by 40%.",
    extras:
      "MBA in Hospitality Management, Certified Sommelier Level 1, 8 years in industry",
  },
  3: {
    id: 3,
    name: "Bikash Thapa",
    role: "Operations Lead",
    photo: "assets/images/Team/BikashThapa.png",
    description:
      "The backbone of our daily workflow, Bikash ensures seamless coordination between the kitchen and suppliers. His logical approach to logistics guarantees that our ingredients are always fresh and our facility runs without a hitch.",
    contributions:
      "Streamlined inventory systems to reduce waste by 25%, optimized delivery logistics, and manages vendor relations.",
    extras:
      "Supply Chain Expert, Six Sigma Green Belt, advocate for sustainable sourcing",
  },
  4: {
    id: 4,
    name: "Sita Tamang",
    role: "Sous Chef",
    photo: "assets/images/Team/Sita Tamang.png",
    description:
      "Sita brings precision and creativity to the line. Known for her mastery of spices and texture, she works hand-in-hand with the Head Chef to execute complex dishes while mentoring the junior kitchen staff.",
    contributions:
      "Standardized recipe portions, leads the pastry and dessert section, and manages kitchen safety protocols.",
    extras:
      "Specializes in traditional Newari cuisine, 7 years fine dining experience",
  },
  5: {
    id: 5,
    name: "Prashil Baidhya",
    role: "Frontend Developer",
    photo: "assets/images/Team/PrashilBaidhya.jpg",
    description:
      "Has good knowledge of HTML and CSS with a focus on designing user-friendly web pages. Familiar with responsive design principles and improving visual appearance using animations and themes.",
    contributions:
      "Developed Front and Home pages, implemented navigation bar, and created website themes with animations.",
    extras: "Expert in UI debugging and responsive design optimization.",
  },
  6: {
    id: 6,
    name: "Krishna Neupane",
    role: "Frontend Developer",
    photo: "assets/images/Team/KrishnaNeupane.jpg",
    description:
      "Possesses basic knowledge of HTML and CSS, understanding how to structure and style web pages. Focuses on designing simple layouts and maintaining consistent styling across the site.",
    contributions:
      "Structured and styled the footer section, designed and formatted the About Us page layout.",
    extras:
      "Assisted in debugging layout issues and supported team collaboration.",
  },
  7: {
    id: 7,
    name: "Prayush Shrestha",
    role: "Fullstack Developer",
    photo: "assets/images/Team/Prayush Shrestha.png",
    description:
      "Proficient in HTML, CSS, JavaScript, and SQL. Skilled in creating responsive designs, managing GitHub repositories for version control, and handling database storage for user data.",
    contributions:
      "Implemented MySQL login/signup system, search functionality, image sliders, and managed Vercel deployment.",
    extras:
      "GitHub repository management, database integration, and UI functionality debugging.",
  },
};


// food description dialog functionality
const foodDialog = document.getElementById('dialog');
const desc = document.getElementById('desc');

// Function to show food dialog
function showDialog(itemId) {
  const item = foodItems.find(food => food.id === itemId);
  if (item) {
    updateDialogContent(item, itemId);
    foodDialog.showModal();
  }
}

function updateDialogContent(item, itemId) {
  const imgElement = foodDialog.querySelector(".food-description-picture");
  imgElement.src = `assets/images/food-pictures/${item.image}`;
  imgElement.alt = item.name;
  foodDialog.querySelector(".food-name").textContent = item.name;
  foodDialog.querySelector(
    ".original-price"
  ).textContent = `₹ ${item.originalPrice}`;
  foodDialog.querySelector(".discounted-price").textContent = `₹ ${item.price}`;
  foodDialog.querySelector(".description-content").textContent = item.description;
  
  const vegIcon = foodDialog.querySelector(".food-sticker");
  const vegText = foodDialog.querySelector(".veg-non");

  if (item.type === "Veg") {
    vegIcon.src = "assets/images/food-pictures/icn-veg.svg";
    vegText.textContent = "Veg";
  } else {
    vegIcon.src = "assets/images/food-pictures/icn-non-veg.svg";
    vegText.textContent = "Non-veg";
  }

  foodDialog.querySelector(".ingredients-content").textContent = item.ingredients;

  const nutrientValues = foodDialog.querySelectorAll(".nutrients-value");
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

  // Set the buy button's onclick handler dynamically
  const buyButton = foodDialog.querySelector('.buy-button');
  if (buyButton) {
    buyButton.onclick = () => buyNow(itemId);
  }
}

function closeDialog() {
  foodDialog.close();
}

foodDialog.addEventListener("click", (e) => {
  if (!desc.contains(e.target)) {
    closeDialog();
  }
});




// Team Member Modal Functionality
function show_team_member_details(memberId) {
    console.log('Opening team modal for member:', memberId);
    
    const teamModal = document.getElementById('teamModal');
    const data = teamData[memberId];
    
    if (!teamModal) {
        console.error('Team modal element not found!');
        return;
    }
    
    if (data) {
        document.getElementById('modalPhoto').src = data.photo;
        document.getElementById('modalPhoto').alt = data.name;
        document.getElementById('modalName').textContent = data.name;
        document.getElementById('modalRole').textContent = data.role;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalContributions').textContent = data.contributions;
        document.getElementById('modalExtras').textContent = data.extras;
        
        teamModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Team modal opened');
    }
}

// Initialize team modal close functionality
document.addEventListener('DOMContentLoaded', function() {
    const teamModal = document.getElementById('teamModal');
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && teamModal && teamModal.classList.contains('active')) {
            teamModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});