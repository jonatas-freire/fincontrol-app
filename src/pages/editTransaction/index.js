import React, { useState, useEffect }  from 'react';
import Swal from 'sweetalert2'
import { useHistory, useParams } from 'react-router-dom'
import { GetTransactionService } from '../../service/getTransaction'
import { EditTransactionService } from '../../service/editTransaction'
import { Button, ButtonLine, Input, HeaderBar } from '../../components';
import { Content, Paragraph, Details, Background, Spacing, SubTitle  } from './style'
import Fields from './fields'


export const EditTransaction = () => {
  const { id } = useParams();
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
  
  const navigateToDashboard = () => history.push("/list-transactions")

  const canSend = () => {
    
    const valid = fields.every((field) => field.value != '')

    if (!valid)
      return Swal.fire({
        title: "Ops",
        text: "Por favor preencha todos os campos",
        icon: "error",
        confirmButtonText: "Certo!"
      })
      
      if(fields[0].value < 0)
        return Swal.fire({
          title: "Ops",
          text: "O valor não pode ser negativo",
          icon: "error",
          confirmButtonText: "Certo!"
        })

      const token = localStorage.getItem("token")
      console.log(fields)
      const type = fields[3].value === 'Ganho' ? 'RECEIPT' : 'SPENT'
      EditTransactionService(token, id, fields[0].value, fields[1].value, fields[2].value, type  )
      .then(res => res.json())
      .then( res => {
        if(res.content) {
          
          return Swal.fire({
            title: "Parabéns",
            text: res.message,
            icon: "success",
            confirmButtonText: "Certo!"
          }).then(res => {
              history.push("/list-transactions")
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

  const getTransaction = () => {
    const token = localStorage.getItem("token")
    GetTransactionService(token, id)
    .then((response) => response.json())
    .then((response) => {
      if(response.content) {
        const transaction = response.content
        return setFields([
          {
            id: "txt_valor",
            value: transaction.amount,
            isRequired: true,
            label: "Valor",
            type: "number",
            valid: true
          },
          {
            id: "txt_name",
            value: transaction.name,
            isRequired: true,
            label: "Nome",
            type: "text",
            valid: true
          },
          {
            id: "txt_description",
            value: transaction.description,
            isRequired: true,
            label: "Descrição",
            type: "text",
            valid: true
          },
          {
            id: "slc_type",
            value: transaction.cd_type_transaction === 'RECEIPT' ? "Ganho" : "Gasto",
            isRequired: true,
            label: "Tipo da transação",
            type: "select",
            valid: true,
            options: [
              "Ganho",
              "Gasto"
            ]
          }
        ])
      }

      history.push("/dashboard")
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
          options={field.options}
          ></Input>
      </Spacing>
    ))
  
    useEffect(() => {
        const token = localStorage.getItem('token')
        
        if(token == null) {
            history.push("/login")
        }
        if(id == null) {
          history.push("/dashboard")
        }

        getTransaction(id)
        console.log(renderFields())
    }, [])

    useEffect(() => {
      console.log(fields)
    }, [fields])

  return (
    <Content>
      <HeaderBar title="Editar transação" ></HeaderBar>
      
      
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