import * as React from "react";
import { useState } from "react";
import { useSetLocale } from "react-admin";

import Switch from "@material-ui/core/Switch";

const LocaleSwitcher = () => {
  const setLocale = useSetLocale();

  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = (event) => {
    console.log("clicker ", state);
    setState({ ...state, [event.target.name]: event.target.checked });
    state.checkedB ? setLocale("en") : setLocale("fr");
  };
  return (
    <div style={{float:"right"}}>
      <span  style={{
          fontSize: "xx-large",
          color: "cornflowerblue",
          fontFamily: "none",
        }}>Eng/Fr</span>{" "}
     
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          label="End"
          labelPlacement="end"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      
    </div>
  );
};

export default LocaleSwitcher;
