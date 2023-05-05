import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ContactCard, Get_About_PageQuery } from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import MapComp from "../components/Map/MapComp";
import { graphql, useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";
import HeroComp from "../components/Hero/HeroComp";
import {
  RiLinkedinBoxLine,
  RiFacebookBoxLine,
  RiInstagramLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  let navigate = useNavigate();

  //create fragment of query
  const adressFragment = graphql(`
    fragment adressFragment on AboutPage {
      id
      adress {
        adress
        map {
          latitude
          longitude
        }
      }
    }
  `);
  //create fragment of query
  const ContentFragment = graphql(`
    fragment ContentFragment on AboutPage {
      content {
        ... on Heading {
          heading
          id
        }
        ... on Image {
          altText
          imageText
          id
          image {
            url
          }
        }
        ... on Text {
          id
          text {
            raw
          }
        }
      }
    }
  `);
  //create query with fragments and slug for variable
  const GET_ABOUT_PAGE = graphql(`
    query GET_ABOUT_PAGE {
      aboutPage(where: { slug: "om-oss" }) {
        employees {
          title
          name
          phone
          email
          image {
            url
          }
        }
        hero {
          altText
          id
          image {
            url
          }
        }
        ...ContentFragment
        slug
        title
        sidebarInfo
        ...adressFragment
      }
    }
  `);

  const { data, error, loading } =
    useQuery<Get_About_PageQuery>(GET_ABOUT_PAGE);
    const { aboutPage } = data || {};

  //redirect to 404 if error or if no data
  useEffect(() => {
    if (!loading && (!aboutPage || error)) {
      navigate("/404");
    }
  }, [loading, aboutPage, error, navigate]);

  let location = useFragment(adressFragment, aboutPage);
  let map = location?.adress?.map;
  let mainContent = useFragment(ContentFragment, aboutPage);
  let position = { lat: map?.latitude || 0, lng: map?.longitude || 0 };

  return (
    <main>
      <HeroComp
        url={aboutPage?.hero?.image?.url || ""}
        altText={aboutPage?.hero?.altText || ""}
        title={aboutPage?.title || ""}
      />
      <div className="event-wrapper">
        <div>
          {mainContent && <MainContent content={mainContent.content} />}
          <div className="about-contact">
            {aboutPage?.employees?.map((contact, i) => {
              return (
                <ContactCardComp contact={contact as ContactCard} key={i} />
              );
            })}
          </div>
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
            <a href="/" target="_blank" rel="noreferrer" title={"LinkedIn"}>
              <RiLinkedinBoxLine />
            </a>
            <a href="/" target="_blank" rel="noreferrer" title={"Instagram"}>
              <RiInstagramLine />
            </a>
            <a href="/" target="_blank" rel="noreferrer" title={"Facebook"}>
              <RiFacebookBoxLine />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
