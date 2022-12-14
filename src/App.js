import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import 'flowbite';

import SideBar from './components/SideBar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

function App() {
    return (
        <>
            <SideBar />
            <ThemeSwitcher />
            <div className='flex flex-col md:pl-64'>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Dashboard />} />
                        <Route path='details' element={<Details />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
