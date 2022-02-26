import React, {useContext} from "react";
import { Container } from "./style";
import imgIcon from '../../assets/android-icon-48x48.png'
import { TransactionsContext } from "../../TransactionsContext";



export function Summary() {
    const {transactions} = useContext(TransactionsContext)
console.log(transactions)
    return (
        <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={imgIcon} alt="" />
               </header>
               <strong>1000,00</strong>
           </div>
           <div>
               <header>
                   <p>Saidas</p>
                   <img src={imgIcon} alt="" />
               </header>
               <strong>1000,00</strong>
           </div>
           <div className="title">
               <header>
                   <p>Entradas</p>
                   <img src={imgIcon} alt="" />
               </header>
               <strong>1000,00</strong>
           </div>
        </Container>
    )
} 