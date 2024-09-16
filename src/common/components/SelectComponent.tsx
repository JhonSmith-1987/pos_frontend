import {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";
import {SelectModel} from "../models/SelectModel.ts";

interface Props<T extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    fieldName: Path<T>
    label: string;
    id: string;
    selectList: SelectModel[];
    defaultValueOption: string;
}

export default function SelectComponent<T extends FieldValues>({
                                                                   register,
                                                                   errors,
                                                                   fieldName,
                                                                   label,
                                                                   id,
                                                                   selectList,
                                                                   defaultValueOption,
                                                               }: Props<T>) {

    const errorMessage = errors[fieldName]?.message;

    return (
        <div className="relative grid grid-cols-1 gap-y-2">
            <label htmlFor={id} className="text-lg font-medium text-gray-700">
                {label}
            </label>
            <select
                {...register(fieldName, {
                    required: 'Campo requerido'
                })}
                id={id}
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500
                            focus:outline-none text-gray-700"
                required
            >
                <option value="">{defaultValueOption}</option>
                {selectList.map((select, index) => (
                    <option key={index} value={select.value}>{select.field}</option>
                ))}
            </select>
            {typeof errorMessage === 'string' && (
                <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}