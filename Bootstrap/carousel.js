


var pannelDetails = [
    {
        image1:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg",
        image2:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/jan2024/MFD_SHoes/Unrec/Footwear/4_3000pc._CB583023268_.jpg",
        image3:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/Jan/Hero/04-Pc-GW-Hero._CB583325281_.jpg",
        image4:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/D92807365-_1_Tallhero_2xx._CB598669664_.jpg",
        image5:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
        image6:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/MFD/Jan/Unrec/Sports/3000._CB583024006_.jpg",
        image7:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/BBS_Dec23/BBS_JAN_499_pc_FDFO_3000x1200._CB583375855_.jpg",
    }
]
var pannerTemplate = Handlebars.compile($("#carouselTemplate").html());

var renderPannelDetails = (pannelbarData) =>{
    $("#carouselContainer").append(pannerTemplate(pannelbarData));
}
for(let i = 0; i < pannelDetails.length; i++){
    renderPannelDetails(pannelDetails[i]);
}