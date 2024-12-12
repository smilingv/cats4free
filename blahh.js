//catssss
const cats = [
    { name: "Lala", age: "3 months", breed: "American Shorthair", type: "kitten", image: "images/lala.jpg" },
    { name: "Misty", age: "3 year", breed: "American Shorthair", type: "grown", image: "images/misty.jpg" },
    { name: "Nanny", age: "3 months", breed: "American Shorthair", type: "kitten", image: "images/nanny.jpg" },
    { name: "Olive", age: "6 months", breed: "American Shorthair", type: "kitten", image: "images/olive.jpg" },
    { name: "Oreo", age: "1 year", breed: "American Shorthair", type: "grown", image: "images/oreo.jpg" },
    { name: "Pepita", age: "4 years", breed: "American Shorthair", type: "grown", image: "images/pepita.jpg" },
    { name: "Salem", age: "2 years", breed: "American Shorthair", type: "grown", image: "images/salem.jpg" },
    { name: "Skipidy", age: "1 year", breed: "American Shorthair", type: "grown", image:  "images/skipidy.jpg" },
    { name: "Winnie", age: "3 years", breed: "American Shorthair", type: "grown", image:  "images/winnie.jpg" },
    { name: "Stella", age: "1 year", breed: "American Shorthair", type: "grown",  image: "images/stella.jpg" },
    { name: "Cookie", age: "3 months", breed: "American Shorthair", type: "kitten", image: "images/cookie.jpg" },
    { name: "Lady", age: "2 months", breed: "American Shorthair", type: "kitten", image: "images/lady.jpg"}
];

// displays cats in boxes
const catsContainer = document.getElementById("cats-container");

// nav hide
let lastScrollTop = 0;
const navbar = document.getElementById("top-nav");

// Ffunction to hide/show navbar 
window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down - hide the navbar
        navbar.classList.add("hidden");
    } else {
        // Scrolling up - show the navbar
        navbar.classList.remove("hidden");
    }

    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

function displayCats(filteredCats) {
    catsContainer.innerHTML = ''; // Clear the container before re-adding cats
    filteredCats.forEach(cat => {
        const catCard = document.createElement("div");
        catCard.classList.add("cat-card");

        catCard.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}">
            <h3>${cat.name}</h3>
            <p>Age: ${cat.age}</p>
            <p>Breed: ${cat.breed}</p>
            <button onclick="adoptCat('${cat.name}')">Adopt ${cat.name}</button>
        `;
        
        catsContainer.appendChild(catCard);
    });
}

// add function to filter based on preferences 
function filterCats() {
    const catType = document.getElementById('cat-type').value;
    const filteredCats = catType === "all" ? cats : cats.filter(cat => cat.type === catType);
    displayCats(filteredCats);
 }
 

displayCats(cats);

//adoption submission 
document.getElementById("submit-btn").onclick = function() {
alert("Submission received!");  // Show alert when button is clicked
  };



