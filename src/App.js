import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Users';
import Home from './Home';
import Posts from './Posts';
import Header from './Header';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
       return res.json();
      })
      .then((response) => {
        console.log(response);
        setPosts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
      return res.json();
      })
      .then((response) => {
        console.log(response);
        setUsers(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users users={users}/>} />
          <Route path="/posts" element={<Posts posts={posts}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
