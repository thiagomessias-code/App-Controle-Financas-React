import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from '../services/api';

interface Transactions {
    id: number;
    title: string;
    amount: number;
    category: string,
    type: string;
    createAt: string;
}

interface TransactiosnProviderProps {
    children: ReactNode;
}

interface TransactionsInput {
    title: string;
    amount: number;
    type: string;
    category: string;
}
// Outra forma
// type TransactionsInput = Omit<Transactions, 'id' | 'createAt'>;

interface TransactionsContextData {
    transactions: Transactions[];
    createTransactions: (transactions: TransactionsInput) => Promise<void>;  //Metodo Promise para adicionar async na function do post
}

 const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);


export function TransactionsProvider({ children }: TransactiosnProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
        //Lembrar sempre de adicionar a propriedade para o data solicitado.
    }, [])

    async function createTransactions(transactionsInput: TransactionsInput) {
        const response = await api.post('/transactions', {
            ...transactionsInput,
            createAt: new Date(),
        })

        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
const context = useContext(TransactionsContext);

return context
}