import images from './images';

const main_course = [
  {
    title: 'Grilled Salmon with Lemon Herb Sauce',
    price: '$16.99',
    tags: 'Salmon | LemonHerbSauce | Quinoa',
  },
  {
    title: 'Pesto Chicken Pasta',
    price: '$15.99',
    tags: 'BasilPesto | Pasta | CherryTomatoes | ParmesanCheese',
  },
  {
    title: 'Vegetarian Buddha Bowl',
    price: '$14',
    tags: 'SweetPotatoes | Quinoa | Kale | Chickpeas | Avocado |TahiniDressing',
  },
  {
    title: 'Beef and Mushroom Risotto',
    price: '$17',
    tags: 'Beef | Mushrooms | ArborioRice | ParmesanCheese',
  },
  {
    title: 'Stir-Fried Tofu and Vegetable Medley',
    price: '$16',
    tags: 'Tofu | Broccoli | BellPeppers | SnapPeas | Carrots | GingerSoyGlaze | JasmineRice',
  },
];

const drinks = [
  {
    title: 'Blissful Caramel Macchiato',
    price: '$5',
    tags: 'Espresso | Milk | CaramelSyrup | WhippedCream',
  },
  {
    title: "Hazelnut Mocha Delight",
    price: '$6',
    tags: 'Espresso | Mocha | Hazelnut | Milk | ChocolateShavings',
  },
  {
    title: 'Matcha Mint Fusion',
    price: '$5',
    tags: 'MatchaGreenTea | PeppermintSyrup | CoconutMilk | Ice',
  },
  {
    title: 'Vanilla Almond Cold Brew',
    price: '$7',
    tags: 'ColdBrewCoffee | Vanilla | Almond | Ice',
  },
  {
    title: 'Tropical Sunrise Smoothie',
    price: '$6',
    tags: 'Pineapple | Mango | Banana | CoconutMilk | Ice',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { main_course, drinks, awards };