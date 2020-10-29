import {Admin , Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest'; 

import PostList from './Components/Posts/posts' 
import PostCreate from "./Components/Posts/createPost"
import EditPost from "./Components/Posts/editPost"
import PostShow from "./Components/Posts/showPost"

import * as user from "./Components/Users/users"
import * as comments from "./Components/Comments/comments"
import authProvider from "./Services/authProvider"

function App() {
  return (
    <div className="App">
      
          <Admin authProvider={authProvider} dataProvider={restProvider('http://localhost:5000')}>
            
        <Resource name="posts" list={PostList}  create={PostCreate} edit={EditPost} show={PostShow}/>
        <Resource name="users" list={user.UserList} create={user.CreateUser} edit={user.UserEdit} show={user.ShowUsers}  />
        <Resource name="comments" list={comments.CommentList} create={comments.CreateComment} edit={comments.EditComment} show={comments.ShowComment}  />

    </Admin>,
    </div>
  );
}

export default App;
