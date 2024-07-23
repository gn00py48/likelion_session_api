import { styled } from "styled-components";

export const NewsListItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const NewsLink = styled.a`
    min-width: 1020px;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 16px;
    gap: 10px;
`;

export const NewsImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
`;

export const ThirdWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
`;