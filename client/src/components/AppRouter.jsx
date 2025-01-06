import { Routes, Route } from "react-router-dom"
import { Home } from "../pages"
const AppRouter = () => {
  return (
      <Routes location={location}>
        <Route path="/" element={<Home />} />
      </Routes>
  )
}

export default AppRouter