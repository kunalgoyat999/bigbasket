// console.log("categoryScripts");

// object structure

// name: 'Strawberry',
// imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-3840,q=80',
// finalPrice: '₹45.89',
// strikedOffPrice: '₹60.38',
// quantity: '200 g',
// offer: '24% OFF'

var productsObjArr = [
  {
    productId: 1,
    name: "Strawberry",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-1920,q=80",
    finalPrice: "₹45.89",
    strikedOffPrice: "₹60.38",
    quantity: "200 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 2,
    name: "Banana - Yelakki",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000031_21-fresho-banana-yelakki.jpg?tr=w-1920,q=80",
    finalPrice: "₹100",
    strikedOffPrice: "₹131.58",
    quantity: "1 kg - (5-6 pcs per kg)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 3,
    name: "Pomegranate - Regular (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40120006_5-fresho-pomegranate-small.jpg?tr=w-1920,q=80",
    finalPrice: "₹167.37",
    strikedOffPrice: "₹220.22",
    quantity: "1 pc",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 4,
    name: "Tender Coconut",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40057966_3-fresho-tender-coconut-medium.jpg?tr=w-1920,q=80",
    finalPrice: "₹45",
    strikedOffPrice: "₹59.21",
    quantity: "Approx 500 g - 1 Pack",
    qty: 1,
    inCart: false,
    offer: "23% OFF",
  },
  {
    productId: 5,
    name: "Grapes - Green Sonaka",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40218332_1-fresho-grapes-green.jpg?tr=w-1920,q=80",
    finalPrice: "₹42.47",
    strikedOffPrice: "₹55.88",
    quantity: "1 kg - (Approx. 11-12 pcs)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 6,
    name: "Baby Apple Shimla",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40134281_13-fresho-baby-apple-shimla.jpg?tr=w-1920,q=80",
    finalPrice: "₹140",
    strikedOffPrice: "₹184.21",
    quantity: "200 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 7,
    name: "Strawberry - Organically Grown",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40099244_1-fresho-strawberry-organically-grown.jpg?tr=w-1920,q=80",
    finalPrice: "₹49.97",
    strikedOffPrice: "₹65.75",
    quantity: "1 pc - (approx. 450g to 500)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 8,
    name: "Coconut - Medium (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000093_16-fresho-coconut-medium.jpg?tr=w-1920,q=80",
    finalPrice: "₹21.5",
    strikedOffPrice: "₹33.83",
    quantity: "3 pcs",
    qty: 1,
    inCart: false,
    offer: "43% OFF",
  },
  {
    productId: 9,
    name: "Banana - Robusta",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000025_27-fresho-banana-robusta.jpg?tr=w-1920,q=80",
    finalPrice: "₹48.96",
    strikedOffPrice: "₹64.42",
    quantity: "4 pcs - (Approx. 500g - 600g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 10,
    name: "Kiwi - Green",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/20000911_30-fresho-kiwi-green.jpg?tr=w-1920,q=80",
    finalPrice: "₹69.23",
    strikedOffPrice: "₹91.09",
    quantity: "500 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 11,
    name: "Apple - Red Delicious, Regular",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40033824_21-fresho-apple-red-delicious-regular.jpg?tr=w-1920,q=80",
    finalPrice: "₹129.54",
    strikedOffPrice: "₹170.45",
    quantity: "1 pc - (approx. 550g to 650g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 12,
    name: "Watermelon - Medium",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40103540_5-fresho-watermelon-medium.jpg?tr=w-1920,q=80",
    finalPrice: "₹56.7",
    strikedOffPrice: "₹74.6",
    quantity: "4 pcs - (200-220 g per pc)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 13,
    name: "Grapes - Black Seedless",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40229414_1-fresho-grapes-black-imported.jpg?tr=w-1920,q=80",
    finalPrice: "₹58.08",
    strikedOffPrice: "₹76.42",
    quantity: "4 pcs",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 14,
    name: "Coconut - Large",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000092_15-fresho-coconut-large.jpg?tr=w-1920,q=80",
    finalPrice: "₹34.68",
    strikedOffPrice: "₹45.63",
    quantity: "4 pcs - (Approx. 450g - 500g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 15,
    name: "Pomegranate (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000269_32-fresho-pomegranate.jpg?tr=w-1920,q=80",
    finalPrice: "₹162.43",
    strikedOffPrice: "₹213.72",
    quantity: "3 pcs",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 16,
    name: "Orange - Imported (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/20000909_18-fresho-orange-imported.jpg?tr=w-1920,q=80",
    finalPrice: "₹63.08",
    strikedOffPrice: "₹83",
    quantity: "1 pc - 220-350g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 17,
    name: "Ber - Apple",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/20003957_2-fresho-ber-apple.jpg?tr=w-1920,q=80",
    finalPrice: "₹57.12",
    strikedOffPrice: "₹75.16",
    quantity: "4 pcs - (Approx.450 g-500 g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 18,
    name: "Apple - Red Delicious, Economy",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40075384_12-fresho-apple-red-delicious-economy.jpg?tr=w-1920,q=80",
    finalPrice: "₹110.45",
    strikedOffPrice: "₹145.33",
    quantity: "4 pcs",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 19,
    name: "Guava (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000370_14-fresho-guava.jpg?tr=w-1920,q=80",
    finalPrice: "₹41.82",
    strikedOffPrice: "₹55.03",
    quantity: "1 pc",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 20,
    name: "Zespri Kiwi - Sun Gold",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40025342_18-fresho-zespri-kiwi-sun-gold.jpg?tr=w-1920,q=80",
    finalPrice: "₹208.08",
    strikedOffPrice: "₹273.79",
    quantity: "1 pc - (Approx. 400g - 500g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 21,
    name: "Dragon Fruit",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40008982_15-fresho-dragon-fruit.jpg?tr=w-1920,q=80",
    finalPrice: "₹90.78",
    strikedOffPrice: "₹119.45",
    quantity: "1 pc - 800g - 1.4 kg",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 22,
    name: "Apple - Royal Gala Economy",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000005_27-fresho-apple-royal-gala-economy.jpg?tr=w-1920,q=80",
    finalPrice: "₹155.04",
    strikedOffPrice: "₹204",
    quantity: "500 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 23,
    name: "Pear - Green, Imported",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40048445_2-fresho-pear-green-imported.jpg?tr=w-1920,q=80",
    finalPrice: "₹176.92",
    strikedOffPrice: "₹232.79",
    quantity: "1 pc",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 24,
    name: "Avocado - Imported, Medium (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/30009284_8-fresho-avocado-imported-medium.jpg?tr=w-1920,q=80",
    finalPrice: "₹21.43",
    strikedOffPrice: "₹28.2",
    quantity: "8 pcs",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 25,
    name: "Dates - Kimia, with Seed",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000192_19-fresho-mosambi.jpg?tr=w-1920,q=80",
    finalPrice: "₹59.16",
    strikedOffPrice: "₹77.84",
    quantity: "4 pcs - (Approx.720 - 800 g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 26,
    name: "Banana - Robusta, Organically Grown",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40219745_1-fresho-guava-thai-organic-pink.jpg?tr=w-1920,q=80",
    finalPrice: "₹69.36",
    strikedOffPrice: "₹91.26",
    quantity: "500 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 27,
    name: "Papaya - Medium (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40073733_10-fresho-muskmelon-honeydew.jpg?tr=w-1920,q=80",
    finalPrice: "₹33.66",
    strikedOffPrice: "₹44.29",
    quantity: "1 pc - 500 g - 800 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 28,
    name: "Banana - Nendran",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000592_10-fresho-sugarcane.jpg?tr=w-1920,q=80",
    finalPrice: "₹69.36",
    strikedOffPrice: "₹91.26",
    quantity: "100 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 29,
    name: "Organic - Desi Banana",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40023478_5-fresho-coconut-organically-grown.jpg?tr=w-1920,q=80",
    finalPrice: "₹44.61",
    strikedOffPrice: "₹58.7",
    quantity: "1 pc (approx 300 - 400 g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 30,
    name: "Sapota",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000588_12-fresho-raw-mango.jpg?tr=w-1920,q=80",
    finalPrice: "₹80.58",
    strikedOffPrice: "₹106.03",
    quantity: "200 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 31,
    name: "Banana - Raw Green (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/30007325_4-fresho-sun-melon.jpg?tr=w-1920,q=80",
    finalPrice: "₹163.2",
    strikedOffPrice: "₹214.74",
    quantity: "4 pcs - 700-900g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 32,
    name: "Guava - Thai (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/30001491_15-fresho-tamarind-sweet.jpg?tr=w-1920,q=80",
    finalPrice: "₹66.3",
    strikedOffPrice: "₹87.24",
    quantity: "1 pc - approx. 300 g to 500 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 33,
    name: "Fresh Figs",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40119402_5-fresho-pineapple-chunks-single-serve.jpg?tr=w-1920,q=80",
    finalPrice: "₹29.34",
    strikedOffPrice: "₹38.6",
    quantity: "1 pc - 500g-900g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 34,
    name: "Apple - Shimla, Premium",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40005854_14-fresho-muskmelon-diced.jpg?tr=w-1920,q=80",
    finalPrice: "₹77.14",
    strikedOffPrice: "₹101.5",
    quantity: "1 kg",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 35,
    name: "Grapes - Flame Seedless",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40023482_8-fresho-watermelon-organically-grown.jpg?tr=w-1920,q=80",
    finalPrice: "₹44.88",
    strikedOffPrice: "₹59.05",
    quantity: "1 pc",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 36,
    name: "Papaya - Small",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000028_18-fresho-banana-stem.jpg?tr=w-1920,q=80",
    finalPrice: "₹80.58",
    strikedOffPrice: "₹106.03",
    quantity: "1 pc - (approx. 300g to 400g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 37,
    name: "Cherry - Imported",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40119401_5-fresho-pomegranate-single-serve-peeled.jpg?tr=w-1920,q=80",
    finalPrice: "₹108",
    strikedOffPrice: "₹142.11",
    quantity: "1 pc - 700 g - 1.5 kg",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 38,
    name: "Baby Orange (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/30006386_4-fresho-kiwi-dried.jpg?tr=w-1920,q=80",
    finalPrice: "₹22.44",
    strikedOffPrice: "₹29.53",
    quantity: "200 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 39,
    name: "Guava - Pink",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/30006400_2-fresho-mango-dried.jpg?tr=w-1920,q=80",
    finalPrice: "₹58.14",
    strikedOffPrice: "₹76.5",
    quantity: "80 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 40,
    name: "Sugarcane - Diced",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000339_14-fresho-banana-flower.jpg?tr=w-1920,q=80",
    finalPrice: "₹73",
    strikedOffPrice: "₹96.05",
    quantity: "200 g",
    qty: 1,
    inCart: false,
    offer: "20% OFF",
  },
  {
    productId: 41,
    name: "Mosambi (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40119406_5-fresho-coconut-chunks-single-serve.jpg?tr=w-1920,q=80",
    finalPrice: "₹114.24",
    strikedOffPrice: "₹150.32",
    quantity: "1 pack (approx. 500 g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 42,
    name: "Guava - Thai Organic, Pink",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40048954_1-fresho-pear-red-imported.jpg?tr=w-1920,q=80",
    finalPrice: "₹200",
    strikedOffPrice: "₹263.16",
    quantity: "1 pc (approx. 1 -3 kg)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 43,
    name: "Muskmelon - Honeydew",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40033823_20-fresho-apple-royal-gala-regular.jpg?tr=w-1920,q=80",
    finalPrice: "₹42.84",
    strikedOffPrice: "₹56.37",
    quantity: "1 pc",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 44,
    name: "Banganapalli Mango",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40086155_2-fresho-betel-nut.jpg?tr=w-1920,q=80",
    finalPrice: "₹28",
    strikedOffPrice: "₹36.84",
    quantity: "80 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 45,
    name: "Sugarcane",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40083740_2-fresho-guava-pink.jpg?tr=w-1920,q=80",
    finalPrice: "₹67.15",
    strikedOffPrice: "₹88.35",
    quantity: "200 g",
    qty: 1,
    inCart: false,
    offer: "20% OFF",
  },
  {
    productId: 46,
    name: "Coconut - Organically Grown",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/30006426_2-fresho-papaya-dried.jpg?tr=w-1920,q=80",
    finalPrice: "₹49.98",
    strikedOffPrice: "₹65.76",
    quantity: "4 pcs - Approx. 300 to 450 gm",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 47,
    name: "Raw Mango (Loose)",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/40105380_18-fresho-apple-royal-gala-premium.jpg?tr=w-1920,q=80",
    finalPrice: "₹65.28",
    strikedOffPrice: "₹85.89",
    quantity: "200 g",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 48,
    name: "Sun Melon",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/10000152_22-fresho-papaya-medium.jpg?tr=w-1920,q=80",
    finalPrice: "₹7.02",
    strikedOffPrice: "₹8.77",
    quantity: "1 pc",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
  {
    productId: 49,
    name: "Tamarind - Sweet",
    imgSrc:
      "https://www.bigbasket.com/media/uploads/p/m/30006428_2-fresho-pineapple-dried.jpg?tr=w-1920,q=80",
    finalPrice: "₹27.54",
    strikedOffPrice: "₹36.24",
    quantity: "4 pcs(Approx.600 g-700 g)",
    qty: 1,
    inCart: false,
    offer: "24% OFF",
  },
];

var beveragesObjArr =[
  {
    productId: 1,
    name: 'Chocolate Health Drink - Bournvita',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40019371_26-bournvita-chocolate-health-drink-bournvita.jpg?tr=w-3840,q=80',
    finalPrice: '₹297.6',
    strikedOffPrice: '₹320',
    quantity: '400 g - Carton',
    qty: 1,
    inCart: false,
    offer: '₹22 OFF'
  },
  {
    productId: 2,
    name: 'Health & Nutrition Drink - Classic Malt',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40117959_5-horlicks-health-nutrition-drink-classic-malt.jpg?tr=w-3840,q=80',
    finalPrice: '₹199',
    strikedOffPrice: '₹199',
    quantity: '450 g - Jar',
    qty: 1,
    inCart: false,
    offer: '₹20 OFF'
  },
  {
    productId: 3,
    name: 'Nutritional Powder - Complete & Balanced, Premium Chocolate',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20005379_8-pediasure-nutritional-powder-complete-balanced-premium-chocolate.jpg?tr=w-3840,q=80',
    finalPrice: '₹635',
    strikedOffPrice: '₹655',
    quantity: '75 g - Pouch',
    qty: 1,
    inCart: false,
    offer: '12% OFF'
  },
  {
    productId: 4,
    name: 'Powder Mix - Hot Chocolate Drink',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/277866_12-cadbury-powder-mix-hot-chocolate-drink.jpg?tr=w-3840,q=80',
    finalPrice: '₹184.8',
    strikedOffPrice: '₹210',
    quantity: '400g - Carton',
    qty: 1,
    inCart: false,
    offer: '13% OFF'
  },
  {
    productId: 5,
    name: 'Health & Nutrition Drink Refill',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/119385_11-horlicks-health-nutrition-drink-classic-malt.jpg?tr=w-3840,q=80',
    finalPrice: '₹488',
    strikedOffPrice: '₹559',
    quantity: '400 g - Jar',
    qty: 1,
    inCart: false,
    offer: '11% OFF'
  },
  {
    productId: 6,
    name: 'Chocolate Health Drink - Bournvita',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/102830_24-bournvita-chocolate-health-drink-bournvita.jpg?tr=w-3840,q=80',
    finalPrice: '₹399',
    strikedOffPrice: '₹450',
    quantity: '750 g - Pouch',
    qty: 1,
    inCart: false,
    offer: '₹20 OFF'
  },
  {
    productId: 7,
    name: "Women's Plus - Caramel",
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/272455_19-horlicks-womens-plus-caramel.jpg?tr=w-3840,q=80',
    finalPrice: '₹345',
    strikedOffPrice: '₹345',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: '14% OFF'
  },
  {
    productId: 8,
    name: 'Nutritional Powder - Complete & Balanced, Vanilla Delight',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20005381_8-pediasure-nutritional-powder-complete-balanced-vanilla-delight.jpg?tr=w-3840,q=80',
    finalPrice: '₹635',
    strikedOffPrice: '₹655',
    quantity: '250 g',
    qty: 1,
    inCart: false,
    offer: '₹60 OFF'
  },
  {
    productId: 9,
    name: 'Chocolate Health Drink - Bournvita',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40133416_19-cadbury-chocolate-health-drink-bournvita.jpg?tr=w-3840,q=80',
    finalPrice: '₹720.68',
    strikedOffPrice: '₹838',
    quantity: '400 g - Jar',
    qty: 1,
    inCart: false,
    offer: '₹20 OFF'
  },
  {
    productId: 10,
    name: 'Health & Nutritional Drink - Tasty Chocolate Flavour',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40097880_6-protinex-health-nutritional-drink-tasty-chocolate-flavour.jpg?tr=w-3840,q=80',
    finalPrice: '₹590',
    strikedOffPrice: '₹650',
    quantity: '200 g - Jar',
    qty: 1,
    inCart: false,
    offer: '₹30 OFF'
  },
  {
    productId: 11,
    name: 'Health Drink With High Protein - Vanilla Flavour, Provides Complete Nutrition For Adults',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/227052_10-ensure-nutritional-powder-vanilla-flavour.jpg?tr=w-3840,q=80',
    finalPrice: '₹665',
    strikedOffPrice: '₹685',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: '7% OFF'
  },
  {
    productId: 12,
    name: "Women's Plus, Chocolate",
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40052960_16-horlicks-womens-plus-chocolate.jpg?tr=w-3840,q=80',
    finalPrice: '₹320',
    strikedOffPrice: '₹320',
    quantity: '750 g - Carton',
    qty: 1,
    inCart: false,
    offer: '₹60 OFF'
  },
  {
    productId: 13,
    name: 'Lite Health & Nutrition Drink - Regular Malt Flavour',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/170752_8-horlicks-lite-health-nutrition-drink-regular-malt-flavour.jpg?tr=w-3840,q=80',
    finalPrice: '₹315',
    strikedOffPrice: '₹345',
    quantity: '750 g',
    qty: 1,
    inCart: false,
    offer: '20% OFF'
  },
  {
    productId: 14,
    name: 'Chocolate Health Drink - Bournvita',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/162275_17-bournvita-chocolate-health-drink-bournvita.jpg?tr=w-3840,q=80',
    finalPrice: '₹28',
    strikedOffPrice: '₹30',
    quantity: '500 g - Carton',
    qty: 1,
    inCart: false,
    offer: '₹32 OFF'
  },
  {
    productId: 15,
    name: 'Health & Nutrition Drink - Chocolate',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20005341_6-horlicks-health-nutrition-drink-chocolate-flavour.jpg?tr=w-3840,q=80',
    finalPrice: '₹439',
    strikedOffPrice: '₹439',
    quantity: '400 g',
    qty: 1,
    inCart: false,
    offer: '₹20 OFF'
  },
  {
    productId: 16,
    name: 'Health & Nutritional Drink - Vanilla Delight Flavour',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/305792_12-protinex-health-nutritional-drink-vanilla-delight-flavour.jpg?tr=w-3840,q=80',
    finalPrice: '₹565',
    strikedOffPrice: '₹625',
    quantity: '1 Kg - Carton',
    qty: 1,
    inCart: false,
    offer: '₹20 OFF'
  },
  {
    productId: 17,
    name: 'Nutrition & Health Drink - Improves Concentration & Memory, Royale Chocolate Flavour',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/269603_9-complan-nutrition-health-drink-improves-concentration-memory-royale-chocolate-flavour.jpg?tr=w-3840,q=80',
    finalPrice: '₹432',
    strikedOffPrice: '₹540',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: '15% OFF'
  },
  {
    productId: 18,
    name: 'Chocolate Health Drink - 5 Star Magic',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40126617_8-bournvita-chocolate-health-drink-5-star-magic.jpg?tr=w-3840,q=80',
    finalPrice: '₹372.6',
    strikedOffPrice: '₹405',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '₹20 OFF'
  },
  {
    productId: 19,
    name: 'Nutritious Milk Drink for Growing Children, Creamy Vanilla',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40136118_8-nestle-nangrow-nutritious-milk-drink-for-growing-children-creamy-vanilla.jpg?tr=w-3840,q=80',
    finalPrice: '₹585',
    strikedOffPrice: '₹585',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: '13% OFF'
  },
  {
    productId: 20,
    name: "Women's Plus - Chocolate",
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/272456_19-horlicks-womens-plus-chocolate.jpg?tr=w-3840,q=80',
    finalPrice: '₹345',
    strikedOffPrice: '₹345',
    quantity: '4 kg - Pouch',
    qty: 1,
    inCart: false,
    offer: '₹20 OFF'
  }
];

var dailyStaples =[
  {
    productId: 1,
    name: 'Superior-Mp-Sharbati-Atta/Ghau Peeth - Fortified',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40189429_4-bb-royal-superior-mp-sharbati-atta-fortified.jpg?tr=w-3840,q=80',
    finalPrice: '₹499',
    strikedOffPrice: '₹650',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: "23% OFF",
  },
  {
    productId: 2,
    name: 'Atta/Ghau Peeth - Whole Wheat',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/126906_8-aashirvaad-atta-whole-wheat.jpg?tr=w-3840,q=80',
    finalPrice: '₹470',
    strikedOffPrice: '₹551',
    quantity: '750 g',
    qty: 1,
    inCart: false,
    offer: "15% OFF",
  },
  {
    productId: 3,
    name: 'Atta With 9 Multigrain - High-Fibre & High Protein Soft Rotis, Fortified',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40214912_1-bb-royal-multigrain-atta.jpg?tr=w-3840,q=80',
    finalPrice: '₹545',
    strikedOffPrice: '₹650',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "16% OFF",
  },
  {
    productId: 4,
    name: 'Sooji Rawa',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/289910_10-madam-sooji-rawa.jpg?tr=w-3840,q=80',
    finalPrice: '₹38',
    strikedOffPrice: '₹42',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "10% OFF",
  },
  {
    productId: 5,
    name: 'Atta with Multigrains - High Fibre',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40236230_3-aashirvaad-atta-with-multigrains-high-fibre-soft-rotis.jpg?tr=w-3840,q=80',
    finalPrice: '₹590.75',
    strikedOffPrice: '₹695',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "15% OFF",
  },
  {
    productId: 6,
    name: 'Chakki-Fresh-Wheat-Atta/Ghau Peeth - Fortified',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40099240_9-bb-royal-chakki-fresh-wheat-atta-fortified.jpg?tr=w-3840,q=80',
    finalPrice: '₹210',
    strikedOffPrice: '₹290',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: "28% OFF",
  },
  {
    productId: 7,
    name: 'Chakki-Fresh-Wheat-Atta/Ghau Peeth - Fortified',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40099239_9-bb-royal-chakki-fresh-wheat-atta-fortified.jpg?tr=w-3840,q=80',
    finalPrice: '₹412',
    strikedOffPrice: '₹550',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: "25% OFF",
  },
  {
    productId: 8,
    name: 'Roasted Sooji/Rava',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40064889_3-bb-royal-roasted-soojirava.jpg?tr=w-3840,q=80',
    finalPrice: '₹69',
    strikedOffPrice: '₹80',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: "14% OFF",
  },
  {
    productId: 9,
    name: 'Organic - Sooji/Rava',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40072490_15-bb-royal-organic-soojirawa.jpg?tr=w-3840,q=80',
    finalPrice: '₹77',
    strikedOffPrice: '₹88',
    quantity: '750 g',
    qty: 1,
    inCart: false,
    offer: "13% OFF",
  },
  {
    productId: 10,
    name: 'Banana Flour - 100% Natural, Resistant Starch, Gluten Free',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40255375_2-jiwa-raw-banana-flour-no-grains-gluten-free-resistant-starch-healthier-alternative-to-grain-flours.jpg?tr=w-3840,q=80',
    finalPrice: '₹425',
    strikedOffPrice: '₹545',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "22% OFF",
  },
  {
    productId: 11,
    name: 'Sooji Ordinary/Bombay Rava',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/1213922_1-bb-royal-sooji-ordinarybombay-rava.jpg?tr=w-3840,q=80',
    finalPrice: '₹265',
    strikedOffPrice: '₹325',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "18% OFF",
  },
  {
    productId: 12,
    name: 'Maida',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/1213921_1-bb-royal-maida.jpg?tr=w-3840,q=80',
    finalPrice: '₹255',
    strikedOffPrice: '₹300',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "15% OFF",
  },
  {
    productId: 13,
    name: 'Multigrain Atta/Ghau Peeth - Fortified',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40189432_2-bb-royal-multigrain-atta-fortified.jpg?tr=w-3840,q=80',
    finalPrice: '₹273',
    strikedOffPrice: '₹330',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: "17% OFF",
  },
  {
    productId: 14,
    name: 'Wheat Dalia/Lapsi rava',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40026597_6-bb-royal-wheat-brokendalia.jpg?tr=w-3840,q=80',
    finalPrice: '₹53',
    strikedOffPrice: '₹80',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: "34% OFF",
  },
  {
    productId: 15,
    name: 'Almond Flour - 100% Natural, Keto-Friendly, Gluten Free',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40255376_2-jiwa-almond-flour-keto-friendly-gluten-free-100-natural.jpg?tr=w-3840,q=80',
    finalPrice: '₹545',
    strikedOffPrice: '₹745',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: "27% OFF",
  },
  {
    productId: 16,
    name: 'Atta/Ghau Peeth - Chakki Fresh',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/124657_8-pillsbury-atta-chakki-fresh.jpg?tr=w-3840,q=80',
    finalPrice: '₹448',
    strikedOffPrice: '₹551',
    quantity: '750 g',
    qty: 1,
    inCart: false,
    offer: "19% OFF",
  },
  {
    productId: 17,
    name: 'Sugar Release Control Atta/Ghau Peeth',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40077103_7-aashirvaad-sugar-release-control-atta.jpg?tr=w-3840,q=80',
    finalPrice: '₹359.45',
    strikedOffPrice: '₹395',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "₹36 OFF",
  },
  {
    productId: 18,
    name: 'Organic - Jowar Flour/Jower Peeth',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40125920_6-bb-royal-organic-jowar-flour.jpg?tr=w-3840,q=80',
    finalPrice: '₹72',
    strikedOffPrice: '₹90',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "20% OFF",
  },
  {
    productId: 19,
    name: 'Maida',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40159986_4-super-saver-maida.jpg?tr=w-3840,q=80',
    finalPrice: '₹53',
    strikedOffPrice: '₹55',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: "4% OFF",
  },
  {
    productId: 20,
    name: 'Rice Flour/Tandool Pith',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000458_11-bb-royal-rice-flour.jpg?tr=w-3840,q=80',
    finalPrice: '₹49',
    strikedOffPrice: '₹60',
    quantity: '500 g - Pouch',
    qty: 1,
    inCart: false,
    offer: '18% OFF'
  }
]

var snacks =[
  {
    productId: 1,
    name: 'Dark Fantasy - Big Choco Fills, Crunchy Cookies, Filled With Choco Crème',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40001343_4-sunfeast-dark-fantasy-cookies-big-choco-fills.jpg?tr=w-3840,q=80',
    finalPrice: '₹67.5',
    strikedOffPrice: '₹75',
    quantity: '950 g',
    qty: 1,
    inCart: false,
    offer: '10% OFF'
  },
  {
    productId: 2,
    name: 'Digestive High Fibre Biscuits - Made From Whole Wheat & Bran, Healthy Snack',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40197803_4-britannia-nutrichoice-digestive-high-fibre-biscuits-super-saver-family-pack.jpg?tr=w-3840,q=80',
    finalPrice: '₹179.1',
    strikedOffPrice: '₹199',
    quantity: '800 g - Pack',
    qty: 1,
    inCart: false,
    offer: '₹20 OFF'
  },
  {
    productId: 3,
    name: 'Gluco Biscuits - Parle-G',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/102102_4-parle-gluco-biscuits-parle-g.jpg?tr=w-3840,q=80',
    finalPrice: '₹85',
    strikedOffPrice: '₹90',
    quantity: '253 g',
    qty: 1,
    inCart: false,
    offer: '6% OFF'
  },
  {
    productId: 4,
    name: 'Marie Gold Biscuit - Crunchy, Light, Zero Trans Fat, Ready To Eat',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40197801_7-britannia-marie-gold-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹116',
    strikedOffPrice: '₹140',
    quantity: '50 g - Pouch',
    qty: 1,
    inCart: false,
    offer: '17% OFF'
  },
  {
    productId: 5,
    name: '5 Seed Digestive Biscuit - High Fibre, Goodness Of 5 Power Seeds & Wheat Fibre',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40167570_2-sunfeast-farmlite-digestive-high-fibre-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹100',
    strikedOffPrice: '₹200',
    quantity: '450 g - (Pack of 6)',
    qty: 1,
    inCart: false,
    offer: '50% OFF'
  },
  {
    productId: 6,
    name: 'Dark Fantasy - Yumfills, Rich Chocolate Pie Cake',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40110218_2-sunfeast-choco-pie-dark-fantasy-yumfills-pie.jpg?tr=w-3840,q=80',
    finalPrice: '₹85',
    strikedOffPrice: '₹170',
    quantity: '585 g - (Buy 4 Get 1 Extra)',
    qty: 1,
    inCart: false,
    offer: '50% OFF'
  },
  {
    productId: 7,
    name: 'Dark Fantasy - Choco Fills, Original Filled Cookies, With Choco Crème',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40077104_4-sunfeast-dark-fantasy-biscuits-cookies-choco-fills.jpg?tr=w-3840,q=80',
    finalPrice: '₹115.6',
    strikedOffPrice: '₹170',
    quantity: '600 g',
    qty: 1,
    inCart: false,
    offer: '32% OFF'
  },
  {
    productId: 8,
    name: 'Choco Pie - With Rich Marshmallow, Premium, Original, Sweet & Savoury',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/189909_7-lotte-choco-pie.jpg?tr=w-3840,q=80',
    finalPrice: '₹155',
    strikedOffPrice: '₹170',
    quantity: '75 g - (Pack of 10)',
    qty: 1,
    inCart: false,
    offer: '₹15 OFF'
  },
  {
    productId: 9,
    name: '5 Grain Digestive Multigrain Biscuits - High Fibre, With Honey, Healthy Snack',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/263575_9-britannia-nutrichoice-5-grain-digestive-high-fibre-multigrain-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹61.5',
    strikedOffPrice: '₹75',
    quantity: '75 g - Pouch',
    qty: 1,
    inCart: false,
    offer: '18% OFF'
  },
  {
    productId: 10,
    name: 'Dark Fantasy - Bourbon, Classic Biscuit, Made With Real Chocolate',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40077089_9-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹36',
    strikedOffPrice: '₹40',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '10% OFF'
  },
  {
    productId: 11,
    name: 'Tiger Krunch Biscuits',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40197807_4-britannia-tiger-krunch-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹70',
    strikedOffPrice: '₹140',
    quantity: '1 kg - Pouch',
    qty: 1,
    inCart: false,
    offer: '50% OFF'
  },
  {
    productId: 12,
    name: 'Marie Gold Biscuits',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/220244_6-britannia-marie-gold-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹35',
    strikedOffPrice: '₹40',
    quantity: '120 g',
    qty: 1,
    inCart: false,
    offer: '13% OFF'
  },
  {
    productId: 13,
    name: 'Digestive Zero Biscuits - No Maida & Zero Added Sugar, Made From Whole Wheat, Fibre Rich',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40086304_8-britannia-nutrichoice-digestive-zero-high-fibre-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹26',
    strikedOffPrice: '₹35',
    quantity: '1 Kg',
    qty: 1,
    inCart: false,
    offer: '26% OFF'
  },
  {
    productId: 14,
    name: 'Bourbon - The Original Choco Creme Sandwich Biscuit',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/263593_14-britannia-bourbon-chocolate-cream-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹31.5',
    strikedOffPrice: '₹40',
    quantity: '959.1 g - (5 N x 191.82 g each)',
    qty: 1,
    inCart: false,
    offer: '21% OFF'
  },
  {
    productId: 15,
    name: 'Bourbon - The Original Choco Creme Sandwich Biscuit',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/100012354_22-britannia-bourbon-chocolate-cream-biscuits.jpg?tr=w-3840,q=80',
    finalPrice: '₹9.5',
    strikedOffPrice: '₹10',
    quantity: '400 g',
    qty: 1,
    inCart: false,
    offer: '5% OFF'
  },
  {
    productId: 16,
    name: 'Assorted Cookies',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40022399_2-unibic-cookies-assorted-pack.jpg?tr=w-3840,q=80',
    finalPrice: '₹135',
    strikedOffPrice: '₹180',
    quantity: '46.3 g',
    qty: 1,
    inCart: false,
    offer: '25% OFF'
  },
  {
    productId: 17,
    name: 'Marie Gold Biscuit - Crunchy, Light, Ready To Eat',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40083745_5-britannia-biscuits-combo-marie-biscuit.jpg?tr=w-3840,q=80',
    finalPrice: '₹88',
    strikedOffPrice: '₹88',
    quantity: '200 g - Pouch',
    qty: 1,
    inCart: false,
    offer: '₹13 OFF'
  },
  {
    productId: 18,
    name: 'Good Day Cashew Cookies,(Pack of 5)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40083744_6-britannia-good-day-cashew-cookies.jpg?tr=w-3840,q=80',
    finalPrice: '₹117',
    strikedOffPrice: '₹130',
    quantity: '67 g',
    qty: 1,
    inCart: false,
    offer: '5% OFF'
  },
  {
    productId: 19,
    name: 'Farmlite Biscuit - Cookies Oats & Almonds',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40007921_10-sunfeast-farmlite-biscuit-cookies-oats-almonds.jpg?tr=w-3840,q=80',
    finalPrice: '₹61.75',
    strikedOffPrice: '₹65',
    quantity: '52.2 g - (Get 5.8 g Extra)',
    qty: 1,
    inCart: false,
    offer: '30% OFF'
  },
  {
    productId: 20,
    name: 'Cookies - Assorted Flavours, Tasty Teatime Snack',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40246054_1-unibic-cookies-assorted-flavours-tasty-teatime-snack.jpg?tr=w-3840,q=80',
    finalPrice: '₹210',
    strikedOffPrice: '₹300',
    quantity: '300 g',
    qty: 1,
    inCart: false,
    offer: '10% OFF'
  }
]


var cleaning =[
  {
    productId: 1,
    name: 'Disinfectant Toilet Cleaner Liquid, Original',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/263754_15-harpic-power-plus-disinfectant-toilet-cleaner-liquid-original.jpg?tr=w-3840,q=80',
    finalPrice: '₹94',
    strikedOffPrice: '₹99',
    quantity: '500 ml',
    qty: 1,
    inCart: false,
    offer: '5% OFF'
  },
  {
    productId: 2,
    name: 'Disinfectant Bathroom Cleaner Liquid, Lemon',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40081006_11-harpic-disinfectant-bathroom-cleaner-liquid-lemon.jpg?tr=w-3840,q=80',
    finalPrice: '₹176',
    strikedOffPrice: '₹199',
    quantity: '1 L',
    qty: 1,
    inCart: false,
    offer: '12% OFF'
  },
  {
    productId: 3,
    name: 'White & Shine Disinfectant Toilet Cleaner Bleach',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/263760_8-harpic-disinfectant-toilet-cleaner-white-shine-bleach.jpg?tr=w-3840,q=80',
    finalPrice: '₹99.22',
    strikedOffPrice: '₹105',
    quantity: '26 g',
    qty: 1,
    inCart: false,
    offer: '₹6 OFF'
  },
  {
    productId: 4,
    name: 'Liquid Disinfectant Cleaner for Home - Lime Fresh',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/1212007_5-dettol-liquid-disinfectant-cleaner-for-home-lime-fresh.jpg?tr=w-3840,q=80',
    finalPrice: '₹363.03',
    strikedOffPrice: '₹424.6',
    quantity: '1050 ml - + 500 ml Free',
    qty: 1,
    inCart: false,
    offer: '15% OFF'
  },
  {
    productId: 5,
    name: 'Disinfectant Surface & Floor Cleaner Liquid - Sandal',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/295829_10-lizol-disinfectant-surface-floor-cleaner-liquid-sandal-kills-999-germs.jpg?tr=w-3840,q=80',
    finalPrice: '₹103',
    strikedOffPrice: '₹110',
    quantity: '50 g - (Pack of 6)',
    qty: 1,
    inCart: false,
    offer: '₹7 OFF'
  },
  {
    productId: 6,
    name: 'Glass & Surface Cleaner Liquid Spray, Regular',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/263819_15-colin-glass-cleaner-liquid-spray-bottle-cleans-mirror-car-home-appliances.jpg?tr=w-3840,q=80',
    finalPrice: '₹88',
    strikedOffPrice: '₹96',
    quantity: '500 ml',
    qty: 1,
    inCart: false,
    offer: '8% OFF'
  },
  {
    productId: 7,
    name: 'Germ Protection Multipurpose Thick, Soft, Wet Wipes - With Fliptop Lid',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/1220479_1-savlon-germ-protection-multipurpose-thick-soft-wet-wipes-with-fliptop-lid.jpg?tr=w-3840,q=80',
    finalPrice: '₹344.28',
    strikedOffPrice: '₹378',
    quantity: '1 L',
    qty: 1,
    inCart: false,
    offer: '₹34 OFF'
  },
  {
    productId: 8,
    name: 'Surface Disinfectant Spray',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/1212019_1-savlon-surface-disinfectant-spray.jpg?tr=w-3840,q=80',
    finalPrice: '₹245.03',
    strikedOffPrice: '₹330',
    quantity: '26 g',
    qty: 1,
    inCart: false,
    offer: '26% OFF'
  },
  {
    productId: 9,
    name: 'Disinfectant Surface & Floor Cleaner Liquid - Lavender',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/260936_13-lizol-disinfectant-surface-floor-cleaner-liquid-lavender-kills-999-germs.jpg?tr=w-3840,q=80',
    finalPrice: '₹426.8',
    strikedOffPrice: '₹440',
    quantity: '1050 ml - + 500 ml Free',
    qty: 1,
    inCart: false,
    offer: '₹13 OFF'
  },
  {
    productId: 10,
    name: 'Germ & Stain Blaster Disinfectant Toilet Cleaner Liquid, Citrus',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40068284_8-harpic-germ-stain-blaster-disinfectant-toilet-cleaner-liquid-citrus.jpg?tr=w-3840,q=80',
    finalPrice: '₹140',
    strikedOffPrice: '₹175',
    quantity: '50 g - (Pack of 6)',
    qty: 1,
    inCart: false,
    offer: '20% OFF'
  },
  {
    productId: 11,
    name: 'Glass & Surface Cleaner Liquid, Refill',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40174606_9-colin-glass-cleaner-liquid-refill-pack-cleans-mirror-car-home-appliances.jpg?tr=w-3840,q=80',
    finalPrice: '₹165',
    strikedOffPrice: '₹176',
    quantity: '500 ml',
    qty: 1,
    inCart: false,
    offer: '₹11 OFF'
  },
  {
    productId: 12,
    name: 'Hygienic Toilet Cleaner Rim Block, Citrus',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30006623_12-harpic-hygienic-toilet-rim-block-citrus.jpg?tr=w-3840,q=80',
    finalPrice: '₹78.3',
    strikedOffPrice: '₹87',
    quantity: '1 L',
    qty: 1,
    inCart: false,
    offer: '10% OFF'
  },
  {
    productId: 13,
    name: 'Disinfectant Liquid Floor/Surface Cleaner - Provides Protection From Germs, Menthol Cool',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40114369_13-dettol-disinfectant-liquid-floorsurface-cleaner-provides-protection-from-germs-menthol-cool.jpg?tr=w-3840,q=80',
    finalPrice: '₹173.7',
    strikedOffPrice: '₹193',
    quantity: '26 g',
    qty: 1,
    inCart: false,
    offer: '₹19 OFF'
  },
  {
    productId: 14,
    name: 'Disinfectant Floor Cleaner',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/281397_7-domex-disinfectant-floor-cleaner.jpg?tr=w-3840,q=80',
    finalPrice: '₹195',
    strikedOffPrice: '₹220',
    quantity: '1050 ml - + 500 ml Free',
    qty: 1,
    inCart: false,
    offer: '11% OFF'
  },
  {
    productId: 15,
    name: 'Disinfectant Kitchen Power Cleaner Liquid Spray - Orange',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40129071_6-lizol-kitchen-power-cleaner-liquid-spray-kills-999-germs.jpg?tr=w-3840,q=80',
    finalPrice: '₹131.12',
    strikedOffPrice: '₹149',
    quantity: '50 g - (Pack of 6)',
    qty: 1,
    inCart: false,
    offer: '12% OFF'
  },
  {
    productId: 16,
    name: 'Disinfectant Surface & Floor Cleaner Liquid - Jasmine',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/281394_13-lizol-disinfectant-surface-floor-cleaner-liquid-jasmine-kills-999-germs.jpg?tr=w-3840,q=80',
    finalPrice: '₹213.4',
    strikedOffPrice: '₹220',
    quantity: '500 ml',
    qty: 1,
    inCart: false,
    offer: '₹7 OFF'
  },
  {
    productId: 17,
    name: 'Toilet Cleaner - Fresh Guard, Lime Fresh',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40125581_6-domex-fresh-guard-disinfectant-toilet-cleaner-liquid-lime-fresh.jpg?tr=w-3840,q=80',
    finalPrice: '₹215',
    strikedOffPrice: '₹215',
    quantity: '1 L',
    qty: 1,
    inCart: false,
    offer: '₹4 OFF'
  },
  {
    productId: 18,
    name: 'Disinfectant Surface & Floor Cleaner Liquid - Pine',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/1200365_10-lizol-disinfectant-floor-cleaner-liquid-pine-kills-999-germs.jpg?tr=w-3840,q=80',
    finalPrice: '₹215.6',
    strikedOffPrice: '₹220',
    quantity: '26 g',
    qty: 1,
    inCart: false,
    offer: '10% OFF'
  },
  {
    productId: 19,
    name: 'Hygienic Toilet Cleaner Rim Block, Lavender',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/270222_12-harpic-hygienic-toilet-rim-block-lavender.jpg?tr=w-3840,q=80',
    finalPrice: '₹78.3',
    strikedOffPrice: '₹87',
    quantity: '1050 ml - + 500 ml Free',
    qty: 1,
    inCart: false,
    offer: '₹9 OFF'
  },
  {
    productId: 20,
    name: 'Disinfectant Bathroom Cleaner Liquid, Floral',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40017766_14-harpic-disinfectant-bathroom-cleaner-liquid-floral.jpg?tr=w-3840,q=80',
    finalPrice: '₹96',
    strikedOffPrice: '₹105',
    quantity: '50 g - (Pack of 6)',
    qty: 1,
    inCart: false,
    offer: '10% OFF'
  }
]

var beauty =[
  {
    productId: 1,
    name: 'Just Herbs Ayurvedic Matte Lipstick Micro-Mini Trial Kit Set Of 16',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40261388_1-just-herbs-just-herbs-ayurvedic-matte-lipstick-micro-mini-trial-kit-set-of-16.jpg?tr=w-3840,q=80',
    finalPrice: '₹431',
    strikedOffPrice: '₹575',
    quantity: '1.93gm',
    qty: 1,
    inCart: false,
    offer: '25% OFF'
  },
  
  {
    productId: 12,
    name: 'Face Fwd Contour Stick - Coffee Brown, Long Lasting',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40239415_1-sugar-cosmetics-face-fwd-contour-stick-coffee-brown-long-lasting.jpg?tr=w-3840,q=80',
    finalPrice: '₹679.15',
    strikedOffPrice: '₹799',
    quantity: '5 ml - 01 Black With A Bang',
    qty: 1,
    inCart: false,
    offer: '15% OFF'
  },
  {
    productId: 13,
    name: 'Manicure Pedicure Kit - Colour May Vary',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40172300_5-bronson-professional-manicure-pedicure-kit-colour-may-vary.jpg?tr=w-3840,q=80',
    finalPrice: '₹150',
    strikedOffPrice: '₹250',
    quantity: '8 g',
    qty: 1,
    inCart: false,
    offer: '40% OFF'
  },
  {
    productId: 14,
    name: 'Zoom & Whoosh Mascara - Black',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40037522_7-colorbar-zoom-whoosh-mascara-black.jpg?tr=w-3840,q=80',
    finalPrice: '₹422.5',
    strikedOffPrice: '₹650',
    quantity: '12 g',
    qty: 1,
    inCart: false,
    offer: '35% OFF'
  },
  {
    productId: 15,
    name: "MyGlamm POPxo Makeup Collection -Mini Nail Kit-Dreamin'-15ml",
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40257394_1-myglamm-myglamm-popxo-makeup-collection-mini-nail-kit-dreamin-15ml.jpg?tr=w-3840,q=80',
    finalPrice: '₹166.83',
    strikedOffPrice: '₹249',
    quantity: '1.93gm',
    qty: 1,
    inCart: false,
    offer: '33% OFF'
  },
  {
    productId: 16,
    name: 'Mini Makeup Brushes - Colour May Vary',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40148733_1-bronson-professional-mini-makeup-brushes-colour-may-vary.jpg?tr=w-3840,q=80',
    finalPrice: '₹285',
    strikedOffPrice: '₹360',
    quantity: '6 ml - Very Black',
    qty: 1,
    inCart: false,
    offer: '21% OFF'
  },
  {
    productId: 17,
    name: 'Hi- Definition Volumising Mascara',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40203455_1-bella-voste-hi-definition-volumising-mascara.jpg?tr=w-3840,q=80',
    finalPrice: '₹174.3',
    strikedOffPrice: '₹249',
    quantity: '15 ml',
    qty: 1,
    inCart: false,
    offer: '30% OFF'
  },
  {
    productId: 18,
    name: 'Matte Melt Liquid Lip Colour - With Rosehip Oil, Long Lasting, Moisturising',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40176740_5-lakme-matte-melt-liquid-lip-colour-with-rosehip-oil-long-lasting-moisturising.jpg?tr=w-3840,q=80',
    finalPrice: '₹640',
    strikedOffPrice: '₹800',
    quantity: '24 pcs',
    qty: 1,
    inCart: false,
    offer: '20% OFF'
  },
  {
    productId: 19,
    name: 'All Weather Mascara',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40153546_5-gala-of-london-all-weather-mascara.jpg?tr=w-3840,q=80',
    finalPrice: '₹84.15',
    strikedOffPrice: '₹99',
    quantity: '7 pcs',
    qty: 1,
    inCart: false,
    offer: '15% OFF'
  },
  {
    productId: 20,
    name: 'Powder Brush - Helps To Apply & Blend Makeup, B102135',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40247092_1-boujee-beauty-powder-brush-helps-to-apply-blend-makeup-b102135.jpg?tr=w-3840,q=80',
    finalPrice: '₹337.5',
    strikedOffPrice: '₹450',
    quantity: '9.5 g',
    qty: 1,
    inCart: false,
    offer: '25% OFF'
  }
]


var household =[
  {
    productId: 1,
    name: 'Fruit & Vegetable Refrigerator Net Bag Set - Maintains Freshness, Medium',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40258747_2-iris-fruit-vegetable-refrigerator-net-bag-set-maintains-freshness-medium.jpg?tr=w-3840,q=80',
    finalPrice: '₹75',
    strikedOffPrice: '₹110',
    quantity: '12 pcs',
    qty: 1,
    inCart: false,
    offer: '32% OFF'
  },
  {
    productId: 2,
    name: 'Plastic Food Bag Clips - Multicoloured, Maintain The Hygiene & Freshness Of Your Food',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40241883_1-swastik-housewares-plastic-food-bag-clips-multicoloured-maintain-the-hygiene-freshness-of-your-food.jpg?tr=w-3840,q=80',
    finalPrice: '₹85',
    strikedOffPrice: '₹99',
    quantity: '4 pcs',
    qty: 1,
    inCart: false,
    offer: '14% OFF'
  },
  {
    productId: 3,
    name: 'Small Jars Set With Blue Printed Lids',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40207577_3-yera-small-jars-set-with-printed-lids.jpg?tr=w-3840,q=80',
    finalPrice: '₹89',
    strikedOffPrice: '₹150',
    quantity: '280 ml - (Set of 2)',
    qty: 1,
    inCart: false,
    offer: '41% OFF'
  },
  {
    productId: 4,
    name: 'Jars - Plain Design,Printed Lid, Round, High Quality, Sturdy',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40207567_4-yera-printed-lid-jars-plain-design-round.jpg?tr=w-3840,q=80',
    finalPrice: '₹99',
    strikedOffPrice: '₹120',
    quantity: '200 ml - (Set of 4)',
    qty: 1,
    inCart: false,
    offer: '18% OFF'
  },
  {
    productId: 5,
    name: 'Glass Jar With Printed Lid - Easy To Clean, Leak Proof, Small',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40207576_4-yera-glass-jars-with-printed-lids-small-200-ml.jpg?tr=w-3840,q=80',
    finalPrice: '₹119',
    strikedOffPrice: '₹150',
    quantity: '600 ml',
    qty: 1,
    inCart: false,
    offer: '21% OFF'
  },
  {
    productId: 6,
    name: 'Casserole - Used For Roti/Chapati, Dishwasher Safe, Mehandi Green',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40129297_7-asian-casserole-for-roti-chapati-cosmos-green.jpg?tr=w-3840,q=80',
    finalPrice: '₹149',
    strikedOffPrice: '₹192',
    quantity: '435 ml - (Set of 2)',
    qty: 1,
    inCart: false,
    offer: '22% OFF'
  },
  {
    productId: 7,
    name: 'Click N Seal Canister Microwaveable Plastic Container - L5901-VL',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/1213376_1-princeware-click-n-seal-canister-microwaveable-plastic-container-l5901-vl.jpg?tr=w-3840,q=80',
    finalPrice: '₹72.52',
    strikedOffPrice: '₹190',
    quantity: '780 ml',
    qty: 1,
    inCart: false,
    offer: '62% OFF'
  },
  {
    productId: 8,
    name: 'Glass Bowl - With Lid, Polo, High Quality, Sturdy',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40183521_10-yera-glass-bowl-with-lid-polo.jpg?tr=w-3840,q=80',
    finalPrice: '₹149',
    strikedOffPrice: '₹185',
    quantity: '100 ml - (Set of 3)',
    qty: 1,
    inCart: false,
    offer: '19% OFF'
  },
  {
    productId: 9,
    name: 'Solar Insulated Plastic With Inner Steel Casserole - For Roti/Chapati, Pink - Small',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40278608_1-princeware-solar-insulated-plastic-with-inner-steel-casserole-for-rotichapati-pink.jpg?tr=w-3840,q=80',
    finalPrice: '₹119',
    strikedOffPrice: '₹298',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '60% OFF'
  },
  {
    productId: 10,
    name: '4 Side Lock Containers 9001 - Plain, Transparent, Durable, Leak-proof, Air Tight',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40268060_4-joyo-plastics-4-side-lock-containers-9001-plain-transparent-durable-leak-proof-air-tight.jpg?tr=w-3840,q=80',
    finalPrice: '₹99',
    strikedOffPrice: '₹165',
    quantity: '2.5 L',
    qty: 1,
    inCart: false,
    offer: '40% OFF'
  },
  {
    productId: 11,
    name: 'LED Bulb - Astron Plus 10W With B22 Base, Cool Day White',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40226807_2-halonix-led-bulb-astron-plus-10w-with-b22-base-cool-day-white.jpg?tr=w-3840,q=80',
    finalPrice: '₹69',
    strikedOffPrice: '₹199',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '65% OFF'
  },
  {
    productId: 12,
    name: 'Mapple Plastic Bread Box Plastic Container - Assorted Color',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40199982_2-polyset-mapple-plastic-bread-box-plastic-container-assorted-color.jpg?tr=w-3840,q=80',
    finalPrice: '₹75',
    strikedOffPrice: '₹129',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '42% OFF'
  },
  {
    productId: 13,
    name: 'Mini Chopper With 3 Blades - For Cutting Vegetables & Fruits, Red, 1 pc',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40213324_4-wellberg-mini-chopper-with-3-blades-for-cutting-vegetables-fruits-red-1-pc.jpg?tr=w-3840,q=80',
    finalPrice: '₹149',
    strikedOffPrice: '₹595',
    quantity: '4 pcs',
    qty: 1,
    inCart: false,
    offer: '75% OFF'
  },
  {
    productId: 14,
    name: 'Click N Seal Square Microwaveable Plastic Container - L5945-VL',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40004673_4-princeware-click-n-seal-square-microwaveable-plastic-container-l5945-vl.jpg?tr=w-3840,q=80',
    finalPrice: '₹169',
    strikedOffPrice: '₹358',
    quantity: '210 ml - (Set of 5)',
    qty: 1,
    inCart: false,
    offer: '53% OFF'
  },
  {
    productId: 15,
    name: 'USB Copper String Lights - 3 M 30 LEDs Warm White',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40228608_4-mansaa-usb-copper-string-lights-5-m30-leds-warm-whitefor-festive-decorations-lighting.jpg?tr=w-3840,q=80',
    finalPrice: '₹99',
    strikedOffPrice: '₹399',
    quantity: '380 ml',
    qty: 1,
    inCart: false,
    offer: '75% OFF'
  },
  {
    productId: 16,
    name: 'Flora Dryfruit Plastic Dabba/Container Set - BPA-Free, Green',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40225632_2-asian-flora-dryfruit-plastic-dabbacontainer-set-bpa-free-green.jpg?tr=w-3840,q=80',
    finalPrice: '₹149',
    strikedOffPrice: '₹230',
    quantity: '60 ml - (Set of 6)',
    qty: 1,
    inCart: false,
    offer: '35% OFF'
  },
  {
    productId: 17,
    name: 'Keeper Container - No.1, Plastic, Durable, BPA Free, For Multipurpose Use, Yellow',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40268907_2-polyset-keeper-container-no1-plastic-durable-bpa-free-for-multipurpose-use-blue.jpg?tr=w-3840,q=80',
    finalPrice: '₹49',
    strikedOffPrice: '₹59',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '17% OFF'
  },
  {
    productId: 18,
    name: 'Ceramic Tea/Coffee/Milk Mug - Yellow & Orange Design, Hand Painted',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40235100_2-bb-home-earth-milk-mug-sunset-orange-hand-painted-design.jpg?tr=w-3840,q=80',
    finalPrice: '₹109',
    strikedOffPrice: '₹179',
    quantity: '5 pcs',
    qty: 1,
    inCart: false,
    offer: '39% OFF'
  },
  {
    productId: 19,
    name: 'Vogue Shot Glass For Alcohol With Colour Box - Transparent, Functional, Elegant',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40271443_3-soogo-vogue-shot-glass-for-alcohol-with-colour-box-transparent-functional-elegant.jpg?tr=w-3840,q=80',
    finalPrice: '₹129',
    strikedOffPrice: '₹245',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '47% OFF'
  },
  {
    productId: 20,
    name: 'Rice/Vegetables Washing Bowl With Handle - Green, For Multipurpose Use',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40245829_1-trm-ricevegetables-washing-bowl-with-handle-green-for-multipurpose-use.jpg?tr=w-3840,q=80',
    finalPrice: '₹99',
    strikedOffPrice: '₹195',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '49% OFF'
  }
]

//   hide sort section

function hideSortSection() {
  var sortSection = document.getElementById("sort-box");
  var productBox = document.getElementById("product-box");
  var filterbtn = document.querySelectorAll(".filter-container > button");

  if (sortSection.style.display == "") {
    sortSection.style.display = "none";
    productBox.style.gridTemplateColumns = "repeat(12,minmax(0,1fr))";
    filterbtn[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      
    <span>Show Filter</span>`;
  } else {
    sortSection.style.display = "";
    productBox.style.gridTemplateColumns = "repeat(9,minmax(0,1fr))";
    filterbtn[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
    <span>Hide Filter</span>`;
  }
}

//   hide sort section end

  //   hide sort section end

  var cat =localStorage.getItem("category");


  if(cat=="fruits"){
    displayProducts(productsObjArr);
  }
  else if(cat=="daily"){
    displayProducts(dailyStaples);
  }
  else if(cat=="beverage"){
    displayProducts(beveragesObjArr);
  }
  else if(cat=="snack"){
    displayProducts(snacks);
  }
  else if(cat=="clean"){
    displayProducts(cleaning);
  }
  else if(cat=="beaut"){
    displayProducts(beauty);
  }
  else if(cat=="homeproducts"){
    displayProducts(household);
  }


//   dynamically product-box creation

// displayProducts(productsObjArr);

function displayProducts(arr) {
  document.getElementById("product-box").textContent = "";
  document.getElementById("fruits-count").textContent = "(" + arr.length + ")";

  var endContent = document.getElementById("end");

  if (endContent !== null) {
    document.getElementById("end").remove();
  }

  //proDuct arr looping

  arr.map(function (e, i) {
    // creating li with class "product-items" in which all elements will be appended

    var li = document.createElement("li");
    li.setAttribute("class", "product-items");

    var divMain = document.createElement("div"); // all below items will be appended to this div

    // image div container starts -->
    var divImgContainer = document.createElement("div");

    var deckImg = document.createElement("div");
    deckImg.setAttribute("class", "deckImg");

    var a = document.createElement("a");
    var img = document.createElement("img"); //set src of image
    img.src = e.imgSrc;
    a.append(img);

    deckImg.append(a);

    var foodCategory = document.createElement("div");
    foodCategory.setAttribute("class", "foodCategory");
    var spanBorder = document.createElement("span");
    var spanInner = document.createElement("span"); //veg non-veg circle
    spanBorder.append(spanInner);

    foodCategory.append(spanBorder);

    var offerTag = document.createElement("div");
    offerTag.setAttribute("class", "offer-tag");

    var offerBorder = document.createElement("span");
    var span2 = document.createElement("span");
    var offerText = document.createElement("span"); // offer text ie. 25% OFF
    offerText.textContent = e.offer;
    span2.append(offerText);
    offerBorder.append(span2);

    offerTag.append(offerBorder);

    divImgContainer.append(deckImg, foodCategory, offerTag);
    // image div container end -->

    // delivery icon and time div container starts -->
    var divIconTime = document.createElement("div");
    divIconTime.setAttribute("class", "delivery");

    var deliveryIcon = document.createElement("span");
    deliveryIcon.setAttribute("id", "delivery-icon");

    var svgTimeContainer = document.createElement("span");
    svgTimeContainer.style.marginRight = "0.25rem";

    svgTimeContainer.innerHTML = `<svg width="13" height="10" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-current text-darkOnyx-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.843 5H.18l.352-1.806V2.13l-.52-.685H1.04v-.38L0 0h6.24l-.883 3.75h.318c.673 0 1.22.56 1.22 1.25h1.018l1.865-1.432-.197-.73a1.25 1.25 0 0 1-.046-.338H8.333l.394-1.25h2.03V2.5l.881 3.274A2.19 2.19 0 0 1 13 7.812C13 9.02 12.042 10 10.863 10c-.85 0-1.586-.512-1.93-1.25H4.859A2.136 2.136 0 0 1 2.93 10C1.75 10 .792 9.019.792 7.812c0-1.017.682-1.874 1.602-2.118L2.572 5h1.162l-.163.726A2.18 2.18 0 0 1 5.044 7.5h3.704c.125-.884.767-1.6 1.601-1.811l-.222-.826L8.32 6.25H6.896c-.674 0-1.221-.56-1.221-1.25H3.843Zm.316-1.273H1.401l.678-2.477h2.6l-.52 2.477ZM2.013 7.812c0-.516.41-.936.915-.937h.002c.488 0 .888.395.913.888v.099a.927.927 0 0 1-.914.888.928.928 0 0 1-.916-.938Zm7.935 0c0-.516.41-.937.915-.937.505 0 .916.42.916.938 0 .516-.41.937-.916.937a.928.928 0 0 1-.915-.938Zm1.61-4.687 1.222-.313v1.876l-1.221-.313v-1.25Z" fill="#606060"></path></svg>`;
    var deliverytime = document.createElement("span");
    // <span id="delivery-time">5hrs</span>
    deliverytime.textContent = Math.floor(Math.random(4) * 4) + 1 + "hrs";
    //   document.getElementById("delivery-time").textContent ="5hrs";

    deliveryIcon.append(svgTimeContainer, deliverytime);

    divIconTime.append(deliveryIcon);

    // var time =document.createElement(span);
    // time.setAttribute("id","delivery-time");

    // delivery icon and time div container ends -->

    //brand-itemname div container starts -->
    var h3 = document.createElement("h3");
    h3.setAttribute("class", "brand-itemname");

    var productLink = document.createElement("a");

    var brandName = document.createElement("span");
    brandName.setAttribute("id", "brandName");
    brandName.textContent = "fresho"; //set brandName

    var itemNameContainer = document.createElement("div");
    var productName = document.createElement("p");
    productName.setAttribute("id", "itemName");
    productName.textContent = e.name; //set productName

    itemNameContainer.append(productName);

    productLink.append(brandName, itemNameContainer);

    // h3.append(productLink,itemNameContainer)

    var weightContainer = document.createElement("div");
    weightContainer.setAttribute("class", "item-weight");

    var spanWeightContainer = document.createElement("span");
    var weightText = document.createElement("span");
    weightText.textContent = e.quantity; //set the qty text
    spanWeightContainer.append(weightText);
    weightContainer.append(spanWeightContainer);

    h3.append(productLink, weightContainer);

    //brand-itemname div container ends -->

    //price-container starts -->
    var divPrice = document.createElement("div");
    divPrice.setAttribute("class", "price-container");

    var finalPrice = document.createElement("span");
    finalPrice.textContent = e.finalPrice;
    var strikedOffPrice = document.createElement("span");
    strikedOffPrice.textContent = e.strikedOffPrice;

    divPrice.append(finalPrice, strikedOffPrice);
    //price-container ends -->

    // btn-container starts -->

    var divBtnContainer = document.createElement("div");
    divBtnContainer.setAttribute("class", "btn-container");

    // var whishlistBtnContainer =document.createElement("div");
    // whishlistBtnContainer.setAttribute("class","whish");
    // var btnWhishList =document.createElement("button");
    // btnWhishList.setAttribute("class","whishlist-btn")
    // btnWhishList.innerHTML =`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.821 15.506c.169 0 .339.043.492.129L17 18.285V5.335c0-.201-.121-.334-.2-.334H7.2c-.08 0-.2.133-.2.334v12.9l4.306-2.585c.159-.095.337-.143.515-.143ZM6 21a1 1 0 0 1-1-1V5.334C5 4.047 5.987 3 7.2 3h9.6C18.013 3 19 4.047 19 5.334V20a1 1 0 0 1-1.492.87l-5.672-3.207-5.322 3.195A1.006 1.006 0 0 1 6 21Z" fill="#101010"></path></svg>`
    // whishlistBtnContainer.append(btnWhishList);

    var addToCartBtn = document.createElement("button");
    addToCartBtn.setAttribute("class", "addToCart-btn");
    addToCartBtn.textContent = "Add";

    // click listner for add to cart

    addToCartBtn.addEventListener("click", function () {
      var isPrsentInCart = false;

      prodId = productsObjArr[i].productId;

      var cartArr = JSON.parse(localStorage.getItem("cartProduct")) || [];

      cartArr.map(function (e) {
        if (e.productId === prodId) {
          isPrsentInCart = true;
        }
      });

      if (isPrsentInCart) {
        alert("Product is already in Cart!");
      } else {
        addToCart(i);
        alert("Successfully added to Cart!");
      }
    });

    divBtnContainer.append(addToCartBtn);

    // btn-container ends -->

    divMain.append(divImgContainer, divIconTime, h3, divPrice, divBtnContainer);

    divImgContainer.addEventListener("click", function () {
      localStorage.setItem("productDetails", JSON.stringify(arr[i]));

      window.location.href = "../product page/product.html";
    });

    li.append(divMain);

    document.getElementById("product-box").append(li);
  }); //end looping proDuct arr

  var div = document.createElement("div");
  div.setAttribute("id", "end");
  var h4 = document.createElement("h4");
  h4.textContent = "That's all folks";
  div.style.textAlign = "center";

  div.append(h4);

  document.getElementById("product-section").append(div);
} //display func ends

//sort button i.e Relevance

document
  .getElementById("sort-by-price")
  .addEventListener("click", toggleSortOptions);

function toggleSortOptions() {
  var sortContainer = document.getElementById("sortList");
  sortContainer.classList.toggle("sort-menu-hide");
}

//sorting of products by price

// sortLowToHigh

function sortLowToHigh() {
  console.log("sortLowToHigh");
  productsObjArr.sort(function (a, b) {
    var num1 = parseInt(a.finalPrice.substring(1, a.length));
    var num2 = parseInt(b.finalPrice.substring(1, b.length));

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
    return 0;
  });

  displayProducts(productsObjArr);
}

// sortHighToLow

function sortHighToLow() {
  productsObjArr.sort(function (a, b) {
    var num1 = parseInt(a.finalPrice.substring(1, a.length));
    var num2 = parseInt(b.finalPrice.substring(1, b.length));

    if (num1 > num2) return -1;
    if (num1 < num2) return 1;
    return 0;
  });

  displayProducts(productsObjArr);
}

//fruitNameSort ie.sort by fruit name on left sidebar

var fruitNamesList = document.querySelectorAll(".filter-1-list > ul > li");

for (var i = 1; i < fruitNamesList.length; i++) {
  fruitNamesList[i].addEventListener("click", sortByFruitName);
}
function sortByFruitName() {
  var fruitName = event.target.innerText;

  fruitName = fruitName.toLowerCase();

  var filterArr = productsObjArr.filter(function (e) {
    var name = e.name.toLowerCase();

    return name.includes(fruitName);
  });

  displayProducts(filterArr);
}

// function to add product to cart
var cartProductArr = JSON.parse(localStorage.getItem("cartProduct")) || [];
function addToCart(index) {
  // console.log(productsObjArr[index])
  cartProductArr.push(productsObjArr[index]);
  localStorage.setItem("cartProduct", JSON.stringify(cartProductArr));
}





// sort by price from left sidebar

document.getElementById("between50").addEventListener("click",sortBetween50);
document.getElementById("between150").addEventListener("click",sortBetween150);
document.getElementById("between250").addEventListener("click",sortBetween250);


function sortBetween50(){
  var isChecked =event.target.checked;

  


  if(isChecked){

    document.getElementById("between150").checked =false;
    document.getElementById("between250").checked =false;

    var filter =productsObjArr.filter(function(e){

      var price =e.finalPrice;
      price =price.substring(1,price.length)

      return price>=0 && price<=50
    });

    filter.sort(function(a,b){

      var num1 =parseInt(a.finalPrice.substring(1,a.length));
      var num2 =parseInt(b.finalPrice.substring(1,b.length));

      if(num1 > num2) return 1;
      if(num1 < num2) return -1;
      return 0;
    });

    displayProducts(filter);
    
  }
  else{
    displayProducts(productsObjArr);
  }
}



function sortBetween150(){
  var isChecked =event.target.checked;

  


  if(isChecked){

    document.getElementById("between50").checked =false;
    document.getElementById("between250").checked =false;
    var filter =productsObjArr.filter(function(e){

      var price =e.finalPrice;
      price =price.substring(1,price.length)

      return price>=51 && price<=150
    });

    filter.sort(function(a,b){

      var num1 =parseInt(a.finalPrice.substring(1,a.length));
      var num2 =parseInt(b.finalPrice.substring(1,b.length));

      if(num1 > num2) return 1;
      if(num1 < num2) return -1;
      return 0;
    });

    displayProducts(filter);
   
  }
  else{
    displayProducts(productsObjArr);
  }
}




function sortBetween250(){
  var isChecked =event.target.checked;

  


  if(isChecked){
    document.getElementById("between50").checked =false;
    document.getElementById("between150").checked =false;
    var filter =productsObjArr.filter(function(e){

      var price =e.finalPrice;
      price =price.substring(1,price.length)

      return price>=151 && price<=250
    });

    filter.sort(function(a,b){

      var num1 =parseInt(a.finalPrice.substring(1,a.length));
      var num2 =parseInt(b.finalPrice.substring(1,b.length));

      if(num1 > num2) return 1;
      if(num1 < num2) return -1;
      return 0;
    });

    displayProducts(filter);
    
  }
  else{
    displayProducts(productsObjArr);
  }
}
