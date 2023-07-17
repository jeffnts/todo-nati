// Como este componente usa alguns hooks do react, de acordo com a nova versão no next, a 13, temos que colocar esta linha 'use client' para mostrar que estamos usando um client component
'use client'
//Aqui estou criando o componente e exportando ele de uma maneira nomeada

// Usado para gerenciar o estado dos itens da lista localmente
import { useState } from 'react'

export function List(){
    const [item, setItem] = useState<any>()
    const [listItems, setListItems] = useState<string[]>([])

    function changeItem (e: any){
        const value = e.target.value
        setItem(value)
    }
            
    function addItem(){
        setListItems((state: any) => [...state, item])
        setItem('')
    }

    function removeItem(id: number) {
        const newListItems = listItems.filter((_, index) => index !== id)
        setListItems(newListItems)
    }

    return(
        <div>
        <div className="flex mb-4">
            <input
                type="text"
                value={item}
                onChange={changeItem}
                className="mr-2 px-2 py-1 border border-gray-300 rounded"
                placeholder="Digite o nome do item"
            />
            <button
                onClick={addItem}
                className="px-4 py-1 bg-blue-500 text-white rounded"
            >
             Adicionar item
            </button>
        </div>

        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2 text-left">Itens</th>
                </tr>
            </thead>
            <tbody>
                {listItems.map((item, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{item}</td>
                        <td className="border px-4 py-2">
                        <button
                            onClick={() => removeItem(index)}
                            className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1"
                        >
                            Excluir
                        </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>        
    </div>
    )
}
