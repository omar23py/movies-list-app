import {useState, useEffect} from "react";
import Search from "../components/Search.jsx";
import Card from "../components/Card.jsx";
import './index.css';



export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [moveList, setMoveList] = useState([]);

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const Base_URL='https://api.themoviedb.org/3';
    const API_OPTIONS = {
        'method': 'GET',
        headers: {accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        },
    };




        async  function fetchMovies(query='') {
        try {
            console.log(API_KEY);
            const endpoint = query?
                `${Base_URL}/search/movie?query=${encodeURIComponent(query)}`:
                `${Base_URL}/discover/movie?sort_by=popularity.desc`;


            const response = await fetch(endpoint,API_OPTIONS);

            if (!response.ok) {
                throw new Error('Error fetching movies.');
            }
            const data = await response.json();

            if (data.Response =='Fales') {
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMoveList([]);
                return;
            }
            console.log(data);


        }
        catch (error) {
            console.log(error);


        }
        finally {

        }




    }

    useEffect(() => {
        fetchMovies(searchTerm);
    }, [searchTerm]);
    return (
        <>
            <header>
                <div className="header-container">
                    <div className='header-content-container'>
                        <img class='w-auto' src='../public/logo.png' alt='logo'/>
                        <img src='../public/hero-image.png' alt='hero-image'/>
                        <h1>Find <span class='text-gradient'>Movies</span> You'll Love Without The Hassle</h1>
                        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    </div>
                </div>
            </header>
            <section className='all-movies'>
                <Card/>
            </section>


        </>


    )

}