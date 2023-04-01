import { RouterProvider } from "react-router-dom"
import Routes from "./Routers/Routers"

function App() {
  return (
    <div className="">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  )
}

export default App
