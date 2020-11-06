import * as React from "react";
import { useState } from "react";
import { useSetLocale } from "react-admin";

import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginTop:"-90%",
    marginLeft:"-70%",
  },

}));

const LocaleSwitcher = () => {
  const setLocale = useSetLocale();

  const classes = useStyles();
  const [lang, setLang] = useState("");
  const handleChange2 = (event) => {
    setLang(event.target.value);
    lang === "En" ? setLocale("en") : setLocale("fr");
  };

  return (
    <div style={{ float: "right" }}>
      <div>
        <FormControl className={classes.margin}>
          <p style={{ color: "cornflowerblue", fontFamily: "none" }}>
            Language
          </p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            displayEmpty
            value={lang}
            onChange={handleChange2}
          >
            <MenuItem value={"En"}>En</MenuItem>
            <MenuItem value={"Fr"}>Fr</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
