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
      name: 'Strawberry',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '200 g',
      offer: '24% OFF'
    },
    {
      name: 'Banana - Yelakki',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000031_21-fresho-banana-yelakki.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 kg - (5-6 pcs per kg)',
      offer: '24% OFF'
    },
    {
      name: 'Pomegranate - Regular (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40120006_5-fresho-pomegranate-small.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc',
      offer: '24% OFF'
    },
    {
      name: 'Tender Coconut',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/400579…3-fresho-tender-coconut-medium.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: 'Approx 500 g - 1 Pack',
      offer: '23% OFF'
    },
    {
      name: 'Grapes - Green Sonaka',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40218332_1-fresho-grapes-green.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 kg - (Approx. 11-12 pcs)',
      offer: '24% OFF'
    },
    {
      name: 'Baby Apple Shimla',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40134281_13-fresho-baby-apple-shimla.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '200 g',
      offer: '24% OFF'
    },
    {
      name: 'Strawberry - Organically Grown',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/400992…o-strawberry-organically-grown.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - (approx. 450g to 500)',
      offer: '24% OFF'
    },
    {
      name: 'Coconut - Medium (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000093_16-fresho-coconut-medium.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '3 pcs',
      offer: '43% OFF'
    },
    {
      name: 'Banana - Robusta',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000025_27-fresho-banana-robusta.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs - (Approx. 500g - 600g)',
      offer: '24% OFF'
    },
    {
      name: 'Kiwi - Green',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20000911_30-fresho-kiwi-green.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '500 g',
      offer: '24% OFF'
    },
    {
      name: 'Apple - Red Delicious, Regular',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/400338…ho-apple-red-delicious-regular.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - (approx. 550g to 650g)',
      offer: '24% OFF'
    },
    {
      name: 'Watermelon - Medium',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40103540_5-fresho-watermelon-medium.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs - (200-220 g per pc)',
      offer: '24% OFF'
    },
    {
      name: 'Grapes - Black Seedless',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/402294…1-fresho-grapes-black-imported.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs',
      offer: '24% OFF'
    },
    {
      name: 'Coconut - Large',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000092_15-fresho-coconut-large.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs - (Approx. 450g - 500g)',
      offer: '24% OFF'
    },
    {
      name: 'Pomegranate (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000269_32-fresho-pomegranate.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '3 pcs',
      offer: '24% OFF'
    },
    {
      name: 'Orange - Imported (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20000909_18-fresho-orange-imported.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - 220-350g',
      offer: '24% OFF'
    },
    {
      name: 'Ber - Apple',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20003957_2-fresho-ber-apple.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs - (Approx.450 g-500 g)',
      offer: '24% OFF'
    },
    {
      name: 'Apple - Red Delicious, Economy',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/400753…ho-apple-red-delicious-economy.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs',
      offer: '24% OFF'
    },
    {
      name: 'Guava (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000370_14-fresho-guava.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc',
      offer: '24% OFF'
    },
    {
      name: 'Zespri Kiwi - Sun Gold',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/400253…18-fresho-zespri-kiwi-sun-gold.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - (Approx. 400g - 500g)',
      offer: '24% OFF'
    },
    {
      name: 'Dragon Fruit',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40008982_15-fresho-dragon-fruit.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - 800g - 1.4 kg',
      offer: '24% OFF'
    },
    {
      name: 'Apple - Royal Gala Economy',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/100000…resho-apple-royal-gala-economy.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '500 g',
      offer: '24% OFF'
    },
    {
      name: 'Pear - Green, Imported',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40048445_2-fresho-pear-green-imported.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc',
      offer: '24% OFF'
    },
    {
      name: 'Avocado - Imported, Medium (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/300092…fresho-avocado-imported-medium.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '8 pcs',
      offer: '24% OFF'
    },
    {
      name: 'Dates - Kimia, with Seed',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/200007…3-fresho-dates-kimia-with-seed.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs - (Approx.720 - 800 g)',
      offer: '24% OFF'
    },
    {
      name: 'Banana - Robusta, Organically Grown',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/500004…nana-robusta-organically-grown.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '500 g',
      offer: '24% OFF'
    },
    {
      name: 'Papaya - Medium (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000152_22-fresho-papaya-medium.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - 500 g - 800 g',
      offer: '24% OFF'
    },
    {
      name: 'Banana - Nendran',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000345_18-fresho-banana-nendran.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '100 g',
      offer: '24% OFF'
    },
    {
      name: 'Organic - Desi Banana',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40225769_1-fresho-organic-desi-banana.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc (approx 300 - 400 g)',
      offer: '24% OFF'
    },
    {
      name: 'Sapota',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000183_13-fresho-sapota.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '200 g',
      offer: '24% OFF'
    },
    {
      name: 'Banana - Raw Green (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000167_13-fresho-banana-raw-green.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs - 700-900g',
      offer: '24% OFF'
    },
    {
      name: 'Guava - Thai (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - approx. 300 g to 500 g',
      offer: '24% OFF'
    },
    {
      name: 'Fresh Figs',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30001768_11-fresho-fresh-figs.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - 500g-900g',
      offer: '24% OFF'
    },
    {
      name: 'Apple - Shimla, Premium',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/401132…_3-fresho-apple-shimla-premium.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 kg',
      offer: '24% OFF'
    },
    {
      name: 'Grapes - Flame Seedless',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/100002…4-fresho-grapes-flame-seedless.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc',
      offer: '24% OFF'
    },
    {
      name: 'Papaya - Small',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40114961_4-fresho-papaya-small.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - (approx. 300g to 400g)',
      offer: '24% OFF'
    },
    {
      name: 'Cherry - Imported',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30001779_3-fresho-cherry-imported.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc - 700 g - 1.5 kg',
      offer: '24% OFF'
    },
    {
      name: 'Baby Orange (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/20003955_2-fresho-baby-orange.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '200 g',
      offer: '24% OFF'
    },
    {
      name: 'Guava - Pink',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40123767_2-fresho-guava-pink.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '80 g',
      offer: '24% OFF'
    },
    {
      name: 'Sugarcane - Diced',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40018977_9-fresho-sugarcane-diced.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '200 g',
      offer: '20% OFF'
    },
    {
      name: 'Mosambi (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000192_19-fresho-mosambi.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pack (approx. 500 g)',
      offer: '24% OFF'
    },
    {
      name: 'Guava - Thai Organic, Pink',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/402197…fresho-guava-thai-organic-pink.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc (approx. 1 -3 kg)',
      offer: '24% OFF'
    },
    {
      name: 'Muskmelon - Honeydew',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40073733_10-fresho-muskmelon-honeydew.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc',
      offer: '24% OFF'
    },
    {
      name: 'Banganapalli Mango',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000298_10-fresho-banganapalli-mango.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '80 g',
      offer: '24% OFF'
    },
    {
      name: 'Sugarcane',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000592_10-fresho-sugarcane.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '200 g',
      offer: '20% OFF'
    },
    {
      name: 'Coconut - Organically Grown',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/400234…esho-coconut-organically-grown.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs - Approx. 300 to 450 gm',
      offer: '24% OFF'
    },
    {
      name: 'Raw Mango (Loose)',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000588_12-fresho-raw-mango.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '200 g',
      offer: '24% OFF'
    },
    {
      name: 'Sun Melon',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30007325_4-fresho-sun-melon.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '1 pc',
      offer: '24% OFF'
    },
    {
      name: 'Tamarind - Sweet',
      imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/30001491_15-fresho-tamarind-sweet.jpg?tr=w-3840,q=80',
      finalPrice: '₹45.89',
      strikedOffPrice: '₹60.38',
      quantity: '4 pcs(Approx.600 g-700 g)',
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

displayProducts();

function displayProducts(){



    //proDuct arr looping

    productsObjArr.map(function(e,i){

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
    img.src ="#";
    a.append(img);


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

    svgTimeContainer.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span id="delivery-time">5hrs</span>`
//   document.getElementById("delivery-time").textContent ="5hrs";

  deliveryIcon.append(svgTimeContainer);

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



    var weightContainer =document.createElement("div");
    weightContainer.setAttribute("class","item-weight")

    var spanWeightContainer =document.createElement("span");
    var weightText =document.createElement("span");
    weightText.textContent =e.quantity; //set the qty text
    spanWeightContainer.append(weightText);
    weightContainer.append(spanWeightContainer);

    h3.append(a,weightContainer);

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

    var whishlistBtnContainer =document.createElement("div");
    whishlistBtnContainer.setAttribute("class","whish");
    var btnWhishList =document.createElement("button");
    btnWhishList.innerHTML =`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.821 15.506c.169 0 .339.043.492.129L17 18.285V5.335c0-.201-.121-.334-.2-.334H7.2c-.08 0-.2.133-.2.334v12.9l4.306-2.585c.159-.095.337-.143.515-.143ZM6 21a1 1 0 0 1-1-1V5.334C5 4.047 5.987 3 7.2 3h9.6C18.013 3 19 4.047 19 5.334V20a1 1 0 0 1-1.492.87l-5.672-3.207-5.322 3.195A1.006 1.006 0 0 1 6 21Z" fill="#101010"></path></svg>`
    whishlistBtnContainer.append(btnWhishList);

    var addToCartBtn =document.createElement("button");
    addToCartBtn.setAttribute("class","addToCart-btn");
    addToCartBtn.textContent ="Add";

    divBtnContainer.append(whishlistBtnContainer,addToCartBtn);
    
    // btn-container ends -->


    divMain.append(divImgContainer,divIconTime,h3,divPrice,divBtnContainer);

    li.append(divMain);

    document.getElementById("product-box").append(li);


    });//end looping proDuct arr

   

} //display func ends




