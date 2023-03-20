import {  ButtonSelectDate, Calender, ContainerDate, ContainerFilter, CalenderSection, BlocoCalender, HeaderDescription, DaySelectCurrent, BlocoCurrentDate, ContainerDayEvents, ContainerMoviment, ContainerReceitas, DescriptionCurrentDay} from "./style";
import CalenderIcon from '../../../assets/icons/calendar-dates.svg';
import { calenderDate, cardDate, months, years } from "../../../util/date";
import IconMoviment from '../../../assets/icons/movimentacoes.svg';
import dayjs from "dayjs";
import select from "../../../util/select";
import { useState } from "react";
import { Card } from "../CardReceitas";

export function Calenderario ( ) {
    const DateDay = ["D", "S", "T", "Q", "Q", "S", "S"];
    const currentDay = dayjs();
    const [daySelect, setDaySelect] = useState(currentDay);
    const [card, setCard] = useState(cardDate);
    const amountMovements = card.length;
    const [btnState, SetBtnState] = useState({
        buttonActive: null,
        buttons: [{ button: "Hoje"},{ button: "Esta Semana"},{ button: "Este mês"}]
    });

    function handleSelectMonth (e) {
        setDaySelect(daySelect.month(e.target.value));
    }

    function handleSelectYear(e) {
        setDaySelect(daySelect.year(e.target.value));
    }

    function handleButtonActive(index) {
        setDaySelect(currentDay)
        SetBtnState({...btnState, buttonActive: btnState.buttons[index]})
    }

    return (
        <CalenderSection>
            <BlocoCalender>
                <ContainerFilter>
                {btnState.buttons.map((item, index) => {
                return (
                    <button 
                        key={index} 
                        className={btnState.buttons[index] === btnState.buttonActive ? "active" : ""} 
                        onClick={() => handleButtonActive(index)}>{item.button}
                    </button>)})}
                </ContainerFilter>
                <ContainerDate>
                    <ButtonSelectDate>
                        <p className="name-date">Mês</p>
                        <div className="select">
                            <img src={CalenderIcon}/>
                            <select value={daySelect.month()} onChange={handleSelectMonth}>
                                {months.map((item, index) => {
                                    return <option key={index}  value={item.id}>{item.month}</option>
                                })}
                            </select>
                        </div>
                    </ButtonSelectDate>
                    <ButtonSelectDate>
                    <p className="name-date">Ano</p>
                    <div className="select">
                            <img src={CalenderIcon}/>
                            <select value={daySelect.year()} onChange={handleSelectYear}>
                                {years.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })}
                            </select>
                    </div>
                    </ButtonSelectDate>
                </ContainerDate>
                <Calender>
                    <div className="BlocoDateTitle">
                        {DateDay.map((date, index) =><h3 key={index} >{date}</h3>)}
                    </div>
                    <div className="BlocoDay">
                        {calenderDate(daySelect.month(), daySelect.year()).map(({date, currentMonth, today}, index) => {
                            return <p 
                                key={index} 
                                className={select(currentMonth? "" : "days-of-another-month", 
                                today? "day-select":"",
                                date.date() === 10 ? "day-event" : "",
                                daySelect.toDate().toDateString() === date.toDate().toDateString() ? "clicked-day" : "",
                            )} 
                            onClick={()=> setDaySelect(date)}>{date.date()}</p>
                        })}
                    </div>
                </Calender>
            </BlocoCalender>
            <div>
                {currentDay.date() === daySelect.date() ? (
                    <DescriptionCurrentDay>
                        <DaySelectCurrent>
                            <h3 className="title">Legenda</h3>
                            <BlocoCurrentDate>
                                <span className="dia-atual">{currentDay.date()}</span>
                                <p className="hoje">Hoje</p>
                            </BlocoCurrentDate>
                            <ContainerDayEvents>
                                <div>
                                    <p className="dia-com-eventos entradas">11</p>
                                </div>
                                <p className="nome-evento">Data com previsão de entradas</p>
                            </ContainerDayEvents>
                            <ContainerDayEvents>
                                <div>
                                <p className="dia-com-eventos saidas">19</p>
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
                    </DescriptionCurrentDay>
                ): (
                    <div>
                        <HeaderDescription >
                            <img src={IconMoviment} /> 
                            <h3 className="title-description">Movimentações de {[daySelect.date()]}/{[daySelect.month() + 1]}/{[daySelect.year()]} </h3>
                            {daySelect.date() === 10 ? <span className="amount-movements">{amountMovements}</span> : <span className="amount-movements">0</span>}
                        </HeaderDescription>
                        <ContainerMoviment>
                            <ContainerReceitas>
                                {daySelect.date() === 10 ? (
                                    <>
                                    {card.map((item) => {return (<Card content={item} key={item.id}/>)})}
                                    </>
                                ) : <p className="description-moviment">Não tem nenhuma movimentação para esse dia.</p>}
                            </ContainerReceitas>
                        </ContainerMoviment>
                    </div>
                )}
            </div>
        </CalenderSection>
    )
}