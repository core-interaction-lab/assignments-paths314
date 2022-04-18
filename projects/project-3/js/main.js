var things = ['Rock', 'Paper', 'Scissor'];
var thing = things[Math.floor(Math.random()*things.length)];


function fetchPrompt () {
    var fashionPrompt = document.getElementById('prompt');
    var prompts = ['Grunge', 'Soft', 'Cottagecore', 'Street', 'Monochrome'];
    var prompt = prompts[Math.floor(Math.random()*prompts.length)];
    fashionPrompt.append(prompt);
}
fetchPrompt();


function fetchPerson () {
    var fashionPrompt = document.getElementById('person');
    var prompts = ['Teenager', ' Young Adult', 'Older Adult'];
    var prompt = prompts[Math.floor(Math.random()*prompts.length)];
    fashionPrompt.append(prompt);
}
fetchPerson();


function fetchPlace () {
    var fashionPrompt = document.getElementById('place');
    var prompts = ['Club', 'Work/School', 'Lunch Date', 'Date Night', 'Home'];
    var prompt = prompts[Math.floor(Math.random()*prompts.length)];
    fashionPrompt.append(prompt);
}
fetchPlace();

function fetchCity () {
    const fashionPrompt = document.getElementById('city');
    var prompts = ['Bandung', 'Jakarta', 'London', 'Los Angeles', 'New York'];
    var prompt = prompts[Math.floor(Math.random()*prompts.length)];
    fashionPrompt.append(prompt);
}

fetchCity();


const slideshowContainer = document.getElementById('slideshow-container1');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchCloth = async () => {
    const response = await fetch(`https://api.airtable.com/v0/appkNVqbznidQU28x/Table%201?api_key=keyg6NaxejaLbInJ7`).then(data => data.json());
    // console.log(response);
    
    clothesArray = response.records;

    // if (fashionPrompt === "London") {
    const countrySort = clothesArray.filter(cloth => {
        if (
        // cloth.fields.based_in === "London" 
        // && cloth.fields.based_in === "Bandung" 
        // && cloth.fields.based_in === "Jakarta"
        // && cloth.fields.based_in === "New York"
        // && cloth.fields.based_in === "Los Angeles"
         cloth.fields.category === "Top") {
        // && food.fields.Cuisine.includes("American"))
            return true;
        }

        return false;
    });

    console.log(countrySort);

    buildSlideshow(countrySort);
    return response.records;
};

const buildSlideshow = (clothes) => {

    const slideCount = 1;
    const articleEls = clothes.slice(0, slideCount).map(buildSlide);

    console.log(articleEls);

    slideshowContainer.append(...articleEls);

    let leftIndex = 0;
    let rightIndex = slideCount - 1;

    nextButton.addEventListener('click', () => {
        leftIndex += 1;
        rightIndex += 1;
        // ^ same as rightIndex = rightIndex + 1

        if (rightIndex >= clothes.length) {
            rightIndex = 0;
        }
        
        if (leftIndex >= clothes.length) {
            leftIndex = 0;
        }


        console.log(leftIndex, rightIndex);
        
        slideshowContainer.removeChild(slideshowContainer.children [0]);
        slideshowContainer.append(buildSlide(clothes[rightIndex],rightIndex));
    });

    prevButton.addEventListener('click', () => {
        leftIndex -= 1;
        rightIndex -= 1;

        if (leftIndex < 0) {
            leftIndex = clothes.length - 1;
        }

        if (rightIndex < 0) {
            rightIndex = clothes.length - 1;
        }

        console.log(leftIndex, rightIndex);

        const lastItem = slideshowContainer.querySelectorAll('article') [slideCount-1];
        slideshowContainer.removeChild(lastItem);
        slideshowContainer.prepend(buildSlide(clothes[leftIndex]));
    });
};

// const swapSlide = (foodsRecord) => {
//     const slideEl = buildSlide(foodsRecord);

//     slideshowContainer.innerHTML = '';
//     slideshowContainer.append(slideEl);
// };

const buildSlide = (cloth, index) => {
    const clothContainer = document.createElement('article');

    if (cloth.fields.picture) {
        // console.log(food.fields.Image[0].url);

        const imageSelectBtn = document.createElement('button');
        imageSelectBtn.dataset.clothIndex = index;

        imageSelectBtn.addEventListener('click', evt => {

        });

        const picture_img = document.createElement('img');
        picture_img.src = cloth.fields.picture[0].url;
        picture_img.classList.add('pic-img', 'jsfnsn');
        picture_img.id = ('pic-img-id');
        clothContainer.append(picture_img);
    }

    // if (cloth.fields.Name) {
    //     const clothnameEl = document.createElement('p');
    //     clothnameEl.innerHTML = cloth.fields.Name;
    //     clothContainer.append(clothnameEl);
    // }

    // if (cloth.fields.based_in) {
    //     console.log(cloth.fields.based_in);
    //     const countryEl = document.createElement('p');
    //     countryEl.innerHTML = cloth.fields.based_in;
    //     clothContainer.append(countryEl); 
    // }

    return clothContainer;
};

fetchCloth();








// --------------------SECOND SLIDER--------------------



const slideshowContainer2 = document.getElementById('slideshow-container2');
const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');

const fetchCloth2 = async () => {
    const response = await fetch(`https://api.airtable.com/v0/appkNVqbznidQU28x/Table%201?api_key=keyg6NaxejaLbInJ7`).then(data => data.json());
    // console.log(response);
    
    clothesArray = response.records;

    const countrySort = clothesArray.filter(cloth => {
        if (
            // cloth.fields.based_in === "London" && 
        cloth.fields.category === "Pants") {
        // && food.fields.Cuisine.includes("American"))
            return true;
        }

        return false;
    });

    console.log(countrySort);

    buildSlideshow2(countrySort);
    return response.records;
};

const buildSlideshow2 = (clothes) => {

    const slideCount = 1;
    const articleEls = clothes.slice(0, slideCount).map(buildSlide2);

    console.log(articleEls);

    slideshowContainer2.append(...articleEls);

    let leftIndex = 0;
    let rightIndex = slideCount - 1;

    nextButton2.addEventListener('click', () => {
        leftIndex += 1;
        rightIndex += 1;
        // ^ same as rightIndex = rightIndex + 1

        if (rightIndex >= clothes.length) {
            rightIndex = 0;
        }
        
        if (leftIndex >= clothes.length) {
            leftIndex = 0;
        }


        console.log(leftIndex, rightIndex);
        
        slideshowContainer2.removeChild(slideshowContainer2.children [0]);
        slideshowContainer2.append(buildSlide(clothes[rightIndex],rightIndex));
    });

    prevButton2.addEventListener('click', () => {
        leftIndex -= 1;
        rightIndex -= 1;

        if (leftIndex < 0) {
            leftIndex = clothes.length - 1;
        }

        if (rightIndex < 0) {
            rightIndex = clothes.length - 1;
        }

        console.log(leftIndex, rightIndex);

        const lastItem = slideshowContainer2.querySelectorAll('article') [slideCount-1];
        slideshowContainer2.removeChild(lastItem);
        slideshowContainer2.prepend(buildSlide(clothes[leftIndex]));
    });
};

// const swapSlide = (foodsRecord) => {
//     const slideEl = buildSlide(foodsRecord);

//     slideshowContainer.innerHTML = '';
//     slideshowContainer.append(slideEl);
// };

const buildSlide2 = (cloth, index) => {
    const clothContainer = document.createElement('article');

    if (cloth.fields.picture) {
        // console.log(food.fields.Image[0].url);

        const imageSelectBtn = document.createElement('button');
        imageSelectBtn.dataset.clothIndex = index;

        imageSelectBtn.addEventListener('click', evt => {

        });

        const picture_img = document.createElement('img');
        picture_img.src = cloth.fields.picture[0].url;
        picture_img.classList.add('pic-img', 'jsfnsn');
        picture_img.id = ('pic-img-id');
        clothContainer.append(picture_img);
    }

    // if (cloth.fields.Name) {
    //     const clothnameEl = document.createElement('p');
    //     clothnameEl.innerHTML = cloth.fields.Name;
    //     clothContainer.append(clothnameEl);
    // }

    // if (cloth.fields.based_in) {
    //     console.log(cloth.fields.based_in);
    //     const countryEl = document.createElement('p');
    //     countryEl.innerHTML = cloth.fields.based_in;
    //     clothContainer.append(countryEl); 
    // }

    return clothContainer;
};

fetchCloth2();





// --------------------THIRD SLIDER--------------------



const slideshowContainer3 = document.getElementById('slideshow-container3');
const prevButton3 = document.getElementById('prev3');
const nextButton3 = document.getElementById('next3');

const fetchCloth3 = async () => {
    const response = await fetch(`https://api.airtable.com/v0/appkNVqbznidQU28x/Table%201?api_key=keyg6NaxejaLbInJ7`).then(data => data.json());
    // console.log(response);
    
    clothesArray = response.records;

    const countrySort = clothesArray.filter(cloth => {
        if (cloth.fields.category === "Footwear") {
        // && food.fields.Cuisine.includes("American"))
            return true;
        }

        return false;
    });

    console.log(countrySort);

    buildSlideshow3(countrySort);
    return response.records;
};

const buildSlideshow3 = (clothes) => {

    const slideCount = 1;
    const articleEls = clothes.slice(0, slideCount).map(buildSlide3);

    console.log(articleEls);

    slideshowContainer3.append(...articleEls);

    let leftIndex = 0;
    let rightIndex = slideCount - 1;

    nextButton3.addEventListener('click', () => {
        leftIndex += 1;
        rightIndex += 1;
        // ^ same as rightIndex = rightIndex + 1

        if (rightIndex >= clothes.length) {
            rightIndex = 0;
        }
        
        if (leftIndex >= clothes.length) {
            leftIndex = 0;
        }


        console.log(leftIndex, rightIndex);
        
        slideshowContainer3.removeChild(slideshowContainer3.children [0]);
        slideshowContainer3.append(buildSlide(clothes[rightIndex],rightIndex));
    });

    prevButton3.addEventListener('click', () => {
        leftIndex -= 1;
        rightIndex -= 1;

        if (leftIndex < 0) {
            leftIndex = clothes.length - 1;
        }

        if (rightIndex < 0) {
            rightIndex = clothes.length - 1;
        }

        console.log(leftIndex, rightIndex);

        const lastItem = slideshowContainer3.querySelectorAll('article') [slideCount-1];
        slideshowContainer3.removeChild(lastItem);
        slideshowContainer3.prepend(buildSlide(clothes[leftIndex]));
    });
};

// const swapSlide = (foodsRecord) => {
//     const slideEl = buildSlide(foodsRecord);

//     slideshowContainer.innerHTML = '';
//     slideshowContainer.append(slideEl);
// };

const buildSlide3 = (cloth, index) => {
    const clothContainer = document.createElement('article');

    if (cloth.fields.picture) {
        // console.log(food.fields.Image[0].url);

        const imageSelectBtn = document.createElement('button');
        imageSelectBtn.dataset.clothIndex = index;

        imageSelectBtn.addEventListener('click', evt => {

        });

        const picture_img = document.createElement('img');
        picture_img.src = cloth.fields.picture[0].url;
        picture_img.classList.add('pic-img', 'jsfnsn');
        picture_img.id = ('pic-img-id');
        clothContainer.append(picture_img);
    }

    if (cloth.fields.Name) {
        const clothnameEl = document.createElement('p');
        clothnameEl.innerHTML = cloth.fields.Name;
        clothContainer.append(clothnameEl);
    }

    if (cloth.fields.based_in) {
        console.log(cloth.fields.based_in);
        const countryEl = document.createElement('p');
        countryEl.innerHTML = cloth.fields.based_in;
        clothContainer.append(countryEl); 
    }

    return clothContainer;
};

fetchCloth3();
