import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  Show,
  SimpleShowLayout,
  RichTextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

const PostList = (props) => {
  return (
    <List {...props}>
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
  );
};

const PostCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <ReferenceInput label="User" source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title"></TextInput>
        <TextInput multiline source="body"></TextInput>
      </SimpleForm>
    </Create>
  );
};

const PostEdit = (props) => {
  return (
    <Edit title="Create a Post" {...props}>
      <SimpleForm>
        <ReferenceInput label="User" source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title"></TextInput>
        <TextInput multiline source="body"></TextInput>
      </SimpleForm>
    </Edit>
  );
};

const PostShow = (props) => {
  return (
    <Show title="Show a Post" {...props}>
      <SimpleShowLayout>
        <TextField source="title" />
        <RichTextField source="body" />
      </SimpleShowLayout>
    </Show>
  );
};
export { PostList, PostShow, PostEdit, PostCreate };
