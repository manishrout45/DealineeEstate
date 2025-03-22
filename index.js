

/* PopUp Properties */


document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var popupBox = document.getElementById("popupBox");
    var closePopup = document.getElementById("closePopup");
    var popupIcon = document.getElementById("popupIcon");
    var popupImage = document.getElementById("popupImage");

    var images = ["src/assets/image/home/Popup/meadowex1.jpeg", "src/assets/image/home/Popup/meadowex3.jpeg", "src/assets/image/home/Popup/meadowex4.jpeg", "src/assets/image/home/Popup/meadowex5.jpeg", "src/assets/image/home/Popup/meadowex7.jpeg"];
    var currentIndex = 0;
    var isDragging = false, offsetX, offsetY;

    // Show popup after 2 seconds
    setTimeout(() => {
        popup.classList.remove("hidden");
    }, 2000);

    // Close popup and show icon
    function hidePopup() {
        popup.classList.add("hidden");
        popupIcon.classList.remove("hidden");
    }
    closePopup.addEventListener("click", hidePopup);

    // Show popup when clicking icon
    popupIcon.addEventListener("click", function () {
        popup.classList.remove("hidden");
        popupIcon.classList.add("hidden");
    });

    // Image slider effect
    setInterval(function () {
        popupImage.classList.add("fade-out");
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            popupImage.src = images[currentIndex];
            popupImage.classList.remove("fade-out");
            popupImage.classList.add("fade-in");
        }, 1000);
    }, 3000);

    // Draggable popup
    popupBox.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - popupBox.offsetLeft;
        offsetY = e.clientY - popupBox.offsetTop;
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            var newX = e.clientX - offsetX;
            var newY = e.clientY - offsetY;

            // Ensure popup stays within viewport
            var maxX = window.innerWidth - popupBox.offsetWidth;
            var maxY = window.innerHeight - popupBox.offsetHeight;

            popupBox.style.left = Math.max(0, Math.min(newX, maxX)) + "px";
            popupBox.style.top = Math.max(0, Math.min(newY, maxY)) + "px";
            popupBox.style.position = "absolute";
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });
});



//hero image change
function changeHeroImage(category) {
    const heroSection = document.getElementById("hero-section");
    const heroHeading = document.getElementById("hero-heading");

    // Define images for each category
    const images = {
        buy: "/src/assets/image/home/buy.jpg",
        rent: "/src/assets/image/home/rent (1).jpg",
        commercial: "/src/assets/image/home/commercial (2).jpg",
        plot: "/src/assets/image/home/plot (1).jpg"
    };

    // Define headings for each category
    const headings = {
        buy: "Properties to buy in Bhubaneswar",
        rent: "Rental Properties in Bhubaneswar",
        commercial: "Commercial Properties in Bhubaneswar",
        plot: "Plots Available in Bhubaneswar"
    };

    // Update hero background image and heading
    heroSection.style.backgroundImage = `url('${images[category]}')`;
    heroHeading.textContent = headings[category];
}



//search bar Button working
function filterProperties(type) {
    // Update the hero section heading
    document.getElementById('hero-heading').innerText = `Properties to ${type} in Bhubaneswar`;
    
    // Filter property listings
    document.querySelectorAll('.property').forEach(property => {
        if (property.getAttribute('data-type') === type) {
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
}



//Search Filter
document.getElementById("searchBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    let searchInput = document.getElementById("searchInput").value.toLowerCase().trim();
    let properties = document.querySelectorAll(".property");

    properties.forEach(property => {
        let locationText = property.querySelector("p").textContent.toLowerCase();
        
        if (locationText.includes(searchInput) || searchInput === "") {
            property.style.display = "block";
        } else {
            property.style.display = "none";
        }
    });
});
