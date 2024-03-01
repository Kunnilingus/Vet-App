import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { App } from "@/Pages/App/App";
import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { LazyServices } from "./Pages/Services/Services.lazy";
import { LazyDoctors } from "./Pages/Doctors/Doctors.lazy";
import { LazyClinics } from "./Pages/Clinics/Clinics.lazy";
import { LazyPharmacy } from "./Pages/Pharmacy/Pharmacy.lazy";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="main" element={<App />} />
      <Route
        path="services"
        element={
          <Suspense fallback={Loading()}>
            <LazyServices />
          </Suspense>
        }
      />
      <Route
        path="doctors"
        element={
          <Suspense fallback={Loading()}>
            <LazyDoctors />
          </Suspense>
        }
      />
      <Route
        path="clinics"
        element={
          <Suspense fallback={Loading()}>
            <LazyClinics />
          </Suspense>
        }
      />
      <Route
        path="pharmacy"
        element={
          <Suspense fallback={Loading()}>
            <LazyPharmacy />
          </Suspense>
        }
      />
    </Routes>
  </HashRouter>
);
