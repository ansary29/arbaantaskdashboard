import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const CommentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="body" />
    </Datagrid>
  </List>
);
