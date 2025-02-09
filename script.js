//Placeholder script(if you want to add interactivity later)
console.log("Page loaded successfully");
//Example:Scroll to Sections when menu items are clicked
document.querySelectorAll('nav ul li a').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const sectionId=this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
        behavior:'smooth'    
        });
    });
});
// Optional: Add interactivity or animations if needed
console.log("Skills section loaded successfully!");
// Optional: Log a message to indicate the page is loaded
console.log("Projects section loaded successfully!");
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".recommendation-card");

    cards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "opacity 1s ease-in-out";
            card.style.opacity = 1;
        }, index * 200); // Adds a staggered fade-in effect
    });
});
document.getElementById("recommendationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
  
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!message) {
      alert("Please enter a recommendation message.");
      return;
    }
  
    console.log("Recommendation submitted:");
    console.log("Name:", name || "Anonymous");
    console.log("Message:", message);
  
    alert("Thank you for submitting a recommendation!");
    document.getElementById("recommendationForm").reset(); // Reset the form
  });