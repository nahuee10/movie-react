import React from 'react';
import { Row, Col } from 'antd';
import useFetch from '../hooks/useFetch';
import { URL_API, API } from '../utils/contants';
import MovieList from '../components/MovieList';

import SliderMovies from '../components/SliderMovies';

export default function Home() {
   
   const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
   );

   const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
   );

   console.log(newMovies);
   
   
   return (
      <>
         <SliderMovies movies={newMovies} />
         <Row>
            <Col xs={24} sm={24} md={12}>
               <MovieList title="Peliculas Populares" movies={popularMovies}/>
            </Col>
            <Col xs={24} sm= {24} md={12}>
               <MovieList title="Peliculas Populares" movies={popularMovies}/>
            </Col>
         </Row>
      </>
   );

}