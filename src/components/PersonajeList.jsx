import React, {useState, useEffect}from 'react';
import Personaje from './Personaje';

const PersonajeList = () => {

    const URL = "https://ghibliapi.herokuapp.com/people"; 
    
    const [people, setpeople] = useState([]);

    const getpeople = async()=> {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setpeople(data);
        } catch (error){
            console.error(error);
        }
    }

    useEffect (()=>{
        getpeople();
    },[])

  return (
   <section className='flex flex-wrap flex-row  justify-center items-center gap-20 my20'>
    {people.length > 0 ?(
    people.map(el=> <Personaje  key={el.id} people={el}/>)
    ) : (
        <p>Cargando Pesonajes ...</p>
    )}
   </section>
  );
};


export default PersonajeList