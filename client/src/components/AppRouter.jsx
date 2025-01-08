import { Routes, Route } from "react-router-dom"
import { Home, Profile } from "../pages"
const AppRouter = () => {
  return (
      <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile/>} />
      </Routes>
  )
}

export default AppRouter