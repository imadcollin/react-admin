import * as React from "react";
import {
  List,
  Datagrid,
  Edit,
  DateField,
  TextField,
  EditButton,
  DeleteButton,
  TextInput,
  DateInput,
} from "react-admin";

const PostList = (props) => {
	return <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton basePath="/posts" />
      <DeleteButton basePath="/posts" />
    </Datagrid>
  </List>
};
export default PostList; 