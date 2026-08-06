import styles from "./AboutMe.module.scss";
import { aboutSection } from "@/content/about-me";

export default function AboutMe() {
  const { about, capabilities } = aboutSection;

  return (
    <section id="about-me" className={styles.aboutMeContainer}>
      <div className={styles.aboutMeContent}>
        <h2 className={styles.sectionTitle}>{about.title}</h2>
        <h3 className={styles.sectionSubtitle}>{about.subTitle}</h3>
        <p className={styles.sectionDescription}>{about.description}</p>
      </div>
      <div className={styles.aboutMeSkills}>
        <h2 className={styles.sectionTitle}>{capabilities.title}</h2>
        <p className={styles.sectionDescription}>{capabilities.description}</p>
        <div className={styles.skillsContainer}>
          {capabilities.skills.map((skill) => (
            <span
              key={skill.label}
              className={styles.skillTag}
              style={
                { "--skill-hover-color": skill.color } as React.CSSProperties
              }
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
