function fetchRandomImage() {
    const apiUrl = 'https://picsum.photos/1920/1080'; // Lorem Picsum API URL for a 1920x1080 image

    // Get references to the image and image name elements
    const image = document.querySelector('.random-img');
    const imageName = document.querySelector('.image-name');
    const body = document.body;

    // Disable the button while fetching
    const button = document.querySelector('.btn');
    button.disabled = true;

    // Fetch a random image from the Lorem Picsum API
    fetch(apiUrl)
        .then(response => {
            // Set the image source directly from the response URL
            image.src = response.url;
            body.style.backgroundImage = `url(${response.url})`;
            // There's no alt text available from this API, so you can set your own
            image.alt = 'Random Image';

            // There's no user data available from this API, so you can set your own image name
            imageName.textContent = 'Image Name';

            // Re-enable the button
            button.disabled = false;
        })
        .catch(error => {
            console.error('Error fetching random image:', error);
            // Re-enable the button in case of an error
            button.disabled = false;
        });
}

// Add a click event listener to the button
document.querySelector('.btn').addEventListener('click', fetchRandomImage);

// Initial fetch when the page loads
fetchRandomImage();