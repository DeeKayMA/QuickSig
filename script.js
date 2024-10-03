// Add functionality to the left nav

//Get buttons & div areas

let templateBtn = document.getElementById('template-btn');
let detailBtn = document.getElementById('detail-btn');
let styleBtn = document.getElementById('style-btn');
let imagesBtn = document.getElementById('images-btn');

let templateDiv = document.getElementById('template-div');
let detailDiv = document.getElementById('detail-div');
let styleDiv = document.getElementById('style-div');
let imagesDiv = document.getElementById('images-div');

// Check for clik events on the nav 

// TEMPATE BUTTON //

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