//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const users = [

  ];
  const movies = [
    {
      name : "M S Dhoni" ,
      poster : "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" ,
      rating : 8 ,
      summary : "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    },
    {
      name : "The Marix" ,
      poster : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4jfQQt_0vCA4XSwGiWkffC32Tv2oajdWhaYHHVYylYGJ3v17Q" ,
      rating : 8.7 ,
      summary : "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
    },
    {
      name : "The Shawshank Redemption" ,
      poster : "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" ,
      rating : 9.3 ,
      summary : "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
    },
    {
      name : "Interstellar" ,
      poster : "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg" ,
      rating : 8.6 ,
      summary : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      name : "Bahubali" ,
      poster : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnIM8CU0VO9BpthgIHGJM_mG6xDcC5uOpY-FIuILs0r4wJcc6F" ,
      rating : 8,
      summary : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
  ];
  

  return (
    <div className="App">
      {/* <h1>hi aai, i love you the most...</h1> */}
      {/* <Counter/> */}
      <div className='movie-list'>{movies.map((mv) =>(
       <Movie name={mv.name} poster={mv.poster} rating={mv.rating} summary={mv.summary}/>
       ))}
      </div>
    </div>
  );
}
// pass data from parents to child-->props
function Movie({name, poster, rating, summary}){
  return(
    <div className='movie-container'>
      <img
       className='movie-poster' 
       src={poster} 
       alt= {name}
       />
      <div className='movie-spec'>
        <h3 className='movie-name'>{name}</h3>
        <p className="movie-rating">⭐{rating}</p>
      </div>
      <p>{summary}</p>
    </div>
  )
}
// import useState from react
// hook - If it is a hook (function) it will start with "use"
function Counter(){
  // const like=0;
  // useState will return an array the we are destructuring it like const[like, setLike]
  const[like, setLike] =  useState(0); //Initial value for like
  const[dislike, setDislike] =  useState(like);
  // setLike is functon which will help update like
  //like++;

  //state - current senario - current data - web ap
  //state (like),setState (setLike)-> updates state
  return(
    <div>
      <button onClick={()=>setLike(like+1)}>👍{like}</button>
      <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
      {/*onClick should be in pascal case*/}
      {/* click like button
       -> onClick
       -> setLike(will update like)
       -> React will update  like in the view(screen) */}
    </div>
  )
}
export default App;
