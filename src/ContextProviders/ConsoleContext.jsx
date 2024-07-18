import React, { createContext, useContext, useState } from 'react';

const ConsoleContext = createContext();

export const useConsole = () => useContext(ConsoleContext);

export const ConsoleProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const [isOutputHidden, setOutputHidden] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [consoleSize, setConsoleSize] = useState({ width: 0, height: 0 });

  return (
    <ConsoleContext.Provider value={{
      logs,
      addLog: (message, level = 0) => setLogs((prevLogs) => [...prevLogs, { message, level }]),
      clearLogs: () => setLogs([]),
      isOutputHidden,
      toggleOutputHidden: () => setOutputHidden((isHidden) => !isHidden),
      isShowingOptions: showPopover,
      toggleOptionsPopover: () => setShowPopover((isShowing) => !isShowing),
      consoleSize,
      setConsoleSize
    }}>
      {children}
    </ConsoleContext.Provider>
  );
};