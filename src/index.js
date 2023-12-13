import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBarPage from "./pages/SearchBarPage";
import MovieDetailPage from "./pages/MovieDetailPage";

import MainSection from "./pages/MainSection";
import SearchPage from "./pages/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="movie" element={<MainSection />}>
            <Route path="search" element={<SearchBarPage />} />
          </Route>
          <Route path="movie/search/:searchQuery" element={<SearchPage />} />

          <Route path="movie/:movieId" element={<MovieDetailPage />} />

          <Route
            parh="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
