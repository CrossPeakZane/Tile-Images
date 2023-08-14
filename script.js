// Function to fetch a random image and append it to the container
function fetchAndAppendImage(imageSize) {
    console.log("Fetching a random image...");
  
    // Using Lorem Picsum as the source, since it doesn't require an API key
    const imageUrl = `https://picsum.photos/${imageSize}`;
  
    fetch(imageUrl)
      .then((response) => {
        if (!response.ok) {
          console.error("Error fetching the image:", response.status);
          return;
        }
  
        const img = new Image(imageSize, imageSize);
        img.style.width = `${imageSize}px`;
        img.style.height = `${imageSize}px`;
        img.src = response.url;
        document.getElementById('image-container').appendChild(img);
  
        console.log("Image fetched and appended:", img.src);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }
  
  // Function to calculate the number of images needed and fetch them
  function populateImages() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
  
    // Calculate the exact size of the images to fit the screen perfectly
    const columns = 10; // You can change this to set the number of columns
    const imageSize = containerWidth / columns;
    const rows = Math.ceil(containerHeight / imageSize);
    const totalImages = rows * columns;
  
    console.log(`Total images required to fill the screen: ${totalImages}, Size of each image: ${imageSize}`);
  
    for (let i = 0; i < totalImages; i++) {
      fetchAndAppendImage(imageSize);
    }
  }
  
  // Invoke the function on page load
  populateImages();
  