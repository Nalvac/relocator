import React from 'react';

interface TableRowProps {
    name: string;
    quantity: string;
}

const TableRow: React.FC<TableRowProps> = ({ name, quantity }) => (
    <tr className="bg-white border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-dark border-r">
            {name}
        </th>
        <td className="px-6 py-4">
            {quantity}
        </td>
    </tr>
);

const Furniture: React.FC = () => {
    const items: TableRowProps[] = [
        { name: 'Vase', quantity: '2' },
        { name: 'piano', quantity: '1' },
        { name: 'table', quantity: '1' },
        { name: 'chaise', quantity: '6' },
        { name: 'télévision', quantity: '2' },
        { name: 'lit simple', quantity: '2' },
        { name: 'canapé', quantity: '1' },
    ];

    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-2xl font-bold text-dark-900 dark:text-gray-200">Liste des meubles</h1>
            <table
                className="w-full max-w-2xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-200">
                <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 border-r">
                        Nom
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantité
                    </th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <TableRow key={index} name={item.name} quantity={item.quantity}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Furniture;
