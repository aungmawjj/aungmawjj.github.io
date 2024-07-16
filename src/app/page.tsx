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
          <p>Crafting code with passion, I am a software engineer dedicated to mastering technologies.</p>
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
            Continuing to evolve in my career, I actively pursue opportunities to deepen my expertise. I have earned the
            following certifications:
          </p>
          <div className={styles.certificate}>
            <a
              href="https://www.credly.com/badges/1ba39b20-f663-41b9-bef3-74e6a49e963a/public_url"
              target="_block"
              rel="noopener noreferrer"
            >
              <Image
                src={"/ckad-certified-kubernetes-application-developer.png"}
                alt="CKAD Badge"
                priority={false}
                className={styles.badge}
                width={56}
                height={56}
              />
            </a>
            <span>CKAD: Certified Kubernetes Application Developer</span>
          </div>
          <div className={styles.certificate}>
            <a
              href="https://www.credly.com/badges/cac6cb50-e31b-486f-a108-ecb9f997e06c/public_url"
              target="_block"
              rel="noopener noreferrer"
            >
              <Image
                src={"/aws-certified-developer-associate.png"}
                alt="AWS Badge"
                priority={false}
                className={styles.badge}
                width={56}
                height={56}
              />
            </a>
            <span>AWS Certified Developer - Associate</span>
          </div>
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
          <p>I have worked on a number of projects. Let me describe some here!</p>
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
          <h2>Publications</h2>
          <p>I have contributed to several publications in my field. Here is one highlight!</p>
          <ul>
            <li>
              <p>ICS-BlockOpS: Blockchain for operational data security in industrial control system</p>
              <p>Pervasive and Mobile Computing | Oct 2019</p>
            </li>
          </ul>
          <p>
            Please visit my{" "}
            <a
              href="https://scholar.google.com/citations?user=ELCqucwAAAAJ&hl=en"
              target="_block"
              rel="noopener noreferrer"
              className={styles.textLink}
            >
              Google Scholar Profile
            </a>{" "}
            for a complete list of my publications,
          </p>
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
            <li>
              <p>
                <b>Blockchain</b>: Solidity, Go Ethereum, Hyperledger Fabric
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
