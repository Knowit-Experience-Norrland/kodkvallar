import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Get_FormpageQuery } from "../gql/graphql";
import { graphql, useFragment } from "../gql";
import HeroComp from "../components/Hero/HeroComp";
import FormComp from "../components/FormComponents/FormComp";
import { RichText } from "@graphcms/rich-text-react-renderer";

const Formpage = () => {
  // get slug from params
  const params = useParams();
  let slug = params.slug;
  let navigate = useNavigate();

  //create fragment of query
  const FormInputsFragment = graphql(`
    fragment FormInputsFragment on FormPage {
      formInputs {
        ... on FormsTextarea {
          required
          textareaname: name
          label
        }
        ... on FormsSelect {
          required
          selectname: name
          label
          options {
            option
            value
          }
        }
        ... on FormsInput {
          type
          required
          inputname: name
          label
        }
        ... on FormsCheckbox {
          required
          label
          checkboxname: name
        }
      }
    }
  `);

  //create query with fragments and slug for variable
  const GET_FORMPAGE = graphql(`
    query GET_FORMPAGE($slug: String!) {
      formPage(where: { slug: $slug }) {
        hero {
          altText
          id
          image {
            url
          }
        }
        eventPage {
          slug
        }
        formInfo {
          raw
        }
        ...FormInputsFragment
        slug
        title
      }
    }
  `);

  const { data, error, loading } = useQuery<Get_FormpageQuery>(GET_FORMPAGE, {
    variables: { slug },
  });
  const { formPage } = data || {};

  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && (!formPage || error)) {
      navigate("/404");
    }
  }, [loading, formPage, error, navigate]);

  let formInputs = useFragment(FormInputsFragment, formPage);


  return (
    <main>
      <HeroComp
        url={formPage?.hero?.image?.url || ""}
        altText={formPage?.hero?.altText || ""}
        title={formPage?.title || ""}
      />
      <article className="main-content">
        
       {formPage && <RichText content={formPage?.formInfo?.raw || ""} />}
        {formInputs && <FormComp inputs={formInputs.formInputs} />}
      </article>
    </main>
  );
};

export default Formpage;
