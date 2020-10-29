import {Admin , Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest'; 

import * as posts from "./Components/Posts/posts"
import * as user from "./Components/Users/users"
import * as comments from "./Components/Comments/comments"

import authProvider from "./Services/authProvider"
import dashboard from "./Components/Dashboard/dashboard"
function App() {
  return (
    <div className="App">
      
          <Admin dashboard={dashboard} authProvider={authProvider} dataProvider={restProvider('http://localhost:5000')}>
            
        <Resource name="posts" list={posts.PostList}  create={posts.PostCreate} edit={posts.PostEdit} show={posts.PostShow}/>
        <Resource name="users" list={user.UserList} create={user.CreateUser} edit={user.UserEdit} show={user.ShowUsers}  />
        <Resource name="comments" list={comments.CommentList} create={comments.CreateComment} edit={comments.EditComment} show={comments.ShowComment}  />

    </Admin>,
    </div>
  );
}

export default App;
