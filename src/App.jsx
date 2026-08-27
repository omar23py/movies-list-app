import {useState, useEffect} from "react";
import './index.css';

export default function App() {


    return (
        <header>
            <div className="header-container">
                <div className='header-content-container'>
                    <img class='w-auto' src='../public/logo.png' alt='logo' />
                    <img src='../public/hero-image.png' alt='hero-image'/>
                    <h1>Find <span class='text-gradient'>Movies</span> You'll Love Without The Hassle</h1>
                </div>
            </div>
        </header>


    )

}