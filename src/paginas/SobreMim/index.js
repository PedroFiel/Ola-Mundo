import PostModelo from "components/PostModelo";
import styles from "./SobreMim.module.css";

import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Pedro!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Olá! Sou desenvolvedor de Front-end Shopify na Shakers Agência e estou feliz em compartilhar um pouco da minha trajetória com você. Minha história com a programação começou no Ensino Médio, quando cursei o ensino médio integrado ao curso de Informática. Durante esse período, aprendi lógica de programação e o básico de várias linguagens, como C, JavaScript e Java, embora sem me aprofundar muito em cada uma delas. Sempre gostei de estudar programação, mas na época não imaginava que trabalharia com isso no futuro.</p>

            <p className={styles.paragrafo}>No ensino superior, escolhi cursar Engenharia da Computação no Centro Universitário Adventista de São Paulo (UNASP). Foi lá que comecei a me aprofundar em conceitos que eram apresentados em sala de aula. Pouco tempo depois, tive minha primeira experiência como desenvolvedor front-end, realizando a manutenção de sites já existentes e tendo a oportunidade de liderar projetos dentro da empresa. Essa experiência me proporcionou um grande aprendizado enquanto codificava.</p>

            <p className={styles.paragrafo}>Com o tempo, fui crescendo na área e tive a oportunidade de ser efetivado, o que me permitiu liderar um squad dentro da empresa onde trabalho. Além disso, faço parte do único curso de Shopify em português do Brasil, onde dou aulas de Shopify para desenvolvedores.</p>

            <p className={styles.paragrafo}>Desde então, tem sido uma jornada de constantes aprendizados. Hoje, sou muito feliz por ter a oportunidade de crescer e mostrar meu trabalho a cada dia. Além de poder aprender novas linguagens como o React</p>
        </PostModelo>
    )
}