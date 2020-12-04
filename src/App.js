import React from 'react';
import { Main } from './components'
import { 
  Intro, Login, 
  Register, Auth, 
  SolicitPassword, ResetPassword, 
  Dashboard, AddTransaction, 
  ReceiptTransaction, ListTransactions,
  EditTransaction
 } from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'sweetalert2/src/sweetalert2.scss'

const App = () => (
  <Main>
    <Router>
          <Switch>
            <Route path="/edit/transaction/:id">
              <EditTransaction></EditTransaction>
            </Route>
            <Route path="/list-transactions">
              <ListTransactions></ListTransactions>
            </Route>
            
            <Route path="/receipt">
              <ReceiptTransaction></ReceiptTransaction>
            </Route>
            <Route path="/spent">
              <AddTransaction></AddTransaction>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/reset-password">
              <ResetPassword></ResetPassword>
            </Route>
            <Route path="/solicit-reset">
              <SolicitPassword></SolicitPassword>
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
          <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Intro />
            </Route>
          </Switch>
      </Router>
    </Main>
  )

export default App;
