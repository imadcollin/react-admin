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
  Filter,
  SearchInput,
  TabbedShowLayout,
  Tab,
  NumberField,
} from "react-admin";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const PostList = (props) => {
  return (
    <List {...props} filters={<PostFilter />}>
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

const PostShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField label="Id" source="id" />
        <TextField source="title" />
      </Tab>
      <Tab label="body" path="body">
        <RichTextField source="body" addLabel={false} />
      </Tab>
      <Tab label="Users" path="userId">
        <RichTextField source="name" addLabel={false} />
      </Tab>
      <Tab label="Miscellaneous" path="miscellaneous">
        <TextField
          label="Password (if protected post)"
          source="password"
          type="password"
        />
        <NumberField source="average_note" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);
export { PostList, PostShow, PostEdit, PostCreate };
