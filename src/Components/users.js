import * as React from "react";
import {
  Datagrid,
  TextField,
  List,
  SimpleList,
  EmailField,
  Filter,
  TextInput,
} from "react-admin";
import MyUrlField from "./MyUrlField";
import { useMediaQuery } from "@material-ui/core";
export const UserList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={<UserFilter />} {...props}>
      {isSmall ? (
        <SimpleList //for mobile responsiveness of posts
          primaryText={(record) => record.title}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <MyUrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};
const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);
