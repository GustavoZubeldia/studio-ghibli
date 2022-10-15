import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Detail = () => {

  //console.log(useParams());
  const {id} = useParams()
  console.log(id)

  const[film, setFilm] = React.useState([])

  React.useEffect (() => {
    obtenerDatos()
},[])

const obtenerDatos = async () =>{
  const data = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
  const details = await data.json() 
  setFilm(details)

}

  return (
    <Card className="m-auto py-8 w-96 ">
    <CardHeader color="blue" className="h-56">
      <img
        src={film.image}
        alt="img-blur-shadow"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h5" className="mb-2">
        {film.title}      
      </Typography>
      <Typography >
       {film.description}
      </Typography>
    </CardBody>
  </Card>
  )
}

export default Detail