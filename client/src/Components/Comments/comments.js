import * as React from "react";
import { Children, cloneElement } from "react";

import {
  Create,
  Edit,
  Show,
  SimpleShowLayout,
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
  ShowButton,
  ReferenceInput,
  SelectInput,
  ReferenceField,
} from "react-admin";

const PostListActionToolbar = ({ children, ...props }) => {
  return (
    <div>{Children.map(children, (button) => cloneElement(button, props))}</div>
  );
};

export const CommentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="body" />
        <ReferenceField label="Post" source="postId" reference="posts">
          <TextField source="body" />
        </ReferenceField>
        <ReferenceField label="By" source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <DateField source="createAt" />

        <PostListActionToolbar>
          <EditButton type="date" basePath="/comments" s />
          <ShowButton />
        </PostListActionToolbar>
        <DeleteButton basePath="/comments" />
      </Datagrid>
    </List>
  );
};

export const CreateComment = (props) => {
  return (
    <Create title="Create a Comment" {...props}>
      <SimpleForm>
        <ReferenceInput label="User" source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Post" source="postId" reference="posts">
          <SelectInput optionText="body" />
        </ReferenceInput>
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
        <ReferenceInput label="Post" source="postId" reference="posts">
          <SelectInput optionText="body" />
        </ReferenceInput>
        <ReferenceInput label="User" source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
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
        <ReferenceField label="Written By" source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
