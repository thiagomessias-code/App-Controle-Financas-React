import { Container } from "./style"
import { useEffect } from "react"
import { api } from "../../services/api"

export function TransactionTable() {
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, [])
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
                    <tr>
                        <td className="title">
                            Desenvolvimento de website
                        </td>
                        <td className="deposito">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/20/2022</td>
                    </tr>
                    <tr>
                        <td className="title">
                            Aluguel
                        </td>
                        <td className="retirada">-R$800,00</td>
                        <td>Casa</td>
                        <td>12/20/2022</td>
                    </tr>
                    <tr>
                        <td className="title">
                            Desenvolvimento de website
                        </td>
                        <td>R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/20/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}