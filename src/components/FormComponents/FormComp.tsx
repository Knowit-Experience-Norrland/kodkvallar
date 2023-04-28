import React, { useEffect, useState } from "react";
import { FormInputsFragmentFragment } from "../../gql/graphql";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
type Props = {
  inputs: FormInputsFragmentFragment["formInputs"] | undefined;
  eventslug: string | undefined;
  formslug: string | undefined;
};

const FormComp: React.FC<Props> = ({ inputs, eventslug, formslug }) => {
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  //create query
  const CREATE_FORM_ANSWER = gql(`
  mutation   createFormAnswer($data: FormAnswerCreateInput!) {
    createFormAnswer(data: $data) {
    formData
    formPage{
      slug
    }
    eventPage {
      slug
    }
  }
  }
    `);

  const [createFormAnswer] = useMutation(CREATE_FORM_ANSWER);
  const onSubmit = (data: any) => {

    try{
      data = {
        formData: data,
        eventPage: { connect: { slug: eventslug } },
        formPage: { connect: { slug: formslug} },
      };
      createFormAnswer({ variables: { data } });
      setMessage("Tack för ditt svar!");
    } catch (err) {
      setMessage("Något gick fel, vänligen försök igen.");
      console.log(err);
    }
   
   
  };

  return (
    <section className="feedback-form-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                            ? "Endast siffror tillåtna."
                            : "Felaktigt format. Endast bokstäver tillåtna.", // default error message for text input type
                      },
                      minLength: {
                       //if input type is number, minLength is 8, if input type is text, minLength is 2 if email, minLength is not required
                        value: 2,
                        message: "Minst 2 tecken.",
                      },
                    })}
                  />
                  {formState.errors[input.inputname] && (
                    <p className="error">
                      {(formState.errors[input.inputname] as any).message}
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
        {message && <p className="success">{message}</p>}
      </div>
    </section>
  );
};

export default FormComp;
