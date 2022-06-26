import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import { useState,useRef,useEffect } from 'react';
import Header from './Blog/Header';
import Form from './Blog/Form';
import Body from './Blog/Body';
import BlogPage from './Blog/BlogPage';
function App() {
  let [blogs,setBlogs] = useState([])
  let [counter,setCounter] = useState(0)

  const addBlog = (blog) => {
    console.log(blog)
    setCounter((prev) => prev+1)
    setBlogs([...blogs,blog])
  }

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Body blogs={blogs}/>}/>
          <Route path='/form' element={<Form addBlog={addBlog} counter={counter}/>}/>
          {blogs.map((item) => {
            return <Route path={`blog${item.id}`} element={<BlogPage blog={item}/>}/>
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
