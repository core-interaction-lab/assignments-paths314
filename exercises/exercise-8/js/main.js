const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchFood = async () => {
    const response = await fetch(`https://api.airtable.com/v0/appoREwRng0gEiJqE/Table%201?api_key=keyg6NaxejaLbInJ7`).then(data => data.json());
    // console.log(response);
    buildSlideshow(response.records);
    return response.records;
};

const buildSlideshow = (foods) => {
    console.log(foods);
    console.log(buildSlide(foods[0]));

    const firstFood = buildSlide(foods[0]);
    slideshowContainer.append(firstFood);

    let currentFood = 0;

    prevButton.addEventListener('click', () => {
        if (currentFood === 0) {
            currentFood = foods.length - 1;
        }

        else {
            currentFood = currentFood - 1;
        }

        const foodsRecord = foods[currentFood];
        swapSlide(foodsRecord);

    });

    nextButton.addEventListener('click', () => {
        if (currentFood === foods.length - 1) {
            currentFood = 0;
        }

        else {
            currentFood = currentFood + 1;
        }

        const foodsRecord = foods[currentFood];
        swapSlide(foodsRecord);

    });
};

const swapSlide = (foodsRecord) => {
    const slideEl = buildSlide(foodsRecord);

    slideshowContainer.innerHTML = '';
    slideshowContainer.append(slideEl);
};

const buildSlide = (food) => {
    const foodContainer = document.createElement('article');

    if (food.fields.Image) {
        console.log(food.fields.Image[0].url);
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
