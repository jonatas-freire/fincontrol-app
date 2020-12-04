import React from 'react';
import { Item, Container, Title } from './style'
export const HeaderBar = ({
    title
}) => {


    return (
        <Container>
            <Item></Item>
            <Title>{title}</Title>
            <Item>
                <ion-icon name="menu-outline"></ion-icon>
            </Item>
        </Container>
    )
}


const Icon = () => (
    
<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 23.705 13.31">
  <g id="Grupo_1324" data-name="Grupo 1324" transform="translate(-181.996 -255.716)">
    <g id="Grupo_1323" data-name="Grupo 1323" transform="translate(181.996 255.716)">
      <g id="Grupo_1320" data-name="Grupo 1320">
        <path id="Caminho_708" data-name="Caminho 708" d="M204.943,257.233H182.755a.759.759,0,1,1,0-1.517h22.188a.759.759,0,1,1,0,1.517Z" transform="translate(-181.996 -255.716)" fill="#fff"/>
      </g>
      <g id="Grupo_1321" data-name="Grupo 1321" transform="translate(0 5.895)">
        <path id="Caminho_709" data-name="Caminho 709" d="M204.943,261.133H182.755a.759.759,0,1,1,0-1.517h22.188a.759.759,0,1,1,0,1.517Z" transform="translate(-181.996 -259.616)" fill="#fff"/>
      </g>
      <g id="Grupo_1322" data-name="Grupo 1322" transform="translate(0 11.792)">
        <path id="Caminho_710" data-name="Caminho 710" d="M204.943,265.035H182.755a.759.759,0,0,1,0-1.517h22.188a.759.759,0,1,1,0,1.517Z" transform="translate(-181.996 -263.518)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>

)