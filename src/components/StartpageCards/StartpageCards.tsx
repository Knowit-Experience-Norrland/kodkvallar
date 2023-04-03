import React from 'react'
import {IoMdArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom'

type Props = {
    img: string
    title: string
    text: string
}

const startpageCards = ({img, title, text}: Props) => {
  return (
    <div className='startpage-card'>
      <img src={img} alt="Rocket" />
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to="/" className='startpage-card-link'><IoMdArrowForward title="Knapp"/></Link>
      
    </div>
  )
}

export default startpageCards