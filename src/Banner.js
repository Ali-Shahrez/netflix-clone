import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
        }
        fetchData();
    }, []);

    return (
        <header className="banner"
            style = {{
                backgroundSize:'cover',
                backgroundImage: `url ("https://tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            backgorundPosition: "center center",
        }}
            >
            <div className="banner_contents">
            {/* You can display movie title here to test */}
            <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
            </div>
        </header>
    );
}

export default Banner;
