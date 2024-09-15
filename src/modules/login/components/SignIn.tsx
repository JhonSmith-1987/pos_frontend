import {useForm} from "react-hook-form";
import {LoginModel} from "../models/LoginModel.ts";
import {useState} from "react";

interface Props {
    setShowLogin: (data:string) => void;
}

export default function SignIn({setShowLogin}: Props) {

    const {
        register,
        handleSubmit,
    } = useForm<LoginModel>();
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const submitLogin = (data: LoginModel) => handleLoginPost(data);

    async function handleLoginPost(data: LoginModel) {
        console.log(data);
    }

    function handleSelectAccount(data:boolean) {
        if (data) {
            setShowLogin('plan');
        }
    }

    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit(submitLogin)}>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                        {...register('email')}
                        type="email"
                        className="w-full p-3 rounded bg-gray-700 text-gray-200 border border-gray-600
                                    focus:border-teal-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Password</label>
                    <input
                        {...register('password')}
                        type="password"
                        className="w-full p-3 rounded bg-gray-700 text-gray-200 border border-gray-600
                                    focus:border-teal-400"
                    />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center text-gray-400">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Recordar usuario
                    </label>
                </div>
                <div onClick={() => handleSelectAccount(false)} className="text-purple-400 hover:text-purple-300 cursor-pointer">

                </div>
                <button
                    type="submit"
                    className="w-full p-3 bg-teal-500 text-white rounded hover:bg-teal-600
                                    transition-colors"
                >
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
}