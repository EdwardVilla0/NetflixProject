import React, { useState, useEffect } from 'react';
import axios from '../../axios/axios';
import requests from '../../request/request';
import './Banner.styles.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData()
    }, [])

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backdropPosition: "center center",
            }}>
            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                {/* 2 buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List </button>
                </div>

                <h1 className="banner__description">{movie?.overview}</h1>
                {/* description */}
                {/* <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1> */}
            </div>
        </header>
    )
}

export default Banner;
