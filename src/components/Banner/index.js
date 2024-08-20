import styles from './Banner.module.css';
// import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpeg';


export default function Banner() {
    return (
        <div className={styles.banner}>       
            <div className={styles.bannerContainer}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>Olá Mundo!!</h1>
                    <p className={styles.paragrafo}>Bem-vindo ao meu espaço pessoal! Eu sou Pedro de Freitas Fiel, desenvolvedor front-end. Este projeto é dedicado ao aprendizado de React, com um foco especial no uso de Routers. Espero que você goste!
                    </p>
                </div>
                <div className={styles.imagens}>
                    {/* <img className={styles.circuloColorido} src={circuloColorido} alt='Circulo Colorido'/> */}
                    <img className={styles.minhaFoto} src={minhaFoto}  alt='Foto de Perfil'/>
                </div>
            </div>
        </div>
    );
}