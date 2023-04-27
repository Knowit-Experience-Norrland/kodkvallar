import React, { useEffect } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import {
  StartpageContentFragment,
  EventContentFragmentFragment,
  PastEventContentFragmentFragment,
} from "../../gql/graphql";
import Bubble from "../../media/Bubble.png";

//This component is used to render the content of a page
//props for the fragments that use this component
type Props = {
  content:
    | StartpageContentFragment["content"]
    | EventContentFragmentFragment["content"]
    | PastEventContentFragmentFragment["content"]; //Only the content part of the fragment
};

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
    console.log(elements)
    addBackgroundColor(elements); 
  }, []);
  
  if (content === undefined) return <div>Inget innehåll...</div>;

  return (
    <article className="main-content">
      {content.map((content) => {
        if (content?.__typename === "Image") {
          return (
            <div key={content.id} className="image-block">
              <img src={content?.image?.url} alt={content?.altText} />
              <p className="img-text">{content.imageText}</p>
            </div>
          );
        }
        if (content?.__typename === "Text") {
          return <RichText content={content.text?.raw} key={content.id} />;
        }
        if (content?.__typename === "Heading") {
          return <h2 key={content.id}>{content?.heading}</h2>;
        }
        if (content?.__typename === "FeedbackHighlight") {
          return (
            <div key={content.id} className="feedback-highlight">
              <img src={Bubble} alt="Pratbubbla" />
              <div className="feedback-highlight-content">
                <h2 className="feedback-text">"{content.feedback}"</h2>
                <p className="feedback-author">- {content.author}</p>
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
