import React, {useEffect} from "react";

import {useDispatch} from 'react-redux';
import { popularFetch } from "./redux/features/popularSlice";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularFetch());
  }, [dispatch])

  return (
    <div className="App">
      <h1>hii</h1>
    </div>
  );
}

export default App;
