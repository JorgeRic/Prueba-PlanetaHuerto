
import React, { Component } from 'react'
let datos = require('../baseDatos/reviews.json');

console.log(datos.reviews)
let reviews = datos.reviews;
class Home extends Component {
  state = {
    reviews
  }

  render(){
    return(
      <>
        <h2>Valoraciones del producto</h2>
        <p>Aqui puedes consultar las valoraciones que los usuarios han hecho sobre este producto</p>
        <div className='card'>
          <div className="card-header text-center bg-warning m-5">
            {this.state.reviews.length > 0 ? this.state.reviews.map((review) =>{
              return (
                <article key = {review.id}>
                  <div className="card-title mt-2">
                    <h3>{review.rating}</h3>
                    <p>{review.author}, {review.date}</p>
                  </div>
                  <p>{review.comment}</p>
                  <p>{review.useful_count} creen que es util</p>

                </article>
              )
            }): <p>Loading ...</p>}            
          </div>
        </div>
        
      </>
    )
  }
}

export default Home
