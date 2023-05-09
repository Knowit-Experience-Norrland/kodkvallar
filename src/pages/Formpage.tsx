import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormInputsFragmentDoc,
  Get_FormpageQuery,
  HeroFragmentDoc,
} from "../gql/graphql";
import { useFragment } from "../gql";
import HeroComp from "../components/Hero/HeroComp";
import FormComp from "../components/FormComponents/FormComp";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { GET_FORMPAGE } from "../Queries/page-queries";

const Formpage = () => {
  // get slug from params
  const params = useParams();
  let slug = params.slug;
  let navigate = useNavigate();

  // get data from graphql
  const { data, error, loading } = useQuery<Get_FormpageQuery>(GET_FORMPAGE, {
    variables: {
      where: {
        slug: slug,
      },
    },
  });

  //destructuring data and fragments
  const { formPage } = data || {};
  let formInputs = useFragment(FormInputsFragmentDoc, formPage);
  const hero = useFragment(HeroFragmentDoc, formPage?.hero);

  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && (!formPage || error)) {
      navigate("/404");
    }
  }, [loading, formPage, error, navigate]);

  return (
    <main>
      <HeroComp
        url={hero?.image?.url || ""}
        altText={hero?.altText || ""}
        title={formPage?.title || ""}
      />
      <article className="main-content">
        {formPage && <RichText content={formPage?.formInfo?.raw || ""} />}
        {formInputs && (
          <FormComp
            inputs={formInputs.formInputs}
            eventslug={formPage?.eventPage?.slug}
            formslug={formPage?.slug}
          />
        )}
      </article>
    </main>
  );
};

export default Formpage;
