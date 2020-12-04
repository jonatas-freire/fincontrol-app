import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { NavBar, HeaderBar } from '../../components'
import { ContainerPower, DiaryAmount, Tomorrow,Total, Paragraph } from './style'
import { UserInfoService } from '../../service/userInfo'
export const Dashboard = () => {
    const history = useHistory()

    const [user,setUser] = useState()
    
    const getUserInfo = (token) => {
        UserInfoService(token)
        .then( res => res.json())
        .then( res => {

            if(res.content) {

                const diary = res.content.balanceAvailable / 30 || 0
                const formattedDiary = diary.toLocaleString(
                    'pt-BR', 
                    { style: 'currency', currency: 'BRL' })
                const formattedBalance = res.content.balanceAvailable.toLocaleString(
                    'pt-BR', 
                    { style: 'currency', currency: 'BRL' })
                setUser({ 
                    ...res.content,
                    diary : res.content.balanceAvailable,
                    formattedBalance,
                    formattedDiary
                })
                return 
            }
            history.push('/login')
        })
    }



    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token == null) {
            history.push("/login")
        }else {
            getUserInfo(token)
        }
    }, [])

    return (

        <div>
            <HeaderBar title="Dashboard"></HeaderBar>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'grid'}}>
                <div>
                    <ContainerPower>
                        <img src="/poder_compra.svg"></img>
                    </ContainerPower>
                </div>
                

                <div style={{ display: 'grid'}}>
                    <div>
                    <Paragraph>Olá <strong style={{ color: '#29ABE2' }}>{user?.name}</strong></Paragraph>
                    <Paragraph>Seu saldo diario é</Paragraph>
                    <DiaryAmount style={{ color: user?.diary > 0 ? '#29ABE2' : '#F03B49' }}>{user?.formattedDiary}</DiaryAmount>
                    <Tomorrow>Projeção para amanhã

                        <br></br>

                        <strong style={{ color: user?.diary > 0 ? '#29ABE2' : '#F03B49' }}>{user?.formattedDiary}</strong>

                    </Tomorrow>
                    </div>
                

                { user && (
                <Total>Saldo total <br></br> disponivel
                    
                    <strong style={{ color: user?.balanceAvailable > 0 ? '#29ABE2' : '#F03B49', display: 'block' }}>{(user.formattedBalance || 0.0)}</strong>
                </Total> ) }

                </div>



            </div>
            <NavBar></NavBar>
        </div>
    )
}