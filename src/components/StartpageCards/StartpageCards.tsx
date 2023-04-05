import React from 'react'
import {IoMdArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom'
//props from parent component
type Props = {
    img: string
    title: string
    text: string
    link: string
}

const startpageCards = ({img, title, text, link}: Props) => {
  return (
    <div className='startpage-card'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={link} className='startpage-card-link'><IoMdArrowForward title="Knapp"/></Link>
      
    </div>
  )
}

export default startpageCards