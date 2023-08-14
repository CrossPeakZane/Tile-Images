const container = document.getElementById('image-container');

function generateRandomImage() {
    const tileSize = 150;  // Set a fixed size for the images

    const img = new Image();
    // Add a cache buster to ensure unique image each time
    img.src = `https://picsum.photos/${tileSize}?${Date.now() + Math.random()}`;
    img.classList.add('img-tile');

    return img;
}

function fillScreenWithImages() {
    const tilesX = 20;  // Number of tiles per row
    const tilesY = 20;  // Number of tiles per column

    for (let i = 0; i < tilesX * tilesY; i++) {
        container.appendChild(generateRandomImage());
    }
}

fillScreenWithImages();
