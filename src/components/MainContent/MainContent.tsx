import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import {
  StartpageContentFragment,
  EventContentFragmentFragment,
} from "../../gql/graphql";

//This component is used to render the content of a page
//props for the fragments that use this component
type Props = {
  content:
    | StartpageContentFragment["content"]
    | EventContentFragmentFragment["content"]; //Only the content part of the fragment
};

const MainContent: React.FC<Props> = ({ content }) => {
  if (content === undefined) return <div>Inget innehåll...</div>;

  return (
    <article className="main-content">
      {content.map((content) => {
        if (content?.__typename === "Image") {
          return (
            <div key={content.id}>
              <img src={content?.image?.url} alt={content?.altText} />
              <p className="img-text">{content.imageText}</p>
            </div>
          );
        }
        if (content?.__typename === "Text") {
          return <RichText content={content.text?.raw} key={content.id} />;
        }
        if (content?.__typename === "Heading") {
          return (
            <h2 key={content.id} className="h2-forest">
              {content?.heading}
            </h2>
          );
        }
        return null;
      })}
    </article>
  );
};

export default MainContent;