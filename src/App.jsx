import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router"; // works because router.jsx exports named `router`

const App=()=> {
  return <RouterProvider router={router} />;
}
export default App;
