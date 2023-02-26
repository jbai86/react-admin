import React from 'react'
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin'

const UserList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id"></TextField>
            <TextField source="name"></TextField>
            <EmailField source="email"></EmailField>
            <EditButton basePath='/users'></EditButton>
            <DeleteButton basePath='/users'></DeleteButton>
        </Datagrid>
    </List>
}

export default UserList