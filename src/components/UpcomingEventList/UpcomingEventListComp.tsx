import React from "react";
import { graphql } from "../../gql";
import { Get_Upcoming_Events_ListQuery } from "../../gql/graphql";
import { useQuery } from "@apollo/client";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const UpcomingEventListComp = () => {
  //create new date object and stringify it
  var utc = new Date();
  const today = utc.toISOString().split(".")[0] + "Z";

  //create query with variable for taodys date and time
  const GET_UPCOMING_EVENTS_LIST = graphql(`
    query GET_UPCOMING_EVENTS_LIST($today: DateTime!) {
      eventPages(where: { date_gte: $today }, orderBy: date_ASC) {
        title
        slug
        date
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

  const { data, error } = useQuery<Get_Upcoming_Events_ListQuery>(
    GET_UPCOMING_EVENTS_LIST,
    { variables: { today } }
  );
  const { eventPages } = data || {};

  if (error) {
    return (
      <div>
        <p>Något gick fel..</p>
      </div>
    );
  }

  return (
    <section className="event-container">
      {eventPages?.map((event) => {
        let date = event?.date?.substring(0, 10);
        let time = event?.date?.substring(11, 16);
        return (
          <article key={event.slug} className="event-main">
            <Link to={`/event/${event.slug}`}>
              <img src={event.hero?.image?.url} alt={event.hero?.altText} />
              <div className="event-info">
                <h2>{event.title}</h2>
                <p>
                  <span className="bold">Datum:</span> {date}
                </p>
                <p>
                  <span className="bold">Klockan:</span> {time}
                </p>
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
};

export default UpcomingEventListComp;
