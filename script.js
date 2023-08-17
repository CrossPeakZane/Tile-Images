// Function to populate the screen with images
function populateImages() {
  const container = document.getElementById('image-container');
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  const borderSize = 5; // Size of the border in pixels
  const cols = Math.floor(containerWidth / 100); // Assuming each tile is 100 pixels
  const imgSize = containerWidth / cols;

  // Number of rows to divide the screen into
  const rows = Math.floor(containerHeight / imgSize);

  // Total images required to fill the screen
  const totalImages = rows * cols;

  let highlightedImg = null; // To keep track of the currently highlighted image

  for (let i = 0; i < totalImages; i++) {
    // Creating an image element
    const img = document.createElement('img');
    img.width = imgSize;
    img.height = imgSize;

    // Setting the source URL with the rounded width and height
    // Adding a random parameter combined with the index to ensure a new random image is fetched
    const randomParam = Math.random() + i;
    img.src = `https://picsum.photos/${Math.round(imgSize)}/${Math.round(imgSize)}?random=${randomParam}`;

    // Adding a click event listener to highlight the image in blue
    img.addEventListener('click', function() {
      if (highlightedImg) {
        highlightedImg.style.border = 'none'; // Unhighlight the previous image
        highlightedImg.style.width = `${imgSize}px`;
        highlightedImg.style.height = `${imgSize}px`;
      }
      img.style.border = `${borderSize}px solid blue`;
      img.style.width = `${imgSize - borderSize * 2}px`;
      img.style.height = `${imgSize - borderSize * 2}px`;
      highlightedImg = img; // Update the currently highlighted image
    });

    // Appending the image to the container
    container.appendChild(img);
  }
}

// Invoke the function on page load
populateImages();