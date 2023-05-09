import React from "react";
import { useQuery } from "@apollo/client";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Get_Past_EventsQuery } from "../../gql/graphql";
import { GET_PAST_EVENTS } from "../../Queries/event-queries";

const PastEventSpotlightComp = () => {
  //get data from gql
  const { data } = useQuery<Get_Past_EventsQuery>(GET_PAST_EVENTS);
  if (data?.pastEvents?.length === 0) {
    return (
      <section className="event-container">
        <h2 className="event-spotlight-h2">Tidigare events</h2>
        <article className="event-main">
          <p>Vi har tyvärr inga inlägg om tidigare event just nu.</p>
        </article>
      </section>
    );
  } else {
    return (
      <div>
        <h2 className="event-spotlight-h2">Tidigare events</h2>
        {data?.pastEvents.map((event) => {
          return (
            <article key={event.slug} className="event-spotlight-main">
              <img src={event.hero?.image?.url} alt={event.hero?.altText} />
              <Link to={`/blog/${event.slug}`}>
                <h3>{event.title}</h3>
                <IoMdArrowForward className="arrow-btn" />
              </Link>
            </article>
          );
        })}
      </div>
    );
  }
};

export default PastEventSpotlightComp;
