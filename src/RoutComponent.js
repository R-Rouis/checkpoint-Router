

import { useState } from 'react';
import { Route, Switch} from 'react-router'
import App from './App'
import Description from './component/Description'
import {v4 as uuidv4} from "uuid"

//Using react Router to navigate the App

const RoutComponent =()=>{
    const data = [{
        id : uuidv4(),
        title : "The Vampires Diaries",
        description : "Vampire Diaries is an American television series developed by Julie Plec and Kevin Williamson. It aired from September 10, 2009 to March 10, 2017 on The CW in the United States and simultaneously on CTV Two in Canada.",
        posterUrl : "https://cdn.cinematerial.com/p/500x/0qjrmpmw/the-vampire-diaries-movie-poster.jpg",
        trailerUrl : "https://www.youtube.com/watch?v=BmVmhjjkN4E",
        rating : 10 , 
        year : "serie (2009-2017)"
      },
      {
       id : uuidv4(),
       title : "Le voyage de Megellan.",
       description : "Dans ce film d'animation instructif et aux décors soignés, l'Espagnol Ángel Alonso relate le premier voyage autour du monde de toute l'histoire.",
       posterUrl : "http://fr.web.img6.acsta.net/pictures/19/12/03/14/37/2451061.jpg",
       trailerUrl : "https://www.youtube.com/watch?v=efEWodUFlY0",
       rating : 6,
        year : "31 octobre 2019"
      },
      {
       id : uuidv4(),
       title : "Home Alone",
       description : "The McCallisters decide to take a little trip to Paris for the holiday season. The big departure is a bit rushed and the parents forget about their youngest son, nine-year-old Kevin, at home. For the latter, it is a real happiness to be alone, but his peace will not last long.",
       posterUrl : "https://images.saymedia-content.com/.image/t_share/MTc2NDU0Mzc5MjEyMTIyMDc0/home-alone-film-review.jpg",
        trailerUrl : "https://www.youtube.com/watch?v=EZt4rGLiSP8",
        rating : 3,
        year : "10 novembre 1990"
      },
      {
        id : uuidv4(),
        title : "IP  MAN",
        description : "Ip Man is a series of Hong Kong martial arts films based on the life events of the Wing Chun master of the same name. The progenitor of the series was Ip Man (2008), which was followed by two sequels – Ip Man 2 (2010), Ip Man 3 (2015), the spin-off Master Z: Ip Man Legacy (2018) and the final instalment Ip Man 4: The Finale (2019).",
        posterUrl : "http://photocdn.sohu.com/20130507/Img375041791.jpg",
        trailerUrl : "https://www.youtube.com/watch?v=ZkPci7z3TSc",
        rating : 4 ,
        year : "2008-2019"
      },
      {
        id : uuidv4(),
        title : "Maara",
        description : "Maara is a 2021 Indian Tamil-language romantic drama film directed by Dhilip Kumar in his directorial debut, and produced by Prateek Chakravorty and Shruti Nallappa of Pramod Films. An adaptation of the 2015 Malayalam film Charlie by Martin Prakkat. the film stars Madhavan, Shraddha Srinath and Sshivada.",
        posterUrl : "https://123images.co/movies/1239319874-poster-Maara.jpg",
        trailerUrl : "https://www.youtube.com/watch?v=NPZfJwSHwVY",
        rating : 11 ,
        year : "2021"
      },
      {
        id : uuidv4(),
        title : "PoKémon",
        description : "Pokémon est une franchise créée par Satoshi Tajiri en 1996,présente en particulier en jeu vidéo,dans des séries éditées par Nintendo.Selon les statistiques de Nintendo en 2010,les jeux Pokémon se sont vendus à environ 250 millions d’unités.Le jeu vidéo Pokémon Rouge et Bleu s’est vendu à plus de 30 millions d’exemplaires.",
        posterUrl : "http://3.bp.blogspot.com/-7t_1iQH-w0U/Vdjg0vP8FBI/AAAAAAAAA2U/yp9iRwlMm5g/s1600/20150822_165025.jpg",
        trailerUrl : "https://www.youtube.com/watch?v=hSgsQby8vbM",
        rating : 4 ,
        year : "1996"
      },
    ];
  const [movieList, setMovieList] = useState(data);
   

    return(<Switch>
        <Route  exact path='/' render={(props)=><App {...props} movieList={movieList} setMovieList={setMovieList}></App>}></Route>
        <Route exact path='/description/:id'  render={(props)=><Description {...props} movieList={movieList} ></Description>}></Route>
    
    </Switch>)
    
}
export default RoutComponent