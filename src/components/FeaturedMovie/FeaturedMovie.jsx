import './FeaturedMovie.css'
import React from 'react'
import { IoMdPlay } from 'react-icons/io'
import { AiOutlineExclamationCircle } from 'react-icons/ai'



const FeaturedMovie = ({ data }) => {
    console.log(data);
    const relevant = data.vote_average * 10
    const releaseDate = new Date(data.first_air_date)
    const releaseYear = releaseDate.getFullYear()
    const genresList = []

    for (let i = 0; i < data.genres.length; i++) {
        genresList.push(data.genres[i].name)
    }

    return (
        <>
            <section className='featuredMovieContainer'
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})` }}>

                <div className='horizontalCover'>
                    <div className='verticalCover'>
                        <div className='featuredMovie'>
                            <h1 className='featuredName'>{data.name}</h1>
                            <div className='featuredInfos'>
                                <span className='relevance'><span style={{ color: '#0bb60b' }}>{Math.floor(relevant)}% </span> Relevante</span>
                                <span className='releaseYear'> {releaseYear} </span>
                                <span className='numberOfSeasons'>{data.number_of_seasons} {data.number_of_seasons != 1 ? 'temporadas' : 'temporada'}</span>
                            </div>
                            <div className='overview'>
                                {data.overview.substring(0, 200,) + '...'}
                            </div>
                            <div className='featuredButtons'>
                                <button className='watchBtn'><IoMdPlay /> Assistir</button>
                                <button className='moreInfosbtn'><AiOutlineExclamationCircle /> Mais informações</button>
                            </div>
                            <div className='genres'>
                                {
                                    <p>{genresList.length > 1 ? 'Gêneros :' : 'Gênero: '} {genresList.join(', ')}</p>
                                }
                            </div>

                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default FeaturedMovie