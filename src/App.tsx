import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionsModal } from './components/NewTransactionsModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);
    function handleOpenTransactionsModal() {
        setIsNewTransactionsModalOpen(true)
    }

    function handleCloseTransactionsModal() {
        setIsNewTransactionsModalOpen(false)
    }
  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenTransactionsModal}/>
      <Dashboard/>
      <NewTransactionsModal 
      isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseTransactionsModal}/>
      <GlobalStyle/>
    </>
  );
}

