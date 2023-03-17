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
            border-radius: 100%;
            text-align: center;
            cursor: pointer;
            transition: all .1s;
        }

        .days-of-another-month {
            color: #ABADAF;
        }

        .day-select {
            background-color: #00A385;
            color: #fff;
        }

        p:hover {
            background-color: #59C0AF;
            color: #fff;
        }
    }
`

export const CalenderDescription = styled.div `
    .titulo {
        color: #737B84;
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }
`
