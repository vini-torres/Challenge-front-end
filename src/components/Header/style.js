import styled from "styled-components";

export const GridContainer = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: 8rem auto auto;
    grid-template-areas: "header header header" 'menu section section';
`

export const HeaderContainer = styled.header `
    grid-area: header;
    width: 100%;
    height: 7.5rem;
    padding: 0 1.6rem;
    background-color: #00A385;
    display: flex;
    align-items: center;
    position: relative;

    .header-title {
        color: #fff;
        font-size: 1.6rem;
        margin-left: 3rem;
    }
`

export const ButtonMenu = styled.button `
    position: absolute;
    right: 1.8rem;
    padding: 1.3rem;
    border-radius: 100%;
    background-color: #19ac91;
`

export const AsideContainer = styled.aside `
    grid-area: menu;
    height: calc(100vh - 7.5rem);
    background-color: #007D66;
`

export const ListAside = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.2rem;
    margin-top: 3.5rem;
`