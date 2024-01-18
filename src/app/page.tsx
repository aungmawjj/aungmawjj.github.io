import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.namecard}>
        <div className={styles.portraitBox}>
          <Image
            src={"/portrait.jpeg"}
            alt="My Portrait"
            className={styles.portrait}
            fill
            priority
          />
        </div>
        <h2 className={styles.name}>Aung Maw</h2>
        <h3 className={styles.title}>Software Engineer</h3>
        <Contact />
      </div>

      <div className={styles.about}>
        <h1 className={styles.hello}>Hello!</h1>
        <p>
          Crafting code with passioin, I&apos;m a full-stack software engineer
          dedicated to mastering technologies.
        </p>
        <p>
          At DBS Bank, I orchestrated the deployment of Apache Spark Clusters,
          designed REST APIs with FastAPI and Spring Boot, and optimized
          performance through innovative solutions.
        </p>
        <p>
          My journey also includes blockchain development at SUTD, earning
          awards in national and international challenges.
        </p>
      </div>

      <div className={styles.bottomBar}>
        <Contact />
      </div>
    </main>
  );
}

function Contact() {
  return (
    <div className={styles.contact}>
      <a
        href="https://github.com/aungmawjj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/github-logo.svg"}
          alt="Github URL"
          className={styles.logo}
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/aungmawjj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/linkedin-logo.svg"}
          alt="Linkedin URL"
          className={styles.logo}
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}
