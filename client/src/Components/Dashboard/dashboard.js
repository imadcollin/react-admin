import * as React from "react";
import { Card, CardHeader } from "@material-ui/core";
import LocaleSwitcher from "../../Languages/langSwitch"
import RatingPosts from "./Rating"
import UserActivity from "./activity"
const DashBoard = () => {
return (
  <Card>
    <CardHeader title="Welcome to the administration"  />
    <LocaleSwitcher></LocaleSwitcher>
    <RatingPosts></RatingPosts>
    <UserActivity></UserActivity>
  </Card>
)}

export default DashBoard;