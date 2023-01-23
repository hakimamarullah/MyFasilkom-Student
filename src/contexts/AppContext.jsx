import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [unreadInfo, setUnreadInfo] = useState(0);

  return (
    <AppContext.Provider value={{unreadInfo, setUnreadInfo}}>
      {children}
    </AppContext.Provider>
  );
};
