import React from "react";
import { FormInputsFragmentFragment } from "../../gql/graphql";
import { useForm } from "react-hook-form";
type Props = {
  inputs: FormInputsFragmentFragment["formInputs"] | undefined;
};

const FormComp: React.FC<Props> = ({ inputs }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <section className="feedback-form-container">
      <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
          {inputs?.map((input) => {
            if (input?.__typename === "FormsInput") {
              return (
                <div key={input.inputname} className="form-child">
                  <label htmlFor={"form-"+input.inputname}>{input.label} {input.required && <span className="required">*</span>} </label>
                  <input
                    type={input.type}
                    required={input.required}
                    id={"form-"+input.inputname}
                    aria-label={input.label}
                    {...register(input.inputname)}
                  />
                </div>
              );
            }
            if (input?.__typename === "FormsTextarea") {
              return (
                <div key={input.textareaname} className="form-child">
                  <label htmlFor={"form-"+input.textareaname}>{input.label} {input.required && <span className="required">*</span>}</label>
                  <textarea
                    {...register(input.textareaname)}
                    required={input.required}
                    id={"form-"+input.textareaname}
                    aria-label={input.label}
                    rows={5}
                    cols={33}
                  />
                </div>
              );
            }
            if (input?.__typename === "FormsSelect") {
              return (
                <div key={input.selectname} className="form-child select">
                  <label htmlFor={"form-"+input.selectname}>{input.label} {input.required && <span className="required">*</span>}</label>
                  <select
                   {...register(input.selectname)}
                    required={input.required}
                    id={"form-"+input.selectname}
                    aria-label={input.label}
                    defaultValue={""}
                  >
                    <option value=""  disabled > -- Välj -- </option>
                    {input.options?.map((choice) => {
                      return (
                        <option key={choice.value} value={choice.value}>
                          {choice.option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            }
            if (input?.__typename === "FormsCheckbox") {
              return (
                <div key={input.checkboxname} className="form-child checkbox">
                  <input
                    type="checkbox"
                    {...register(input.checkboxname)}
                    required={input.required}
                    id={"form-"+input.checkboxname}
                    aria-label={input.label}
                  />
                  <label htmlFor={input.checkboxname}>{input.label} {input.required && <span className="required">*</span>}</label>
                </div>
              );
            }
            return null;
          })}

          <button type="submit">Skicka</button>
        </form>
    
      </div>
    </section>
  );
};

export default FormComp;
