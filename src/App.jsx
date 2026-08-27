import {useState, useEffect} from "react";
import {useDebounce} from 'react-use'
import Search from "../components/Search.jsx";
import Card from "../components/Card.jsx";
import './index.css';

export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const[debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [moveList, setMoveList] = useState([]);

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const Base_URL = 'https://api.themoviedb.org/3';
    const API_OPTIONS = {
        'method': 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        },
    };
    useDebounce(()=>setDebouncedSearchTerm(searchTerm),500,[searchTerm]);

    async function fetchMovies(query = '') {
        try {
            const endpoint = query
                ? `${Base_URL}/search/movie?query=${encodeURIComponent(query)}`
                : `${Base_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error('Error fetching movies.');
            }
            const data = await response.json();

            if (data.results.length === 0) {
                setErrorMessage(data.Error || 'No movies found.');
                setMoveList([]);
                return;
            }
            setMoveList(data.results);
        } catch (error) {
            console.log(`Error fetching movies ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        } finally {
        }
    }

    useEffect(() => {
        fetchMovies(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    return (
        <main>
            <div className="pattern" />
            <div className="wrapper">
                <header>
                    <div className="header-container">
                        <div className='header-content-container'>
                            <img className='w-auto' src='../public/logo.png' alt='logo' />
                            <img src='/hero-image.png' alt='hero-image' />
                            <h1>Find <span className='text-gradient'>Movies</span> You'll Love Without The Hassle</h1>
                            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        </div>
                    </div>
                </header>
                <section className='Popular-movies'>
                    <h2 className='font-extrabold text-white text-2xl sm:text-4xl mb-5'>Popular</h2>
                    <ul>
                        {moveList.map(movie => (
                            <li key={movie.id}>
                                <Card movie={movie} />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}