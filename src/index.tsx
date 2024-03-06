import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { App } from "@/Pages/App/App";
import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { LazyServices } from "./Pages/Services/Services.lazy";
import { LazyDoctors } from "./Pages/Doctors/Doctors.lazy";
import { LazyClinics } from "./Pages/Clinics/Clinics.lazy";
import { LazyPharmacy } from "./Pages/Pharmacy/Pharmacy.lazy";
import { LazyPetShops } from "./Pages/PetShops/PetShops.lazy";
import { LazyGrooming } from "./Pages/Grooming/Grooming.lazy";
import { LazyActions } from "./Pages/Actions/Actions.lazy";
import { LazyContacts } from "./Pages/Contacts/Contacts.lazy";
import { LazyLogin } from "./Pages/Login/Login.lazy";
import { LazyAccount } from "./Pages/Account/Account.lazy";

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
      <Route
        path="petshops"
        element={
          <Suspense fallback={Loading()}>
            <LazyPetShops />
          </Suspense>
        }
      />
      <Route
        path="grooming"
        element={
          <Suspense fallback={Loading()}>
            <LazyGrooming />
          </Suspense>
        }
      />
      <Route
        path="actions"
        element={
          <Suspense fallback={Loading()}>
            <LazyActions />
          </Suspense>
        }
      />
      <Route
        path="contacts"
        element={
          <Suspense fallback={Loading()}>
            <LazyContacts />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={Loading()}>
            <LazyLogin />
          </Suspense>
        }
      />
      <Route
        path="account"
        element={
          <Suspense fallback={Loading()}>
            <LazyAccount />
          </Suspense>
        }
      />
    </Routes>
  </HashRouter>
);
