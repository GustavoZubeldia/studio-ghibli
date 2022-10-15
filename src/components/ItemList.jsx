import React, {useState, useEffect}from 'react';
import Item from './Item';

const ItemList = () => {

    const URL = "https://ghibliapi.herokuapp.com/films"; 
    
    const [films, setfilms] = useState([]);

    const getfilms = async()=> {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setfilms(data);
        } catch (error){
            console.error(error);
        }
    }

    useEffect (()=>{
        getfilms();
    },[])

  return (
   <section className='flex flex-wrap flex-row  justify-center items-center gap-20 my20'>
    {films.length > 0 ?(
    films.map(el=> <Item  key={el.id} film={el}/>)
    ) : (
        <p>Cargando Peliculas ...</p>
    )}
   </section>
  );
};

export default ItemList