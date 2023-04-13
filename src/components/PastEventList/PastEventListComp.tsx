import React from "react";
import { graphql } from "../../gql";
import { useQuery } from "@apollo/client";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Get_Past_Events_ListQuery } from "../../gql/graphql";

const PastEventListComp = () => {
 
   //create query 
   const GET_PAST_EVENTS_LIST = graphql(`
     query GET_PAST_EVENTS_LIST{
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
 
   const { data, error } = useQuery<Get_Past_Events_ListQuery>(GET_PAST_EVENTS_LIST);
   const { pastEvents } = data || {};
 
   if (error) {
     return (
       <div>
         <p>Något gick fel..</p>
       </div>
     );
   }
   if(data && data.pastEvents.length === 0) {
    return <div><p>Vi har inga inplanerade event just nu.</p></div>;
  }
 
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
 };

export default PastEventListComp