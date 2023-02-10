// console.log("categoryScripts");


// object structure

    // name: 'Strawberry',
    // imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-3840,q=80',
    // finalPrice: '₹45.89',
    // strikedOffPrice: '₹60.38',
    // quantity: '200 g',
    // offer: '24% OFF'



var productsObjArr=[
  {
    productId: 1,
    name: 'Strawberry',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-1920,q=80',
    finalPrice: '₹45.89',
    strikedOffPrice: '₹60.38',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 2,
    name: 'Banana - Yelakki',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000031_21-fresho-banana-yelakki.jpg?tr=w-1920,q=80',
    finalPrice: '₹100',
    strikedOffPrice: '₹131.58',
    quantity: '1 kg - (5-6 pcs per kg)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 3,
    name: 'Pomegranate - Regular (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40120006_5-fresho-pomegranate-small.jpg?tr=w-1920,q=80',
    finalPrice: '₹167.37',
    strikedOffPrice: '₹220.22',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 4,
    name: 'Tender Coconut',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40057966_3-fresho-tender-coconut-medium.jpg?tr=w-1920,q=80',
    finalPrice: '₹45',
    strikedOffPrice: '₹59.21',
    quantity: 'Approx 500 g - 1 Pack',
    qty: 1,
    inCart: false,
    offer: '23% OFF'
  },
  {
    productId: 5,
    name: 'Grapes - Green Sonaka',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40218332_1-fresho-grapes-green.jpg?tr=w-1920,q=80',
    finalPrice: '₹42.47',
    strikedOffPrice: '₹55.88',
    quantity: '1 kg - (Approx. 11-12 pcs)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 6,
    name: 'Baby Apple Shimla',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40134281_13-fresho-baby-apple-shimla.jpg?tr=w-1920,q=80',
    finalPrice: '₹140',
    strikedOffPrice: '₹184.21',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 7,
    name: 'Strawberry - Organically Grown',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40099244_1-fresho-strawberry-organically-grown.jpg?tr=w-1920,q=80',
    finalPrice: '₹49.97',
    strikedOffPrice: '₹65.75',
    quantity: '1 pc - (approx. 450g to 500)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 8,
    name: 'Coconut - Medium (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000093_16-fresho-coconut-medium.jpg?tr=w-1920,q=80',
    finalPrice: '₹21.5',
    strikedOffPrice: '₹33.83',
    quantity: '3 pcs',
    qty: 1,
    inCart: false,
    offer: '43% OFF'
  },
  {
    productId: 9,
    name: 'Banana - Robusta',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000025_27-fresho-banana-robusta.jpg?tr=w-1920,q=80',
    finalPrice: '₹48.96',
    strikedOffPrice: '₹64.42',
    quantity: '4 pcs - (Approx. 500g - 600g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 10,
    name: 'Kiwi - Green',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20000911_30-fresho-kiwi-green.jpg?tr=w-1920,q=80',
    finalPrice: '₹69.23',
    strikedOffPrice: '₹91.09',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 11,
    name: 'Apple - Red Delicious, Regular',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40033824_21-fresho-apple-red-delicious-regular.jpg?tr=w-1920,q=80',
    finalPrice: '₹129.54',
    strikedOffPrice: '₹170.45',
    quantity: '1 pc - (approx. 550g to 650g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 12,
    name: 'Watermelon - Medium',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40103540_5-fresho-watermelon-medium.jpg?tr=w-1920,q=80',
    finalPrice: '₹56.7',
    strikedOffPrice: '₹74.6',
    quantity: '4 pcs - (200-220 g per pc)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 13,
    name: 'Grapes - Black Seedless',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40229414_1-fresho-grapes-black-imported.jpg?tr=w-1920,q=80',
    finalPrice: '₹58.08',
    strikedOffPrice: '₹76.42',
    quantity: '4 pcs',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 14,
    name: 'Coconut - Large',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000092_15-fresho-coconut-large.jpg?tr=w-1920,q=80',
    finalPrice: '₹34.68',
    strikedOffPrice: '₹45.63',
    quantity: '4 pcs - (Approx. 450g - 500g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 15,
    name: 'Pomegranate (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000269_32-fresho-pomegranate.jpg?tr=w-1920,q=80',
    finalPrice: '₹162.43',
    strikedOffPrice: '₹213.72',
    quantity: '3 pcs',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 16,
    name: 'Orange - Imported (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20000909_18-fresho-orange-imported.jpg?tr=w-1920,q=80',
    finalPrice: '₹63.08',
    strikedOffPrice: '₹83',
    quantity: '1 pc - 220-350g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 17,
    name: 'Ber - Apple',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20003957_2-fresho-ber-apple.jpg?tr=w-1920,q=80',
    finalPrice: '₹57.12',
    strikedOffPrice: '₹75.16',
    quantity: '4 pcs - (Approx.450 g-500 g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 18,
    name: 'Apple - Red Delicious, Economy',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40075384_12-fresho-apple-red-delicious-economy.jpg?tr=w-1920,q=80',
    finalPrice: '₹110.45',
    strikedOffPrice: '₹145.33',
    quantity: '4 pcs',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 19,
    name: 'Guava (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000370_14-fresho-guava.jpg?tr=w-1920,q=80',
    finalPrice: '₹41.82',
    strikedOffPrice: '₹55.03',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 20,
    name: 'Zespri Kiwi - Sun Gold',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40025342_18-fresho-zespri-kiwi-sun-gold.jpg?tr=w-1920,q=80',
    finalPrice: '₹208.08',
    strikedOffPrice: '₹273.79',
    quantity: '1 pc - (Approx. 400g - 500g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 21,
    name: 'Dragon Fruit',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40008982_15-fresho-dragon-fruit.jpg?tr=w-1920,q=80',
    finalPrice: '₹90.78',
    strikedOffPrice: '₹119.45',
    quantity: '1 pc - 800g - 1.4 kg',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 22,
    name: 'Apple - Royal Gala Economy',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000005_27-fresho-apple-royal-gala-economy.jpg?tr=w-1920,q=80',
    finalPrice: '₹155.04',
    strikedOffPrice: '₹204',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 23,
    name: 'Pear - Green, Imported',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40048445_2-fresho-pear-green-imported.jpg?tr=w-1920,q=80',
    finalPrice: '₹176.92',
    strikedOffPrice: '₹232.79',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 24,
    name: 'Avocado - Imported, Medium (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30009284_8-fresho-avocado-imported-medium.jpg?tr=w-1920,q=80',
    finalPrice: '₹21.43',
    strikedOffPrice: '₹28.2',
    quantity: '8 pcs',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 25,
    name: 'Dates - Kimia, with Seed',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000192_19-fresho-mosambi.jpg?tr=w-1920,q=80',
    finalPrice: '₹59.16',
    strikedOffPrice: '₹77.84',
    quantity: '4 pcs - (Approx.720 - 800 g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 26,
    name: 'Banana - Robusta, Organically Grown',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40219745_1-fresho-guava-thai-organic-pink.jpg?tr=w-1920,q=80',
    finalPrice: '₹69.36',
    strikedOffPrice: '₹91.26',
    quantity: '500 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 27,
    name: 'Papaya - Medium (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40073733_10-fresho-muskmelon-honeydew.jpg?tr=w-1920,q=80',
    finalPrice: '₹33.66',
    strikedOffPrice: '₹44.29',
    quantity: '1 pc - 500 g - 800 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 28,
    name: 'Banana - Nendran',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000592_10-fresho-sugarcane.jpg?tr=w-1920,q=80',
    finalPrice: '₹69.36',
    strikedOffPrice: '₹91.26',
    quantity: '100 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 29,
    name: 'Organic - Desi Banana',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40023478_5-fresho-coconut-organically-grown.jpg?tr=w-1920,q=80',
    finalPrice: '₹44.61',
    strikedOffPrice: '₹58.7',
    quantity: '1 pc (approx 300 - 400 g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 30,
    name: 'Sapota',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000588_12-fresho-raw-mango.jpg?tr=w-1920,q=80',
    finalPrice: '₹80.58',
    strikedOffPrice: '₹106.03',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 31,
    name: 'Banana - Raw Green (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30007325_4-fresho-sun-melon.jpg?tr=w-1920,q=80',
    finalPrice: '₹163.2',
    strikedOffPrice: '₹214.74',
    quantity: '4 pcs - 700-900g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 32,
    name: 'Guava - Thai (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30001491_15-fresho-tamarind-sweet.jpg?tr=w-1920,q=80',
    finalPrice: '₹66.3',
    strikedOffPrice: '₹87.24',
    quantity: '1 pc - approx. 300 g to 500 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 33,
    name: 'Fresh Figs',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40119402_5-fresho-pineapple-chunks-single-serve.jpg?tr=w-1920,q=80',
    finalPrice: '₹29.34',
    strikedOffPrice: '₹38.6',
    quantity: '1 pc - 500g-900g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 34,
    name: 'Apple - Shimla, Premium',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40005854_14-fresho-muskmelon-diced.jpg?tr=w-1920,q=80',
    finalPrice: '₹77.14',
    strikedOffPrice: '₹101.5',
    quantity: '1 kg',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 35,
    name: 'Grapes - Flame Seedless',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40023482_8-fresho-watermelon-organically-grown.jpg?tr=w-1920,q=80',
    finalPrice: '₹44.88',
    strikedOffPrice: '₹59.05',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 36,
    name: 'Papaya - Small',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000028_18-fresho-banana-stem.jpg?tr=w-1920,q=80',
    finalPrice: '₹80.58',
    strikedOffPrice: '₹106.03',
    quantity: '1 pc - (approx. 300g to 400g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 37,
    name: 'Cherry - Imported',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40119401_5-fresho-pomegranate-single-serve-peeled.jpg?tr=w-1920,q=80',
    finalPrice: '₹108',
    strikedOffPrice: '₹142.11',
    quantity: '1 pc - 700 g - 1.5 kg',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 38,
    name: 'Baby Orange (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30006386_4-fresho-kiwi-dried.jpg?tr=w-1920,q=80',
    finalPrice: '₹22.44',
    strikedOffPrice: '₹29.53',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 39,
    name: 'Guava - Pink',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30006400_2-fresho-mango-dried.jpg?tr=w-1920,q=80',
    finalPrice: '₹58.14',
    strikedOffPrice: '₹76.5',
    quantity: '80 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 40,
    name: 'Sugarcane - Diced',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000339_14-fresho-banana-flower.jpg?tr=w-1920,q=80',
    finalPrice: '₹73',
    strikedOffPrice: '₹96.05',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '20% OFF'
  },
  {
    productId: 41,
    name: 'Mosambi (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40119406_5-fresho-coconut-chunks-single-serve.jpg?tr=w-1920,q=80',
    finalPrice: '₹114.24',
    strikedOffPrice: '₹150.32',
    quantity: '1 pack (approx. 500 g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 42,
    name: 'Guava - Thai Organic, Pink',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40048954_1-fresho-pear-red-imported.jpg?tr=w-1920,q=80',
    finalPrice: '₹200',
    strikedOffPrice: '₹263.16',
    quantity: '1 pc (approx. 1 -3 kg)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 43,
    name: 'Muskmelon - Honeydew',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40033823_20-fresho-apple-royal-gala-regular.jpg?tr=w-1920,q=80',
    finalPrice: '₹42.84',
    strikedOffPrice: '₹56.37',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 44,
    name: 'Banganapalli Mango',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40086155_2-fresho-betel-nut.jpg?tr=w-1920,q=80',
    finalPrice: '₹28',
    strikedOffPrice: '₹36.84',
    quantity: '80 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 45,
    name: 'Sugarcane',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40083740_2-fresho-guava-pink.jpg?tr=w-1920,q=80',
    finalPrice: '₹67.15',
    strikedOffPrice: '₹88.35',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '20% OFF'
  },
  {
    productId: 46,
    name: 'Coconut - Organically Grown',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30006426_2-fresho-papaya-dried.jpg?tr=w-1920,q=80',
    finalPrice: '₹49.98',
    strikedOffPrice: '₹65.76',
    quantity: '4 pcs - Approx. 300 to 450 gm',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 47,
    name: 'Raw Mango (Loose)',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40105380_18-fresho-apple-royal-gala-premium.jpg?tr=w-1920,q=80',
    finalPrice: '₹65.28',
    strikedOffPrice: '₹85.89',
    quantity: '200 g',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 48,
    name: 'Sun Melon',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000152_22-fresho-papaya-medium.jpg?tr=w-1920,q=80',
    finalPrice: '₹7.02',
    strikedOffPrice: '₹8.77',
    quantity: '1 pc',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  },
  {
    productId: 49,
    name: 'Tamarind - Sweet',
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30006428_2-fresho-pineapple-dried.jpg?tr=w-1920,q=80',
    finalPrice: '₹27.54',
    strikedOffPrice: '₹36.24',
    quantity: '4 pcs(Approx.600 g-700 g)',
    qty: 1,
    inCart: false,
    offer: '24% OFF'
  }
];


//   hide sort section

  function hideSortSection(){


    var sortSection =document.getElementById("sort-box");
    var productBox =document.getElementById("product-box");
    var filterbtn =document.querySelectorAll(".filter-container > button")

    if(sortSection.style.display==""){
        sortSection.style.display ="none";
        productBox.style.gridTemplateColumns ="repeat(12,minmax(0,1fr))";
        filterbtn[0].innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      
    <span>Show Filter</span>`
    }
    else{
       sortSection.style.display ="";
        productBox.style.gridTemplateColumns ="repeat(9,minmax(0,1fr))"
        filterbtn[0].innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
    <span>Hide Filter</span>`
    }

    



  }


  //   hide sort section end


//   dynamically product-box creation

displayProducts(productsObjArr);

function displayProducts(arr){

    document.getElementById("product-box").textContent ="";
    document.getElementById("fruits-count").textContent ="("+arr.length+")";

    var endContent =document.getElementById("end")
    
    if(endContent!==null){
      document.getElementById("end").remove();
    }
    

    //proDuct arr looping

    arr.map(function(e,i){

         // creating li with class "product-items" in which all elements will be appended

    var li =document.createElement("li");
    li.setAttribute("class","product-items")

    var divMain =document.createElement("div"); // all below items will be appended to this div

    // image div container starts -->
    var divImgContainer =document.createElement("div");

    var deckImg =document.createElement("div");
    deckImg.setAttribute("class","deckImg");

    var a =document.createElement("a");
    var img =document.createElement("img"); //set src of image
    img.src =e.imgSrc;
    a.append(img);

    deckImg.append(a);


    var foodCategory =document.createElement("div");
    foodCategory.setAttribute("class","foodCategory");
    var spanBorder =document.createElement("span");
    var spanInner =document.createElement("span"); //veg non-veg circle
    spanBorder.append(spanInner);

    foodCategory.append(spanBorder);


    var offerTag =document.createElement("div");
    offerTag.setAttribute("class","offer-tag");

    var offerBorder =document.createElement("span");
    var span2 =document.createElement("span");
    var offerText =document.createElement("span"); // offer text ie. 25% OFF
    offerText.textContent =e.offer;
    span2.append(offerText);
    offerBorder.append(span2);

    offerTag.append(offerBorder);




    divImgContainer.append(deckImg,foodCategory,offerTag);
    // image div container end -->


    // delivery icon and time div container starts -->
    var divIconTime =document.createElement("div");
    divIconTime.setAttribute("class","delivery");

    var deliveryIcon =document.createElement("span");
    deliveryIcon.setAttribute("id","delivery-icon");

    var svgTimeContainer =document.createElement("span");
    svgTimeContainer.style.marginRight="0.25rem"

    svgTimeContainer.innerHTML =`<svg width="13" height="10" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-current text-darkOnyx-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.843 5H.18l.352-1.806V2.13l-.52-.685H1.04v-.38L0 0h6.24l-.883 3.75h.318c.673 0 1.22.56 1.22 1.25h1.018l1.865-1.432-.197-.73a1.25 1.25 0 0 1-.046-.338H8.333l.394-1.25h2.03V2.5l.881 3.274A2.19 2.19 0 0 1 13 7.812C13 9.02 12.042 10 10.863 10c-.85 0-1.586-.512-1.93-1.25H4.859A2.136 2.136 0 0 1 2.93 10C1.75 10 .792 9.019.792 7.812c0-1.017.682-1.874 1.602-2.118L2.572 5h1.162l-.163.726A2.18 2.18 0 0 1 5.044 7.5h3.704c.125-.884.767-1.6 1.601-1.811l-.222-.826L8.32 6.25H6.896c-.674 0-1.221-.56-1.221-1.25H3.843Zm.316-1.273H1.401l.678-2.477h2.6l-.52 2.477ZM2.013 7.812c0-.516.41-.936.915-.937h.002c.488 0 .888.395.913.888v.099a.927.927 0 0 1-.914.888.928.928 0 0 1-.916-.938Zm7.935 0c0-.516.41-.937.915-.937.505 0 .916.42.916.938 0 .516-.41.937-.916.937a.928.928 0 0 1-.915-.938Zm1.61-4.687 1.222-.313v1.876l-1.221-.313v-1.25Z" fill="#606060"></path></svg>`
    var deliverytime =document.createElement("span");
    // <span id="delivery-time">5hrs</span>
    deliverytime.textContent =Math.floor(Math.random(4)*4)+1 +"hrs";
//   document.getElementById("delivery-time").textContent ="5hrs";

  deliveryIcon.append(svgTimeContainer,deliverytime);

  divIconTime.append(deliveryIcon)

    // var time =document.createElement(span);
    // time.setAttribute("id","delivery-time");


    // delivery icon and time div container ends -->



    //brand-itemname div container starts -->
    var h3 =document.createElement("h3");
    h3.setAttribute("class","brand-itemname");

    var productLink =document.createElement("a");

    var brandName =document.createElement("span");
    brandName.setAttribute("id","brandName");
    brandName.textContent ="fresho" //set brandName

    var itemNameContainer =document.createElement("div");
    var productName =document.createElement("p");
    productName.setAttribute("id","itemName");
    productName.textContent =e.name; //set productName

    itemNameContainer.append(productName);

    productLink.append(brandName,itemNameContainer);

    // h3.append(productLink,itemNameContainer)



    var weightContainer =document.createElement("div");
    weightContainer.setAttribute("class","item-weight")

    var spanWeightContainer =document.createElement("span");
    var weightText =document.createElement("span");
    weightText.textContent =e.quantity; //set the qty text
    spanWeightContainer.append(weightText);
    weightContainer.append(spanWeightContainer);

    h3.append(productLink,weightContainer);

    //brand-itemname div container ends -->


    //price-container starts -->
    var divPrice =document.createElement("div");
    divPrice.setAttribute("class","price-container");

    var finalPrice =document.createElement("span");
    finalPrice.textContent =e.finalPrice;
    var strikedOffPrice =document.createElement("span");
    strikedOffPrice.textContent =e.strikedOffPrice;

    divPrice.append(finalPrice,strikedOffPrice);
    //price-container ends -->


   // btn-container starts -->

    var divBtnContainer =document.createElement("div");
    divBtnContainer.setAttribute("class","btn-container");

    // var whishlistBtnContainer =document.createElement("div");
    // whishlistBtnContainer.setAttribute("class","whish");
    // var btnWhishList =document.createElement("button");
    // btnWhishList.setAttribute("class","whishlist-btn")
    // btnWhishList.innerHTML =`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.821 15.506c.169 0 .339.043.492.129L17 18.285V5.335c0-.201-.121-.334-.2-.334H7.2c-.08 0-.2.133-.2.334v12.9l4.306-2.585c.159-.095.337-.143.515-.143ZM6 21a1 1 0 0 1-1-1V5.334C5 4.047 5.987 3 7.2 3h9.6C18.013 3 19 4.047 19 5.334V20a1 1 0 0 1-1.492.87l-5.672-3.207-5.322 3.195A1.006 1.006 0 0 1 6 21Z" fill="#101010"></path></svg>`
    // whishlistBtnContainer.append(btnWhishList);

    var addToCartBtn =document.createElement("button");
    addToCartBtn.setAttribute("class","addToCart-btn");
    addToCartBtn.textContent ="Add";

    // click listner for add to cart

    addToCartBtn.addEventListener("click",function(){
      var isPrsentInCart =false;

      prodId =productsObjArr[i].productId;
      
      var cartArr =JSON.parse(localStorage.getItem("cartProduct"))||[];

      cartArr.map(function(e){
        if(e.productId===prodId){
          isPrsentInCart =true;
        }
      })

      if(isPrsentInCart){
        alert("Product is already in Cart!")
      }
      else{
        addToCart(i);
        alert("Successfully added to Cart!")
      }


      
    });

    divBtnContainer.append(addToCartBtn);
    
    // btn-container ends -->


    divMain.append(divImgContainer,divIconTime,h3,divPrice,divBtnContainer);

    li.append(divMain);

    document.getElementById("product-box").append(li);


    });//end looping proDuct arr


    var div =document.createElement("div");
    div.setAttribute("id","end");
    var h4 =document.createElement("h4");
    h4.textContent ="That's all folks";
    div.style.textAlign ="center"
    
    div.append(h4);
    
    document.getElementById("product-section").append(div);
   

} //display func ends



//sort button i.e Relevance

document.getElementById("sort-by-price").addEventListener("click",toggleSortOptions)

function toggleSortOptions(){
  var sortContainer =document.getElementById("sortList");
  sortContainer.classList.toggle("sort-menu-hide");
}

//sorting of products by price

// sortLowToHigh

  function sortLowToHigh(){
    console.log("sortLowToHigh")
    productsObjArr.sort(function(a,b){

      var num1 =parseInt(a.finalPrice.substring(1,a.length));
      var num2 =parseInt(b.finalPrice.substring(1,b.length));

      if(num1 > num2) return 1;
      if(num1 < num2) return -1;
      return 0;
    });
    
    displayProducts(productsObjArr);
  }

// sortHighToLow

function sortHighToLow(){
  productsObjArr.sort(function(a,b){

    var num1 =parseInt(a.finalPrice.substring(1,a.length));
    var num2 =parseInt(b.finalPrice.substring(1,b.length));

    if(num1 > num2) return -1;
    if(num1 < num2) return 1;
    return 0;
  });

  displayProducts(productsObjArr);
}


//fruitNameSort ie.sort by fruit name on left sidebar

var fruitNamesList =document.querySelectorAll(".filter-1-list > ul > li");


for(var i=1; i<fruitNamesList.length; i++){
  fruitNamesList[i].addEventListener("click",sortByFruitName);
}
 function sortByFruitName(){
    var fruitName =event.target.innerText;

    
    fruitName =fruitName.toLowerCase();
    
    var filterArr =productsObjArr.filter(function(e){
      var name =e.name.toLowerCase()
      
      return name.includes(fruitName);
    });

    

    displayProducts(filterArr);
 }


// function to add product to cart
var cartProductArr =JSON.parse(localStorage.getItem("cartProduct"))||[];
function addToCart(index){
  // console.log(productsObjArr[index])
  cartProductArr.push(productsObjArr[index])
  localStorage.setItem("cartProduct",JSON.stringify(cartProductArr))


}