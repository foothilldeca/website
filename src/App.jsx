import { useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { OfficersPage } from "./components/OfficersPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";
import { MembershipPage } from "./components/MembershipPage.jsx";
import { CompetitionsPage } from "./components/CompetitionsPage.jsx";
import { ClassesPage } from "./components/ClassesPage.jsx";

const pageAliases = {
  home: "home",
  about: "home",
  competitions: "competitions",
  officers: "officers",
  classes: "classes",
  training: "classes",
  membership: "membership",
  contact: "contact",
};

const pagePaths = {
  home: "/",
  competitions: "/competitions",
  officers: "/officers",
  classes: "/classes",
  membership: "/membership",
  contact: "/contact",
};

const pathPages = Object.fromEntries(
  Object.entries(pagePaths).map(([page, path]) => [path, page]),
);

function pageFromPath(pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return pathPages[normalized] || "home";
}

export default function App() {
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPage(pageFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (id) => {
    const nextPage = pageAliases[id] || "home";
    const nextPath = pagePaths[nextPage];

    if (window.location.pathname !== nextPath) {
      window.history.pushState({ page: nextPage }, "", nextPath);
    }

    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  let view;
  switch (page) {
    case "officers": view = <OfficersPage />; break;
    case "contact": view = <ContactPage />; break;
    case "membership": view = <MembershipPage onNavigate={navigate} />; break;
    case "competitions": view = <CompetitionsPage />; break;
    case "classes": view = <ClassesPage />; break;
    default: view = <HomePage onNavigate={navigate} />;
  }

  return (
    <>
      <Header current={page} onNavigate={navigate} />
      <main key={page} className="page-enter">{view}</main>
      <Footer onNavigate={navigate} />
    </>
  );
}
