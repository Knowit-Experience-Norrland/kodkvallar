import React, { useEffect } from "react";
import { graphql } from "../../gql";
import { useQuery } from "@apollo/client";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Get_Past_Events_ListQuery } from "../../gql/graphql";

const PastEventListComp = () => {
  let navigate = useNavigate();
  //create query
  const GET_PAST_EVENTS_LIST = graphql(`
    query GET_PAST_EVENTS_LIST {
      pastEvents(orderBy: publishedAt_ASC) {
        title
        slug
        ingress
        hero {
          image {
            url
          }
          altText
        }
      }
    }
  `);

  const { data, error, loading } =
    useQuery<Get_Past_Events_ListQuery>(GET_PAST_EVENTS_LIST);
  const { pastEvents } = data || {};

  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && error) {
      navigate("/404");
    }
  }, [loading, error, navigate]);

  if (!pastEvents) {
    return <p>Vi har tyvärr inga kommande event inplanerade just nu.</p>;
  } else {
    return (
      <section className="event-container">
        {pastEvents?.map((event) => {
          return (
            <article key={event.slug} className="event-main">
              <Link to={`/blog/${event.slug}`}>
                <img src={event.hero?.image?.url} alt={event.hero?.altText} />
                <div className="event-info">
                  <h2>{event.title}</h2>
                  <p>{event.ingress}</p>
                  <IoMdArrowForward className="arrow-btn" />
                </div>
              </Link>
              <hr className="divider" />
            </article>
          );
        })}
      </section>
    );
  }
};

export default PastEventListComp;
