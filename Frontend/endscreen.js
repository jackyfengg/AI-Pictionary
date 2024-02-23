// Function to display images from local storage on the end screen
const displayImagesFromLocalStorage = () => {
    // Retrieve the container elements where images will be displayed
    const containers = [
        document.getElementById('imageContainer1'),
        document.getElementById('imageContainer2'),
        document.getElementById('imageContainer3'),
        document.getElementById('imageContainer4')
    ];

    // Retrieve the images array from local storage
    let imagesFromLocalStorage = [];
    imagesFromLocalStorage = JSON.parse(localStorage.getItem('images'));

    console.log(imagesFromLocalStorage);

    // Iterate through the images array and update the image elements
    imagesFromLocalStorage.forEach((imageUrl, index) => {
        // Retrieve the image container for the current image
        const container = containers[index];
        
        // Create an img element for the current image
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image';

        // Append the image element to the container
        container.innerHTML = '';
        container.appendChild(img);
    });
};
