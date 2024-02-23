const displayImagesFromLocalStorage = () => {
    const containers = [
        document.getElementById('imageContainer1'),
        document.getElementById('imageContainer2'),
        document.getElementById('imageContainer3'),
        document.getElementById('imageContainer4')
    ];

    let imagesFromLocalStorage = [];
    imagesFromLocalStorage = JSON.parse(localStorage.getItem('images'));

    console.log(imagesFromLocalStorage);

    imagesFromLocalStorage.forEach((imageUrl, index) => {
        const container = containers[index];

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image';

        container.innerHTML = '';
        container.appendChild(img);
    });
};
