interface Props {
    product_price: number;
    product_name: string;
    image: string;
}

export default function Product({product_price, product_name, image}: Props) {

    return (
        <div className="flex w-32 h-36 bg-navy-blue rounded-lg clip-path-1 cursor-pointer">
            <div className="flex flex-col items-center justify-start w-full h-full bg-light-gray border border-dark-gray rounded-lg p-1 clip-path-2">
                <div className="flex items-center justify-start w-full">
                    <span className="text-dark-gray pl-2 text-sm">{product_price}</span>
                </div>
                <img className="w-10 mt-4" alt="product-img" src={image}/>
                <p className="text-dark-gray text-sm font-bold">{product_name}</p>
            </div>
        </div>
    );
}