
export default  function Card({ movie:{title , vote_average, release_date,original_language,backdrop_path,genre_ids }}) {
    const genre_id=genre_ids[0];
    const genreMap = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };
return (
    <div className='card'>
        <img src={backdrop_path?
            `https://image.tmdb.org/t/p/w500/${backdrop_path}`:
            '/No-Poster.png'
        } alt={title} />
        <div className='mt-3 px-3 pb-3'>
            <h3>{title}</h3>
        <div className='content'>
            <div className='rating'>
                <img src='/star.svg' alt='' />
                <p>{vote_average?vote_average.toFixed(1):'NA'}</p>
            </div>
            <span>•</span>
            <p className='capitalize'>{original_language}</p>
            <span>•</span>
            <p>{genre_id in genreMap? genreMap[genre_id]:'N/A' }</p>
            <span>•</span>
            <p>{release_date? release_date.split('-')[0]:'N/A'}</p>

        </div>

        </div>
    </div>

);



}