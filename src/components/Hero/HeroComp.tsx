import React from "react";

//props for HeroComp
type Props = {
  url: string;
  altText: string;
  title: string;
};

const HeroComp: React.FC<Props> = ({ url, altText, title }) => {
  return (
    <div className="hero">
      {url && 
      <img src={url} alt={altText} /> }
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
};

export default HeroComp;
