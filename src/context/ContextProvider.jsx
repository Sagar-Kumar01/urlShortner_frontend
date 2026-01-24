import { Context } from "./context";

const ContextProvider = ({children}) => {
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
