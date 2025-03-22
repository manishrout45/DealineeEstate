fetch("/src/Components/navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
    initializenavbar(); // Initialize JavaScript after content is loaded
  })
  .catch((error) => console.error("Error loading the navbar:", error));




  