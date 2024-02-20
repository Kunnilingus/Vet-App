import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { App } from "@/Pages/App/App";
import { LazyAbout } from "@/Pages/about/About.lazy";
import { Suspense } from "react";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
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
  </HashRouter>
);
