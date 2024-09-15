

interface ITableComponentProps<T> {
    data: T[];
    columns: (keyof T)[];
    columnTranslations: { [key: string]: string };
}

export default function TableComponent<T extends object>({data, columns, columnTranslations}: ITableComponentProps<T>): JSX.Element {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column as string}
                            className="py-2 px-4 bg-gray-200 text-gray-600 text-sm uppercase font-bold text-left"
                        >
                            {columnTranslations[String(column)] || String(column)}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex} className="border-b">
                        {columns.map((column, colIndex) => (
                            <td
                                key={colIndex}
                                className="py-2 px-4 text-gray-600 text-sm text-left"
                            >
                                {String(item[column])}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}