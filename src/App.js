import './header.css';
import HeadSection from './header.js';
import Home from './homepage.js';
import WebDev from './webdev.js';
import MobDev from './Mobdev.js';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {

    return(
        <BrowserRouter>
        <HeadSection/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/webdev' element={<WebDev/>}/>
                <Route path='/mobdev' element={<MobDev/>}/>
            </Routes>
        </BrowserRouter>
    )
  
  
}

export default App;
