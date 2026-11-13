import { Icon } from "./primitives.jsx";

const FACTS = [
  ["calendar-days", "January 15-17, 2027", "Three-day conference"],
  ["map-pin", "Santa Clara, CA", "Conference location"],
  ["circle-dollar-sign", "$271", "Check to Tri-Valley ROP"],
  ["clock-3", "November 16", "Due before lunch ends"],
];

const CHECKLIST = [
  "Foothill DECA Registration Form",
  "Form A: Conference Rules and Etiquette",
  "Form B: Permission and Medical Release",
  "Form C: Grade Check",
  "Form D: Training Agreement",
  "Form E-1: TVROP Field Trip Authorization",
  "Form E-2: TVROP Student Medical Authorization",
  "Form F: Dance Conduct",
  "Form G: PUSD Field Trip Authorization",
  "$271 check payable to Tri-Valley ROP",
];

const TRAINING = [
  ["messages-square", "Roleplays", "Complete 2 practice roleplays with a mentor."],
  ["presentation", "Prepared events", "Complete 1 practice presentation and follow all written-event deadlines."],
  ["clipboard-check", "Testing", "Complete 2 full practice tests and at least 1 in-person proctored exam. Continue until you earn 70 or higher."],
  ["graduation-cap", "Workshop", "Attend at least 1 competition workshop."],
];

const DAYS = [
  {
    day: "Friday, January 15",
    events: [
      ["2:00-3:00 PM", "Conference registration"],
      ["3:00-7:30 PM", "Testing sessions and dinner on your own"],
      ["8:00-9:00 PM", "Grand Opening Session"],
      ["10:30 PM", "Curfew"],
    ],
  },
  {
    day: "Saturday, January 16",
    events: [
      ["8:45 AM-4:00 PM", "Competitive events"],
      ["11:30 AM-1:30 PM", "Lunch on your own"],
      ["4:00-5:00 PM", "District Officer Election Session"],
      ["7:30-9:30 PM", "Game Room, Dance, and Quiz Bowl"],
      ["10:00 PM", "Curfew"],
    ],
  },
  {
    day: "Sunday, January 17",
    events: [
      ["7:30-8:00 AM", "Pack and store luggage"],
      ["8:00-10:30 AM", "Awards Session and chapter pictures"],
      ["11:00 AM", "Hotel checkout and bus to Foothill"],
      ["Around 12:00 PM", "Parent pickup at Foothill"],
    ],
  },
];

function ActionLink({ href, children, secondary = false, external = false }) {
  return (
    <a
      className={`norcal-action${secondary ? " secondary" : ""}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      <Icon name={external ? "external-link" : "arrow-down"} size={17} />
    </a>
  );
}

export function NorCalPage() {
  return (
    <>
      <section className="norcal-hero">
        <img className="norcal-hero-mark" src="/assets/deca-diamond-white.png" alt="" aria-hidden="true" />
        <div className="container norcal-hero-grid">
          <div>
            <div className="norcal-kicker">Northern California Career Development Conference</div>
            <h1>NorCal CDC 2027</h1>
            <p>
              Apply your business and marketing knowledge, build professional skills, and compete with DECA students from across Northern California.
            </p>
            <div className="norcal-actions">
              <ActionLink href="#registration">Registration details</ActionLink>
              <ActionLink href="#schedule" secondary>View the schedule</ActionLink>
            </div>
          </div>
          <div className="norcal-hero-photo">
            <img src="/assets/norcal.jpg" alt="Foothill DECA students at NorCal CDC" />
          </div>
        </div>
      </section>

      <div className="norcal-facts-wrap">
        <div className="container">
          <div className="norcal-facts">
            {FACTS.map(([icon, title, subtitle]) => (
              <div className="norcal-fact" key={title}>
                <Icon name={icon} size={25} color="var(--deca-blue)" />
                <div><strong>{title}</strong><span>{subtitle}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="norcal-section">
        <div className="container norcal-intro-grid">
          <div>
            <span className="norcal-eyebrow">Compete and grow</span>
            <h2>Start your competition season at NorCal</h2>
            <p>
              NorCal gives students the opportunity to compete in industry-validated DECA events in marketing, business management, finance, hospitality, and entrepreneurship. Events combine an exam or written project with a roleplay or prepared presentation judged by an industry professional.
            </p>
            <p>
              Students should expect to prepare outside of class and complete all mandatory training requirements. Participation is voluntary, but registration represents a firm commitment to compete.
            </p>
          </div>
          <aside className="norcal-deadline-card">
            <Icon name="alarm-clock" size={30} color="#fff" />
            <h3>One firm deadline</h3>
            <p>Turn in the complete physical packet and payment to Room A-4 by Monday, November 16, 2026, before lunch ends.</p>
            <strong>No late submissions will be accepted.</strong>
          </aside>
        </div>
      </section>

      <section id="registration" className="norcal-section norcal-alt">
        <div className="container">
          <div className="norcal-section-heading">
            <span className="norcal-eyebrow">Registration</span>
            <h2>Complete every form and submit it correctly</h2>
            <p>All required files and the electronic upload form are posted in Google Classroom. Use the packet instructions for every signature and required field.</p>
          </div>

          <div className="norcal-submission-grid">
            <div className="norcal-panel">
              <h3>Forms checklist</h3>
              <ul className="norcal-checklist">
                {CHECKLIST.map((item) => (
                  <li key={item}><Icon name="check" size={17} color="var(--deca-blue)" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="norcal-panel norcal-panel-blue">
              <h3>Submit both ways</h3>
              <p><strong>Forms B, G, E-1, and E-2</strong> must be submitted both physically and electronically.</p>
              <ol>
                <li>Upload clear photos of the completed forms to the designated Google Form.</li>
                <li>Turn in the original physical copies to Room A-4.</li>
                <li>Upload all other required forms electronically unless Google Classroom says otherwise.</li>
              </ol>
              <div className="norcal-payment">
                <Icon name="badge-dollar-sign" size={24} />
                <div><strong>$271 check</strong><span>Payable to Tri-Valley ROP</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="norcal-section">
        <div className="container">
          <div className="norcal-section-heading">
            <span className="norcal-eyebrow">Prepare to compete</span>
            <h2>Mandatory training requirements</h2>
            <p>Training must be completed by December 17 at 3:30 PM. Students who do not meet the requirements cannot attend, and no refund will be issued.</p>
          </div>
          <div className="norcal-training-grid">
            {TRAINING.map(([icon, title, text]) => (
              <article className="norcal-training-card" key={title}>
                <Icon name={icon} size={27} color="var(--deca-blue)" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="norcal-date-strip">
            <div><strong>Nov. 17</strong><span>Training orientation</span></div>
            <div><strong>Nov. 18</strong><span>Written presentation workshop</span></div>
            <div><strong>Dec. 2</strong><span>Speed roleplay workshop</span></div>
            <div><strong>Dec. 4</strong><span>Final written submission</span></div>
            <div><strong>Dec. 10 or 17</strong><span>Proctored exam during Access</span></div>
            <div><strong>Jan. 12</strong><span>Pre-conference meeting</span></div>
          </div>
        </div>
      </section>

      <section id="schedule" className="norcal-section norcal-alt">
        <div className="container">
          <div className="norcal-section-heading">
            <span className="norcal-eyebrow">Tentative agenda</span>
            <h2>Three days in Santa Clara</h2>
            <p>Times may change. Watch Google Classroom and attend the pre-conference meeting for the final itinerary.</p>
          </div>
          <div className="norcal-schedule-grid">
            {DAYS.map((day, index) => (
              <article className="norcal-day-card" key={day.day}>
                <div className="norcal-day-number">Day {index + 1}</div>
                <h3>{day.day}</h3>
                <div className="norcal-day-events">
                  {day.events.map(([time, event]) => (
                    <div key={`${time}-${event}`}>
                      <strong>{time}</strong>
                      <span>{event}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="norcal-section">
        <div className="container norcal-info-grid">
          <article className="norcal-info-card">
            <Icon name="bus-front" size={29} color="var(--deca-blue)" />
            <h3>Travel and meals</h3>
            <p>Students will travel by bus from Foothill to the Santa Clara Marriott on Friday and return to Foothill on Sunday. Students may not drive themselves or leave in a private vehicle, taxi, Uber, or Lyft. Meals are not included, so bring a separate food budget.</p>
          </article>
          <article className="norcal-info-card">
            <Icon name="shirt" size={29} color="var(--deca-blue)" />
            <h3>Professional dress</h3>
            <p>Professional attire is required for all three conference days. Every student must have a blazer, sport coat, or suit jacket, along with appropriate dress clothing and dress shoes. The conference dress code is strictly enforced.</p>
          </article>
          <article className="norcal-info-card">
            <Icon name="trophy" size={29} color="var(--deca-blue)" />
            <h3>Competition events</h3>
            <p>Foothill competitors participate in a roleplay event and a prepared event. Review the official DECA guide before choosing events, and select compatible event clusters when possible.</p>
            <a href="https://issuu.com/decainc/docs/deca_guide_2026-2027" target="_blank" rel="noreferrer">
              View the 2026-2027 DECA Guide <Icon name="external-link" size={15} />
            </a>
          </article>
        </div>
      </section>

    </>
  );
}
