// Competitions page — conference list styled after California DECA's layout
// (image left, details + Learn More right) but kept in the Foothill DECA theme:
// blue accents, rounded corners, soft shadows (no orange / square edges).

import { Section } from "./primitives.jsx";
import { PageBanner } from "./OfficersPage.jsx";

// Each conference. `photo` is optional — drop a file in /assets and set the
// path. `href` is the external conference page the "Learn More" button opens.
const CONFERENCES = [
  {
    name: "MiniCon",
    when: "Date TBA",
    where: "Foothill High School · Pleasanton, CA",
    desc: "Minicon is an excellent opportunity for students who have never done DECA — predominantly freshmen in the lunchtime group — or first-year ROP class members to practice their business roleplay skills before heading to NorCal and State. Competitors complete a 50-question general knowledge DECA exam as well as one roleplay. If you've never done DECA before, or it's your first year in an ROP class, we highly recommend participating in Minicon.",
    href: "#",
    photo: "/assets/minicon.jpg",
  },
  {
    name: "NorCal CDC",
    when: "January 15–17, 2027",
    where: "San Ramon, CA",
    desc: "Start off your DECA year at the Northern California District Career Development Conference! Practice roleplays, assess your exam knowledge, and make long-lasting friendships. Compete against all DECA chapters in NorCal.",
    href: "#",
    photo: "/assets/norcal.jpg",
  },
  {
    name: "State Career Development Conference (SCDC)",
    when: "February 25–28, 2027",
    where: "Anaheim, CA",
    desc: "The State Career Development Conference (SCDC) is the biggest and most exciting California DECA event of the year. Members from across California gather each year for competitions, workshops, state officer campaigns, networking, and countless other opportunities. The best competitors at SCDC qualify to attend ICDC.",
    href: "#",
    photo: "/assets/states-full-chapter.jpg",
  },
  {
    name: "International Career Development Conference (ICDC)",
    when: "April 17–20, 2027",
    where: "Anaheim, CA",
    desc: "At the International Career Development Conference (ICDC), over 22,000 high school students, advisors, businesspeople, and alumni gather for several days of DECA excitement. Most participants at ICDC compete in one of DECA’s competitive events vying to be the best in the world. In addition to competitive events, many students and advisors participate in a variety of leadership and career-advancing academies.",
    href: "#",
    photo: "/assets/icdc-photo.jpg",
  },
];

function ConferenceCard({ name, when, where, desc, photo }) {
  return (
    <div className="conf-card" style={{
      display: "grid", gridTemplateColumns: "minmax(0,360px) 1fr",
      background: "#fff", borderRadius: "var(--radius-lg)", overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
    }}>
      <div style={{ position: "relative", minHeight: 240, background: "var(--gradient-card)" }}>
        {photo ? (
          <img src={photo} alt={name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <img src="/assets/deca-diamond-white.png" alt="" aria-hidden="true"
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "46%", opacity: .18 }} />
        )}
      </div>

      <div style={{ padding: "30px 34px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <h3 style={{ fontSize: 24, margin: "0 0 8px", color: "var(--color-heading)" }}>{name}</h3>
        <div style={{ fontSize: 14.5, color: "var(--gray-600)", marginBottom: 16 }}>
          <span style={{ fontWeight: 600, color: "var(--deca-blue)" }}>{when}</span>
          {where ? <> · {where}</> : null}
        </div>
        <p style={{ fontSize: 15.5, color: "var(--gray-800)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

export function CompetitionsPage() {
  return (
    <>
      <PageBanner eyebrow="Compete & Grow" title="Conferences & Competitions"
        subtitle="Our DECA year runs from a local MiniCon all the way to the international stage. Mark your calendars and compete with us." />
      <Section alt>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {CONFERENCES.map((c) => <ConferenceCard key={c.name} {...c} />)}
        </div>
      </Section>
    </>
  );
}
