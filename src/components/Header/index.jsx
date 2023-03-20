import Logo from '../../assets/Logo.svg';
import Menu from '../../assets/icons/menu.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Comment from '../../assets/icons/comment.svg';
import File from '../../assets/icons/file.svg';
import Volume from '../../assets/icons/volume.svg';
import { AsideContainer, ButtonMenu, ContainerSection, Footer, GridContainer, HeaderContainer, ListAside } from './style';
import { SectionCalender } from '../Section';


export function Header() {
    return (
        <GridContainer>
            <HeaderContainer>
                <img src={Logo}/>
                <h2 className="header-title">Página inicial</h2>
                <ButtonMenu><img src={Menu}/></ButtonMenu>
            </HeaderContainer>
            <AsideContainer>
                <ListAside>
                    <a href="#"><img src={Calendar}/></a>
                    <a href="#"><img src={Volume}/></a>
                    <a href="#"><img src={Comment}/></a>
                    <a href="#"><img src={File}/></a>
                </ListAside>
            </AsideContainer>
            <ContainerSection>
                <SectionCalender />
            </ContainerSection>

            <Footer>
                <p className='descricao-footer'>Desenvolvido por <span className='destaque'>Delta Code LTDA® 2023</span></p>
            </Footer>
        </GridContainer>
    )
}