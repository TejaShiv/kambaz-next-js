export default function YourForm() {
  return (
    <div>
      <h4>Student Profile</h4>
      <form id="wd-your-form">
        <h5>Name and ID</h5>
        <label htmlFor="wd-your-first-name">First name: </label>
        <input type="text" id="wd-your-first-name" defaultValue="Tejas" />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>
        <input type="text" id="wd-your-last-name" defaultValue="Shivaprasad" />
        <br />
        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input type="password" id="wd-your-student-id" defaultValue="00XXXXXXX" />
        <br />

        <h5>Why I am taking this course</h5>
        <label htmlFor="wd-your-bio">Bio: </label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={40}
          rows={5}
          defaultValue="I came into this program from a Python background and I want to be able to build and ship a full web application end to end, not just the logic behind it. I have built a self-paced learning portal and an agentic test-repair system on my own, and this course is the piece I am missing."
        />
        <br />

        <h5>Class standing</h5>
        <input type="radio" name="your-standing" id="wd-your-standing-grad" defaultChecked />
        <label htmlFor="wd-your-standing-grad">Graduate</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-standing-senior" />
        <label htmlFor="wd-your-standing-senior">Senior</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-standing-junior" />
        <label htmlFor="wd-your-standing-junior">Junior</label>
        <br />

        <h5>Enrollment</h5>
        <input type="radio" name="your-enrollment" id="wd-your-fulltime" defaultChecked />
        <label htmlFor="wd-your-fulltime">Full-time</label>
        <br />
        <input type="radio" name="your-enrollment" id="wd-your-parttime" />
        <label htmlFor="wd-your-parttime">Part-time</label>
        <br />

        <h5>Interests</h5>
        <input type="checkbox" name="your-interests" id="wd-your-int-python" defaultChecked />
        <label htmlFor="wd-your-int-python">Python</label>
        <br />
        <input type="checkbox" name="your-interests" id="wd-your-int-ml" defaultChecked />
        <label htmlFor="wd-your-int-ml">Machine learning</label>
        <br />
        <input type="checkbox" name="your-interests" id="wd-your-int-web" defaultChecked />
        <label htmlFor="wd-your-int-web">Web development</label>
        <br />
        <input type="checkbox" name="your-interests" id="wd-your-int-cloud" />
        <label htmlFor="wd-your-int-cloud">Cloud infrastructure</label>
        <br />

        <h5>Major</h5>
        <label htmlFor="wd-your-major">Major: </label>
        <br />
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="CY">Cybersecurity</option>
          <option value="EE">Electrical Engineering</option>
        </select>
        <br />

        <h5>Topics to deepen this term</h5>
        <label htmlFor="wd-your-topics">Topics: </label>
        <br />
        <select multiple id="wd-your-topics" defaultValue={["REACT", "MONGO"]}>
          <option value="REACT">React and Next.js</option>
          <option value="CSS">CSS and Tailwind</option>
          <option value="EXPRESS">Express APIs</option>
          <option value="MONGO">MongoDB</option>
          <option value="AUTH">Authentication</option>
        </select>
        <br />

        <h5>Details</h5>
        <label htmlFor="wd-your-email">School email: </label>
        <input
          type="email"
          id="wd-your-email"
          defaultValue="shivaprasad.t@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue="2027"
          min={2026}
          max={2032}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input type="date" id="wd-your-start-date" defaultValue="2025-09-01" />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited I am about this course (0 to 10):{" "}
        </label>
        <input
          type="range"
          id="wd-your-excitement"
          defaultValue="8"
          min="0"
          max="10"
        />
        <br />

        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}