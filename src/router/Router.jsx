import { Routes, Route} from "react-router-dom"
import Home from "../pages/Home"

const Router = () => {
  return (
    <Routes>
     <Route  path="/" Component={Home}/>
    </Routes>
  )
}

export default Router