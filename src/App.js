import './App.css';
import Header from './components/Header';
import {useSelector } from 'react-redux'
function App() {
  const isNightModeEnabled=useSelector((state)=>state.ui.nightMode)
  return (
    <div className={`App ${isNightModeEnabled ? "dark" :""}`}>  
      <Header/>
    </div>
  );
}

export default App;
