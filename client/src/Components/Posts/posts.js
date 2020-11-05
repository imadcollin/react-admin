import * as React from "react";
import { Children, cloneElement } from "react";

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
  RichTextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  Filter,
  TabbedShowLayout,
  Tab,
  FunctionField,
  ShowButton,
  BooleanField,
  BooleanInput,
} from "react-admin";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const PostListActionToolbar = ({ children, ...props }) => {
  return (
    <div>{Children.map(children, (button) => cloneElement(button, props))}</div>
  );
};

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
        <BooleanField source="commentable" label="Comments" sortable={false} />
        <PostListActionToolbar>
          <EditButton basePath="/posts" />
          <ShowButton />
        </PostListActionToolbar>
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
        <BooleanInput source="commentable" defaultValue />
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
        <BooleanInput source="commentable" defaultValue />
        <FunctionField
          label="Name"
          source="rating"
          render={(record) => record.rating * 5}
        />
      </SimpleForm>
    </Edit>
  );
};

const PostShow = (props) => {
  const [value, setValue] = React.useState(2);

  return (
    <Show {...props}>
      <SimpleForm>
        <TabbedShowLayout>
          <Tab label="summary">
            <TextField source="title" />
            <RichTextField source="body" />
            <BooleanField source="commentable" defaultValue />

            {/* <FunctionField
              label="Rating"
              source="rating"
              render={(record) => value}
            /> */}
          </Tab>
        </TabbedShowLayout>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </SimpleForm>
    </Show>
  );
};
export { PostList, PostShow, PostEdit, PostCreate };
