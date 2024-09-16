import {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";

type TypeInput = 'text' | 'email' | 'password';

interface Props<T extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    fieldName: Path<T>
    label: string;
    id: string;
    placeholder: string;
    typeInput: TypeInput
}

export default function InputTextComponent<T extends FieldValues>({
                                                                      register,
                                                                      errors,
                                                                      fieldName,
                                                                      label,
                                                                      id,
                                                                      placeholder,
                                                                      typeInput,
                                                                  }: Props<T>) {

    const errorMessage = errors[fieldName]?.message;

    return (
        <div className="relative grid grid-cols-1 gap-y-2">
            <label htmlFor={id} className="text-lg font-medium text-gray-700">
                {label}
            </label>
            <input
                {...register(fieldName, {
                    required: 'Campo requerido'
                })}
                type={typeInput}
                id={id}
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500
                            focus:outline-none text-gray-700"
                placeholder={placeholder}
                required
            />
            {typeof errorMessage === 'string' && (
                <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}