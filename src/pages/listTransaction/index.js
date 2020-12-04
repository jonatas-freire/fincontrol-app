import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { NavBar, HeaderBar, Spacing } from '../../components'
import { Paragraph, ListItem, IconButton, ContainerButtons } from './style'
import { ListTransactionService } from '../../service/listTransactions'
import { DeleteTransactionService } from '../../service/deleteTransaction'

export const ListTransactions = () => {
    const history = useHistory()

    const [transactions,setTransactions] = useState()
    const [totalReceipt, setTotalReceipt] = useState(0)
    const [totalSpent, setTotalSpent] = useState(0)
    const [totalBalance, setTotalBalance] = useState(0)

    const calcByType = (transactions, type) =>
        transactions.filter(transactions => transactions.cd_type_transaction == type )
        .reduce(( total, transaction ) => total + transaction.amount, 0)
    
    const getTransactions = (token) => {
        ListTransactionService(token)
        .then( res => res.json())
        .then( res => {
            if(res.content) {
                    const transactions = res.content
                    const totalSpentToSet = calcByType(transactions, "SPENT")
                    const totalReceiptToSet = calcByType(transactions, "RECEIPT")
                    setTotalReceipt(totalReceiptToSet)
                    setTotalSpent(totalSpentToSet)
                    setTotalBalance(totalReceiptToSet - totalSpentToSet)
                    setTransactions(transactions)
                return 
            }
            history.push('/login')
        })
    }

    const editTransactions = (id) => 
        history.push(`/edit/transaction/${id}` )

    const deleteTransaction = (id) => {
        const token = localStorage.getItem('token')
        DeleteTransactionService(token, id)
        .then((response) => response.json())
        .then(( response) => {
            if(response.content) {
                getTransactions(token)
            }
            return Swal.fire({
                title: response.content? "Parabéns" : "Ops",
                text: response.message,
                icon: response.content ? "success" : "error",
                confirmButtonText: "ok!"
              })
        })
    }

    const formatValue = (value) => 
        value.toLocaleString(
            'pt-BR', 
            { style: 'currency', currency: 'BRL' })

    const colorTransactions = (transaction) => 
        transaction?.cd_type_transaction === 'RECEIPT' ? '#6ACB25' : '#F03B49'
    const renderTransactions = () =>
        transactions ?  transactions?.map(transaction => (
            <ListItem key={transaction.id}>
                <ion-icon
                    style={{ color:  colorTransactions(transaction)}}
                name="cash-outline"></ion-icon>
                <h3>{transaction.name}</h3>
                <p style={{ color:  colorTransactions(transaction)}} >
                    {transaction?.cd_type_transaction == "SPENT" && '-'}
                    {formatValue(transaction.amount)}</p>
                <ContainerButtons>
                    <IconButton style={{ backgroundColor: '#CCCCCC'}} onClick={() => editTransactions(transaction.id)}>
                        <ion-icon name="create-outline"></ion-icon>
                    </IconButton>
                    <IconButton onClick={() => deleteTransaction(transaction.id)}>
                        <ion-icon name="trash-outline"></ion-icon>
                    </IconButton>
                </ContainerButtons>
            </ListItem>
        )) : <Paragraph>Não foram encontradas transações</Paragraph>



    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token == null) {
            history.push("/login")
        }else {
            getTransactions(token)
        }
    }, [])

    return (

        <div>
            <HeaderBar title="Dashboard"></HeaderBar>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', paddingTop: '120px', height: '100%', display: 'grid'}}>
                <div style={{ height: '400px', overflowY: 'scroll'}}>
                <Spacing>
                    <ion-icon onClick={() => history.goBack()} style={{ fontSize: 30, color: '#29ABE2'}} name="chevron-back-outline"></ion-icon>
                </Spacing>

                {renderTransactions()}

                </div>
                <div style={{ borderTop: '1px solid #DDDDDD', padding: '1rem 2rem'}}>
                    <Paragraph style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Total de Entradas <strong style={{ color: '#6ACB25'}} >{formatValue(totalReceipt)}</strong>
                    </Paragraph>
                    <Paragraph  style={{ display: 'flex', justifyContent: 'space-between'}}>
                        Total de Gastos <strong style={{ color: '#F03B49'}}>{formatValue(totalSpent)}</strong>
                    </Paragraph>
                    <Paragraph  style={{ display: 'flex', justifyContent: 'space-between', color: '#47BFF2' }}>
                        Saldo total: <strong>{formatValue(totalBalance)}</strong>
                    </Paragraph>
                </div>
                
                    



            </div>
            <NavBar></NavBar>
        </div>
    )
}