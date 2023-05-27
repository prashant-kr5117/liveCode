import { createContext, useState } from "react";
const DataContext = createContext();

const DataProvider = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <DataContext.Provider
      // this value block is used to send the state or values or export them to use in other component
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    ></DataContext.Provider>
  );
};

export default DataProvider;

// in this file we have make state and export them