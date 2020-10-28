import {Admin , Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest'; 

import PostList from './Components/posts' 
import PostCreate from "./Components/createPost"
import EditPost from "./Components/editPost"
import PostShow from "./Components/showPost"
import authProvider from "./Services/authProvider"

function App() {
  return (
    <div className="App">
      
          <Admin authProvider={authProvider} dataProvider={restProvider('http://localhost:5000')}>
            
        <Resource name="posts" list={PostList}  create={PostCreate} edit={EditPost} show={PostShow}/>
    </Admin>,
    </div>
  );
}

export default App;
