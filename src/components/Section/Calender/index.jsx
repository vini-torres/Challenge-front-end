import {  ButtonSelectDate, Calender, ContainerDate, ContainerFilter, CalenderSection, BlocoCalender, CalenderDescription, HeaderDescription, ReceitasContainer, CardReceita, DaySelectCurrent, BlocoCurrentDate, ContainerDayEvents } from "./style";
import ArrowIcon from '../../../assets/icons/arrow.svg';
import CalenderIcon from '../../../assets/icons/calendar-dates.svg';
import { calenderDate } from "../../../util/date";
import IconMoviment from '../../../assets/icons/movimentacoes.svg';
import IconEntrada from '../../../assets/icons/entrada.png';
import IconSaida from '../../../assets/icons/saida.png';
import dayjs from "dayjs";
import select from "../../../util/select";
import { useState } from "react";


export function Calenderario (  ) {
    const DateDay = ["D", "S", "T", "Q", "Q", "S", "S"];
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]

    const currentDay = dayjs();
    const [daySelect, setDaySelect] = useState(currentDay);
    const amountMovements = 0;

    return (
        <CalenderSection>
            <BlocoCalender>
                <ContainerFilter>
                    <button>Hoje</button>
                    <button>Esta semana</button>
                    <button className="active">Este mês</button>
                </ContainerFilter>
                <ContainerDate>
                    <ButtonSelectDate>
                        <p className="name-date">Mês</p>
                        <button><img src={CalenderIcon}/> Janeiro <img src={ArrowIcon} className='arrow'/></button>
                    </ButtonSelectDate>
                    <ButtonSelectDate>
                        <p className="name-date">Ano</p>
                        <button><img src={CalenderIcon}/>  2023 <img src={ArrowIcon} className='arrow'/></button>
                    </ButtonSelectDate>
                </ContainerDate>
                <Calender>
                    <div className="BlocoDateTitle">
                        {DateDay.map((date, index) =><h3 key={index} >{date}</h3>)}
                    </div>
                    <div className="BlocoDay">
                        {calenderDate().map(({date, currentMonth, today}, index) => {
                            return <p 
                                key={index} 
                                className={select(currentMonth? "" : "days-of-another-month", 
                                today? "day-select":"",
                                daySelect.toDate().toDateString() === date.toDate().toDateString() ? "clicked-day" : "",
                            )} 
                            onClick={()=> setDaySelect(date)}>{date.date()}</p>
                        })}
                    </div>
                </Calender>
            </BlocoCalender>
            <CalenderDescription>
                <ReceitasContainer>
                    {currentDay.date() === daySelect.date() && (
                        <DaySelectCurrent>
                            <h3 className="title">Legenda</h3>
                            <BlocoCurrentDate>
                                <span className="dia-atual">{currentDay.date()}</span>
                                <p className="hoje">Hoje</p>
                            </BlocoCurrentDate>
                            <ContainerDayEvents>
                                <div>
                                    <p className="dia-com-eventos entrada">11</p>
                                </div>
                                <p className="nome-evento">Data com previsão de entradas</p>
                            </ContainerDayEvents>
                            <ContainerDayEvents>
                                <div>
                                    <p className="dia-com-eventos saida">19</p>
                                </div>
                                <p className="nome-evento">Data com previsão de saídas</p>
                            </ContainerDayEvents>
                            <ContainerDayEvents>
                                <div>
                                    <p className="dia-com-eventos duplo-evento">10</p>
                                </div>
                                <p className="nome-evento">Data com previsão de entradas e saídas</p>
                            </ContainerDayEvents>
                        </DaySelectCurrent>
                    )}
                </ReceitasContainer>
            </CalenderDescription>
        </CalenderSection>
    )
}