

    var showImage1 = () => {
        var img1 = document.querySelector('#productImage');
        img1.setAttribute('src', "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71JUUReQ+GL._SX695_.jpg")
       
    }
    var showImage2 = () => {
        var img1 = document.querySelector('#productImage');
        img1.setAttribute('src', "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81IYtx6dTHL._SX695_.jpg")
       
    }
    var showImage3 = () => {
        var img1 = document.querySelector('#productImage');
        img1.setAttribute('src', "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/7167M0BkfaL._SX695_.jpg")
        img1.setAttribute('class', 'image')
    }
    var showImage4 = () => {
        var img1 = document.querySelector('#productImage');
        img1.setAttribute('src', "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YFTtnZ1gL._SX695_.jpg")
        img1.setAttribute('class', 'image')
    }
    var showImage5 = () => {
        var img1 = document.querySelector('#productImage');
        img1.setAttribute('src', "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61qBwfklMjL._SX695_.jpg")
        img1.setAttribute('class', 'image')
    }

    

var porductDetails = [
    {
        visite:'visite the puma store',
        name:'Puma Womens Ultimate Ease WNS Walking shoe',
        Manufacturer: 'Dell',
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.5,
        amazon: 'amazone`s',
        deal: 'Deal of the Day',
        basePrice: 2499,
        percentage:'11',
        inclusive:"inclusive of all taxes",
        emi: "EMI starts ar 84. No Cost EMI available",
        bankOffer:'bank offers',
        upto:'Up to ₹2500',
        discount:'Discount on Select',
        credit:'Credit Cards Select',
        extraoffers:'9 offers >',

        noCostEmi:'No Cost EMI',
        upt1:'Up to ₹77.81 EMI',
        interest:'Interset saving on',
        payICICI:'Amazon pay ICICI..',
        extraoffers1:'1 offers >',

        image1: "kumar.png",
        free:"Free Delivery",
        return:"10 Days Return & Exchange ",
        // payondelivery:"Pay on Delivery",
        // bonus:"Top Bonus",

        // for box two 
        free1: "Free Delivery",
        details: 'Details',
        faster:"Or fastest delivery Tomorrow, 16 December. Order within 3",
        location1:"Delivering to  Hyderabad 500081",
        stck: " In Stock",
        retailer: " Cocoblu Retails ",
        sold: " Cocoblu Retails Fulfilled By Amazon",
        show: "Show what is inside.",
        showItem: "Item often ships in manufacturer container to ruduce packaging. if this is a gift, consider shipping to a different address.",
        secure: " Secure Transaction",
        checkbox:'Add gift options',
    }   
];


var pTemplate = Handlebars.compile(document.querySelector(".productTemplate").innerHTML);

var renderProductDetails = (productData , index) => {
    productData.discountedPrice = productData.basePrice - (productData.basePrice * productData.percentage)/100
    productData.index = index;
    $(".porductDetails").append(pTemplate(productData));
    renderRatingStars('#ratingStars_' + index,productData.rating);
}

for(let i= 0; i < porductDetails.length; i++){
    renderProductDetails(porductDetails[i],i);
}





