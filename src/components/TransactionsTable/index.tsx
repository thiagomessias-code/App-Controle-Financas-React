import { Container } from "./style"
import { useContext } from "react"

import { TransactionsContext } from "../../TransactionsContext";



export function TransactionTable() {
    const { transactions } = useContext(TransactionsContext);


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transactions => (
                        <tr key={transactions.id}>
                            <td className="title">
                                {transactions.title}
                            </td>
                            <td className={transactions.type}>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'

                            }).format(transactions.amount)}</td>
                            <td>{transactions.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(transactions.createAt))}
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </Container>
    )
}