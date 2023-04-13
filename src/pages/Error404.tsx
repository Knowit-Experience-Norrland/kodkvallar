import React from 'react'
import { Link } from 'react-router-dom'
import Error from '../media/error.svg'


const Error404 = () => {
  return (
    <main>
        <div className="error404">
          <img src={Error} alt="Tumme ner" />
            <h1>404, sidan kan inte hittas..</h1>
            <p>Hoppsan, nu blev det visst fel!</p>
            <Link to={"/"} className='error-link'>Till startsidan!</Link>

        </div>
    </main>
  )
}

export default Error404