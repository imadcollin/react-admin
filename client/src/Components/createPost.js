import React from 'react'
import {Create, SimpleForm, TextInput } from 'react-admin'
const PostCreate=(props)=> {
	return (
		<Create title='Create a Post' {...props}>

		<SimpleForm>
			<TextInput source='title'></TextInput> 
			<TextInput multiline source='body'></TextInput> 
		</SimpleForm>
		</Create>
	)
}



export default PostCreate