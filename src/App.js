import React, { useState } from 'react';
import MainPage from './modules/mainPage';
import "./App.css"
import { AppContext } from './utils/context';

function App() {
  const [contextState, setContextState] = useState({
    isScrolled: false
  });
  return (
    <>
      <AppContext.Provider value={{ contextState, setContextState }}>
        <MainPage />
      </AppContext.Provider>
    </>
  );
}
export default App;
