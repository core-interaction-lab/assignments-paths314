const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchFood = async () => {
    const response = await fetch(`https://api.airtable.com/v0/appoREwRng0gEiJqE/Table%201?api_key=keyg6NaxejaLbInJ7`).then(data => data.json());
    // console.log(response);
    
    foodsArray = response.records;

    const cuberuleFoods = foodsArray.filter(food => {
        if (food.fields.Cube_Rule_Type === "Calzone" && food.fields.Cuisine === "Indian") {
        // && food.fields.Cuisine.includes("American"))
            return true;
        }

        return false;
    });

    console.log(cuberuleFoods);

    buildSlideshow(cuberuleFoods);
    return response.records;
};

const buildSlideshow = (foods) => {

    const slideCount = 1;
    const articleEls = foods.slice(0, slideCount).map(buildSlide);

    console.log(articleEls);

    slideshowContainer.append(...articleEls);

    let leftIndex = 0;
    let rightIndex = slideCount - 1;

    nextButton.addEventListener('click', () => {
        leftIndex += 1;
        rightIndex += 1;
        // ^ same as rightIndex = rightIndex + 1

        if (rightIndex >= foods.length) {
            rightIndex = 0;
        }
        
        if (leftIndex >= foods.length) {
            leftIndex = 0;
        }


        console.log(leftIndex, rightIndex);
        
        slideshowContainer.removeChild(slideshowContainer.children [0]);
        slideshowContainer.append(buildSlide(foods[rightIndex],rightIndex));
    });

    prevButton.addEventListener('click', () => {
        leftIndex -= 1;
        rightIndex -= 1;

        if (leftIndex < 0) {
            leftIndex = foods.length - 1;
        }

        if (rightIndex < 0) {
            rightIndex = foods.length - 1;
        }

        console.log(leftIndex, rightIndex);

        const lastItem = slideshowContainer.querySelectorAll('article') [slideCount-1];
        slideshowContainer.removeChild(lastItem);
        slideshowContainer.prepend(buildSlide(foods[leftIndex]));
    });
};

// const swapSlide = (foodsRecord) => {
//     const slideEl = buildSlide(foodsRecord);

//     slideshowContainer.innerHTML = '';
//     slideshowContainer.append(slideEl);
// };

const buildSlide = (food, index) => {
    const foodContainer = document.createElement('article');

    if (food.fields.Image) {
        // console.log(food.fields.Image[0].url);

        const imageSelectBtn = document.createElement('button');
        imageSelectBtn.dataset.foodIndex = index;

        imageSelectBtn.addEventListener('click', evt => {

        });

        const Image_img = document.createElement('img');
        Image_img.src = food.fields.Image[0].url;
        Image_img.classList .add('img-img', 'jsfnsn');
        Image_img.id = ('img-img-id');
        foodContainer.append(Image_img);
    }

    if (food.fields.Food) {
        const foodnameEl = document.createElement('p');
        foodnameEl.innerHTML = food.fields.Food;
        foodContainer.append(foodnameEl);
    }

    if (food.fields.Cube_Rule_Type) {
        console.log(food.fields.Cube_Rule_Type);
        const cuberuleEl = document.createElement('p');
        cuberuleEl.innerHTML = food.fields.Cube_Rule_Type;
        foodContainer.append(cuberuleEl); 
    }

    if (food.fields.Cuisine) {
        const cuisineEl = document.createElement('p');
        cuisineEl.innerHTML = food.fields.Cuisine;
        foodContainer.append(cuisineEl);
    }

    return foodContainer;
};

fetchFood();
