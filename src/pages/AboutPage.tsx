import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  AboutContentFragmentDoc,
  AdressFragmentDoc,
  ContactCard,
  Get_About_PageQuery,
  HeroFragmentDoc,
} from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import MapComp from "../components/Map/MapComp";
import { useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";
import HeroComp from "../components/Hero/HeroComp";
import {
  RiLinkedinBoxLine,
  RiFacebookBoxLine,
  RiInstagramLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { GET_ABOUT_PAGE } from "../Queries/page-queries";

const AboutPage = () => {
  let navigate = useNavigate();

  // get data from graphql
  const { data, error, loading } = useQuery<Get_About_PageQuery>(
    GET_ABOUT_PAGE,
    {
      variables: {
        where: {
          slug: "om-oss",
        },
      },
    }
  );

  //destructuring data and fragments
  const { aboutPage } = data || {};
  const hero = useFragment(HeroFragmentDoc, aboutPage?.hero);
  let location = useFragment(AdressFragmentDoc, aboutPage);
  let map = location?.adress?.map;
  let position = { lat: map?.latitude || 0, lng: map?.longitude || 0 };
  let mainContent = useFragment(AboutContentFragmentDoc, aboutPage);

  //redirect to 404 if error or if no data
  useEffect(() => {
    if (!loading && (!aboutPage || error)) {
      navigate("/404");
    }
  }, [loading, aboutPage, error, navigate]);

  return (
    <main>
      <HeroComp
        url={hero?.image?.url || ""}
        altText={hero?.altText || ""}
        title={aboutPage?.title || ""}
      />
      <div className="event-wrapper">
        <div>
          {mainContent && <MainContent content={mainContent} />}
          <section className="about-contact-section">
              <h2 className="about-heading">Kontaktperson</h2>
            <div className="about-contact">
              {aboutPage?.employees?.map((contact, i) => {
                return (
                  <ContactCardComp contact={contact as ContactCard} key={i} />
                );
              })}
            </div>
          </section>
        </div>
        <div className="event-sidebar">
          <div className="space">
            {position.lat !== 0 && <MapComp position={position} />}
            <p>{location?.adress?.adress}</p>
          </div>
          <div className="space">
            <p>{aboutPage?.sidebarInfo}</p>
          </div>
          <div className="event-sidebar-socials">
          <a href="https://www.linkedin.com/in/katarinabjuhr/" target="_blank" rel="noopener noreferrer" title={"LinkedIn"}>
              <RiLinkedinBoxLine />
            </a>
            <a href="https://www.instagram.com/weareknowit/" target="_blank" rel="noopener noreferrer"  title={"Instagram"}>
              <RiInstagramLine />
            </a>
            <a href="https://www.facebook.com/weareknowit" target="_blank" rel="noopener noreferrer" title={"Facebook"}>
              <RiFacebookBoxLine />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
