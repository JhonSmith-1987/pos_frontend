interface Props {
    product_category: string;
}

export default function ProductCategory({product_category}: Props) {

    return (
        <div className={`flex items-end justify-center text-center w-28 h-12 border-b-4 border-b-navy-blue 
                        cursor-pointer text-sm text-dark-gray`
        }>
            {product_category}
        </div>
    );
}