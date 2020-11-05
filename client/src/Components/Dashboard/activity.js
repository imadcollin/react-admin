import * as React from "react";
import { Loading } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

import { useGetList } from "react-admin";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const UserActivity = () => {
  const classes = useStyles();

  const { data, ids, loading, error } = useGetList(
    "users",
    { page: 1, perPage: 10 },
    { field: "lastSeen", order: "DESC" }
  );
  const users = ids.map((id) => data[id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  return (
    <div className={classes.root}>
      <p
        style={{
          fontSize: "xx-large",
          color: "cornflowerblue",
          fontFamily: "none",
        }}
      >
        Latest Login
      </p>
      <Avatar
        alt={`${users[1].name}`}
        className={classes.orange}
      >
        {`${users[0].name.charAt(0)}`}{" "}
      </Avatar>
      <Avatar alt={`${users[1].name}`}>{`${users[1].name.charAt(0)}`} </Avatar>
    </div>
  );
};

export default UserActivity;
