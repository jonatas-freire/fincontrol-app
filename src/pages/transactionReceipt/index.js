import React, { useState, useEffect }  from 'react';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import { AddTransactionService } from '../../service/addTransaction'
import { Button, ButtonLine, Input, HeaderBar } from '../../components';
import { Content, Paragraph, Details, Background, Spacing, SubTitle  } from './style'
import Fields from './fields'


export const ReceiptTransaction = () => {
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
  
  const navigateToDashboard = () => history.push("/dashboard")

  const canSend = () => {
    
    const valid = fields.every((field) => field.value != '')

    if (!valid)
      return Swal.fire({
        title: "Ops",
        text: "Por favor preencha todos os campos",
        icon: "error",
        confirmButtonText: "Certo!"
      })

      const token = localStorage.getItem("token")
      
      AddTransactionService(token, fields[0].value, fields[1].value, fields[2].value, "RECEIPT"  )
      .then(res => res.json())
      .then( res => {
        if(res.content) {
          
          return Swal.fire({
            title: "Parabéns",
            text: res.message,
            icon: "success",
            confirmButtonText: "Certo!"
          }).then(res => {
              history.push("/dashboard")
          })
        }

        return Swal.fire({
          title: "Ops",
          text: res.message,
          icon: "error",
          confirmButtonText: "Certo!"
        })

        
      })
    
    
  }
    
  
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
  
    useEffect(() => {
        const token = localStorage.getItem('token')
        
        if(token == null) {
            history.push("/login")
        }
    }, [])

  return (
    <Content>
      <HeaderBar title="Adicione um ganho" ></HeaderBar>
      
      <Spacing>
        <ion-icon onClick={() => history.goBack()} style={{ fontSize: 30, color: '#29ABE2'}} name="chevron-back-outline"></ion-icon>
      </Spacing>
      {renderFields()}
     
      
      
      <Spacing style={{ textAlign: 'center', marginTop: '10px'}}>
      <Button onClick={canSend}>Salvar</Button>
      <Paragraph>
          
          <ButtonLine onClick={navigateToDashboard} >Cancelar</ButtonLine>
        </Paragraph>
      </Spacing>
     
      <Background src="/background.svg"></Background>
      {/* <Details src="/details.svg"></Details> */}
    </Content>
  )
}