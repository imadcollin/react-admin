import React from "react";
import { Show, SimpleShowLayout, TextField, RichTextField } from "react-admin";

const PostShow = (props) => {
  return (
    <Show  title='Show a Post' {...props}>
      <SimpleShowLayout>
        <TextField source="title" />
        <RichTextField source="body" />
      </SimpleShowLayout>
    </Show>
  );
};

export default PostShow;
