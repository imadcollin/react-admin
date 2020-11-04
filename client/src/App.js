import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import UserIcon from '@material-ui/icons/People';
import PostIcon from '@material-ui/icons/Book';

import * as posts from "./Components/Posts/posts";
import * as user from "./Components/Users/users";
import * as comments from "./Components/Comments/comments";

import authProvider from "./Services/authProvider";
import dashboard from "./Components/Dashboard/dashboard";
import NotFound from "./Components/404/NotFound"

import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from "./Languages/english";
import frenchMessages from "./Languages/french";

function App() {
  const dataProvider=jsonServerProvider("http://localhost:5000"); 
  
  
  const messages = {
      'fr': frenchMessages,
      'en': englishMessages
  };
  const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

  return (
    <div className="App">
      <Admin
        dashboard={dashboard}
        catchAll={NotFound}
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}

      >
        <Resource
          name="posts"
          list={posts.PostList}
          show={posts.PostShow}
          create={posts.PostCreate}
          edit={posts.PostEdit}
          icon={PostIcon}

        />
        <Resource
          name="users"
          list={user.UserList}
          create={user.CreateUser}
          edit={user.UserEdit}
          show={user.ShowUsers}
          icon={UserIcon}
        />
        <Resource
          name="comments"
          list={comments.CommentList}
          create={comments.CreateComment}
          edit={comments.EditComment}
          show={comments.ShowComment}
        />
      </Admin>
      ,
    </div>
  );
}

export default App;
