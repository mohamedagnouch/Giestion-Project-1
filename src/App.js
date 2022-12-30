import './App.css';
//import Test from './Test/Test';
//import Test2 from './Test/Test2';

import { Route, Routes } from "react-router-dom";

import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Model/Navbar';
import PageNotFound from './Components/PageNotFound';
import Adduser from './Components/Stagaire/AddStagiare';
import Edit from './Components/Edit';
import Stagaire from './Components/Stagaiare';
import Filières from './Components/Filières';
import TablFilire from './Components/TablFilire';
import DevMob from './Components/DevMob';


function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      {/* <Test2 /> */}
      <Navbar />
      <br />
      <br />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="/Filières" element={<Filières />}></Route>
        <Route exact path="/user/add" element={<Adduser />}></Route>
        <Route exact path="/user/edit/:id" element={<Edit />}></Route>
        <Route exact path="/stagaiare/:id" element={<Stagaire />}></Route>
        <Route exact path="/TablFilire" element={<TablFilire />}></Route>
        <Route exact path="/DevMob" element={<DevMob />}></Route>

        <Route exact path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
