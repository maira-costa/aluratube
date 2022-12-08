import styled from "styled-components"

export const StyledFavoritos = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px 32px;
    overflow: hidden;
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }
    .favlist {
        display: flex;
        gap: 8px;
    }

    .favlist__item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .favlist__item img {
        width: 100px;
		height: 100px;
		border-radius: 50%
    }
    .favlist__item p {
        font-size: 14px;
        margin-top: 8px;
    }
`;