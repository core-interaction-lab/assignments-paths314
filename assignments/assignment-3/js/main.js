const fetchMovies = async () => {

    const response = await fetch('https://api.airtable.com/v0/appVyMXlZ8jLy2bbM/Table%201?api_key=keyg6NaxejaLbInJ7').then(data => data.json())

    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const imdbUrlEl = document.createElement('a');
        const genreEl = document.createElement('div');
        const releaseDateEl = document.createElement('div');
        const descriptionEl = document.createElement('div');
        const posterEl = document.createElement('img');

        titleEl.innerHTML = movie.fields.Title;
        titleEl.classList.add('title');
        imdbUrlEl.classList.add('imdb-link');
        genreEl.classList.add('genre');
        releaseDateEl.classList.add('release-date');
        descriptionEl.classList.add('description');
        posterEl.classList.add('poster');


        genreEl.innerHTML = movie.fields.Genre;

        imdbUrlEl.href = movie.fields.imdb_url;
        imdbUrlEl.target = "_blank";
        imdbUrlEl.classList.add('imdb-link');

        imdbUrlEl.innerHTML = "IMDB Page";
        releaseDateEl.innerHTML = movie.fields.Release_Date;
        descriptionEl.innerHTML = movie.fields.Description;
        posterEl.innerHTML = movie.fields.Poster;

        articleEl.append(titleEl, genreEl, releaseDateEl, imdbUrlEl, descriptionEl, posterEl);

        moviesContainer.appendChild(articleEl);
    });

    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.style.color = "lightblue"
        link.id = `my-link-${index}`;
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "cadetblue";
        });

        link.addEventListener('mouseout', evt => {
            link.style.color = "cadetblue";
        });

    });

    const titleTags = document.querySelectorAll('.title');
    console.log(titleTags);
    titleTags.forEach((title, index) => {
        const titleColor = title.style.color;
        title.style.color = "pink";
        title.style.fontWeight = "bold";
        title.id = `my-title-${index}`;

        title.addEventListener('mouseover', (evt) => {
            title.style.color = "magenta";
        });

        title.addEventListener('mouseout', evt => {
            title.style.color = "pink";
        });

    });

    // const articleTags = document.querySelectorAll('.article');
    // console.log(articleTags);
    // articleTags.forEach((article, index) => {
    //     const articleColor = article.style.color;
    //     article.style.border = "cadetblue";
    //     article.id = `my-article-${index}`;

    //     article.addEventListener('mouseover', (evt) => {
    //         article.style.color = articleColor;
    //     });

    //     article.addEventListener('mouseout', evt => {
    //         title.style.color = "lightblue";
    //     });

    // });
};

fetchMovies ();






























// const fetchClothes = async () => {

//     const response = await fetch('https://api.airtable.com/v0/appLajcs7Dq53HM0o/Table%201?api_key=keyg6NaxejaLbInJ7').then(data => data.json())

//     console.log(response);

//     const clothesContainer = document.getElementById('clothes-container');

//     response.records.forEach(clothing => {
//         console.log (clothing.fields);
//         const articleEl = document.createElement ('article');
//         const nameEl = document.createElement ('div');
//         const colorEl = document.createElement ('div');
//         const priceEl = document.createElement ('div');
//         const linkEl = document.createElement ('a');
        
//         nameEl.innerHTML = clothing.fields.Name;
//         shopEl.innerHTML = clothing.fields.Color;
//         priceEl.innerHTML = clothing.fields.Price;

//         linkEl.href = clothing.fields.link;
//         linkEl.target = "_blank";
//         linkEl.classList.add('item-link')
//         linkEl.innerHTML = "Item Link"

//         articleEl.append (nameEl, colorEl, priceEl, linkEl);

//         clothesContainer.appendChild(articleEl);

//     });

//     const linkTags = document.querySelectorAll ('.item-link');
//     console.log(linkTags);
//     linkTags.forEach((link, index) => {
//         const linkColor = link.style.color;
//         link.id = `my-link-${index}`;
//         link.addEventListener('mouseover', (evt) => {
//             link.style.color = "pink";
//         });

//         link.addEventListener('mouseout', evt => {
//             link.style.color = linkColor;
//         });
//     });
// };

// fetchClothes ();