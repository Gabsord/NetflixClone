import React from 'react'
import './film.css'

const Film = ({data}) => {
  const poster = `https://image.tmdb.org/t/p/w300${data.poster_path}`
  return (
    <>
    <div className='filmContainer' >
      <div className='film'>
          <img draggable={false} src={poster} alt={data.title} />
      </div>

    </div>
    </>
  )
}

export default Film