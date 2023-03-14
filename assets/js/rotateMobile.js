import $ from "jquery";

let counter = 5;
let featureText = [
    'Professional, custom websites that align with your brand. ',
    'Administrative development and online business solutions.',
    'Maintenance, monitoring, and website support',
    'Digital marketing and social media management.',
    'Android and iOS mobile application development.'
]
setTimeout(rotateImage, 2000);


function rotateImage()
{
    $(`#mobileFeatureImage${counter}`).fadeOut("slow", function() {
        counter++;
        if (counter === 6) {
            counter = 1;
        }
        $(`#mobileFeatureImage${counter}`).fadeIn("slow", function() {
            setTimeout(typeText, 500);
        });
    });
}

var i = 0;
var speed = 25;
function typeText()
{
    if (i < featureText[counter-1].length) {
        document.getElementById("typeWriter").innerHTML += featureText[counter-1].charAt(i);
        i++;
        setTimeout(typeText, speed);
    } else {
        setTimeout(deleteText, 3000);
    }
}

function deleteText()
{
    if (i >= 0) {
        document.getElementById("typeWriter").innerHTML = featureText[counter-1].substring(0, i);
        i--;
        setTimeout(deleteText, speed);
    } else {
        rotateImage();
    }
}