import React from "react";
import { graphql } from "../../gql";
import { Get_Upcoming_EventsQuery } from "../../gql/graphql";
import { useQuery } from "@apollo/client";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const UpcomingEventSpotlightComp = () => {
  //create new date object and stringify it
  var utc = new Date();
  const today = utc.toISOString().split(".")[0] + "Z";

  //create query with variable for taodys date and time 
  const GET_UPCOMING_EVENTS = graphql(`
    query GET_UPCOMING_EVENTS($today: DateTime!) {
      eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2) {
        title
        slug
        hero {
          image {
            url
          }
          altText
        }
      }
    }
  `);

  const { data, error } = useQuery<Get_Upcoming_EventsQuery>(
    GET_UPCOMING_EVENTS,
    { variables: { today } }
  );
  if (error) {
    return <div><p>Något gick fel..</p></div>;
  }

  return (
    <div>
      <h2 className="upcoming-event-spotlight-h2">Kommande events</h2>
      {data?.eventPages.map((event) => {
        return (
          <article
            key={event.slug}
            className="upcoming-event-spotlight-main"
          >
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
};

export default UpcomingEventSpotlightComp;
