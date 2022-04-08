import React from "react";
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";

const App = () => (
    <BrowserRouter>
        <Container maxWidth='lg'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </Container>
    </BrowserRouter>
);

export default App;