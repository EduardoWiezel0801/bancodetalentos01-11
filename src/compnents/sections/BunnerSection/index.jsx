import BunnerImg from "../../../assets/bunnersection.png"
import {user} from "../../../data/user/"
import styles from "./styles.module.css";

export const BunnerSection = () => {

    return (
        <section className={styles.bunnerSection}>
            <div className={styles.bunnerContainer}>
                          
                <h1 className="title1"> Bem vindo ao Banco de Talentos</h1>        
                <p className={styles.bunnerContainer}> 
                    <span>Nosso banco de talentos está sempre em busca de novos profissionais. Inscreva-se em nossa plataforma para que seu currículo possa ser visualizado pelas empresas parceiras da sua cidade.</span>
                    <span>Ou leve seu currículo à Feira de Desenvolvimento de Santa Rosa de Viterbo, que acontecerá nos dias 07 e 08 de novembro, e faremos isso junto com você.</span>
                </p>
                <div className={styles.bunnerbottons}>
                    <a href="https://santarosa.sp.gov.br/noticiasView/?id=2847" target="_blank">
                        <button className="btnContato"> Feira de desenvolvimento </button>
                    </a>
                    <a href="https://www.prefeiturabancodetalentos.com.br/register/" target="_blank">
                        <button className="btnContato">
                            Inscreva-se
                        </button>
                    </a>
                </div>
            </div>
            <div>
                <img className={styles.bunnerimg} src= {BunnerImg} alt="#" />
                
            </div>
        </section> 
    )
}    