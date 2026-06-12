import {
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import SearchResultsPage
from "./pages/SearchResultsPage";
import ExplorePage from "./pages/ExplorePage";
import ArticlesPage from "./pages/ArticlesPage";
import EntityPage from "./pages/EntityPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090b",
        color: "white"
      }}
    >
      <Header />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        
        <Route
  path="/search"
  element={<SearchResultsPage />}
/>

        <Route
          path="/explore"
          element={<ExplorePage />}
        />

        <Route
          path="/articles"
          element={<ArticlesPage />}
        />
        <Route
         path="/entity/:slug"
          element={<EntityPage />}
       />
        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}
