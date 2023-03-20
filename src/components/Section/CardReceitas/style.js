import styled from "styled-components";

export const CardStyled= styled.li `
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