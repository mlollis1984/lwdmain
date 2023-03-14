import $ from 'jquery';

$(document).ready(function() {
    $("#companyInfo").fadeIn("fast");

    let elements = document.getElementsByTagName('input');
    for (const input of elements) {
        if (input.checked === true) {
            let buttonNumber =  (input.id.slice(-1) === '1') ? 1 : 0;
            const buttons = input.id.slice(8, -1);
            $(`#${buttons}${buttonNumber}`).addClass('active');
        }
    }
});

$('.sub-link').click(function() {
    const container = "#"+this.id.slice(0, -4);
    $('.formContainer').fadeOut("fast", function() {
        $('.sub-link').removeClass('active');
        $(container+"Link").addClass('active');
    });
    $(container).delay(500).fadeIn("fast");
});

$('.next-link').click(function() {
    const container = "#"+this.id.slice(0, -4);
    if (container === "#websiteRequirements") {
        if (
            document.getElementById("company_name").value === "" ||
            document.getElementById("company_email").value === "" ||
            document.getElementById("company_phone").value === ""
        ) {
            alert("Please enter the company name, contact email and contact phone number");
        } else {
            $('.formContainer').fadeOut("fast", function() {
                $(container).delay(500).fadeIn("fast");
            });
        }
    } else if (container === "#socialMedia") {
        if (
            document.getElementById("company_dueDate").value === "" ||
            document.getElementById("company_desiredUrl").value === "" ||
            document.getElementById("company_websiteObjective").value === ""
        ) {
            alert("Please enter your website's due date, desired url and objective.")
        } else {
            $('.formContainer').fadeOut("fast");
            $(container).delay(500).fadeIn("fast");
        }
    } else {
        $('.formContainer').fadeOut("fast");
        $(container).delay(500).fadeIn("fast");
    }

});

$('.yesNoButton').click(function() {
   $(`#company_${this.id}`).prop("checked", true);
   let buttonNumber = (this.id.slice(-1) === '1') ? 0 : 1;
   const buttons = this.id.slice(0, -1);
   $(`#${buttons}${buttonNumber}`).removeClass('active');
   $(this).addClass('active');
   return false;
});

const addFormToCollection = (e) => {
    const collectionHolder = document.querySelector('.' + e.currentTarget.dataset.collectionHolderClass);
    const item = document.createElement('li');
    $(item).addClass('pb-3');
    item.innerHTML = collectionHolder
        .dataset
        .prototype
        .replace(
            /__name__/g,
            collectionHolder.dataset.index
        );

    collectionHolder.appendChild(item);
    collectionHolder.dataset.index++;

    addTagFormDeleteLink(item, collectionHolder.id);
};

const addTagFormDeleteLink = (item, collectionId) => {
    const removeFormButton = document.createElement('button');
    $(removeFormButton).addClass('btn btn-secondary mt-3 mb-3');
    switch(collectionId) {
        case "socialMediaList":
            removeFormButton.innerText = 'Delete Social Media';
            break;
        case "otherPagesList":
            removeFormButton.innerText = 'Delete this Page';
            break;
    }


    item.append(removeFormButton);

    removeFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        // remove the li for the tag form
        item.remove();
    });
};

document.querySelectorAll('.add-item-link')
    .forEach(btn => {
        btn.addEventListener("click", addFormToCollection)
});

document
    .querySelectorAll('ul.socialMediaList li')
    .forEach((tag) => {
        addTagFormDeleteLink(tag, "socialMediaList")
});

document
    .querySelectorAll('ul.otherPagesList li')
    .forEach((tag) => {
        addTagFormDeleteLink(tag, "otherPagesList")
    });