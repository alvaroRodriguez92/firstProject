import Carousel from 'react-bootstrap/Carousel' 
import {Button} from "@mui/material"

export default function Carrusel2({images}) {

  return (
      <>
    <Carousel>
      {images?.map((image, index) => (
        <Carousel.Item key={index}>
        <img
          className="imagen-slider"
          src={image.src}
          alt="Second slide"
          />
        <Carousel.Caption className='texto-slider'>
          <h3 className='titulo-slider'>{image.nombre}</h3>
          <span className='span-slider'>{image.description}</span>
          <br></br>
          <Button variant='contained'>Comprar</Button>
        </Carousel.Caption>
      </Carousel.Item>
          ))}
          </Carousel>
      </>
 )
}