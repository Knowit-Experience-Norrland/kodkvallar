import React from "react";
import { Get_Upcoming_EventsQuery } from "../../gql/graphql";
import { useQuery } from "@apollo/client";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { GET_UPCOMING_EVENTS } from "../../Queries/event-queries";


const UpcomingEventSpotlightComp = () => {
  //create new date object and stringify it
  var utc = new Date();
  const today = utc.toISOString().split(".")[0] + "Z";
// get data from graphql
  const { data } = useQuery<Get_Upcoming_EventsQuery>(GET_UPCOMING_EVENTS, {
    variables: { today },
  });
const eventPages = data?.eventPages;

  if (data?.eventPages?.length === 0) {
    return (
      <section className="event-container">
        <h2 className="event-spotlight-h2">Kommande events</h2>
        <article className="event-main">
          <p>Vi har tyvärr inga kommande event inplanerade just nu.</p>
        </article>
      </section>
    );
  } else {
    return (
      <div>
        <h2 className="event-spotlight-h2">Kommande events</h2>
        {eventPages?.map((event) => {
          return (
            <article key={event.slug} className="event-spotlight-main">
              <img src={event.hero?.image?.url} alt={event.hero?.altText} />
              <Link to={`/event/${event.slug}`}>
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

export default UpcomingEventSpotlightComp;
