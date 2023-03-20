import styled from "styled-components";

export const CalenderSection = styled.div `
    display: flex;
    gap: 6rem;
`

export const BlocoCalender = styled.div `
    max-width: 46rem;
    width: 100%;
    height: calc(100vh - 30rem);
    border-right: .2rem solid #F1F1F1;
`

export const ContainerFilter = styled.div `
    display: flex;
    align-items: center;
    gap: 1.5rem;

    button {
        font-weight: 600;
        font-size: 1.3rem;
        padding: .5rem 1.3rem;
        border-radius: .3rem;

        color: #737B84;
    }

    .active {
        background-color: #00A3851F;
        color: #00A385;
    }
`

export const ContainerDate = styled.div `
    max-width: 40rem;
    display: flex;
    gap: 1rem;
`

export const ButtonSelectDate = styled.div `
    width: 60%;

    .name-date {
        color: #737B84;
        font-size: 14px;
        margin: 2.4rem 0 .5rem 0;
    }

    .select {
        width: 18.5rem;
        height: 4.2rem;
        padding: 1rem 1.5rem;
        border: .1rem solid #9C9EA0;
        border-radius: 3px;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
        color: #07232E;

        select {
            width: 100%;
            font-size: 1.4rem;
            font-weight: 600;
            outline: none;
        }
    }
`

export const ContainerCalender = styled.div `
    display: flex;
`
export const Calender= styled.div `
    margin-top: 3.4rem;

    .BlocoDateTitle {
        display: flex;
        gap: 2.2rem;

        h3 {
            font-size: 1.3rem;
            padding: 1rem 1.3rem;
            background-color: rgba(156, 158, 160, 0.12);
            border-radius: 100%;
        }
    }

    .BlocoDay {
        margin-top: 2rem;
        max-width: 40rem;
        display: grid;
        grid-template-columns: repeat(7, 3.7rem);
        gap: 2rem;

        p {
            color: #737B84;
            font-size: 1.3rem;
            padding: 1rem;
            text-align: center;
            border-radius: 100%;
            cursor: pointer;
            transition: all .1s;
            border: .1rem solid transparent;
        }

        .days-of-another-month {
            color: #ABADAF;
        }

        .day-select {
            background-color: #00A385;
            color: #fff;
        }

        .clicked-day {
            border-color:#00A385;
            border-radius: 1rem;
        }

        .day-event {
            position: relative;

            &::after, &::before {
                content: '';
                padding: .3rem;
                border-radius: 100%;
                position: absolute;
                bottom: .3rem;
                right: 1.4rem;
            }

            &::before {
                right: 1.8rem;
                background-color:  #00A385;
            }

            &::after {
                right: .9rem;
                background-color: #F13E5E;
            }
        }

        p:hover {
            background-color: #59C0AF;
            color: #fff;
        }
    }
`

export const HeaderDescription  = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    .title-description {
        color: #07232E;
        font-size: 1.6rem;
    }
    .amount-movements {
        font-size: 1.4rem;
        font-weight: 600;
        background-color: rgba(156, 158, 160, 0.12);
        color: #9C9EA0;
        padding: .4rem .8rem;
        border-radius: 100%;
    }
`

export const DescriptionCurrentDay = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`

export const ContainerReceitas = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-bottom: 1.5rem;

    .dia-com-eventos {
        font-size: 1.5rem;
        padding: 0 1rem;
        color: #737B84;
    }

    .nome-evento {
        color: #737B84;
        font-size: 1.4rem;
    }
`

export const DaySelectCurrent = styled.div `
    .title {
        color: #737B84;
        font-size: 1.4rem;
        font-weight: 500;
    }
`

export const BlocoCurrentDate = styled.div `
    display: flex;
    gap: 1.2rem;
    align-items: center;
    margin: 2rem 0;

    .dia-atual {
        background-color: #00A385;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 400;
        border-radius: 100%;
        padding: 1rem;
    }

    .hoje {
        color: #737B84;
    }
`

export const ContainerDayEvents = styled.div `
    display: flex;
    
    gap: 1.2rem;
    align-items: center;
    margin-bottom: 2rem;

    .dia-com-eventos {
        font-size: 1.5rem;
        padding: 0 1rem;
        color: #737B84;
        position: relative;

        &::before, &::after {
            content: '';
            padding: .3rem;
            border-radius: 100%;
            position: absolute;
            bottom: -1rem;
            right: 1.4rem;
        }
    }

    .entradas::before {
        background-color: #00A385;
    }

    .saidas::before {
        background-color: #F13E5E;
    }

    .duplo-evento::before {
        right: 2rem;
        background-color:  #00A385;
    }
    .duplo-evento::after {
        right: .9rem;
        background-color: #F13E5E;
    }

    .nome-evento {
        color: #737B84;
        font-size: 1.4rem;
    }
`

export const ContainerMoviment = styled.div `
    margin-top: 2.5rem;

    .description-moviment {
        width: 100%;
        font-size: 1.5rem;
        padding: 0 1rem;
        color: #737B84;
    }
`