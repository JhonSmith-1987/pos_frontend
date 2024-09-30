import UserLayout from "../layout/UserLayout.tsx";
import OrderLine from "../components/OrderLine.tsx";
import {listOrderLine} from "../../../constants/listOrderLine.ts";
import ProductCategory from "../components/ProductCategory.tsx";
import Product from "../components/Product.tsx";
import {listCategories} from "../../../constants/listCategories.ts";

export default function HomeUser() {

    return (
        <UserLayout>
            <div className="flex w-full h-full">
                <div className="flex flex-col items-start justify-start w-5/12 border-r border-r-dark-gray">
                    <div
                        className="flex flex-col items-start justify-start w-full h-3/5 overflow-y-scroll
                                    p-4 custom-scrollbar"
                    >
                        {/*lista de productos agregados*/}
                        {listOrderLine.map((product) => (
                            <div key={product.id} className="w-full">
                                <OrderLine
                                    product_name={product.product_name}
                                    total_product={product.total_product}
                                    unit_price={product.unit_price}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-start justify-start w-full h-2/5 bg-navy-blue p-2 rounded-t">
                        <div className="flex w-full p-2">
                            <div className="flex flex-col w-2/6 items-start justify-start">
                                <span className="flex items-center justify-between w-full">
                                    <span className="text-sm text-light-gray">Subtotal</span>
                                    <span className="flex items-center justify-between gap-1">
                                        <span className="text-sm text-light-gray">160000000</span>
                                    </span>
                                </span>
                                <span className="flex items-center justify-between w-full border-b border-b-dark-gray">
                                    <span className="text-sm text-light-gray">Iva</span>
                                    <span className="flex items-center justify-between gap-1">
                                        <span className="text-sm text-light-gray">200</span>
                                    </span>
                                </span>
                                <span className="flex items-center justify-between w-full">
                                    <span className="text-sm text-light-gray font-bold">Total</span>
                                    <span className="flex items-center justify-between gap-1">
                                        <span className="text-sm text-light-gray font-bold">200</span>
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col w-4/6 items-end justify-center">
                                <input
                                    type="text"
                                    className="w-8/12 h-16 text-right px-2 bg-light-gray"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                        <button className="w-full bg-light-gray py-1 text-dark-gray rounded-sm">
                            Pagar
                        </button>
                        <div className="flex items-center justify-center gap-3 w-full mt-5">
                            <button className="bg-emerald-green text-light-gray px-4 rounded-sm">Guardar</button>
                            <button className="bg-red-error text-light-gray px-4 rounded-sm">Cancelar</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start w-7/12 py-2 pl-2">
                    <div className="p-4 w-full h-40 overflow-y-scroll custom-scrollbar">
                        <div className="grid grid-cols-5 w-full">
                            {listCategories.map((category) => (
                                <div key={category.id}>
                                    <ProductCategory product_category={category.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 w-full h-80 overflow-y-scroll custom-scrollbar mt-6">
                        <div className="grid grid-cols-4 w-full gap-2">
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                            <Product
                                product_price={3500}
                                product_name={'coca-cola'}
                                image={'/img-products/coca-cola.jpg'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}