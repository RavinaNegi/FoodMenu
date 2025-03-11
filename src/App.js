import { Outlet } from "react-router-dom";
import Head from "./component/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { useEffect, useState } from "react";
import Context from "./component/Context";
import CotextProvider from "./component/ContextProvider";





function App() {
  const [userName,setUserName]=useState("");
  useEffect(
    ()=>{
      
        const name="akshay";
        setUserName(name);
      

    },[]

  );
  
  return (
    
    <div >
      <Provider store={store}>
     
     <Context.Provider value={{username:userName,setUserName}}>
      
     <Head/>
     </Context.Provider>
     <CotextProvider>
     <Outlet/>
     </CotextProvider>
     </Provider>

      

    </div>
    
   
  );
}

export default App;
