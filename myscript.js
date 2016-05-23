// Show Mobile menu 
var hambutton = document.getElementById("hamburger");
var mobilenav = document.getElementById('mobilenav');

hambutton.onclick = function() {

    if ($('#mobilenav').css('display') == 'none') {
        mobilenav.style.display = "block";
    } else {
        mobilenav.style.display = "none";
    }
}

// Expand div

var morebtn1 = document.getElementById("more-btn1");
var expand1 = document.getElementById('expand1');
// expand1.style.height = "150px";
morebtn1.onclick = function() {
    var less = "less";
    var more = "more";

    function change(moreorless) {
        morebtn1.innerText = moreorless;
    }
    if ($('#expand1').css('height') == '0px') {
        expand1.style.height = "160px";

        setTimeout(function() { change(less) }, 1500);
    } else {
        expand1.style.height = "0px";
        setTimeout(function() { change(more) }, 1500);
    }
}

var morebtn2 = document.getElementById("more-btn2");
var expand2 = document.getElementById('expand2');
// expand1.style.height = "150px";
morebtn2.onclick = function() {
    var less = "less";
    var more = "more";

    function change(moreorless) {
        morebtn2.innerText = moreorless;
    }
    if ($('#expand2').css('height') == '0px') {
        expand2.style.height = "160px";

        setTimeout(function() { change(less) }, 1500);
    } else {
        expand2.style.height = "0px";
        setTimeout(function() { change(more) }, 1500);
    }
}

var morebtn3 = document.getElementById("more-btn3");
var expand3 = document.getElementById('expand3');
// expand1.style.height = "150px";
morebtn3.onclick = function() {
    var less = "less";
    var more = "more";

    function change(moreorless) {
        morebtn3.innerText = moreorless;
    }
    if ($('#expand3').css('height') == '0px') {
        expand3.style.height = "160px";

        setTimeout(function() { change(less) }, 1500);
    } else {
        expand3.style.height = "0px";
        setTimeout(function() { change(more) }, 1500);
    }
}



// Get the modal
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

// open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById("contactform").reset();
}

// Esc to close
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = evt.key == "Escape";
    } else {
        isEscape = evt.keyCode == 27;
    }
    if (isEscape) {
        modal.style.display = "none";
        document.getElementById("contactform").reset();
    }
};


// Menu Class Switcher
$(".menu").click(function(e) {
    if ($(this).not("active")) {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    }
});


