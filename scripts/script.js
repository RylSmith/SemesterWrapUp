var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger menu function
function hamburger() {
    var navlinks = document.querySelector("nav ul");
    var menuicon = document.querySelector("navicon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
    } else {
        navlinks.style.display = "block";
    }
}

function ans1() {
    heading.style.display = "block";
    answer.textContent = "My favorite project of this semester was using A-Frames because I got to be very creative and had a lot of fun learning all the little tricks for A-Frames.";
}
//Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "I think the this current project has been the most challenging for me with having to figure out bootstrap and now using JavaScript but it is a nice change of pace.";
}
//Function to display he third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "I am most excited to keep learning JavaScript as it seems like there is so much you can do use it for and I would like to see what else cool tricks JavaScript can make possible.";
}