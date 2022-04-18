// const db = {
//     id: 'appoREwRng0gEiJqE',
//     table: 'Soup or Salad?',
//     apiKey: 'keyg6NaxejaLbInJ7'
// };

const airtableUrl = `https://api.airtable.com/v0/appoREwRng0gEiJqE/Table%201?api_key=keyg6NaxejaLbInJ7`

const fetchFood = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

    const myObject = {
        name: 'food',
        cube_rule: 'toast', 
    }

    const myArray = ['food', 'toast'];

    console.log(myObject.cube_rule);
    console.log(myArray[1]);

    const container = document.getElementById ('food-container');


    response.records.forEach((food) => {
        console.log(food);
        if (food.fields.Image) {
            console.log(food.fields.Image[0].url);
            const Image_img = document.createElement('img');

            Image_img.src = food.fields.Image[0].url
            // Image_img.setAttribute('src', food.fields.Image[0].url) 
            // previous two lines do the same thing (gets images)

            container.append(Image_img);
        }

        if (food.fields.cube_rule) {
            console.log(food.fields.cube_rule);
        }

        if (food.fields.Cuisine) {
            const cuisineEl = document.createElement('p');
            cuisineEl.innerHTML = food.fields.Cuisine;
            container.append(cuisineEl);
        }
    });

};

fetchFood();