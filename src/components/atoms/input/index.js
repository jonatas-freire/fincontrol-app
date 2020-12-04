import React, { useEffect, useRef, useState } from "react";
import { InputContainer, InputLabel } from "./style";


export const Input = ({
  onInputChange,
  valid,
  label,
  value,
  type,
  id,
  options,
  style = {
    labelColor: "#747474",
    labelColorError: "#FF7C80",
    backgroundColor: "#f9f9f9",
    borderColor: "transparent",
    borderColorError: "#FF7C80",
    fontColor: "#3b3a3a",
  },
}) => {
  const [controllerLabel, setController] = useState(false);
  const inputChange = (e) => {
    onInputChange({
      id: e.target.id,
      value: e.target.value
    })
  };

  return (
    <InputContainer valid={valid || true}>
      <InputLabel
        valid={valid || true}
        htmlFor={id}
        focus={controllerLabel || value !== ""}
      >
        {label}
      </InputLabel>
      {type === "select" && options ? (
        <select id={id}
                type={type}
                onFocus={() => setController(true)}
                onBlur={() => setController(false)}
                onChange={inputChange }>

                  {
                    options.map((option) => (
                    <option selected={option == value} key={option}>{option}</option>
                    ))
                  }

        </select>

      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onFocus={() => setController(true)}
          onBlur={() => setController(false)}
          onChange={inputChange }
        />
      )}

    </InputContainer>
  );
};
