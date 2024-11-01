import styles from "./styles.module.css";



export const Header = () => {
  return(
    <>    
    < header className={styles.header}>
      <div>
        <h3 className="titleHeader">Banco de Talentos</h3>
      </div>
      <div className={styles.menu}>
        <a className="aboutProj" href="#aboutsection">Sobre nós</a>
        <a className="aboutProj" href="#vagas">Vagas</a>
        <a className="aboutProj" href="#parceiros">Parceiros</a>
      </div>

      <a href="https://www.prefeiturabancodetalentos.com.br/register/" target="_blank">
        <button className="btnContato">
        Inscreva-se
        </button>
      </a>
    </header>
    </>

  )
}
