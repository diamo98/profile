import { h } from "preact"
import style from "./style.css"

const Home = () => {
  const basePath = window.location.hostname.includes("github.io") ? "/dianamoyaosorio.github.io" : ""

  return (
    <div class={style.home}>
      <main class={style.main}>
        <section class={style.intro}>
          <div class={style.profileSection}>
            <img src={`${basePath}/assets/Diana6Gflagship.jpg`} alt="Diana Moya" class={style.profilePicture} />
            <div class={style.profileButtons}>
              <a
                href="https://www.linkedin.com/in/diana-pamela-moya-osorio-508a9b172"
                class={style.roundButton}
                aria-label="LinkedIn"
              >
                <img src={`${basePath}/assets/LI-In-Bug.png`} alt="LinkedIn" class={style.buttonIcon} />
              </a>
              <a
                href="https://scholar.google.ch/citations?hl=de&user=RgcMUu4AAAAJ&view_op=list_works&sortby=pubdate"
                class={style.roundButton}
                aria-label="Google Scholar"
              >
                <img src={`${basePath}/assets/Scholar_logo.svg`} alt="Google Scholar" class={style.buttonIcon} />
              </a>
              <a
                href="https://elliit.se/wp-content/uploads/2023/11/ELLIIT_Recruited_Faculty_catalogue_Diana_MoyaOsorio.pdf"
                class={style.roundButton}
                aria-label="Elliit"
              >
                <img src={`${basePath}/assets/Untitled.png`} alt="Elliit" class={style.buttonIcon} />
              </a>
            </div>
          </div>
          <div class={style.introText}>
            <h1>Diana Pamela Moya Osorio</h1>
            <h2>Associate Professor, Linköping University</h2>
            <p>
              Diana Pamela Moya Osorio is currently Associate Professor at the Communication Systems Division,
              Department of Electrical Engineering, Linköping University, Sweden, and an ELLIIT recruited faculty.
              Previously, she was Senior Research Fellow and Adjunct Professor at the Centre for Wireless
              Communications, University of Oulu, Finland. She received the B.Sc. degree in electronics and
              telecommunications engineering from the Armed Forces University, Ecuador, in 2008, and the M.Sc. and D.Sc.
              degrees in electrical engineering with emphasis on telecommunications and telematics from the University
              of Campinas, Brazil, in 2011 and 2015, respectively. From 2015 to 2022, she was an Assistant Professor
              with the Department of Electrical Engineering, Federal University of São Carlos, Brazil. From 2020 to
              2023, she was also a Postdoctoral Researcher for the Academy of Finland. She has served as TPC and
              reviewer for several journals and conferences. Currently, she is Associate Editor of IEEE Wireless
              Communications Letters, IEEE Communication Letters, and IEEE Transactions on Information Forensics &
              Security. She also serves as working group leader for Trustworthy 6G at the Cost Action 6G-PHYSEC. Her
              research interests include wireless communications in general, signal processing for wireless
              communications, physical layer security, and integrated sensing and communications.
            </p>
          </div>
        </section>
        <section class={style.highlights}>
          <h2>Research Highlights</h2>
          <div class={style.highlightWrapper}>
            <div class={style.highlightGrid}>
              <ResearchHighlight
                title="Physical layer security and privacy (PLS)"
                description="Physical Layer Security is a security approach that operates directly on wireless signals, leveraging the unique characteristics of the propagation channel and hardware as sources of entropy to ensure confidentiality, integrity, and authentication."
                imageUrl={`${basePath}/assets/pls.jpg`}
                link="https://liu.se/en/research/physical-layer-security-in-massive-mimo"
              />
              <ResearchHighlight
                title="Integrated Sensing and Communications (ISAC)"
                description="One of the most promising features that will be integral part of the next generation of wireless mobile networks, 6G, is the integration of sensing functionality."
                imageUrl={`${basePath}/assets/isac.jpg`}
                link="https://liu.se/en/research/isac"
              />
            </div>
          </div>
        </section>
      </main>
      <footer class={style.footer}>
        <p>&copy; 2025 Diana Moya. All rights reserved.</p>
      </footer>
    </div>
  )
}

const ResearchHighlight = ({ title, description, imageUrl, link }) => {
  return (
    <a href={link} class={style.highlight} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl || "/placeholder.svg"} alt={title} class={style.highlightImage} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  )
}

export default Home













