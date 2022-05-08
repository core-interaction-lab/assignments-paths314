const albumContainer = document.getElementById('album-container');
const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchContent = (fetchUrl) => {
    return fetch(fetchUrl).then(data => data.json());
};
const htmlDecode = (input) => {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.innerText;
}

const buildAlbums = albums => {
    albums.forEach(item =>{
        const imgEl = document.createElement('img');
    });
}



const url1 = 'https://interactionlab.space/data/assignment-4-1.json';

const main = async () => {
    const response = await fetchContent(url1);
    // console.log (response);
    buildAlbums(response.items);
    buildSlideshow(response.items);
};

const buildSlideshow = (albums) => {
    let leftI = 0;
    let rightI = 4;

    console.log(albums.slice(0,5));
    albums.slice(0,5).forEach(e => (buildSlide(e)));

    prevButton.addEventListener('click', () =>{
        leftI += 1;
        rightI += 1;
        if (rightI >= albums.length){
            rightI = 0;
        }
        if (leftI >= albums.length){
            leftI = 0;
        }
        slideshowContainer.removeChild(slideshowContainer.querySelectorAll('img')[4]);
        (buildSlide(albums[rightI],"pre"));
    });

    nextButton.addEventListener('click', () => {
        leftI -= 1;
        rightI -= 1;
        if (leftI < 0) {
            leftI = albums.length - 1;
        }
        if (rightI < 0) {
            rightI = albums.length - 1;
        }

        slideshowContainer.removeChild(slideshowContainer.querySelectorAll('img')[0]);
        (buildSlide(albums[leftI]));

    });
}

const buildSlide = (albums,state="post") => {
    console.log(albums.images[0].url);
    const albumContainer = document.createElement('article');
        const posterImg = document.createElement('img');
        posterImg.src = albums.images[0].url;
        posterImg.classList.add('poster-img');
        posterImg.id = 'poster-img-id';
       
        if (state=="post"){
            console.log("post")
            slideshowContainer.append(posterImg);
        }
        else if(state=="pre"){
            console.log("pre")
            slideshowContainer.prepend(posterImg);
        }
};

main();




























// const albumContainer = document.getElementById('album-container');

// const fetchContent = (fetchUrl) => {
//     return fetch(fetchUrl).then(data => data.json());
// };

// const htmlDecode = (input) => {
//     const e = document.createElement('div');
//     e.innerHTML = input;
//     return e.innerText;
// }

// const buildStories = stories => {   
//     stories.forEach(item => {
//         console.log(item);
//         const container = document.createElement('article');
//         const titleEl = document.createElement ('h2');
//         const bodyEl = document.createElement ('div');
        
//         titleEl.innerHTML = item.data.title;
//         bodyEl.innerHTML = htmlDecode(item.data.selftext_html); 

//         container.append(titleEl, bodyEl);
//         albumContainer.append(container);
//         bodyEl.append();
//     });
// };

// const buildEpisodes = episodes => {
//     episodes.forEach(item=> {
//         console.log(item);
//         const imgEl = document.createElement('img');
//         imgEl.setAttribute('src', item.image.medium);
//         albumContainer.append(imgEl);
//     });
// };

// const buildAlbums = albums => {
//     albums.forEach(item => {
//         console.log(item);
//         const imgEl = document.createElement('img');
//         imgEl.setAttribute('src', item.images[0].url);
//         albumContainer.append(imgEl);
//     });
// };

// const url1 = 'https://interactionlab.space/data/assignment-4-1.json';
// const url2 = 'https://interactionlab.space/data/assignment-4-2.json';
// const url3 = 'https://interactionlab.space/data/assignment-4-3.json';

// const main = async () => {
//     const response1 = await fetchContent(url1);
//     const response2 = await fetchContent(url2);
//     const response3 = await fetchContent(url3);

//     // console.log (response1, response2, response3);
//     buildAlbums(response1.items);
//     buildStories (response3.data.children);
//     buildEpisodes(response2)

// }

// main();
