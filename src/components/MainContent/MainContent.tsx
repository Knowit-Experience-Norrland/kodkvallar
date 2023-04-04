import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { StartpageContentFragment, EventContentFramgmentFragment } from "../../gql/graphql";

type Props = {
  content: StartpageContentFragment["content"] | EventContentFramgmentFragment["content"] //Only the content part of the fragment
};

const MainContent: React.FC<Props> = ({content}) => {
  if(content === undefined) return (<div>No content...</div>);
    
  return (
    <article className="main-content">
        {content.map((content) => {
        if (content?.__typename === "Image") {
          return (
            <div key={content.id}>
              <img
                src={content?.image?.url}
                alt={content?.altText}
              />
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