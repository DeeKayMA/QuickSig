// Add functionality to the left nav

//Get buttons & div areas

let navbar = document.getElementById("navbar");
let preview = document.getElementById("browser-window");

let templateBtn = document.getElementById('template-btn');
let detailBtn = document.getElementById('detail-btn');
let styleBtn = document.getElementById('style-btn');
let imagesBtn = document.getElementById('images-btn');

let templateDiv = document.getElementById('template-div');
let detailDiv = document.getElementById('detail-div');
let styleDiv = document.getElementById('style-div');
let imagesDiv = document.getElementById('images-div');

let nextBtnTemplate = document.getElementById('next-btn-template');
let prevBtnDetail = document.getElementById('prev-btn-detail');
let nextBtnDetail = document.getElementById('next-btn-detail');
let prevBtnStyle = document.getElementById('prev-btn-style');
let nextBtnStyle = document.getElementById('next-btn-style');
let prevBtnImages = document.getElementById('prev-btn-images');
let nextBtnImages = document.getElementById('next-btn-images');

const fsSlider = document.getElementById('fs-slider');
let fsOutput = document.getElementById('fs-slider-output')

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