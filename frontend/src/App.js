import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotificationBanner from "./Components/Header/Head";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";

// Lazy Loading Components
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const ChefConnection = lazy(() => import("./Components/ChefConection/ChefConnection"));
const Month = lazy(() => import("./Components/CookForAmonth/Month"));
const OneTime = lazy(() => import("./Components/OneTimeCook/OneTime"));
const Chef = lazy(() => import("./Components/Chefforparty/Chef"));

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "join-chefkart", element: <ChefConnection /> },
    { path: "cook-for-month", element: <Month /> },
    { path: "one-time-cook", element: <OneTime /> },
    { path: "chef-for-party", element: <Chef /> },
  ];

  return (
    <div>
      <NotificationBanner />
      <Navbar />
      {/* Suspense Component to Handle Loading */}
      <Suspense fallback={<div className="text-center text-xl p-10">Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;