import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

import LocaleSwitcher from "../../Services/langSwitch"
export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    <LocaleSwitcher></LocaleSwitcher>
  </Card>
);
