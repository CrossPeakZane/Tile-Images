// Function to populate the screen with images
function populateImages() {
  const container = document.getElementById('image-container');
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  console.log(`Container width: ${containerWidth}, Container height: ${containerHeight}`);

  // Determine the size of each square tile to fit the width perfectly
  const cols = Math.floor(containerWidth / 100); // Assuming each tile is 100 pixels
  const imgSize = containerWidth / cols;

  console.log(`Number of columns: ${cols}, Size of each tile: ${imgSize}`);

  // Number of rows to divide the screen into
  const rows = Math.floor(containerHeight / imgSize);

  console.log(`Number of rows: ${rows}`);

  // Total images required to fill the screen
  const totalImages = rows * cols;

  console.log(`Total images: ${totalImages}`);

  for (let i = 0; i < totalImages; i++) {
    // Creating an image element
    const img = document.createElement('img');
    img.width = imgSize;
    img.height = imgSize;

    // Setting the source URL with the rounded width and height
    // Adding a random parameter to ensure a new random image is fetched
    const randomParam = Math.random();
    img.src = `https://picsum.photos/${Math.round(imgSize)}/${Math.round(imgSize)}?random=${randomParam}`;

    // Appending the image to the container
    container.appendChild(img);

    console.log(`Image ${i + 1} appended with size ${imgSize}x${imgSize}`);
  }
}

// Invoke the function on page load
populateImages();
