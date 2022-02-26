import logoImg from '../../assets/apple-icon-57x57.png'
import { Container, Content } from './style'

interface HeaderProps {
    onOpenNewTransactionsModal: () => void;
}


export function Header({onOpenNewTransactionsModal}:HeaderProps) {
    return (

        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionsModal}>
                    Nova Transação
                </button>

               
            </Content>
        </Container>



    )
}