const buttonUrl = [
    'https://m.media-amazon.com/images/I/71gISGH3QjL._SY695_.jpg',
    'https://m.media-amazon.com/images/I/81FKowr5jQL._SY695_.jpg',
    'https://m.media-amazon.com/images/I/81PHy+QLhlL._SY695_.jpg',
    'https://m.media-amazon.com/images/I/81hS8KAN2HL._SY695_.jpg',
    'https://m.media-amazon.com/images/I/71bBSt-JKpL._SY695_.jpg',
    'https://m.media-amazon.com/images/I/71vCutnFuGL._SY695_.jpg',
    'imgAndvideo/pummashoeVideo.mp4'
];

const showMedia = (contentSrc) => {
    const isVideo = contentSrc.endsWith('.mp4');
    $('.largeMedia').toggle(!isVideo);
    $('.largeVideo').toggle(isVideo).attr('src', contentSrc);
};

const buttonsContainer = $('.Buttoncontainer');

buttonUrl.forEach((contentUrl, i) => {
    const button = $('<button class="image-button"></button>');
    const image = $('<img class="small-media">').attr('src', contentUrl.endsWith('.mp4') ? 'imgAndvideo/videoIcon.png' : contentUrl);

    button.append(image);
    button.on('mouseover', () => showMedia(contentUrl));
    buttonsContainer.append(button);

    if (i === 0) {
        showMedia(contentUrl);
    }
});
