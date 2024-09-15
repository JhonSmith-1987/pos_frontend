import {useForm} from "react-hook-form";
import {RegisterModel} from "../models/RegisterModel.ts";

interface Props {
    setShowLogin: (data:string) => void;
}

export default function Register({setShowLogin,}: Props) {

    const {
        register,
        handleSubmit,
    } = useForm<RegisterModel>();

    const submitRegister = (data: RegisterModel) => handleRegister(data);

    function handleRegister(data: RegisterModel) {
        console.log(data);
    }

    function handleSelectAccountOrLogin() {
        setShowLogin('plan');
    }

    return (
        <div className="bg-gray-900 text-white p-8 max-w-2xl mx-auto rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Registrar Cuenta</h2>
            <form onSubmit={handleSubmit(submitRegister)} className="space-y-6">
                {/* Datos del negocio */}
                <div>
                    <h3 className="text-2xl mb-3">Datos de la cuenta</h3>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nombre del negocio"
                            className="w-full p-3 rounded bg-gray-800 text-white"
                            {...register('business_name')}
                        />
                        <input
                            type="text"
                            placeholder="Dirección del negocio"
                            className="w-full p-3 rounded bg-gray-800 text-white"
                            {...register('business_address')}
                        />
                        <input
                            type="text"
                            placeholder="Teléfono del negocio"
                            className="w-full p-3 rounded bg-gray-800 text-white"
                            {...register('business_phone')}
                        />
                    </div>
                </div>

                {/* Datos del usuario */}
                <div>
                    <h3 className="text-2xl mb-3">Datos del usuario</h3>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nombre de usuario"
                            className="w-full p-3 rounded bg-gray-800 text-white"
                            {...register('user_name')}
                        />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="w-full p-3 rounded bg-gray-800 text-white"
                            {...register('business_email')}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="w-full p-3 rounded bg-gray-800 text-white"
                            {...register('password')}
                        />
                        <input
                            type="password"
                            placeholder="Repetir contraseña"
                            className="w-full p-3 rounded bg-gray-800 text-white"
                            {...register('password_repeat')}
                        />
                    </div>
                </div>
                <div onClick={handleSelectAccountOrLogin} className="text-purple-400 hover:text-purple-300 cursor-pointer">
                    Mis planes
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 p-3 rounded text-white font-bold"
                >
                    Registrar
                </button>
            </form>
        </div>
    );
}