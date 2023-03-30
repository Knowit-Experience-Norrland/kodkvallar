import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ContactCard, Get_InfopageQuery } from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import { RichText } from "@graphcms/rich-text-react-renderer";


function InfoPage() {
  // Use the `useQuery` hook to make a query to the API
//   const GET_INFOPAGE = gql(`
// query GET_INFOPAGE {
//     infoPage(where: {slug: "test"}) {
//         content {
//           ... on Text {
//             text {
//               raw
//             }
//           }
//           ... on Image {
//             altText
//             image {
//               url
//             }
//           }
//           ... on Heading {
//             heading
//           }
//         }
//         title
//         slug
//         heroImage {
//           url
//         }
//         contact {
//           title
//           phone
//           name
//           location
//           email
//           image {
//             url
//           }
//         }
//       }
//     }
// `);
//   const { data, error } = useQuery<Get_InfopageQuery>(GET_INFOPAGE);
//   if(error) { console.log(error) }
  return (
    <main>
      {/* <article>
        <h1>{data?.infoPage?.title}</h1>
        <img src={data?.infoPage?.heroImage?.url} alt="hero" />
        <section>
          {data?.infoPage?.content?.map((content, i) => {
            if (content?.__typename === "Image") {
              return <img src={content?.image?.url} alt={content?.altText} key={i} />;
            }
            if (content?.__typename === "Text") {
                return <RichText content={content.text?.raw} key={i}/>;
            }
            if (content?.__typename === "Heading") {
              return <h2 key={i}>{content?.heading}</h2>;
            }
            return null;
          })}
        </section>
        <section>
          {data?.infoPage?.contact?.map((contact, i) => {
            return <ContactCardComp contact={contact as ContactCard} key={i} />;
          })}
        </section>
      </article> */}
    </main>
  );
}

export default InfoPage;
