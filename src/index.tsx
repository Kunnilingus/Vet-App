import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "@/Pages/App/App";
import { LazyAbout } from "@/Pages/about/About.lazy";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="App" element={<App />} />
      <Route
        path="About"
        element={
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);
