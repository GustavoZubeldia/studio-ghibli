import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const Personaje = ({people}) => {
  return (
    <Card className="w-96 m-auto py-8">
  <CardHeader color="blue" className="relative h-56">
      <img
        src={people.image}
        alt="img-blur-shadow"
        className="h-full w-full object-cover"
      />
    </CardHeader>

    <CardBody className="text-center">
      <Typography variant="h5" className="mb-2">
       
        {people.name}
     
        
      </Typography>
      <Typography className="line-clamp-2">
       {people.gender}
      </Typography>
    </CardBody>
  </Card>
  );
}

export default Personaje