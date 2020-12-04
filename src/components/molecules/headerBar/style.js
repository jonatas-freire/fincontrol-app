import styled from 'styled-components'

export const Container = styled.header`
    padding: 1rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #29ABE2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 3;
` 

export const Item = styled.button`
    width: 30px;
    padding: 0;
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: white;
`

export const Title = styled.h2`
    font-size: 1rem;
    color: white;
    font-weight: normal;
`