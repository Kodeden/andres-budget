import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout";
import Table from "./components/table/table";
import { loadBudget } from "./routes/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Table />} loader={loadBudget} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
