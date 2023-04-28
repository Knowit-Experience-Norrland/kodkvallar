import React, { useEffect, useState } from "react";
import { FormInputsFragmentFragment } from "../../gql/graphql";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
type Props = {
  inputs: FormInputsFragmentFragment["formInputs"] | undefined;
  slug: string | undefined;
};

const FormComp: React.FC<Props> = ({ inputs, slug }) => {
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful }
  } = useForm();

   useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setSuccess("Tack för ditt svar!");
    }
  }, [formState, reset]);

  //create query
  const CREATE_FORM_ANSWER = gql(`
  mutation   createFormAnswer($data: FormAnswerCreateInput!) {
    createFormAnswer(data: $data) {
    formData
    eventPage {
      slug
    }
  }
  }
    `);

  const [createFormAnswer] = useMutation(CREATE_FORM_ANSWER);
  const onSubmit = (data: any) => {
     data = {
      formData: data,
      eventPage: { connect: { slug: slug } },
    };
    createFormAnswer({ variables: { data } });
  };

  return (
    <section className="feedback-form-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} data-netlify="true">
          {inputs?.map((input) => {
            if (input?.__typename === "FormsInput") {
              return (
                <div key={input.inputname} className="form-child">
                  <label htmlFor={input.inputname}>
                    {input.label}
                    {input.required && <span className="required">*</span>}{" "}
                  </label>
                  <input
                    type={input.type}
                    id={input.inputname}
                    aria-label={input.label}
                    {...register(input.inputname, {
                      required: {
                        value: input.required,
                        message: "Detta fält är obligatoriskt.",
                      },
                      pattern: {
                        value:
                          input.type === "email"
                            ? /\S+@\S+\.\S+/
                            : input.type === "number"
                            ? /^\d+$/
                            : /^[A-Za-zåäöÅÄÖ\s]+[0-9]*$/, // default pattern for text input type
                        message:
                          input.type === "email"
                            ? "Felaktigt e-postformat."
                            : input.type === "number"
                            ? "Endast nummer tillåtna."
                            : "Felaktigt format. Endast bokstäver tillåtna.", // default error message for text input type
                      },
                      minLength: {
                        value: input.type === "number" ? 1 : 3, // default pattern for text input type
                        message:
                          input.type === "number"
                            ? "Minst en siffra krävs."
                            : "Minst 3 tecken.", // default error message for text input type
                      },
                    })}
                  />
                  {errors[input.inputname] && (
                    <p className="error">
                      {(errors[input.inputname] as any).message}
                    </p>
                  )}
                </div>
              );
            }
            if (input?.__typename === "FormsTextarea") {
              return (
                <div key={input.textareaname} className="form-child">
                  <label htmlFor={input.textareaname}>
                    {input.label}
                    {input.required && <span className="required">*</span>}
                  </label>
                  <textarea
                    {...register(input.textareaname, {
                      required: {
                        value: input.required,
                        message: "Detta fält är obligatoriskt.",
                      },
                      pattern: {
                        value:
                          /^[A-Za-zåäöÅÄÖ0-9\s.,!?;()[\]{}"\-_+=*&%#@€£$\n\r]+$/,
                        message:
                          "Felaktigt format. Endast bokstäver och skiljetecken tillåtna.",
                      },
                    })}
                    id={input.textareaname}
                    aria-label={input.label}
                    rows={5}
                    cols={33}
                  />
                  {errors[input.textareaname] && (
                    <p className="error">
                      {(errors[input.textareaname] as any).message}
                    </p>
                  )}
                </div>
              );
            }
            if (input?.__typename === "FormsSelect") {
              return (
                <div key={input.selectname} className="form-child select">
                  <label htmlFor={input.selectname}>
                    {input.label}
                    {input.required && <span className="required">*</span>}
                  </label>
                  <select
                    {...register(input.selectname, {
                      required: {
                        value: input.required,
                        message: "Detta fält är obligatoriskt.",
                      },
                    })}
                    id={input.selectname}
                    aria-label={input.label}
                    defaultValue={""}
                  >
                    <option value="" disabled>
                      {" "}
                      -- Välj --{" "}
                    </option>
                    {input.options?.map((choice) => {
                      return (
                        <option key={choice.value} value={choice.value}>
                          {choice.option}
                        </option>
                      );
                    })}
                  </select>
                  {errors[input.selectname] && (
                    <p className="error">
                      {(errors[input.selectname] as any).message}
                    </p>
                  )}
                </div>
              );
            }
            if (input?.__typename === "FormsCheckbox") {
              return (
                <div key={input.checkboxname} className="form-child checkbox">
                  <input
                    type="checkbox"
                    {...register(input.checkboxname, {
                      required: {
                        value: input.required,
                        message: "Detta fält är obligatoriskt.",
                      },
                    })}
                    id={"form-" + input.checkboxname}
                    aria-label={input.label}
                  />
                  <label htmlFor={input.checkboxname}>
                    {input.label}
                    {input.required && <span className="required">*</span>}
                  </label>
                  {errors[input.checkboxname] && (
                    <p className="error">
                      {(errors[input.checkboxname] as any).message}
                    </p>
                  )}
                </div>
              );
            }
            return null;
          })}

          <button type="submit">Skicka</button>
        </form>
        {success && <p className="success">{success}</p>}
      </div>
    </section>
  );
};

export default FormComp;
