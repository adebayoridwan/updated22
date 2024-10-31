



const sentences = [
  
  "Welcome to my website!",
  "We are glad to have you here.",
  "Explore our features and offerings.",
  "Feel free to contact us anytime!"
   
   
  ];

  let currentIndex = 0;
  
  function slideSentence() {
    const sentenceElement = document.getElementById("sentence" );
  
    // Hide current sentence
    sentenceElement.classList.remove("show");
    sentenceElement.classList.add("hide");
  
    setTimeout(() => {
      // Update sentence text and show it
      sentenceElement.innerHTML = sentences [currentIndex];
      

      sentenceElement.classList.remove("hide");
      sentenceElement.classList.add("show");
  
      // Move to the next sentence in the array
      currentIndex = (currentIndex + 1) % sentences.length;
    }, 500); // Delay for hiding animation
  }
  
  // Run the slideshow
  window.onload = function () {
    slideSentence();
    setInterval(slideSentence, 3000); // Adjust time between slides
  };





  
 