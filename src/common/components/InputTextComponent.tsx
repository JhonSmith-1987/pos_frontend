import {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";
import {useState} from "react";

type TypeInput = 'text' | 'email' | 'password' | 'textArea' | 'image' | 'datetime-local' | 'number';

interface Props<T extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    fieldName: Path<T>
    label: string;
    id: string;
    placeholder: string;
    typeInput: TypeInput;
    defaultValue: string;
}

export default function InputTextComponent<T extends FieldValues>({
                                                                      register,
                                                                      errors,
                                                                      fieldName,
                                                                      label,
                                                                      id,
                                                                      placeholder,
                                                                      typeInput,
                                                                      defaultValue,
                                                                  }: Props<T>) {

    const errorMessage = errors[fieldName]?.message;
    const [imagePreview, setImagePreview] = useState<string | null>(null);


    function handleImageChange(files: FileList | null) {
        if (files) {
            const file = files[0];
            // Crea una URL de la imagen para la vista previa
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        } else {
            setImagePreview(null);
        }
    }

    return (
        <>
            {typeInput !== 'textArea' && typeInput !== 'image' && typeInput !== 'datetime-local' &&
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label
                        htmlFor={id}
                        className="md:text-lg text-center md:text-start font-medium text-light-gray"
                    >
                        {label}
                    </label>
                    <input
                        {...register(fieldName, {
                            required: 'Campo requerido'
                        })}
                        type={typeInput}
                        id={id}
                        className="w-full py-1 px-2 border rounded-lg focus:ring-2 focus:ring-navy-blue
                            focus:outline-none text-dark-gray bg-light-gray text-sm"
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                    />
                    {typeof errorMessage === 'string' && (
                        <div
                            className="absolute right-0 top-0 bg-navy-blue px-4 rounded-sm
                                        text-light-gray text-sm"
                        >
                            {errorMessage}
                        </div>
                    )}
                </div>
            }

            {typeInput === 'textArea' &&
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor={id} className="md:text-lg text-center md:text-start font-medium text-gray-700">
                        {label}
                    </label>
                    <textarea
                        {...register(fieldName, {
                            required: 'Campo requerido'
                        })}
                        id={id}
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500
                            focus:outline-none text-gray-700"
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        required
                    ></textarea>
                    {typeof errorMessage === 'string' && (
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                            {errorMessage}
                        </div>
                    )}
                </div>
            }

            {typeInput === 'image' && (
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor={id} className="text-lg font-medium text-gray-700">
                        {label}
                    </label>
                    <div className="flex flex-col gap-4 md:flex-row items-center space-x-4">
                        {defaultValue === '' &&
                            <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg
                                flex items-center justify-center overflow-hidden"
                            >
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="object-cover w-full h-full"/>
                                ) : (
                                    <span className="text-gray-400">No image</span>
                                )}
                            </div>
                        }
                        {!imagePreview && defaultValue !== '' &&
                            <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg
                                flex items-center justify-center overflow-hidden"
                            >
                                <img src={defaultValue} alt="Preview" className="object-cover w-full h-full"/>
                            </div>
                        }
                        {imagePreview && defaultValue !== '' &&
                            <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg
                                flex items-center justify-center overflow-hidden"
                            >
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="object-cover w-full h-full"/>
                                ) : (
                                    <span className="text-gray-400">No image</span>
                                )}
                            </div>
                        }
                        <input
                            {...register(fieldName, {
                                required: 'Campo requerido'
                            })}
                            type="file"
                            id={id}
                            onChange={(event) => handleImageChange(event.target.files)}
                            className="text-sm text-red file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
                            accept="image/*"
                            required
                        />
                    </div>
                    {typeof errorMessage === 'string' && (
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm ">
                            {errorMessage}
                        </div>
                    )}
                </div>
            )}


            {typeInput === 'datetime-local' &&
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor={id} className="md:text-lg text-center md:text-start font-medium text-gray-700">
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
            }
        </>
    );
}