import React from 'react'
import {Edit, SimpleForm, TextInput, SelectInput, ReferenceInput } from 'react-admin'
const PostEdit=(props)=> {
	return (
		<Edit title='Create a Post' {...props}>

		<SimpleForm>
		<ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
			<TextInput source='title'></TextInput> 
			<TextInput multiline source='body'></TextInput> 
		</SimpleForm>
		</Edit>
	)
}



export default PostEdit