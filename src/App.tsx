import HomePage from './components/HomePage'
import Navigation from './components/Navigation';
import RunLog from './components/RunLog';
import Activities from './components/Activities';
import EditActivity from './components/EditActivity';
//better compatibility with GitHub Pages than BrowserRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import './App.css';

function App() {
  return (
    <Router>
      <Box>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-run" element={<RunLog />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/edit/:id" element={<EditActivity />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
