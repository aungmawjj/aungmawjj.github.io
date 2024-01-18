import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
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
        <div className={styles.section}>
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

        <div className={styles.section}>
          <h2>Certificates</h2>
          <ul>
            <li>
              <p>Certified Kubernetes Application Developer</p>
            </li>
            <li>
              <p>AWS Certified Developer - Associate</p>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Awards</h2>
          <ul>
            <li>
              <p>First Price, Blockchain Innovation Challenge</p>
              <p>PIEChain | Singapore, Dec 2021</p>
            </li>
            <li>
              <p>First Price, National Blockchain Challenge, </p>
              <p>BlockBuster | Singapore, Jun 2019</p>
            </li>
            <li>
              <p>First Price, Asian ICT Awards, Ubud-Bali</p>
              <p>ICS-BlockOps | Indonesia, Dec 2018PIEChain</p>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Projects</h2>
          <p>
            I&apos;ve worked on a number of projects. Let me describe some here!
          </p>
          <ul>
            <li>
              <p>
                <a
                  href="https://aungmawjj.github.io/juria-blockchain"
                  target="_block"
                  rel="noopener noreferrer"
                  className={styles.textLink}
                >
                  Juria Blockchain
                </a>{" "}
                - Consortium Blockchain with the Hotstuff consensus mechanism
                and transaction-based state machine.
              </p>
              <ul className={styles.nested}>
                <li>
                  Hands-on Consensus, Merkle-tree, Byzantine Fault Tolerance,
                  Auto Recovery
                </li>
                <li>
                  Automated testing the system on AWS VM cluster to verify
                  Safety, Liveness and Performance
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Top Skills</h2>
          <ul>
            <li>
              <p>Python, Java, Javascript, Golang, Bash</p>
            </li>
            <li>
              <p>FastAPI, PySpark, Spring-Boot, React, Echo</p>
            </li>
            <li>
              <p>
                Apache-Spark, Kafka, Docker, Kubernetes, AWS, Blockchain, Git
              </p>
            </li>
            <li>
              <p>MongoDB, PostgresDB, DynamoDB, InfluxDB</p>
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
