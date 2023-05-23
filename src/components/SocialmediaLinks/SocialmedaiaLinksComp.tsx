import React from 'react'
import {
    RiLinkedinBoxLine,
    RiFacebookBoxLine,
    RiInstagramLine,
  } from "react-icons/ri";

const SocialmedaiaLinksComp = () => {
  return (
    <>
    <a
      href="https://www.linkedin.com/in/katarinabjuhr/"
      target="_blank"
      rel="noopener noreferrer"
      title={"LinkedIn"}
    >
      <RiLinkedinBoxLine />
    </a>
    <a
      href="https://www.instagram.com/weareknowit/"
      target="_blank"
      rel="noopener noreferrer"
      title={"Instagram"}
    >
      <RiInstagramLine />
    </a>
    <a
      href="https://www.facebook.com/weareknowit"
      target="_blank"
      rel="noopener noreferrer"
      title={"Facebook"}
    >
      <RiFacebookBoxLine />
    </a>
  </>
  )
}

export default SocialmedaiaLinksComp

