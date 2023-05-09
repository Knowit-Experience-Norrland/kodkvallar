import React, { useEffect } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Bubble from "../../media/Bubble.png";
import {
  AboutContentFragment,
  BlogContentFragment,
  EventContentFragment,
  PageContentFragment,
} from "../../gql/graphql";

//This component is used to render the content of a page
//props for the fragments that use this component
type Props = {
  content:
    | PageContentFragment
    | EventContentFragment
    | BlogContentFragment
    | AboutContentFragment
};

//This function adds different background colors to the feedback-highlight elements
function addBackgroundColor(elements: NodeListOf<Element>): void {
  for (let i = 0; i < elements.length; i++) {
    if (i % 2 === 0) {
      (elements[i] as HTMLElement).style.backgroundColor = "#FCDFD8"; // Set background color for even-indexed elements
    } else {
      (elements[i] as HTMLElement).style.backgroundColor = "#DBEEDE"; // Set background color for odd-indexed elements
    }
  }
}

const MainContent: React.FC<Props> = ({ content }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".feedback-highlight");
    addBackgroundColor(elements);
  }, []);

  if (content === undefined) return <div>Inget innehåll...</div>;
  return (
    <article className="main-content">
      {content.content.map((item) => {
        if (item?.__typename === "Image") {
          return (
            <div key={item.id} className="image-block">
              <img src={item?.image?.url} alt={item?.altText} />
              <p className="img-text">{item.imageText}</p>
            </div>
          );
        }
        if (item?.__typename === "Text") {
          return <RichText content={item.text.raw} key={item.id} />;
        }
        if (item?.__typename === "Heading") {
          return (
            <div key={item.id}>
              <h2>{item?.heading}</h2>
            </div>
          );
        }
        if (item?.__typename === "FeedbackHighlight") {
          return (
            <div key={item.id} className="feedback-highlight">
              <img src={Bubble} alt="Pratbubbla" />
              <div className="feedback-highlight-content">
                <h2 className="feedback-text">"{item.feedback}"</h2>
                <p className="feedback-author">- {item.author}</p>
              </div>
            </div>
          );
        }
        return null;
      })}
    </article>
  );
};

export default MainContent;
