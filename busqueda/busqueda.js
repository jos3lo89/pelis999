const searchBox = document.getElementById('search-box');
    const movies = document.querySelectorAll('.movie');

    searchBox.addEventListener('keyup', function (event) {
        const searchTerm = event.target.value.toLowerCase();

        if (searchTerm === '') {
            movies.forEach(movie => {
                movie.style.display = 'none';
            });
            return;
        }

        movies.forEach(movie => {
            const title = movie.dataset.title.toLowerCase();
            if (title.includes(searchTerm)) {
                movie.style.display = 'inline';
                movie.style.display = 'flex';
                movie.style.alignItems = 'center';
                movie.style.justifyContent = 'center';
                
            } else {
                movie.style.display = 'none';
            }
        });
    });