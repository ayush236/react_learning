import logo from './logo.svg';
import './App.css';
import ContactUs from './page/contactus';
import Toolbar from './components/Toolbar';
import Sidebar from './components/sidebar';
import { useState } from 'react';
function App() {
  const [SidebarShow,setSidebarshow]=useState(false)
  return (
      <div className=''>
        <Toolbar setSidebarshow={()=>{
          setSidebarshow(!SidebarShow)
        }}/>
        <Sidebar setSidebarShow={()=>{
          setSidebarshow(prev=>!prev)
        }} title={'new side bar'} sidebarshow={SidebarShow}>
          ayush
          </Sidebar>
      </div>
      
  );
}

export default App;
