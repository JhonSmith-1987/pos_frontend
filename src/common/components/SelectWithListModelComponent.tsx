import {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";

interface Props<T extends FieldValues, M extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    fieldName: Path<T>
    label: string;
    id: string;
    selectList: M[];
    fieldOption: Path<M>
    valueOption: Path<M>
    defaultValueOption: string;
}

export default function SelectWithListModelComponent<T extends FieldValues, M extends FieldValues>({
                                                                                                       register,
                                                                                                       errors,
                                                                                                       fieldName,
                                                                                                       label,
                                                                                                       id,
                                                                                                       selectList,
                                                                                                       fieldOption,
                                                                                                       valueOption,
                                                                                                       defaultValueOption,
                                                                                                   }: Props<T, M>) {

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
                {selectList.map((item, index) => (
                    <option key={index} value={item[valueOption as keyof M] as unknown as string}>
                        {item[fieldOption as keyof M] as unknown as string}
                    </option>
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