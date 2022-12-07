import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Blog from './Blog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([
    {
      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a porta velit, at aliquet risus. Donec et sem ac erat luctus ultricies id id lectus. In hac habitasse platea dictumst. Nulla vitae rutrum enim. Integer aliquet ex eu massa varius, aliquet viverra odio rutrum. Phasellus et nisl mattis, lacinia justo vitae, placerat urna. Etiam ut enim nisl. Nam rhoncus lacus tortor, nec sodales turpis condimentum vehicula. Praesent massa risus, ultrices vel orci eu, consectetur tincidunt odio. Fusce ipsum leo, interdum et venenatis eget, suscipit id massa.'
    },
    {
      title: 'Post 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a porta velit, at aliquet risus. Donec et sem ac erat luctus ultricies id id lectus. In hac habitasse platea dictumst. Nulla vitae rutrum enim. Integer aliquet ex eu massa varius, aliquet viverra odio rutrum. Phasellus et nisl mattis, lacinia justo vitae, placerat urna. Etiam ut enim nisl. Nam rhoncus lacus tortor, nec sodales turpis condimentum vehicula. Praesent massa risus, ultrices vel orci eu, consectetur tincidunt odio. Fusce ipsum leo, interdum et venenatis eget, suscipit id massa.'
    },
    {
      title: 'Post 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a porta velit, at aliquet risus. Donec et sem ac erat luctus ultricies id id lectus. In hac habitasse platea dictumst. Nulla vitae rutrum enim. Integer aliquet ex eu massa varius, aliquet viverra odio rutrum. Phasellus et nisl mattis, lacinia justo vitae, placerat urna. Etiam ut enim nisl. Nam rhoncus lacus tortor, nec sodales turpis condimentum vehicula. Praesent massa risus, ultrices vel orci eu, consectetur tincidunt odio. Fusce ipsum leo, interdum et venenatis eget, suscipit id massa.'
    }
  ]);
  return (
    <Router>
      <div>
      <header className="d-flex justify-content-center py-3 custom-h-pos">
          <ul className="nav nav-pills" id="nound">
            <Link to='/'><li className="nav-item"><span className="nav-link c-navlink">Home</span></li></Link>
            <Link to='/about'><li className="nav-item"><span className="nav-link c-navlink">My Skills</span></li></Link>
            <Link to='/projects'><li className="nav-item"><span className="nav-link c-navlink">Projects</span></li></Link>
          </ul>
        </header>
      </div>
      <Routes>
          <Route path='/coding-portfolio' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
