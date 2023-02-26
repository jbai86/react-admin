import React from 'react'
import { Create, EmailField, SimpleForm, TextInput } from 'react-admin'

const UserCreate = (props) => {
    return (
        <Create title='Create a User' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <EmailField source='body' />
            </SimpleForm>
        </Create>
    )
}

export default UserCreate