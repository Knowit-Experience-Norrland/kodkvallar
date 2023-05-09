import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Get_Past_Events_ListQuery } from "../../gql/graphql";
import { GET_PAST_EVENTS_LIST } from "../../Queries/event-queries";

const PastEventListComp = () => {
  let navigate = useNavigate();
  //get data from gql
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
    return (
      <section className="event-container">
        <article className="event-main">
          <p>Vi har tyvärr inga inlägg om tidigare event just nu.</p>
        </article>
      </section>
    );
  } else {
    return (
      <section className="event-container">
        {pastEvents?.map((event) => {
          return (
            <article key={event.slug} className="event-main">
              <Link to={`/blog/${event.slug}`}>
                <div className="image-square">
                  <img src={event.hero?.image?.url} alt={event.hero?.altText} />
                </div>
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
