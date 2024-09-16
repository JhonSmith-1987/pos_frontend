import {ReactNode} from "react";

interface Props {
    title:string;
    children: ReactNode;
}

export default function FormComponent({children, title}:Props) {

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">
                {title}
            </h2>
            <form className="space-y-8">
                {children}
            </form>
        </div>
);
}