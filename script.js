const searchForm = document.querySelector('#search-form');

apiSearch = () => {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://www.themoviedb.org';
    
    console.log(requestApi(server));
    
}

searchForm.addEventListener('submit', apiSearch);

requestApi = (url) => {
    return url;
}