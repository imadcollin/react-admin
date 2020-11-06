import * as React from "react";
import { Card, CardHeader } from "@material-ui/core";
import LocaleSwitcher from "../../Languages/langSwitch"
import RatingPosts from "./rating"
import UserActivity from "./activity"
const DashBoard = () => {
return (
  <Card>
    <CardHeader  />
    <h1>Welcome to the Administration Page</h1>
    <LocaleSwitcher></LocaleSwitcher>
    <RatingPosts></RatingPosts>
    <UserActivity></UserActivity>
  </Card>
)}

export default DashBoard;