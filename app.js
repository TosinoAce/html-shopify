//     keyboard  interaction Js    ///


let isTabPressed = false;

document.addEventListener("keydown", (event) => {
  if (event.key === 'Tab') {
    isTabPressed = true;
  }

});

document.addEventListener("mousedown", () => {
  if (!isTabPressed) {
    // If the mouse is clicked, prevent focus
    setTimeout(() => {
      document.activeElement.blur();
    }, 0);
    

  }
  isTabPressed = false;
});
let searchBar = document.getElementById("Search");

searchBar.addEventListener("click", function() {
    if (document.activeElement === this) {
        // If the element has focus, remove focus
        this.blur();
    } else {
        // If the element doesn't have focus, set focus
        this.focus();
    }
});

//         Basic Interaction Js       //

const closeTrial = document.querySelector("#closeTrial");
const trialCallout = document.querySelector(".heading");

closeTrial.addEventListener("click", function(){ //adding the click event listener to the close button
    trialCallout.style.display = "none"; // removinng the trial callout
});


const setupSvg = document.querySelector("#setupArrow");
const setupGuide = document.querySelector(".body");
const arrowUp = "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
const arrowDown = "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";

// Add click event listeners to the element with the setupArrow id

setupSvg.addEventListener("click", function(){
    setupGuide.classList.toggle("is-active");
    if(setupGuide.classList[1] == "is-active"){ // Check if the setupGuide is active
        setupSvg.setAttribute("src", arrowDown); //changes the img source from arrow up to arrow down if main is active
    }else{
        setupSvg.setAttribute("src", arrowUp); //changes the img source from arrow down to arrow up if opposite
    };
});

const notification = document.querySelector(".bell");
const notificationMenu = document.querySelector(".notification");

// Add click event listeners to the element with the bell class

notification.addEventListener("click", function(){
    notificationMenu.classList.toggle("hidden");
});

const user = document.querySelector(".userName");
const userMenu = document.querySelector(".userMenu");

// Add click event listeners to the element with the userName class

user.addEventListener("click", function(){
    userMenu.classList.toggle("hidden");
});


const Custom = document.querySelectorAll(".textHead");
const customMenu = document.querySelectorAll(".customMenu");
const trigger = Custom;
const triggered = customMenu;

// Event listener function

function onItemClick(index) {
  return function() {
    const correspondingPosition = triggered[index]; // determining which onboarding step to open
     triggered.forEach(item => {
        item.classList.remove("is-active");
    }); // closing previously opened onbording steps
    correspondingPosition.classList.add("is-active"); 
};
}

// Adding event listener to each item in trigger and calling onItemClick function

trigger.forEach((item, index) => {
  item.addEventListener("click", onItemClick(index));
});

//button js //

const buttons = document.querySelectorAll(".checkbox"); //get all button

  // Add click event listener to each button

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const indexAsString = index.toString(); //covert each button index posit to string
        const activated = indexAsString; //saving what index is gotten upon click

        // use index position plus id name to get svgs inside each button //

        const checkBox = document.querySelector("#clickToCheck" + activated);
        const uncheckedBox = checkBox.querySelector("#unchecked" + activated);
        const loading = checkBox.querySelector("#loading" + activated);
        const checkedBox = checkBox.querySelector("#checked" + activated);

        // create a class of clicked //

        const clicked = "clicked";
        const status = document.querySelector("#aria" + activated); // getting all aria live

        // button animation Js    //

        let itisDone = checkBox.classList.contains(clicked);
    
              if(itisDone){
                checkedBox.classList.add("hidden");
                loading.classList.remove("hidden");
                status.ariaLabel = "loading please wait...";
                setTimeout(() => {
                loading.classList.add("hidden")
                uncheckedBox.classList.remove("hidden");
                }, 1000);
                 checkBox.classList.remove("clicked");
                   checkBox.ariaLabel = checkBox.ariaLabel.replace("as not done", "as done");
                   status.ariaLabel = "successfully marked customise online store as not done";
               }else{
                uncheckedBox.classList.add("hidden");

                loading.classList.remove("hidden");
    
                status.ariaLabel = "loading please wait...";
    
                setTimeout(() => {
                 loading.classList.add("hidden");
                checkedBox.classList.remove("hidden");
                }, 1000);
    
                 checkBox.classList.add("clicked");
                 checkBox.ariaLabel = checkBox.ariaLabel.replace("as done", "as not done");
                 status.ariaLabel = "successfully marked customise online store";
             };

             // progress Bar Js //

             let number = document.querySelectorAll(".clicked");
             let numberProgress = number.length;
        if (numberProgress > 0){
            progressCount.innerHTML = numberProgress;
        } else{
            progressCount.innerHTML = 0;
        };
        let count = numberProgress * 20 + "%";
        let filler = document.getElementById("bar");
        filler.style.width = (count);
            
    });
  });

// moving from completed checkbox to the next incomplete  //

  const option = document.querySelectorAll(".checkbox");
  const optionToComplete = document.querySelectorAll (".customMenu");
  
    function openIncomplete(index) {
      return function moveToIncomplete() {
        const fullyChecked = document.querySelector("#guidelines")
        const correspondingPosition = optionToComplete[index + 1]; // determining which incomplete step to open
        if (correspondingPosition) {
          optionToComplete.forEach(item => {
            item.classList.remove("is-active");
          });
          correspondingPosition.classList.add("is-active");
        } else {
          fullyChecked.ariaLabel = "Successfully marked all Setup Guide options.";
        }
    };
  };
  
  option.forEach((item, index) => {
      item.addEventListener("click", openIncomplete(index));
  });
