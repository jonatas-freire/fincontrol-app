import React from 'react';
import { Button, ButtonLine, Input } from '../../components';
import { Content, Title, Paragraph, Details, Background, Spacing, SubTitle  } from './style'
import { useHistory } from 'react-router-dom'

export const Intro = () => {
  const history = useHistory()

  const navigateToLogin = () => history.push('/login')
  const SectionInitial = () => (
    <>
      <Title>Não seja controlado, <br /> controle-se!</Title>
      <Paragraph>O FinControl ajuda você a ter um <strong>controle <br /> maior</strong> sobre seus gastos.</Paragraph>
      <Button onClick={navigateToLogin}>Próximo</Button>
    </>
  )

  return (
    <Content>
      <img src="https://ci3.googleusercontent.com/proxy/1FlV2XGzaSBn_Qvuj4VqN26KhcbJQcoMW-fMa2TcoewujjIQq6jOcVIFNSuUACE4Se7E6Dzy8yIcmtav8_pLB0nr-m9Of8ZcFag01g-kegC3pNVhrTww2TK9Q01mDKzFFgIG9WYckw=s0-d-e1-ft#https://res.cloudinary.com/jonatas-place/image/upload/v1606234870/Ativo_5_mftzhj.png" width="200px" alt="" />
      <SectionInitial></SectionInitial>
      <Background src="/background.svg"></Background>
      <Details src="/details.svg"></Details>
    </Content>
  )
}