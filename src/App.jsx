// App shell ported from ui_kits/website/index.html. Only the Home page is in
// scope for this port; nav state is preserved so the Header highlight and
// scroll-to-top behavior match, and other routes fall back to Home for now.

import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { OfficersPage } from "./components/OfficersPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";
import { MembershipPage } from "./components/MembershipPage.jsx";
import { CompetitionsPage } from "./components/CompetitionsPage.jsx";
import { ClassesPage } from "./components/ClassesPage.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const navigate = (id) => {
    const map = { home: "home", about: "home", competitions: "competitions",
      officers: "officers", classes: "classes", training: "classes", membership: "membership", contact: "contact" };
    setPage(map[id] || "home");
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
