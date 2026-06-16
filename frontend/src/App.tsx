import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import EntityPage from "./pages/EntityPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/search"
        element={<SearchPage />}
      />
      
      <Route path="/entity/:slug"
  element={<EntityPage />}
/>
      
      
    </Routes>
  );
}
