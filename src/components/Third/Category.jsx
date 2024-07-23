import { styled } from "styled-components";


const CategoryBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    padding: 20px;
    min-width: 1020px;
    gap: 20px;
    height: 50px;
    font-size: 20px;
    border: solid 1px white;
`;


const Category = () => {
    return (
        <>
            <CategoryBar>
                <p>전체</p>
                <p>스포츠</p>
                <p>연예</p>
                <p>경제</p>
            </CategoryBar>
        </>
    );
};

export default Category;