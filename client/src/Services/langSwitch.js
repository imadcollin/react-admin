import * as React from "react";
import { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import { useLocale, useSetLocale } from "react-admin";

import Switch from "@material-ui/core/Switch";

const LocaleSwitcher = () => {
    const locale = useLocale();
    const setLocale = useSetLocale();

  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = (event) => {
    console.log("clicker ", state);
    setState({ ...state, [event.target.name]: event.target.checked });
   state.checkedB? setLocale("en") : setLocale("fr");
  };


  return (
    <div>
     <span>En/Fr</span> <span>
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </span>
      </div>
  );
};

export default LocaleSwitcher;
