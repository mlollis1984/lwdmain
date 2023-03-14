import $ from "jquery";

let testimonials = document.querySelectorAll('.testimonial');
let ids = [];
for (const testimonial of testimonials) {
    ids.push(testimonial.dataset.index);
}
let counter = 0;
getNextTestimonial();

function getNextTestimonial() {
    let previousCounter = (counter === 0) ? (ids.length - 1) : (counter - 1);
    $(`#testimonial_${previousCounter}`).fadeOut("slow", function() {
        $(`#testimonial_${counter}`).fadeIn("slow", function() {
            counter++;
            if (counter > (ids.length - 1)) {
                counter = 0;
            }
            setTimeout(getNextTestimonial, 5000);
        });
    });
}