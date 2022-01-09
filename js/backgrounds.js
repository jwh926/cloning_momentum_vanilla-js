const images = ["0.jpg", "1.jpg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.setAttribute("class", "bg");
document.body.prepend(bgImage);
