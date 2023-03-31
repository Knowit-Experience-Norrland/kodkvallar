import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";

type Props = {
  content: ({
    __typename: string;

    id: string;
    heading: string;
    image: {
      url: string;
    };
    altText: string;
    imageText: string;
    text: {
      raw: RichTextContent;
    };
  })[];
};

const MainContent = (content: Props) => {
  return (
    <article className="main-content">
        {content.content.map((content) => {
        if (content?.__typename === "Image") {
          return (
            <div>
              <img
                src={content?.image?.url}
                alt={content?.altText}
                key={content.id}
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
