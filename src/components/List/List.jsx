import React, { useEffect, useState } from 'react'
import { apiBase,fetching,options } from '../../Tmdb';
import { MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos } from "react-icons/md";

import Film from '../Film/Film';

import './List.css'

const List = ({data,id}) => {
  const [films, setFilms] = useState([])
  const row = document.querySelector('#row'+id)
 
  const slideRight = () => {
    row.scrollLeft = row.scrollLeft + 400
  }
  const slideLeft = () => {
    row.scrollLeft = row.scrollLeft - 400
  }
 
  
useEffect(()=>{
  const getMovies = async () => {
   const response = await fetching(data.items,options)
   setFilms(response.results)
  
  }

  getMovies()

},[])

  return (
    <>
    <section className='rowContainer'>
        <h2>{data.title}</h2>
      <div className='row'id={'row'+id}>
          {
            films.map((film)=> <Film data={film} key={film.id} />)
          }
       
          <button className='rigth'onClick={slideRight}><MdOutlineArrowForwardIos size={25}/></button>
          <button className='left' onClick={slideLeft}><MdOutlineArrowBackIosNew size={25} /></button>
        
      </div>
      
    </section>
    
    
    </>
    
  )
}

export default List