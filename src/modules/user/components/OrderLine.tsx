

interface Props {
    product_name: string;
    total_product: number;
    unit_price: number;
}

export default function OrderLine({product_name, unit_price, total_product}: Props) {

    return (
        <div className="flex w-full items-center justify-between py-2 border-b
                                        border-b-dark-gray"
        >
            <span className="text-dark-gray text-sm">{product_name}</span>
            <div className="flex items-center justify-center gap-3 p-1">
                <div className="flex items-center justify-center border border-dark-gray w-6 h-6 text-dark-gray text-sm">
                    {total_product}
                </div>
                <span className="text-dark-gray text-sm">{unit_price}</span>
            </div>
            <div className="flex items-center justify-end w-20">
                <span className="text-dark-gray text-lg font-semibold">{unit_price * total_product}</span>
            </div>
        </div>
    );
}