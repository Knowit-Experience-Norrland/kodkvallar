import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
//props from parent component
type Props = {
  img: string;
  title: string;
  text: string;
  link: string;
};

const startpageCards = ({ img, title, text, link }: Props) => {
  return (
    <div className="startpage-card">
      <Link to={link} className="startpage-card-link">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{text}</p>
        <IoMdArrowForward title={"Länk till " + title} className="arrow"/>
      </Link>
    </div>
  );
};

export default startpageCards;
