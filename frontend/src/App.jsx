import { Route, Routes } from "react-router";

// import HomePage from "./pages/HomePage";
// import CreatePage from "./pages/CreatePage";
// import NoteDetailPage from "./pages/NoteDetailPage";

import CardDetailPage from "./pages/CardDetailPage";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = () => {
  return (
    <div className="relative h-full w-full">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" /> */}
      <Routes>
        <Route path="/card/:id" element={<CardDetailPage />} />
        <Route path="/search/:searchName" element={<SearchResultsPage />} />
      </Routes>
    </div>
  );
};
export default App;