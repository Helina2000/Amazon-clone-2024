import React, { useContext, useEffect } from "react";
import Routering from "./Router";
import { DataContext } from "./components/DataProvider/DataProvider";
import { Type } from "./pages/Utility/action.type";
import { auth } from "./pages/Utility/firebase";


const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null
        });
      }
    });
  }, []);

  return <Routering />;
};

export default App;