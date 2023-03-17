import styled from "styled-components";

export const CalenderSection = styled.div `
    display: flex;
    gap: 6rem;
`

export const BlocoCalender = styled.div `
    max-width: 48rem;
    width: 100%;
    height: calc(100vh - 30rem);
    border-right: .2rem solid #F1F1F1;
`

export const ContainerFilter = styled.div `
    display: flex;
    align-items: center;
    gap: 2rem;

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
    max-width: 43rem;
    display: flex;
`

export const ButtonSelectDate = styled.div `
    width: 100%;

    .name-date {
        color: #737B84;
        font-size: 14px;
        margin: 2.9rem 0 .5rem 0;
    }

    button {
        width: 19.5rem;
        height: 4.2rem;
        padding: 1rem 1.5rem;
        border: .1rem solid #9C9EA0;
        border-radius: 3px;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        position: relative;
        font-size: 1.4rem;
        font-weight: 600;
        color: #07232E;

        .arrow {
            position: absolute;
            right: 1.3rem;
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
        gap: 2.5rem;

        h3 {
            font-size: 1.3rem;
            padding: 1rem 1.4rem;
            background-color: rgba(156, 158, 160, 0.12);
            border-radius: 100%;
        }
    }

    .BlocoDay {
        margin-top: 2rem;
        max-width: 40.8rem;
        display: grid;
        grid-template-columns: repeat(7, 3.7rem);
        gap: 2.5rem;

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

        p:hover {
            background-color: #59C0AF;
            color: #fff;
        }
    }
`

export const CalenderDescription = styled.div `

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

export const ReceitasContainer = styled.div `
    margin-top: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`

export const CardReceita = styled.div `
    width: 100%;
    width: 50rem;
    height: 6rem;
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background-image: linear-gradient(#0F4D6401, #0F4D6406);
    box-shadow: .0rem .4rem .5rem .2rem rgba(224, 232, 240, 0.4);
    position: relative;

    .icon {
        border-radius: 100%;
        padding: 1.5rem;
    }
    .icon-entrada {
        background-image: linear-gradient(#00A3851A, #00A3850D);
    }
    .icon-saida {
        background-image: linear-gradient(#F13E5E1A, #F13E5E0D)
    }

    .titulo {
        font-size: 1.5rem;
        color: #0F4D64;
    }

    .receita {
        font-size: 1.2rem;
        color: #909CAA;
        margin-top: .5rem;
    }

    .valor {
        font-size: 1.2rem;
        font-weight: 600;
        position: absolute;
        right: 1.4rem;
    }

    .valor-entrada {
        color: #00A385;
    }
    .valor-saida {
        color: #F13E5E
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
    margin-bottom: 1.5rem;

    .dia-com-eventos {
        font-size: 1.5rem;
        padding: 0 1rem;
        color: #737B84;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .nome-evento {
        color: #737B84;
        font-size: 1.4rem;
    }

`


