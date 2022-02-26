
import { Container } from "./style";
import imgIcon from '../../assets/android-icon-48x48.png'
import { useTransactions } from "../../hooks/useTransactions";




export function Summary() {
    const { transactions } = useTransactions();


    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposito') {
            acc.deposito += transaction.amount;
            acc.total += transaction.amount
        } else {
            acc.retirada += transaction.amount
            acc.total -= transaction.amount
        }
        return acc;
    }, {
        deposito: 0,
        retirada: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={imgIcon} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'

                    }).format(summary.deposito)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={imgIcon} alt="" />
                </header>
                <strong>-
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'

                    }).format(summary.retirada)}
                </strong>
            </div>
            <div className="title">
                <header>
                    <p>Total</p>
                    <img src={imgIcon} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)
                    }</strong>
            </div>
        </Container>
    )
} 