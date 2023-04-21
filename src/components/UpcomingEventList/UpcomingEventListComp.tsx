import React, { useEffect } from "react";
import { graphql } from "../../gql";
import { Get_Upcoming_Events_ListQuery } from "../../gql/graphql";
import { useQuery } from "@apollo/client";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const UpcomingEventListComp = () => {
  let navigate = useNavigate();

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

  const { data, error, loading } = useQuery<Get_Upcoming_Events_ListQuery>(
    GET_UPCOMING_EVENTS_LIST,
    { variables: { today } }
  );
  const { eventPages } = data || {};

  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && error) {
      navigate("/404");
    }
  }, [loading, error, navigate]);

  if (!eventPages) {
    return <p>Vi har tyvärr inga kommande event inplanerade just nu.</p>;
  } else {
    return (
      <section className="event-container">
        {eventPages?.map((event) => {
          //format date and time
          let newDate = new Date(event.date);
          let date = newDate.toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          let time = newDate.toLocaleTimeString("sv-SE", {
            hour: "2-digit",
            minute: "2-digit",
          });
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
  }
};

export default UpcomingEventListComp;
