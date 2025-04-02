import HomePage from './components/HomePage'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import './App.css';

function App() {
  return (
    <Router>
    <Box>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/add-run" element={<RunLog />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/edit/:id" element={<EditActivity />} /> */}
        </Routes>
    </Box>
  </Router>
  );
}

export default App;
