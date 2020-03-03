
import React from 'react'
let datos = require('../baseDatos/reviews.json');

let reviews = datos.reviews;

function Card() {
  console.log(reviews)

  return (
    <div className='container'>
      <div className="mb-4">
        <h1 className='green'>Valoraciones del producto</h1>
        <h4>Aqui puedes consultar las valoraciones que los usuarios han hecho sobre este producto</h4>
      </div>
      <div className="container text-center">
        <div className="row">
          {reviews.length > 0 ? reviews.map((review) =>{

            const fecha = review.date.split('-')
            console.log(fecha)
            console.log(fecha[2])
            let month;
            if(fecha[1] === '01'){
              month = 'enero'
            }
            else if(fecha[1] === '02'){
              month = 'febrero'
            }
            else if(fecha[1] === '03'){
              month = 'marzo'
            }
            else if(fecha[1] === '04'){
              month = 'abril'
            }
            else if(fecha[1] === '05'){
              month = 'mayo'
            }
            else if(fecha[1] === '06'){
              month = 'junio'
            }
            else if(fecha[1] === '07'){
              month = 'julio'
            }
            else if(fecha[1] === '08'){
              month = 'agosto'
            }
            else if(fecha[1] === '09'){
              month = 'septiembre'
            }
            else if(fecha[1] === '10'){
              month = 'octubre'
            }
            else if(fecha[1] === '11'){
              month = 'noviembre'
            }
            else if(fecha[1] === '12'){
              month = 'diciembre'
            }
            const day = fecha[2].substring(0,2)
            console.log(day)

            return ( 
              <div className=' col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xl-4 mb-2'>
                <div className='card border p-2'>
                  <div className='p-1'>
                    
                  </div>
                  <h3>{review.rating}</h3>
                  <p>{review.author}, {day} de {month} de {fecha[0]}</p>
                  
                  <h4>{review.comment}</h4>
                    <div className='footer'>
                      <p>{review.useful_count} personas creen que es util</p>
                    </div>
                </div>  
              </div>  
              )
            }): <p>Loading ...</p>}            
        </div>
      </div>
    </div>
  )
}
export default Card
