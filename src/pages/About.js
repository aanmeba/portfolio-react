import HelmetConfig from "../components/HelmetConfig";

const About = () => {
  return (
    <main className="main-section">
      <HelmetConfig pageLocation="About" />
      <h1 className="page-title">about</h1>
      <section className="about-content">
        <h2 className="big">🙋‍♀️Hi there,</h2>
        <p>
          I am <span className="text-point">Jungah</span>, a junior full-stack
          developer living in Sydney.
        </p>
        <p>
          I know it is hard to pronounce my name for some of you. It's a similar
          pronunciation with "young", so just change the "y" to "j", then add
          "ah!". Thank you so much for calling me by my name :)
        </p>
        <p>
          I majored in <span className="text-point">philosophy</span> and had an
          internship in a French designer's brand head office, a government
          tourism agency, and a global{" "}
          <span className="text-point">human rights</span> organisation in Korea
          to discover my vocation.
        </p>
        <p>
          Then I worked at the organisation as a campaigning coordinator
          developing creative public and digital campaigns and enjoyed swing
          dancing until coming to 🛬
          <span className="text-point">Australia</span>.
        </p>
        <p>
          I've worked as a freelance translator in Australia for the last 2
          years, and finally, I am learning{" "}
          <span className="text-point">coding</span> to become a{" "}
          <span className="text-point">full-stack developer!</span>
        </p>
        <p>
          I love <span className="text-point">running</span> and trail running!
          You are welcome to join me anytime!
        </p>

        <h2 className="big">💻Tech Stack</h2>
        <div className="tech-skills">
          <div className="as-is">
            <p>As is:</p>
            <ul>
              <li>🌿 HTML/CSS</li>
              <li>🌿 JavaScript</li>
              <li>🌱 jQuery</li>
              <li>🌱 Node.js</li>
              <li>🌱 Express</li>
              <li>🌱 MySQL</li>
              <li>🌱 Webpack</li>
            </ul>
          </div>
          <div className="to-be">
            <p>To be:</p>
            <ul>
              <li>🍉 HTML/CSS</li>
              <li>🍈 JavaScript</li>
              <li>🍎 TypeScript</li>
              <li>🍌 React</li>
              <li>🍓 Express</li>
              <li>🍊 Ruby (on Rails)</li>
              <li>🍒 MongoDB</li>
            </ul>
          </div>
        </div>

        <h2 className="big">📃Resume</h2>
        <p>
          Find more details in my latest resume (pdf){" "}
          <a href="../file/JungahAhn_resume.pdf" target="_blank">
            here
          </a>
          .
        </p>

        <h2 className="big">📧Contact</h2>
        <p>Feel free to contact me using the form below.</p>
        <p>
          If this form doesn't work, please contact me via email:{" "}
          <a href="mailto:gcas022106@coderacademy.edu.au">
            gcas022106@coderacademy.edu.au
          </a>
        </p>

        <div className="contact-form">
          <hr />
          <form action="#">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name"
              required
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name"
            />

            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
            />

            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="Send" />
          </form>
          <hr />
        </div>
      </section>
    </main>
  );
};

export default About;
