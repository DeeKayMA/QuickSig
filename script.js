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

//Create array for hidden paths
const template1Paths = [
    document.getElementById('temp1-path1'), 
    document.getElementById('temp1-path2'), 
    document.getElementById('temp1-path3')
]
const template2Paths = [
    document.getElementById('temp2-path1'), 
    document.getElementById('temp2-path2'), 
    document.getElementById('temp2-path3')
]
const template3Paths = [
    document.getElementById('temp3-path1'), 
    document.getElementById('temp3-path2'), 
    document.getElementById('temp3-path3')
]
const template4Paths = [
    document.getElementById('temp4-path1'), 
    document.getElementById('temp4-path2'), 
    document.getElementById('temp4-path3')
]
const template5Paths = [
    document.getElementById('temp5-path1'), 
    document.getElementById('temp5-path2'), 
    document.getElementById('temp5-path3')
]
const template6Paths = [
    document.getElementById('temp6-path1'), 
    document.getElementById('temp6-path2'), 
    document.getElementById('temp6-path3')
]


//ID for hidden paths 

const temp1Path1 = document.getElementById('temp1-path1');

//Signatures 
const signature1 = document.getElementById('signature1');
const signature2 = document.getElementById('signature2');
const signature3 = document.getElementById('signature3');
const signature4 = document.getElementById('signature4');
const signature5 = document.getElementById('signature5');
const signature6 = document.getElementById('signature6');

//Copy buttons

const copySigBtn = document.getElementById('copy-sig-btn');
const copySrcBtn = document.getElementById('copy-src-btn');


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

template1Paths.forEach(path => path.classList.add('isHidden'))
template2Paths.forEach(path => path.classList.add('isHidden'))
template3Paths.forEach(path => path.classList.add('isHidden'))
template4Paths.forEach(path => path.classList.add('isHidden'))
template5Paths.forEach(path => path.classList.add('isHidden'))
template6Paths.forEach(path => path.classList.add('isHidden'))

signature1.classList.add('isHidden')
signature2.classList.add('isHidden');
signature3.classList.add('isHidden');
signature4.classList.add('isHidden');
signature5.classList.add('isHidden');
signature6.classList.add('isHidden');

let templates = [template1, template2, template3, template4, template5, template6]

let templateMap = {
    template1: template1Paths,
    template2: template2Paths,
    template3: template3Paths,
    template4: template4Paths,
    template5: template5Paths,
    template6: template6Paths,
}



for(let i=0; i < templates.length; i++){
    templates[i].addEventListener('click', function(){
       /*if(templates[i] = templates[1]){
        template1Paths.forEach(path => path.classList.remove('isHidden'))
       } */

        switch(templates[i]){
            case templates[0]:
                signature1.classList.remove('isHidden');
                signature2.classList.add('isHidden');
                signature3.classList.add('isHidden');
                signature4.classList.add('isHidden');
                signature5.classList.add('isHidden');
                signature6.classList.add('isHidden');

                template1Paths.forEach(path => path.classList.remove('isHidden'));
                template2Paths.forEach(path => path.classList.add('isHidden'));
                template3Paths.forEach(path => path.classList.add('isHidden'));
                template4Paths.forEach(path => path.classList.add('isHidden'));
                template5Paths.forEach(path => path.classList.add('isHidden'));
                template6Paths.forEach(path => path.classList.add('isHidden'));

                break;
            case templates[1]:
                signature1.classList.add('isHidden');
                signature2.classList.remove('isHidden');
                signature3.classList.add('isHidden');
                signature4.classList.add('isHidden');
                signature5.classList.add('isHidden');
                signature6.classList.add('isHidden');

                template1Paths.forEach(path => path.classList.add('isHidden'));
                template2Paths.forEach(path => path.classList.remove('isHidden'));
                template3Paths.forEach(path => path.classList.add('isHidden'));
                template4Paths.forEach(path => path.classList.add('isHidden'));
                template5Paths.forEach(path => path.classList.add('isHidden'));
                template6Paths.forEach(path => path.classList.add('isHidden'));
                break;
            case templates[2]:
                template3Paths.forEach(path => path.classList.toggle('isHidden'))
                signature1.classList.add('isHidden');
                signature2.classList.add('isHidden');
                signature3.classList.remove('isHidden');
                signature4.classList.add('isHidden');
                signature5.classList.add('isHidden');
                signature6.classList.add('isHidden');

                template1Paths.forEach(path => path.classList.add('isHidden'));
                template2Paths.forEach(path => path.classList.add('isHidden'));
                template3Paths.forEach(path => path.classList.remove('isHidden'));
                template4Paths.forEach(path => path.classList.add('isHidden'));
                template5Paths.forEach(path => path.classList.add('isHidden'));
                template6Paths.forEach(path => path.classList.add('isHidden'));
                break;
            case templates[3]:
                template4Paths.forEach(path => path.classList.toggle('isHidden'))
                signature1.classList.add('isHidden');
                signature2.classList.add('isHidden');
                signature3.classList.add('isHidden');
                signature4.classList.remove('isHidden');
                signature5.classList.add('isHidden');
                signature6.classList.add('isHidden');

                template1Paths.forEach(path => path.classList.add('isHidden'));
                template2Paths.forEach(path => path.classList.add('isHidden'));
                template3Paths.forEach(path => path.classList.add('isHidden'));
                template4Paths.forEach(path => path.classList.remove('isHidden'));
                template5Paths.forEach(path => path.classList.add('isHidden'));
                template6Paths.forEach(path => path.classList.add('isHidden'));
                break;
            case templates[4]:
            template5Paths.forEach(path => path.classList.toggle('isHidden'))
                signature1.classList.add('isHidden');
                signature2.classList.add('isHidden');
                signature3.classList.add('isHidden');
                signature4.classList.add('isHidden');
                signature5.classList.remove('isHidden');
                signature6.classList.add('isHidden');

                template1Paths.forEach(path => path.classList.add('isHidden'));
                template2Paths.forEach(path => path.classList.add('isHidden'));
                template3Paths.forEach(path => path.classList.add('isHidden'));
                template4Paths.forEach(path => path.classList.add('isHidden'));
                template5Paths.forEach(path => path.classList.remove('isHidden'));
                template6Paths.forEach(path => path.classList.add('isHidden'));
            break;
            case templates[5]:
                template6Paths.forEach(path => path.classList.toggle('isHidden'))
                signature1.classList.add('isHidden');
                signature2.classList.add('isHidden');
                signature3.classList.add('isHidden');
                signature4.classList.add('isHidden');
                signature5.classList.add('isHidden');
                signature6.classList.remove('isHidden');

                template1Paths.forEach(path => path.classList.add('isHidden'));
                template2Paths.forEach(path => path.classList.add('isHidden'));
                template3Paths.forEach(path => path.classList.add('isHidden'));
                template4Paths.forEach(path => path.classList.add('isHidden'));
                template5Paths.forEach(path => path.classList.add('isHidden'));
                template6Paths.forEach(path => path.classList.remove('isHidden'));
                break;
                default: return;
        }


    })
}


const signatures = [signature1, signature2, signature3, signature4, signature5, signature6]

const getVisibleSignature = () => {
    return signatures.find( signature => !signature.classList.contains('isHidden'));
}

/*copySigBtn.addEventListener('click', () => {
    const visibleSignature = getVisibleSignature()
    if(visibleSignature){
        const content = visibleSignature.outerHTML;
        navigator.clipboard.writeText(content);
        alert('Signature Copied');

    }
})*/ //COPY Div with Styles

copySrcBtn.addEventListener('click', () => {
    const visibleSignature = getVisibleSignature()
    if(visibleSignature){
        const content = visibleSignature.outerHTML;
        navigator.clipboard.writeText(content);
        alert('Source Code Copied');

    }
    
}) //Copy Div Code




