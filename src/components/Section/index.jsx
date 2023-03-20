import {SectionContainer, HeaderProfile, HeaderCalender } from "./style";
import Profile from '../../assets/icons/profile.svg'
import { Calenderario } from "./Calender";


export function SectionCalender () {
    return (
        <SectionContainer>
            <HeaderCalender>
                <p>Bom dia, Luiz !</p>
               <HeaderProfile className="profile">
                    <img src={Profile}/>
                    <div>
                        <h3 className="name">Luiz Antônio Neto</h3>
                        <p className="company">Delta Code Ltda</p>
                    </div>
                </HeaderProfile>
            </HeaderCalender>
            <Calenderario />
        </SectionContainer>
    )
}