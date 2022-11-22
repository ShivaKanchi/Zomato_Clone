import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/delivery" />} />

      </Routes>
    </>
  );
}

export default App;
