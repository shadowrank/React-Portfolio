import styles from "./description.module.css";
import Reveal from "../../resources/fonts/gasp/reveal.jsx";
export default function Description() {
  return (
    <div>
      <img className={styles.logo} src="./logo.png"></img>
      <div className={styles.grid}>
        <div className={styles.ysar}>
          <Reveal>
            <div className={styles.salut}>
              Driven by a Spark <br /> of Curiosity,
              <br />
            </div>
          </Reveal>
          <div>
            I was ignited by a spark of curiosity as a child, mesmerized by the
            sight of my father immersed in his PC. The thrill of turning the
            computer on and off was a gateway to a world of endless
            possibilities. This early fascination became a driving force in my
            life, shaping my path as a software engineer committed to exploring
            and pushing the boundaries of technology.
          </div>
        </div>
        <div className={styles.ymin}>
          <div>
            Hey, it's me again,<Reveal style={{display: "inline"}}> <span style={{ fontWeight: 800 }}>RAYENE</span> </Reveal>              <br />
            <br />
            <br />
            As a dedicated software engineer, I bring a diverse set of skills
            and a passion for innovation to every project. My expertise spans a
            range of programming languages and technologies, enabling me to
            tackle complex challenges with precision and creativity. <br /> <br /> <br /> I am
            currently diving into the world of AI and machine learning, driven
            by a fascination with how these technologies can reshape our future.
            My commitment to learning and growth was demonstrated during a
            recent machine learning hackathon, where my team secured 4th place,
            showcasing our ability to apply cutting-edge techniques in a
            competitive environment. <br /> <br /> <br /> In addition to my technical skills, I am
            continually exploring new technologies and methodologies to enhance
            my capabilities and deliver impactful solutions. My portfolio
            features a variety of projects that highlight my proficiency in
            software development and my drive to push the boundaries of what's
            possible.
          </div>
        </div>
        <div className={styles.section}>About me</div>
      </div>
    </div>
  );
}
