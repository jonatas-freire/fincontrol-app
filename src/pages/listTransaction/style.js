import styled from 'styled-components'

export const ListItem = styled.div`
    display: flex;
    padding: 0.6rem 1rem;
    border: 1px solid #DDDDDD;
    border-left: none;
    border-right: none;
    align-items: center;
    justify-content: space-between;
    color: #707070;
    position: relative;
    i {
        width: 30px;
        font-size: 30px;
        margin-right: 10px;
    }    
    h3 {
        font-size: 0.95rem;
        font-weight: bold;
        text-align: left;
        flex: 1;
        padding-left: 10px;
    }
    p {
        font-size: 0.95rem;
        font-weight: bold;
        text-align: left;
    }
    &:hover {
        div {
            transform: scaleX(1)
        }
    }
`

export const Paragraph = styled.p`
    font-size: 1.1rem;
    color: #5B5B5B;
    text-align: center;
`

export const ContainerButtons = styled.div`
 transform: scaleX(0);
    transform-origin: right;
    transition: 0.4s all;
    position: absolute;
    right: 0; 
`


export const IconButton = styled.button`
    width: 70px;
    height: 70px;
    background-color: #F03B49;
    font-size: 30px;
    text-align: center;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.4s all;
    &:hover {
        transform: scale(0.95);
    }
`