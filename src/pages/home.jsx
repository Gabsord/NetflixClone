import React, { useState } from "react";
import { Categorys, fetching, featured, apiKey } from "../Tmdb";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";
import Header from "../components/Header/Header";
import List from '../components/List/List'
import Loading from "../components/Loading/Loading";



const Home = () => {

    const [moviesCategorys, setMoviesCategorys] = useState(Categorys)
    const [featuredMovie, setFeaturedMovie] = useState(undefined)
    const [loading, setLoading] = useState(true)


    useState(() => {
        const getFeatured = async () => {
            setLoading(true)
            const response = await fetching(featured.items)
            const movies = response.results

            const filteredMovies = movies.filter((movie) => movie.overview && movie)

            const randomizing = Math.floor(Math.random() * filteredMovies.length)
            const chosenMovie = filteredMovies[randomizing]
            const movieInfos = await fetching(`/tv/${chosenMovie.id}?language=pt-BR&api_key=${apiKey}`)
            setFeaturedMovie(movieInfos)
            setLoading(false)
           
            
        }

        getFeatured()
    }, [])

    const Home = () => {
        return (
            <>
            {
                loading ? <Loading /> : <FeaturedMovie data={featuredMovie} />
            }

            <div className="lists">
                {
                    moviesCategorys.map((category, index) => <List key={category.slug} data={category} id={index} />)
                }
            </div>

            </>
        )
    }

    return (
        <>
            <Header />
            {
                loading ? <Loading/> : <Home/>
            }
           
        </>
    )
}

export default Home