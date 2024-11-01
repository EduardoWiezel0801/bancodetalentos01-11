import {Header} from "../../compnents/Header"
import {BunnerSection} from "../../compnents/sections/BunnerSection"
import { AboutMeSection } from "../../compnents/sections/AboutMeSection"
import { TecnologiesCard} from "../../compnents/sections/TechSection"
import {ProjectsCard} from "../../compnents/sections/ProjectsSection"
import { Footer } from "../../compnents/Footer"

import "../../styles/index.css"

export const LandingPage = () => {
    return(
    <>
     <main className="containerMain">
    <Header />
   
    <BunnerSection />
    <AboutMeSection />
    <TecnologiesCard />
    <ProjectsCard />
    <Footer />  
    </main>
</>
    )
    

}