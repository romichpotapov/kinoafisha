const searchForm = document.querySelector('#search-form');
const movie = document.querySelector('#movies');

apiSearch = () => {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=ceec93d778f59df4556ed45a60299413&language=en-US&query=' + searchText;
    
    requestApi(server);
    
}

searchForm.addEventListener('submit', apiSearch);

requestApi = ( url) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState !== 4) return;

        if (request.status !== 200) {
            console.log('error: ', request.status);
            return;
        }

        const output = JSON.parse(request.responseText);
        let inner = '';

        console.log(output.results);
        

        output.results.forEach(function (item) {
            let nameItem = item.name || item.title;
            let releaseDate = item.release_date || 'Soon';
            inner += `<div class="col-12 col-md-4 "><span class="badge badge-secondary"> ${releaseDate}</span> ${nameItem}</div>`;
            
        });

        movie.innerHTML = inner;
    })
}