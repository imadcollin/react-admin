import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  ReferenceField
} from "react-admin";

const PostList = (props) => {
	return <List {...props}>
    <Datagrid>
 
    <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
      <TextField source="title" />
      <TextField source="body" />
      <EditButton basePath="/posts" />
      <DeleteButton basePath="/posts" />
    </Datagrid>
  </List>
};
export default PostList; 