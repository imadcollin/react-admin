import * as React from "react";
import {
  Create,
  Edit,
  Show,
  SimpleShowLayout,
  RichTextField,
  SimpleForm,
  TextInput,
} from "react-admin";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export const CreateUser = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="name"></TextInput>
        <TextInput multiline source="email"></TextInput>
      </SimpleForm>
    </Create>
  );
};

export const UserEdit = (props) => {
  return (
    <Edit title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="name"></TextInput>
        <TextInput multiline source="email"></TextInput>
      </SimpleForm>
    </Edit>
  );
};

export const ShowUsers = (props) => {
  return (
    <Show title="Show a Post" {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <RichTextField source="email" />
      </SimpleShowLayout>
    </Show>
  );
};
