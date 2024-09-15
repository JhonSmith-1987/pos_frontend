import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {plans} from "../../../constants/plans.ts";
import {alertSuccessToast} from "../../../utils/alertSuccessToast.ts";
import {sliderSettings} from "../../../constants/sliderSettings.ts";
import PlanCard from "./PlanCard.tsx";

interface Props {
    setShowLogin: (data: string) => void;
}

export default function SubscriptionPlans({setShowLogin}: Props) {

    function handleRedirectLogin() {
        setShowLogin('login');
    }

    function handleRedirectRegister(data: string) {
        if (data === 'Free') {
            setShowLogin('register');
            return;
        }
        alertSuccessToast('No tenemos aun ese servicio. Estamos trabajando en ello');
    }

    return (
        <div className="bg-transparent p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
                Elige tu plan
            </h2>
            <Slider {...sliderSettings} className="max-w-full">
                {plans.map((plan, index) => (
                    <div key={index} className="px-2">
                        <PlanCard
                            plan={plan}
                            handleRedirectRegister={handleRedirectRegister}
                        />
                    </div>
                ))}
            </Slider>
            <div onClick={handleRedirectLogin} className="text-purple-400 hover:text-purple-300 cursor-pointer mt-10">
                Iniciar sesión
            </div>
        </div>
    );
}