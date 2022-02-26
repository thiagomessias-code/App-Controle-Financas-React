import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import iconIMG from '../../assets/android-icon-48x48.png'
import outiconImg from '../../assets/android-icon-48x48.png'
import closeImg from '../../assets/android-icon-48x48.png'

import { Container, RadioBox, TransactionsTypeContainer } from './style';


interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionsModal(
    { isOpen, onRequestClose }: NewTransactionsModalProps) {

        const { createTransactions } = useContext(TransactionsContext);

    const [type, setType] = useState('deposito')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    //Evitar carregamneto pagina(Submit)
    // Recebendo o async para a function close
   async function handleCreateNewTransactions(event: FormEvent) {
        event.preventDefault()

       await createTransactions({
            title,
            amount,
            category,
            type,
        })
        onRequestClose();
    }




    return (<Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay"
        className="react-modal-content">

        <button type='button' onClick={onRequestClose} className="react-modal-close"
        ><img src={closeImg} alt="Fechar modal" /></button>
        <Container onSubmit={handleCreateNewTransactions}>
            <h2>Cadastrar Transação</h2>

            <input placeholder='Titulo' value={title} onChange={ev => setTitle(ev.target.value)} />

            <input type="number" placeholder='Valor' value={amount} onChange={ev => setAmount(Number(ev.target.value))} />

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

