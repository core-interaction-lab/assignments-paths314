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
        const imdbUrlEl = document.createElement('a');
        const releaseDateEl = document.createElement('div');

        titleEl.innerHTML = movie.fields.Title;
        genreEl.innerHTML = movie.fields.Genre;

        imdbUrlEl.href = movie.fields.imdb_url;
        imdbUrlEl.target = "_blank";
        imdbUrlEl.classList.add('imdb-link');

        imdbUrlEl.innerHTML = "IMDB Page";
        releaseDateEl.innerHTML = movie.fields.Release_Date;

        articleEl.append(titleEl, genreEl, imdbUrlEl, releaseDateEl);

        moviesContainer.appendChild(articleEl);
    });

    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.id = `my-link-${index}`;
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "green";
        });

        link.addEventListener('mouseout', evt => {
            link.style.color = linkColor;
        });

    });
};

fetchMovies ();