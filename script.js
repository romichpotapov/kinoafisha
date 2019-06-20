const searchForm = document.querySelector('#search-form');

apiSearch = () => {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=ceec93d778f59df4556ed45a60299413&language=en-US&query=' + searchText;
    
    requestApi('GET', server);
    
}

searchForm.addEventListener('submit', apiSearch);

requestApi = ( method, url ) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
}