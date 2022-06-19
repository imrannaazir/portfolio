'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Navbar from './Portfolio/Shared/Navbar';

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />

    </div>
  );
}

export default App;
