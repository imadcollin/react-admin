import * as React from "react";

import {
  Create,
  Edit,
  Show,
  SimpleShowLayout,
  RichTextField,
  SimpleForm,
  TextInput,
  DateInput,
} from "react-admin";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";

export const CommentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="body" />
        <DateField source="createAt" />
        <EditButton type="date" basePath="/comments" s />
        <DeleteButton basePath="/comments" />
      </Datagrid>
    </List>
  );
};

export const CreateComment = (props) => {
  return (
    <Create title="Create a Comment" {...props}>
      <SimpleForm>
        <TextInput source="body"></TextInput>
        <DateInput
          label="Publication date"
          source="createAt"
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  );
};

export const EditComment = (props) => {
  return (
    <Edit title="Create a Comment" {...props}>
      <SimpleForm>
        <TextInput source="body"></TextInput>
        <DateInput
          label="Publication date"
          source="createAt"
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Edit>
  );
};

export const ShowComment = (props) => {
  return (
    <Show title="Show a Comment" {...props}>
      <SimpleShowLayout>
        <TextField source="body" />
        <DateField source="createAt" />
      </SimpleShowLayout>
    </Show>
  );
};
