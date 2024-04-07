document.addEventListener("DOMContentLoaded", function() {
    // Challenge 1: Fetch and display images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById("images-container");
            data.message.forEach(imageUrl => {
                const image = document.createElement("img");
                image.src = imageUrl;
                imagesContainer.appendChild(image);
            });
        })
        .catch(error => console.error("Error fetching images:", error));

    // Challenge 2: Fetch and display breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsList = document.getElementById("breeds-list");
            for (const breed in data.message) {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                breedsList.appendChild(listItem);
            }
        })
        .catch(error => console.error("Error fetching breeds:", error));

    // Challenge 3: Change font color on click
    document.getElementById("breeds-list").addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change the color to your desired color
        }
    });

    // Challenge 4: Filter breeds by first letter
    document.getElementById("breed-filter").addEventListener("change", function(event) {
        const selectedLetter = event.target.value.toLowerCase();
        const breedItems = document.getElementById("breeds-list").getElementsByTagName("li");
        
        for (const breedItem of breedItems) {
            const breedName = breedItem.textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                breedItem.style.display = "block";
            } else {
                breedItem.style.display = "none";
            }
        }
    });
});
