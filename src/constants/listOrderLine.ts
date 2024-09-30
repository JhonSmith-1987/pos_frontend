interface ListOrderLine {
    id: number;
    product_name: string;
    total_product: number;
    unit_price: number;
}

export const listOrderLine: ListOrderLine[] = [
    {
        id: 1,
        product_name: 'producto1',
        total_product: 2,
        unit_price: 6000
    },
    {
        id: 2,
        product_name: 'producto2',
        total_product: 6,
        unit_price: 2000
    },
    {
        id: 3,
        product_name: 'producto3',
        total_product: 4,
        unit_price: 6000
    },
    {
        id: 4,
        product_name: 'producto4',
        total_product: 7,
        unit_price: 8000
    },
    {
        id: 5,
        product_name: 'producto5',
        total_product: 4,
        unit_price: 2000
    },
];