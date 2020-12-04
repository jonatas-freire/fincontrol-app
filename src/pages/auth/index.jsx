import React, { useState, useEffect }  from 'react';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import { AuthService } from '../../service/authenticate'
import { Button, ButtonLine, Input } from '../../components';
import { Content, Paragraph, Details, Background, Spacing, SubTitle  } from './style'
import Fields from './fields'


export const Auth = () => {
  const history = useHistory()
  const [fields, setFields] = useState(Fields)

  const onChangeInput = 
   (ref) => {
      setFields( 
        fields.map(field =>
            field.id === ref.id ?
            ({
              ...field,
              value: ref.value,
              valid: field.value != '' || (field.validate != null && field.validate.test(field.value))
            }) : field
        )
      )
    } 
  
    

  const canSend = () => {
    
    const valid = fields.every((field) => field.value != '')

    if (!valid)
      return Swal.fire({
        title: "Ops",
        text: "Por favor preencha todos os campos",
        icon: "error",
        confirmButtonText: "Certo!"
      })

      const email = localStorage.getItem("email")

      AuthService(email, fields[0].value)
      .then(res => res.json())
      .then( res => {
        if(res.content) {
          
          const { accessToken } = res.content

          if(accessToken) {
            localStorage.clear()
            localStorage.setItem('token', accessToken)
            history.push("/dashboard")
          }

          return 
        }

        return Swal.fire({
          title: "Ops",
          text: res.message,
          icon: "error",
          confirmButtonText: "Certo!"
        })

        
      })
    
  }

  const resendCode = () => {
    
  }

  useEffect(() => {
    const email = localStorage.getItem("email")
    if(email == null)
      history.push("/login")
  }, [])
    
  
  const renderFields = () => 
    fields.map(field => (
      <Spacing key={field.id}>
        <Input
          onInputChange={onChangeInput}
          valid={field.valid}
          label={field.label}
          type={field.type}
          value={field.value}
          id={field.id}
          ></Input>
      </Spacing>
    ))
  


  return (
    <Content>
      <img src="https://ci3.googleusercontent.com/proxy/1FlV2XGzaSBn_Qvuj4VqN26KhcbJQcoMW-fMa2TcoewujjIQq6jOcVIFNSuUACE4Se7E6Dzy8yIcmtav8_pLB0nr-m9Of8ZcFag01g-kegC3pNVhrTww2TK9Q01mDKzFFgIG9WYckw=s0-d-e1-ft#https://res.cloudinary.com/jonatas-place/image/upload/v1606234870/Ativo_5_mftzhj.png" width="200px" alt="" />
      <SubTitle>Falta pouco!</SubTitle>
      <Paragraph>Autentique a sua conta e comece a controlar sua financas!</Paragraph>
      {renderFields()}
    
    
      <Button onClick={canSend}>Confirmar!</Button>
      <Spacing style={{ textAlign: 'center', marginTop: '10px'}}>
      <Paragraph>
          Ainda não recebeu seu codigo ?
          <ButtonLine onClick={resendCode} >Reenviar</ButtonLine>
        </Paragraph>
      </Spacing>
     
      <Background src="/background.svg"></Background>
      <Details src="/details.svg"></Details>
    </Content>
  )
}