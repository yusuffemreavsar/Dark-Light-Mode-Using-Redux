import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { enableNightMode,disableNightMode } from '../../Redux/ui/ui_slice'
function Header() {
const isNightModeEnabled=useSelector((state)=>state.ui.nightMode)
const dispatch=useDispatch()
  return (
    <div>
        <h1>Mode : {isNightModeEnabled ? "Dark" : "Light"}</h1>
        <div className='buttons'>
            <button className='dark-btn' onClick={()=>{dispatch(enableNightMode())}} >Dark Mode</button>
            <button className='light-btn'onClick={()=>{dispatch(disableNightMode())}}>Light Mode</button>
        </div>
  
    </div>
  )
}

export default Header