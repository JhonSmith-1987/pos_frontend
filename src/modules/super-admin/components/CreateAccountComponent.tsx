import {useState} from "react";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {AccountPostModel} from "../models/AccountPostModel.ts";

interface Props {
    register:UseFormRegister<AccountPostModel>;
    errors: FieldErrors<AccountPostModel>;
}

export default function CreateAccountComponent({register, errors, }: Props) {

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
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">Create New Account</h2>
            <form className="space-y-8">

                {/* Business Name */}
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor="business_name" className="text-lg font-medium text-gray-700">
                        Business Name
                    </label>
                    <input
                        {...register('business_name', {
                            required: 'Campo requerido'
                        })}
                        type="text"
                        id="business_name"
                        name="business_name"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
                        placeholder="Enter your business name"
                        required
                    />
                    {errors.business_name?.type === 'required' &&
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                            {errors.business_name.message}
                        </div>
                    }
                </div>

                {/* Business Address */}
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor="business_address" className="text-lg font-medium text-gray-700">
                        Business Address
                    </label>
                    <input
                        {...register('business_address', {
                            required: 'Campo requerido'
                        })}
                        type="text"
                        id="business_address"
                        name="business_address"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
                        placeholder="Enter your business address"
                        required
                    />
                    {errors.business_address?.type === 'required' &&
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                            {errors.business_address.message}
                        </div>
                    }
                </div>

                {/* Business Phone */}
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor="business_phone" className="text-lg font-medium text-gray-700">
                        Business Phone
                    </label>
                    <input
                        {...register('business_phone', {
                            required: 'Campo requerido'
                        })}
                        type="tel"
                        id="business_phone"
                        name="business_phone"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
                        placeholder="Enter your business phone"
                        required
                    />
                    {errors.business_phone?.type === 'required' &&
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                            {errors.business_phone.message}
                        </div>
                    }
                </div>

                {/* Business Email */}
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor="business_email" className="text-lg font-medium text-gray-700">
                        Business Email
                    </label>
                    <input
                        {...register('business_email', {
                            required: 'Campo requerido'
                        })}
                        type="email"
                        id="business_email"
                        name="business_email"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
                        placeholder="Enter your business email"
                        required
                    />
                    {errors.business_email?.type === 'required' &&
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                            {errors.business_email.message}
                        </div>
                    }
                </div>

                {/* Subscription Plan */}
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor="subscription_plan" className="text-lg font-medium text-gray-700">
                        Subscription Plan
                    </label>
                    <select
                        {...register('subscription_plan', {
                            required: 'Campo requerido'
                        })}
                        id="subscription_plan"
                        name="subscription_plan"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
                        required
                    >
                        <option value="">Select a plan</option>
                        <option value="basic">Basic</option>
                        <option value="premium">Premium</option>
                        <option value="enterprise">Enterprise</option>
                    </select>
                    {errors.subscription_plan?.type === 'required' &&
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                            {errors.subscription_plan.message}
                        </div>
                    }
                </div>

                {/* Account Status */}
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor="account_status" className="text-lg font-medium text-gray-700">
                        Account Status
                    </label>
                    <select
                        {...register('account_status', {
                            required: 'Campo requerido'
                        })}
                        id="account_status"
                        name="account_status"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
                        required
                    >
                        <option value="">Select status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    {errors.account_status?.type === 'required' &&
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                            {errors.account_status.message}
                        </div>
                    }
                </div>

                {/* Image Logo */}
                <div className="relative grid grid-cols-1 gap-y-2">
                    <label htmlFor="image_logo" className="text-lg font-medium text-gray-700">
                        Business Logo
                    </label>
                    <div className="flex items-center space-x-4">
                        <div
                            className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="object-cover w-full h-full"/>
                            ) : (
                                <span className="text-gray-400">No image</span>
                            )}
                        </div>
                        <input
                            {...register('image_logo', {
                                required: 'Campo requerido'
                            })}
                            type="file"
                            id="image_logo"
                            name="image_logo"
                            onChange={(event) => handleImageChange(event.target.files)}
                            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
                            accept="image/*"
                            required
                        />
                    </div>
                    {errors.image_logo?.type === 'required' &&
                        <div className="absolute right-0 top-0 bg-neutral-950 px-4 rounded-sm text-white text-sm">
                            {errors.image_logo.message}
                        </div>
                    }
                </div>
            </form>
        </div>
    );
}