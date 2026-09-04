import { Icon } from "./primitives.jsx";

const REGISTER_URL = "https://bit.ly/fhsdecasharktank";
const GUIDE_URL = "https://drive.google.com/file/d/1ECVZLLyeaPCl1SnxaUnkX2T_3cgC-KzV/view?usp=sharing";

const outcomes = [
  {
    icon: "lightbulb",
    title: "Learn the basics",
    text: "Learn how entrepreneurs identify opportunities, define customer value, and turn problems into business ideas.",
  },
  {
    icon: "panels-top-left",
    title: "Build your concept",
    text: "Work with Foothill DECA mentors to create a Lean Canvas, minimum viable product, and effective pitch deck.",
  },
  {
    icon: "presentation",
    title: "Pitch to the sharks",
    text: "Present your solution to a live panel of judges, answer questions, and compete for DECA glass.",
  },
];

const schedule = [
  {
    day: "Day 1",
    date: "October 5",
    title: "Entrepreneurship Workshop",
    format: "Virtual",
    time: "4:00-6:00 PM",
    text: "Explore entrepreneurship, Lean Canvas, value propositions, MVPs, and the essentials of a strong pitch deck.",
  },
  {
    day: "Day 2",
    date: "October 6",
    title: "Kickoff and Idea Development",
    format: "Foothill High School",
    time: "4:00-6:45 PM",
    text: "Meet your mentors, hear from an experienced entrepreneur, and develop your team's business idea and presentation.",
  },
  {
    day: "Day 3",
    date: "October 7",
    title: "Shark Tank Showcase",
    format: "Foothill High School",
    time: "4:00-6:45 PM",
    text: "Deliver a five-minute pitch, answer questions from the judges, and celebrate at the awards ceremony. Snacks are provided.",
  },
];

const included = [
  "All three days of the Shark Tank Challenge",
  "Entrepreneurship workshops and hands-on activities",
  "Mentorship from experienced Foothill DECA competitors",
  "A keynote from an experienced Pleasanton entrepreneur",
  "Program materials, templates, and pitch deck resources",
  "Live judging and the Day 3 awards ceremony",
];

function ActionLink({ href, children, secondary = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={secondary ? "shark-action secondary" : "shark-action primary"}
    >
      {children}
      <Icon name="arrow-up-right" size={18} />
    </a>
  );
}

export function SharkTankPage() {
  return (
    <>
      <section className="shark-hero">
        <img className="shark-hero-mark" src="/assets/deca-diamond-white.png" alt="" aria-hidden="true" />
        <div className="container shark-hero-grid">
          <div>
            <div className="shark-kicker">October 5-7, 2026</div>
            <h1>Turn your idea into a winning pitch.</h1>
            <p>
              Join Foothill DECA's inaugural Shark Tank Challenge, a three-day entrepreneurship
              experience for students in grades 6-9. No business or DECA experience is required.
            </p>
            <div className="shark-actions">
              <ActionLink href={REGISTER_URL}>Register now</ActionLink>
              <ActionLink href={GUIDE_URL} secondary>View program guide</ActionLink>
            </div>
          </div>
          <div className="shark-hero-photo">
            <img src="/assets/minicon.jpg" alt="Students participating in a Foothill DECA event" />
            <div className="shark-photo-label">
              <Icon name="trophy" size={20} />
              Learn. Build. Pitch. Win.
            </div>
          </div>
        </div>
      </section>

      <section className="shark-facts-wrap">
        <div className="container shark-facts">
          {[
            ["calendar-days", "October 5-7", "Three-day program"],
            ["users", "Grades 6-9", "Open to beginners"],
            ["map-pin", "Virtual + Foothill HS", "Pleasanton, California"],
            ["award", "Live pitch showcase", "Compete for DECA glass"],
          ].map(([icon, value, label]) => (
            <div className="shark-fact" key={value}>
              <Icon name={icon} size={23} color="var(--deca-blue)" />
              <div><strong>{value}</strong><span>{label}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="shark-section">
        <div className="container">
          <div className="shark-section-heading">
            <span>What is Shark Tank?</span>
            <h2>Three days. One big idea.</h2>
            <p>
              Solve a real-world problem, research your idea, build a business presentation,
              and pitch your solution to a panel of judges with support from Foothill DECA mentors.
            </p>
          </div>
          <div className="shark-outcomes">
            {outcomes.map(({ icon, title, text }, index) => (
              <article className="shark-outcome" key={title}>
                <div className="shark-outcome-top">
                  <span>0{index + 1}</span>
                  <Icon name={icon} size={28} color="var(--deca-blue)" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shark-section shark-schedule-section">
        <div className="container">
          <div className="shark-section-heading left">
            <span>Program schedule</span>
            <h2>From first idea to final pitch</h2>
          </div>
          <div className="shark-schedule">
            {schedule.map(({ day, date, title, format, time, text }) => (
              <article className="shark-day" key={day}>
                <div className="shark-day-number">{day}</div>
                <div className="shark-day-content">
                  <div className="shark-day-meta">{date} | {time}</div>
                  <h3>{title}</h3>
                  <div className="shark-day-format"><Icon name="map-pin" size={16} />{format}</div>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shark-section">
        <div className="container shark-registration-grid">
          <div>
            <div className="shark-section-heading left">
              <span>Registration</span>
              <h2>Reserve your spot</h2>
              <p>
                Registration is confirmed after the online form and payment are received.
                Space is limited, so register early to save $16.
              </p>
            </div>
            <div className="shark-pricing">
              <div className="shark-price featured">
                <div className="shark-price-label">Early bird</div>
                <strong>$59</strong>
                <p>Register and submit payment by September 18.</p>
              </div>
              <div className="shark-price">
                <div className="shark-price-label">Regular</div>
                <strong>$75</strong>
                <p>Final registration and payment deadline: September 26.</p>
              </div>
            </div>
          </div>

          <aside className="shark-included">
            <h3>Your registration includes</h3>
            <ul>
              {included.map((item) => (
                <li key={item}><Icon name="check-circle-2" size={19} color="var(--deca-blue)" />{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="shark-section shark-register-section">
        <div className="container shark-register-card">
          <div>
            <span>How to register</span>
            <h2>Ready to enter the tank?</h2>
            <ol>
              <li>Complete the online registration form with the participant and parent information.</li>
              <li>Make a check payable to <strong>Tri-Valley ROP</strong> and write the participant's full name in the memo line.</li>
              <li>Turn in the check to Room A4, Mrs. Raaker's classroom, by the applicable deadline.</li>
            </ol>
            <p className="shark-confirmation">Registration is confirmed once both the form and payment are received.</p>
          </div>
          <div className="shark-register-cta">
            <Icon name="rocket" size={38} color="#fff" />
            <h3>Registration is open</h3>
            <p>Open to all students in grades 6-9.</p>
            <ActionLink href={REGISTER_URL}>Complete the form</ActionLink>
            <a href={GUIDE_URL} target="_blank" rel="noreferrer" className="shark-guide-link">
              Read the complete program guide <Icon name="arrow-up-right" size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="shark-sponsor">
        <div className="container">
          <Icon name="heart-handshake" size={25} color="var(--deca-blue)" />
          <p>Thank you to PPIE for supporting the Foothill DECA Shark Tank Challenge.</p>
        </div>
      </section>
    </>
  );
}
