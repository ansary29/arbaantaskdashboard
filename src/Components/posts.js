import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  Edit,
  SimpleForm,
  Create,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  List,
  SimpleList,
  ShowButton,
} from "react-admin";
import { Show, SimpleShowLayout, DateField, RichTextField } from "react-admin";

export const PostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={<PostFilter />} {...props}>
      {isSmall ? (
        <SimpleList //for mobile responsiveness of posts
          primaryText={(record) => record.title}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" onClick="PostShow" />
          <TextField source="body" onClick="PostShow" />
          <EditButton />
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};
export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput onClick="PostShow" source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);
export const PostShow = (props) => (
  <Show title={<PostTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="teaser" />
      <RichTextField source="body" />
      <DateField label="Publication date" source="created_at" />
    </SimpleShowLayout>
  </Show>
);
export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};
const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
