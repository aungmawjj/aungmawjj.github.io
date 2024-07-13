import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.namecard}>
        <div className={styles.portraitBox}>
          <Image src={"/portrait.jpeg"} alt="My Portrait" className={styles.portrait} fill priority />
        </div>
        <h2 className={styles.name}>Aung Maw</h2>
        <h3 className={styles.title}>Software Engineer</h3>
        <Contact />
      </div>

      <div className={styles.about}>
        <div className={styles.section}>
          <h1 className={styles.hello}>Hello!</h1>
          <p>Crafting code with passion, I&apos;m a software engineer dedicated to mastering technologies.</p>
          <p>
            At DBS Bank, I orchestrated the deployment of Apache Spark Clusters, designed REST APIs with FastAPI and
            Spring Boot, and optimized performance through innovative solutions.
          </p>
          <p>
            My journey also includes blockchain development at SUTD, earning awards in national and international
            challenges.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Professional Enhancement</h2>
          <p>
            Continuing to evolve in my career, I actively pursue opportunities to deepen my expertise. I&apos;ve earned
            the following certifications:
          </p>
          <ul>
            <li>
              <p><b>CKAD</b>: Certified Kubernetes Application Developer</p>
            </li>
            <li>
              <p><b>AWS</b> Certified Developer - Associate</p>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Achievements</h2>
          <ul>
            <li>
              <p>First Price, Blockchain Innovation Challenge</p>
              <p>PIEChain | Singapore, Dec 2021</p>
            </li>
            <li>
              <p>First Price, National Blockchain Challenge</p>
              <p>BlockBuster | Singapore, Jun 2019</p>
            </li>
            <li>
              <p>First Price, Asian ICT Awards</p>
              <p>ICS-BlockOps | Indonesia, Dec 2018</p>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Projects</h2>
          <p>I&apos;ve worked on a number of projects. Let me describe some here!</p>
          <ul>
            <li>
              <p className={styles.projectDesc}>
                <a
                  href="https://github.com/aungmawjj/mypaste"
                  target="_block"
                  rel="noopener noreferrer"
                  className={styles.textLink}
                >
                  <b>My Paste</b>
                </a>{" "}
                | 2024 - Quick copy and paste across devices.
              </p>
              <ul className={styles.nested}>
                <li>
                  Full-stack development: Responsive Single Page App using React.js and REST API service using Golang,
                  Real-time message syncing using Redis Stream.
                </li>
                <li>CI/CD: Github workflow to build and deploy containerized app on AWS.</li>
              </ul>
            </li>
            <li>
              <p className={styles.projectDesc}>
                <a
                  href="https://aungmawjj.github.io/juria-blockchain"
                  target="_block"
                  rel="noopener noreferrer"
                  className={styles.textLink}
                >
                  <b>Juria Blockchain</b>
                </a>{" "}
                | 2020 - Consortium Blockchain with the Hotstuff consensus mechanism and transaction-based state
                machine.
              </p>
              <ul className={styles.nested}>
                <li>Hands-on Consensus, Merkle-tree, Byzantine Fault Tolerance, Auto Recovery</li>
                <li>Automated testing the system on AWS VM cluster to verify Safety, Liveness and Performance</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Tech Stack</h2>
          <ul>
            <li>
              <p>
                <b>Frontend</b>: Typescript, Angular, React
              </p>
            </li>
            <li>
              <p>
                <b>Backend</b>: Python, Java, Golang, FastAPI, Spring-Boot, Echo
              </p>
            </li>
            <li>
              <p>
                <b>Data</b>: MongoDB, Redis, MariaDB, Apache-Spark, Kafka, Spark SQL
              </p>
            </li>
            <li>
              <p>
                <b>CI/CD</b>: Docker, Openshift, Git, Bitbucket, Release Jira, Jenkins, Bash
              </p>
            </li>
            <li>
              <p>
                <b>Observability</b>: Grafana, Logstash, Kibana
              </p>
            </li>
          </ul>
        </div>
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
      <a href="mailto:aungmawjj12@gmail.com" target="_blank" rel="noopener noreferrer">
        <Image src={"/gmail-logo.svg"} alt="Gmail" priority={false} className={styles.logo} width={32} height={32} />
      </a>
      <a href="https://github.com/aungmawjj" target="_blank" rel="noopener noreferrer">
        <Image
          src={"/github-logo.svg"}
          alt="Github URL"
          priority={false}
          className={styles.logo}
          width={32}
          height={32}
        />
      </a>
      <a href="https://www.linkedin.com/in/aungmawjj" target="_blank" rel="noopener noreferrer">
        <Image
          src={"/linkedin-logo.svg"}
          alt="Linkedin URL"
          priority={false}
          className={styles.logo}
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}
