import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';


export default function Banner() {
    return (
        <div className={styles.banner}>       
            <div className={styles.bannerContainer}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>Olá Mundo!!</h1>
                    <p className={styles.paragrafo}>Meu nome é Fulano de Tal e este é meu blog pessoal.</p>
                </div>
                <div className={styles.imagens}>
                    <img className={styles.circuloColorido} src={circuloColorido} alt='Circulo Colorido'/>
                    <img className={styles.minhaFoto} src={minhaFoto}  alt='Foto de Perfil'/>
                </div>
            </div>
        </div>
    );
}