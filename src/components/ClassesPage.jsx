// Classes page — Foothill's ROP / CTE business courses. Layout modeled on
// deca.org's split sections (pill eyebrow + heading + copy beside a rounded
// photo, alternating sides) but kept in the Foothill DECA theme.

import { Section, Icon } from "./primitives.jsx";
import { PageBanner } from "./OfficersPage.jsx";

const para = { fontSize: 16, color: "var(--gray-800)", lineHeight: 1.7, margin: 0 };
const note = { fontSize: 14, color: "var(--gray-600)", fontStyle: "italic", margin: "14px 0 0" };

function Pill({ children }) {
  return (
    <span style={{ display: "inline-block", background: "var(--deca-blue)", color: "#fff",
      fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase",
      padding: "7px 16px", borderRadius: 999, marginBottom: 18 }}>{children}</span>
  );
}

function ClassImage({ photo, alt }) {
  return (
    <div style={{ position: "relative", borderRadius: 20, overflow: "hidden",
      boxShadow: "var(--shadow-lg)", background: "var(--gradient-card)", aspectRatio: "4/3" }}>
      {photo ? (
        <img src={photo} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <img src="/assets/deca-diamond-white.png" alt="" aria-hidden="true"
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "46%", opacity: .18 }} />
      )}
    </div>
  );
}

function Split({ tint, imageLeft, eyebrow, title, photo, children, centered }) {
  if (centered) {
    return (
      <Section tint={tint}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center",
          display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Pill>{eyebrow}</Pill>
          <h2 style={{ fontSize: 36, margin: "0 0 16px", color: "var(--color-heading)" }}>{title}</h2>
          {children}
        </div>
      </Section>
    );
  }
  const img = <ClassImage photo={photo} alt={title} />;
  const text = (
    <div>
      <Pill>{eyebrow}</Pill>
      <h2 style={{ fontSize: 36, margin: "0 0 16px", color: "var(--color-heading)" }}>{title}</h2>
      {children}
    </div>
  );
  return (
    <Section tint={tint}>
      <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        {imageLeft ? <>{img}{text}</> : <>{text}{img}</>}
      </div>
    </Section>
  );
}

export function ClassesPage() {
  return (
    <>
      <PageBanner eyebrow="Career Technical Education" title="ROP Business Classes"
        subtitle="Foothill offers three Career Technical Education (CTE) courses focused on business, marketing, and DECA. Take a class, join Foothill DECA, and you'll be able to compete at conferences, develop essential skills, and earn college credit." />

      <Split eyebrow="DECA + CTE" title="How the classes and DECA go hand in hand" photo="/assets/handinhand-web.jpg">
        <p style={para}>
          Business and marketing concepts and leadership skills are reinforced through co-curricular
          participation in DECA. DECA is integral to each class and provides additional focus on developing
          written and oral presentation skills, as well as the leadership, social, and professional skills
          that build self-confidence for college and career success.
        </p>
      </Split>

      <Section style={{ paddingTop: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: 34, margin: 0, color: "var(--color-heading)" }}>ROP Course Descriptions</h2>
        </div>
      </Section>

      <Split tint centered eyebrow="IMC" title="Integrated Marketing Communications">
        <p style={para}>
          Learn about the field of marketing and the vast career opportunities within this industry! Explore
          areas such as market research, product development, pricing, promotion, distribution, visual
          merchandising, presentation, and project management through a variety of hands-on projects. Bring your
          ideas and creativity! Students receive training constructing resumes, employment applications, cover
          letters, and references, plus interviewing skills, and complete a career portfolio to enter the job
          market with a competitive edge.
        </p>
        <p style={note}>IMC must be taken before any other DECA class. Open to grades 10, 11, and 12.</p>
      </Split>

      <Split centered eyebrow="EBO" title="Economics of Business Ownership">
        <p style={para}>
          Learn the process of starting and managing a business. Students with an entrepreneurial interest
          build skills in organization, effective decision making, and goal setting. They develop comprehensive
          business plans — including research and development of ideas, product planning, finance, and
          marketing — and research how marketing, management, ethics, and communication drive business success.
          Students gain practical experience by managing a student-run business and receive training
          constructing resumes, employment applications, cover letters, references, and interviewing skills.
        </p>
        <p style={note}>Open to grades 11 and 12.</p>
      </Split>

      <Split tint centered eyebrow="SEM" title="Sports & Entertainment Marketing">
        <p style={para}>
          Learn what it takes to have a career marketing the vast field of sports and entertainment. Through
          instruction on the concepts and strategies of the sports and entertainment world, students discover
          how professional, college, and amateur sports relate to their sports products. Students plan and use
          market research, develop promotion and marketing materials for sports and entertainment events, and
          improve their leadership skills. They also receive training constructing resumes, employment
          applications, cover letters, and references, and complete a career portfolio to enter the job market
          with a competitive edge.
        </p>
        <p style={note}>Open to grades 11 and 12.</p>
      </Split>

      <Section>
        <div style={{ maxWidth: 820, margin: "0 auto", background: "#fff",
          border: "1px solid var(--color-border)", borderLeft: "4px solid var(--deca-blue)",
          borderRadius: "var(--radius-md)", padding: "18px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span style={{ color: "var(--deca-blue)", flex: "none", marginTop: 1 }}><Icon name="info" size={20} /></span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase",
              color: "var(--deca-blue)", marginBottom: 5 }}>Notice</div>
            <p style={{ fontSize: 14.5, color: "var(--gray-600)", lineHeight: 1.6, margin: 0 }}>
              Currently, taking a DECA CTE class is a requirement to compete at NorCal, State, and the
              International Career Development Conference. Students not enrolled in a class may still participate
              in DECA by attending the weekly lunch meetings on Fridays in room A-4 and the Mini Conferences
              hosted by local schools.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
