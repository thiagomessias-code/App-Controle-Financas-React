import Modal from 'react-modal';
import { Container, RadioBox, TransactionsTypeContainer } from './style';
import iconIMG from '../../assets/android-icon-48x48.png'
import outiconImg from '../../assets/android-icon-48x48.png'
import closeImg from '../../assets/android-icon-48x48.png'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionsModal(
    { isOpen, onRequestClose }: NewTransactionsModalProps) {
    const [type, setType] = useState('deposito')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    //Evitar carregamneto pagina(Submit)
    function handleCreateNewTransactions(event: FormEvent) {
        event.preventDefault()
        const data = {title, value, category, type}
        api.post('/transactions', data)
    }




    return (<Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay"
        className="react-modal-content">

        <button type='button' onClick={onRequestClose} className="react-modal-close"
        ><img src={closeImg} alt="Fechar modal" /></button>
        <Container onSubmit={handleCreateNewTransactions}>
            <h2>Cadastrar Transação</h2>

            <input placeholder='Titulo' value={title} onChange={ev => setTitle(ev.target.value)} />

            <input type="number" placeholder='Valor' value={value} onChange={ev => setValue(Number(ev.target.value))} />

            <TransactionsTypeContainer>
                <RadioBox type='button' onClick={() => setType('deposito')} isActive={type === 'deposito'} activeColor="green">
                    <img src={iconIMG} alt="" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox type='button' onClick={() => setType('retirada')} isActive={type === 'retirada'} activeColor='red'>

                    <img src={iconIMG} alt="" />
                    <span>Saida</span>
                </RadioBox>
            </TransactionsTypeContainer>
            <input placeholder='Categoria' value={category} onChange={ev => setCategory(ev.target.value)} />
            <button type="submit">
                Cadastrar
            </button>
        </Container>
    </Modal>)

}

