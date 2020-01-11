import styled from 'styled-components';


export const CardContainer = styled.div`
        background:rgba(0,0,0,.45);
        display:flex;
        width:75vw;
        flex-direction:column;
        box-shadow: 2px 1px 18px 3px rgba(0,0,0,0.77);
        align-items:flex-start;
        border-radius:8px;
        align-self:center;
        justify-self:space-around;
        margin-left:15vw;
        border:5px outset red;
        transistion:all .65s ease-in-out;
        transform:scale(1);
        
        &:hover{
          transistion:all 1.25s ease-in-out;
          transform:scale(1.05);
        }
`;


export const DataContainer = styled.div`
      display:flex;
      width:95%;
      flex-direction:column;
      align-items:flex-start;
        border-radius:8px;
`;

export const Cards = styled.div`
        display:flex;
        width:75vw;
        border-radius:8px;
        borderColor: red;
`;

export const CardTitle = styled.h1`
    font-size:2.25rem;
    width:30vw;
    color:Blue;
    border-radius:8px;
    padding:5px;
    text-align:left;
    text-shadow: 0px 1px 10px rgba(150,150,150,0.77);
`;

export const CardText = styled.h2`
    font-size:1.5rem;
    width:30vw;
    margin:0;
    padding:2px;
    border-radius:8px;
    padding:3px;
    align-items:flex-start;
    text-align:left;
    color:lightGreen;
    text-shadow: 0px 1px 10px rgba(150,150,150,0.77);
`;

