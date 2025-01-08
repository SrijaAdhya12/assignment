import { BrowserRouter } from "react-router-dom"
import { AppRouter, BottomNav } from "./components"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <BottomNav/>
    </BrowserRouter>
  )
}

export default App