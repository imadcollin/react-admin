import * as React from "react";
import {Loading } from "react-admin";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
// example
import { useGetList } from "react-admin";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& > *": {
      margin: theme.spacing(-1),
    },
  },
}));

const RatingPosts = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data, ids, loading, error } = useGetList(
    "posts",
    { page: 1, perPage: 10 },
    { field: "published_at", order: "DESC" }
  );
  const x = ids.map((id) => data[id]);
  localStorage.setItem("posts", x);
  console.log(x);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Post Rating" {...a11yProps(0)} />
        </Tabs>
      </AppBar>

      {ids.map((id) => (
        <TabPanel key={id} value={id} index={id}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend"> {data[id].title} </Typography>
            <Rating name="read-only" value={data[id]?(parseInt(data[id].rating)):0} readOnly />
          </Box>
        </TabPanel>
      ))}
 
      <div></div>
    </div>
  );
};

export default RatingPosts;
