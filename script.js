// Add functionality to the left nav

//Get buttons & div areas

const navbar = document.getElementById("navbar");
const preview = document.getElementById("browser-window");

const templateBtn = document.getElementById('template-btn');
const detailBtn = document.getElementById('detail-btn');
const styleBtn = document.getElementById('style-btn');
const imagesBtn = document.getElementById('images-btn');

const templateDiv = document.getElementById('template-div');
const detailDiv = document.getElementById('detail-div');
const styleDiv = document.getElementById('style-div');
const imagesDiv = document.getElementById('images-div');

const nextBtnTemplate = document.getElementById('next-btn-template');
const prevBtnDetail = document.getElementById('prev-btn-detail');
const nextBtnDetail = document.getElementById('next-btn-detail');
const prevBtnStyle = document.getElementById('prev-btn-style');
const nextBtnStyle = document.getElementById('next-btn-style');
const prevBtnImages = document.getElementById('prev-btn-images');
const nextBtnImages = document.getElementById('next-btn-images');

const fsSlider = document.getElementById('fs-slider');
const fsOutput = document.getElementById('fs-slider-output')

//Paths to be hidden when template is clicked
const template1 = document.getElementById('template1');
const template2 = document.getElementById('template2');
const template3 = document.getElementById('template3');
const template4 = document.getElementById('template4');
const template5 = document.getElementById('template5');
const template6 = document.getElementById('template6');

//Class for hidden paths

const template1Paths = document.getElementsByClassName('temp-1-path');
const template2Paths = document.getElementsByClassName('temp-2-path');
const template3Paths = document.getElementsByClassName('temp-3-path');
const template4Paths = document.getElementsByClassName('temp-4-path');
const template5Paths = document.getElementsByClassName('temp-5-path');
const template6Paths = document.getElementsByClassName('temp-6-path');

//Signatures 
const signature1 = document.getElementById('signature1');
const signature2 = document.getElementById('signature2');
const signature3 = document.getElementById('signature3');
const signature4 = document.getElementById('signature4');
const signature5 = document.getElementById('signature5');
const signature6 = document.getElementById('signature6');

// Check for clik events on the nav 

// TEMPLATE BUTTON //

templateBtn.addEventListener('click', function() {
    const buttons = [detailBtn, styleBtn, imagesBtn];
    const divs = [detailDiv, styleDiv, imagesDiv];

    // Toggle the 'active' class and show/hide the relevant divs
    if (templateBtn.classList.contains('active')) {
        buttons.forEach(btn => btn.classList.remove('active'));
        divs.forEach(div => div.classList.add('isHidden'));
    } else {
        templateBtn.classList.add('active');
        buttons.forEach(btn => btn.classList.remove('active'));
        templateDiv.classList.remove('isHidden');
        divs.forEach(div => div.classList.add('isHidden'));
    }
});



// DETAIL BUTTON //
detailBtn.addEventListener('click', function() {
    const buttons = [templateBtn, styleBtn, imagesBtn];
    const divs = [templateDiv, styleDiv, imagesDiv];

    // Toggle the 'active' class and show/hide the relevant divs
    if (detailBtn.classList.contains('active')) {
        buttons.forEach(btn => btn.classList.remove('active'));
        divs.forEach(div => div.classList.add('isHidden'));
    } else {
        detailBtn.classList.add('active');
        buttons.forEach(btn => btn.classList.remove('active'));
        detailDiv.classList.remove('isHidden');
        divs.forEach(div => div.classList.add('isHidden'));
    }
});

// STYLE BUTTON //

styleBtn.addEventListener('click', function() {
    const buttons = [templateBtn, detailBtn, imagesBtn];
    const divs = [templateDiv, detailDiv, imagesDiv];

    // Toggle the 'active' class and show/hide the relevant divs
    if (styleBtn.classList.contains('active')) {
        buttons.forEach(btn => btn.classList.remove('active'));
        divs.forEach(div => div.classList.add('isHidden'));
    } else {
        styleBtn.classList.add('active');
        buttons.forEach(btn => btn.classList.remove('active'));
        styleDiv.classList.remove('isHidden');
        divs.forEach(div => div.classList.add('isHidden'));
    }
});

// IMAGES BUTTON //
imagesBtn.addEventListener('click', function() {
    const buttons = [templateBtn, detailBtn, styleBtn];
    const divs = [templateDiv, detailDiv, styleDiv];

    // Toggle the 'active' class and show/hide the relevant divs
    if (imagesBtn.classList.contains('active')) {
        buttons.forEach(btn => btn.classList.remove('active'));
        divs.forEach(div => div.classList.add('isHidden'));
    } else {
        imagesBtn.classList.add('active');
        buttons.forEach(btn => btn.classList.remove('active'));
        imagesDiv.classList.remove('isHidden');
        divs.forEach(div => div.classList.add('isHidden'));
    }
});


// NEXT & PREV Buttons for each NAV DIV

//Next button for template page 
nextBtnTemplate.addEventListener('click', function(){
    templateBtn.classList.remove('active');
    templateDiv.classList.add('isHidden');

    detailBtn.classList.add('active');
    detailDiv.classList.remove('isHidden');

   // window.location.href = "#navbar";
    navbar.scrollIntoView({ behavior: 'smooth' });
});

//Back & Next buttons for details page
prevBtnDetail.addEventListener('click', function(){
    templateBtn.classList.add('active');
    templateDiv.classList.remove('isHidden');
    
    detailBtn.classList.remove('active');
    detailDiv.classList.add('isHidden');

    //window.location.href = "#navbar";
    navbar.scrollIntoView({ behavior: 'smooth' });

});

nextBtnDetail.addEventListener('click', function(){
    detailBtn.classList.remove('active');
    detailDiv.classList.add('isHidden');

    styleBtn.classList.add('active');
    styleDiv.classList.remove('isHidden');

    //window.location.href = "#navbar";
    navbar.scrollIntoView({ behavior: 'smooth' });

});

//Back & Next buttons for style page
prevBtnStyle.addEventListener('click', function(){
    detailBtn.classList.add('active');
    detailDiv.classList.remove('isHidden');
    
    styleBtn.classList.remove('active');
    styleDiv.classList.add('isHidden');

    //window.location.href = "#navbar";
    navbar.scrollIntoView({ behavior: 'smooth' });

});

nextBtnStyle.addEventListener('click', function(){
    styleBtn.classList.remove('active');
    styleDiv.classList.add('isHidden');

    imagesBtn.classList.add('active');
    imagesDiv.classList.remove('isHidden');

    //window.location.href = "#navbar";
    navbar.scrollIntoView({ behavior: 'smooth' });

});

//Back & Next buttons for images page

prevBtnImages.addEventListener('click', function(){
    styleBtn.classList.add('active');
    styleDiv.classList.remove('isHidden');
    
    imagesBtn.classList.remove('active');
    imagesDiv.classList.add('isHidden');

    //window.location.href = "#style-div";
   navbar.scrollIntoView({ behavior: 'smooth' });

});

nextBtnImages.addEventListener('click', function(){
   preview.scrollIntoView({ behavior: 'smooth' });

});

//Change value for font size slider output based on slide value & change font size of templates

fsSlider.addEventListener('input', function(){
    let fontSize = fsSlider.value + 'rem';

    if (fontSize === "1.6rem"){
        fsOutput.value = "Medium"
    } else if ( fontSize === "1.2rem"){
        fsOutput.value = "Small"
    } else if (fontSize === "2rem" ){
        fsOutput.value = "Large"
    } else {
        fsOutput.value = "Medium"
    };
})


/*const templates = [template1, template2, template3, template4, template5, template6];
const templatePaths = [template1Paths, template2Paths, template3Paths, template4Paths, template5Paths, template6Paths]; 

templates.forEach((template, index) => {
    template.addEventListener('click', function(){
        templatePaths[index].forEach(path => {
            path.classList.remove('isHidden')
        })
    })
})*/






