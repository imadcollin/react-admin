import {Admin , Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest'; 
import { render } from 'react-dom';

import PostList from './Components/posts' 
import PostCreate from "./Components/createPost"
function App() {
  return (
    <div className="App">
          Learn React

          <Admin dataProvider={restProvider('http://localhost:5000')}>
            
        <Resource name="posts" list={PostList}  create={PostCreate}/>
    </Admin>,
    </div>
  );
}

export default App;
