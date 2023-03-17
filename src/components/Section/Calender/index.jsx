import {  ButtonSelectDate, Calender, ContainerDate, ContainerFilter, CalenderSection, BlocoCalender } from "./style";
import ArrowIcon from '../../../assets/icons/arrow.svg';
import CalenderIcon from '../../../assets/icons/calendar-dates.svg'
import { calenderDate } from "../../../util/date";
import dayjs from "dayjs"
import select from "../../../util/select";



export function Calenderario () {
    const DateDay = ["D", "S", "T", "Q", "Q", "S", "S"];

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
                        {DateDay.map((date, index) => <h3 key={index} >{date}</h3>)}
                    </div>
                    <div className="BlocoDay">
                        {calenderDate().map(({date, currentMonth, today}, index) => {
                            return <p key={index} className={select(currentMonth? "" : "days-of-another-month", today? "day-select":"")} >{date.date()}</p>
                        })}
                    </div>
                </Calender>
            </BlocoCalender>
        </CalenderSection>

    )
}