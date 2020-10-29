import React from 'react'
import {Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin'
const PostCreate=(props)=> {
	return (
		<Create title='Create a Post' {...props}>

		<SimpleForm>
		<ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
			<TextInput source='title'></TextInput> 
			<TextInput multiline source='body'></TextInput> 
		</SimpleForm>
		</Create>
	)
}



export default PostCreate