const db = {
    id: 'appoREwRng0gEiJqE',
    table: 'Soup-or-Salad?',
    apiKey: 'keyul7nEZff6Uw7lV'
};

const airtableUrl = `https://api.airtable.com/v0/appoREwRng0gEiJqE/Table%201?api_key=keyul7nEZff6Uw7lV`


const foodArray = {items: [
    {
      fields: {
        img: "https://food-fanatic-res.cloudinary.com/iu/s--BobuhPb8--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1416055840/cherry-pie-pancakes-picture.jpg",
        category: "salad"
      }
    },
      {
      fields: {
        img: "https://www.amsety.com/uploads/recipes/img-recipies-spicy-tomato-basil-soup.jpg",
        category: "salad"
      }
    },
      {
      fields: {
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2006/12/01/old-chili-ay-1875494-x.jpg",
        category: "soup"
      }
    },
  ]};

  
  /*
  * Replace "itemArray.items" with your collection items array
  */
  const soupBtn = document.getElementById('soup-btn');
  const saladBtn = document.getElementById('salad-btn');
  const foodContainer = document.getElementById('food-container');


  // This copies your items array into a new variable, makes it easier to work with.
  const myItems = foodArray.items.slice();
  let userScore = 0;
  let currentItem = {};
  
  const buildItem = food => {
    const imgEl = document.createElement('img');
    imgEl.src = food.fields.img;
    foodContainer.innerHTML = '';
    foodContainer.append(imgEl);
  };
  
  const getRandomItem = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    // Array.splice() removes an element from an array at a specified index. Since we are passing the myItems array into this function, this will take one random element from myItems, and remove it so now myItems is one item shorter.
    const item = arr.splice(randomIndex, 1)[0];
    // We return the selected item to be used in our buildItem function to generate the HTML
    return item;
  };
  
  const refreshItem = food => {
    // Eventually myItems wont have anything in it, then the game is over
    if (food.length > 0) {
        currentFood = getRandomItem(food);
        buildItem(currentFood);
    } else {
      console.log('game over', userScore);
    }
  };
  
  soupBtn.addEventListener('click', () => {
    if (currentFood.fields.category === "soup") {
      userScore += 1;
    }
    refreshItem(myItems);
  });
  
  saladBtn.addEventListener('click', () => {
    if (currentFood.fields.category === "salad") {
      userScore += 1;
    }
    refreshItem(myItems);
  });
  
  refreshItem(myItems);