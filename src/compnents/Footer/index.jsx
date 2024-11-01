import WhatsApp from "../../assets/whatsapp-icon.png"
import Linkedin from "../../assets/linkedin-icon.png"
import GitImg from "../../assets/github-icon.png"
import {user} from "../../data/user/"
import styles from "./styles.module.css"

export const Footer = () => {

    return(
        <>
        <footer className={styles.footersection}>
            <div>
                <h1 className="title1">Contato</h1>
                <div className={styles.imgIcons}>
                    <a href="">
                        <img src={WhatsApp} alt="#" />
                    </a>
                </div>
            </div>
            <p className="title3">Todos os direitos reservados - {user}</p>
        </footer>
        </>

    )
}