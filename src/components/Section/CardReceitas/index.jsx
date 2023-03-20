import { CardStyled } from "./style";
import IconEntrada from '../../../assets/icons/entrada.png';
import IconSaida from '../../../assets/icons/saida.png';

export function Card( { content } ) {
    return( 
        <CardStyled>
            <img src={content.isTrue ? IconEntrada : IconSaida} className={content.isTrue ? "icon icon-entrada" : "icon - icon-saida"}/>
            <div>
                <h4 className="titulo">{content.title}</h4>
                <p className="receita">{content.receita}</p>
            </div>
            <span className={content.isTrue ? "valor valor-entrada" : "valor valor-saida"}>{content.value}</span>
        </CardStyled>
    )
}