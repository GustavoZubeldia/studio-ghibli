import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Item = ({film}) => {
  return (
    <Link to={`/detail/${film.id}`}>
    <Card className="w-96 m-auto py-8">
      <Link to={`/detail/${film.id}`}></Link>
    <CardHeader color="blue" className="relative h-56">
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
      <Typography className="line-clamp-2">
       {film.description}
      </Typography>
    </CardBody>
  </Card>
  </Link>
  );
}

export default Item