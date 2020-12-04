import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, MainIcon, NormalIcon, LeftIcon } from './style'


export const NavBar = () => {
    const history = useHistory()


    const navigateToAddSpent = () => 
        history.push("/spent")

    const navigateToAddReceipt = () => 
        history.push("/receipt")

    const navigateToListSpent = () =>
        history.push("/list-transactions")

    const logout = () => {
        localStorage.clear()
        history.push("/login")
    }

    return (
        <Container>
            <ul>

                <LeftIcon onClick={logout}>
                    <ion-icon name="log-out-outline"></ion-icon>
                </LeftIcon>
                <div style={{ display: "flex"}}>
                    <MainIcon onClick={navigateToAddSpent}>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                    </MainIcon>
                    <div style={{ width: '20px'}}></div>
                    <MainIcon style={{ backgroundColor: '#6ACB25'}} onClick={navigateToAddReceipt}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </MainIcon>
                </div>
                
                <NormalIcon onClick={navigateToListSpent}>
                    <ion-icon name="wallet-outline"></ion-icon>
                </NormalIcon>
            </ul>
        </Container>
    )
}
