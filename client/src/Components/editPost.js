import React from 'react'
import {Edit, SimpleForm, TextInput } from 'react-admin'
const PostEdit=(props)=> {
	return (
		<Edit title='Create a Post' {...props}>

		<SimpleForm>
			<TextInput source='title'></TextInput> 
			<TextInput multiline source='body'></TextInput> 
		</SimpleForm>
		</Edit>
	)
}



export default PostEdit