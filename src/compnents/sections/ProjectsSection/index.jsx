import { projects } from "../../../data/projects";
import GitImg from "../../../assets/git-icon.png";
import styles from "./../ProjectsSection/ProjectCard/styles.module.css";



export const ProjectsCard = () => {
    return (
        <>
        <section className={styles.projectCardSection}>
            <h1 className="title1">Vagas Disponíveis</h1>
            <div className={styles.cardContainer}>
            {
            projects.map((project) => {
                return(
                    
                    <div key={project.name} className="projectCardContainer">
                        <li id="vagas" className="projectCard" >
                            <div className={styles.cardheader}><p className="nameProj">{project.name}</p>
                            <p className="nameProj">
                                <img className={styles.projectimg} src={project.img} alt="" /></p>
                            </div>
                            <p className="descriptionProj">{project.description0}</p>
                            <p className="descriptionProj">{project.description1}</p>
                            <p className="descriptionProj">{project.description2}</p>
                            <p className="descriptionProj">{project.description3}</p>
                            <a className="aboutProj" href="#">Increva-se</a>
                                                 
                        </li>
                        
                    </div>
                )
            })
            }
            </div>
        </section>
      </>
    );
  };

