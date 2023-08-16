// Function to populate the screen with images
function populateImages() {
  const container = document.getElementById('image-container');
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  // Number of rows and columns to divide the screen into
  const rows = 5;
  const cols = 5;

  // Calculating the exact width and height of each image tile
  const imgWidth = Math.floor(containerWidth / cols);
  const imgHeight = Math.floor(containerHeight / rows);

  // Total images required to fill the screen
  const totalImages = rows * cols;

  console.log(`Image size: ${imgWidth}x${imgHeight}, Total images: ${totalImages}`);

  for (let i = 0; i < totalImages; i++) {
    // Creating an image element
    const img = document.createElement('img');
    img.width = imgWidth;
    img.height = imgHeight;

    // Setting the source URL with the rounded width and height
    // Adding a random parameter to ensure a new random image is fetched
    const randomParam = Math.random();
    img.src = `https://picsum.photos/${Math.round(imgWidth)}/${Math.round(imgHeight)}?random=${randomParam}`;

    // Appending the image to the container
    container.appendChild(img);

    console.log(`Image ${i + 1} appended with size ${imgWidth}x${imgHeight}`);
  }
}

// Invoke the function on page load
populateImages();

