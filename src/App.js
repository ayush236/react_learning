import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Sidebar from './components/sidebar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AboutUs from './page/AboutUs';
import Blog from './page/Blog';
import Course from './page/Course';
import ContactUs from './page/ContactUs ';
import Footer from './components/Footer';
import Home_main from './page/Home_main';

function App() {
  const [SidebarShow,setSidebarShow]=useState(false)
  return (
    <><Router>
      <div className=''>
        <Toolbar setSidebarShow={() => {
          setSidebarShow(!SidebarShow);
        } } />
        <Sidebar setSidebarShow={() => {
          setSidebarShow(prev => !prev);
        } } title={'new side bar'} SidebarShow={SidebarShow}>
          ayush
        </Sidebar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home_main />}></Route>
          <Route path="/Aboutus" element={<AboutUs />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Course" element={<Course />}></Route>
          <Route path="/Contactus" element={<ContactUs />}></Route>
        </Routes>
      </div>
    
    <Footer />
    </Router>
    </>
      
  );
}

export default App;
