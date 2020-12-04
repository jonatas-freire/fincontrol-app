import styled from 'styled-components'

export const Container = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 75px;
    background-color: #29ABE2;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }
`

export const MainIcon = styled.li`
    width: 70px;
    height: 70px;
    border: 5px solid white;
    background-color: #F03B49;
    border-radius: 50%;
    position: relative;
    top: -35px;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    transition: 0.4s all;
    font-size: 40px;
    color: white;
    &:hover {
        transform: scale(0.9);
    }
`

export const NormalIcon = styled.li`
    width: 120px;
    height: 70px;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: 0.4s all;
    border-radius: 40px 0 0 40px;
    cursor: pointer;
    font-size: 30px;
    color: white;
    &:hover { 
        background-color: #196E91;

    }
` 

export const LeftIcon = styled.li`
    width: 120px;
    height: 70px;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: 0.4s all;
    border-radius:  0 40px 40px 0;
    cursor: pointer;
    font-size: 30px;
    color: white;
    &:hover { 
        background-color: #196E91;

    }
` 