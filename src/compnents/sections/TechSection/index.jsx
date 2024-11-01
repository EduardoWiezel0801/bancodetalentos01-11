import { technologies } from "../../../data/technologies";
import styles from "./TechList/styles.module.css"

export const TecnologiesCard = () => {
    return (
        <>
        <section id="parceiros" className={styles.cardContainer} >
            <h1 className="title1">Empresas parceiras:</h1>
            <div className={styles.cardSection}>
            {
                technologies.map((tech) => {
                    return(

                        
                        <li key={tech.name} className="techcard">
                            <img className={styles.cardimg} src={tech.img} />
                            <p className="techName" >{tech.name}</p>        
                        </li>
                        
                    )
                })

            }
            </div>
        </section>
      </>
    );
  };


