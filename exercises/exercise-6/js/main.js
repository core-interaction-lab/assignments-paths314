const fetchMovies = async () => {

    //async -- doing something, don't know when it'll be done

    const response = await fetch('https://api.airtable.com/v0/appVyMXlZ8jLy2bbM/Table%201?api_key=keyg6NaxejaLbInJ7').then(data => data.json())

    // json -- data just fetched turned into json, a code format

    //await -- code isnt run until the fetch function is completed

    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const imdbUrlEl = document.createElement('div');
        const releaseDateEl = document.createElement('div');

        titleEl.innerHTML = movie.fields.Title;

        articleEl.appendChild(titleEl);

        moviesContainer.appendChild(articleEl);
    });
};

fetchMovies ();