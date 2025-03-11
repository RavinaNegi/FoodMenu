import React, { useContext } from 'react'
import { ThemeContext } from './ContextProvider';

const Grocery = () => {
  const {theme,setTheme}=useContext(ThemeContext);
  return (
    <div className='pt-[500px]'>
        here you will fid the grocery you eat
        <div>
          <p>i like colours {theme}</p>
          <button onClick={()=>setTheme(theme=="yellow"?"red":"yellow")} >change</button>
          </div>
      
    </div>
  )
}

export default Grocery
