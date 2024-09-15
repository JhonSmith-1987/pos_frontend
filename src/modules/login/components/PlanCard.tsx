import {PlanModel} from "../../../common/models/PlanModel.ts";

interface Props {
    plan: PlanModel;
    handleRedirectRegister: (data: string) => void;
}

export default function PlanCard({plan, handleRedirectRegister}: Props) {

    function selectedPlan(plan_name: string) {
        handleRedirectRegister(plan_name);
    }

    return (
        <div className="bg-gray-400 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 text-green-500">{plan.name}</h3>
            <p className="text-xl mb-2">{plan.price}</p>
            <p className="mb-4">{plan.description}</p>
            <ul className="mb-6">
                {plan.features.map((feature: string, index: number) => (
                    <li key={index} className="text-sm">
                        {feature}
                    </li>
                ))}
            </ul>
            <button
                className="bg-purple-600 hover:bg-purple-700 p-2 rounded text-white font-bold mt-auto"
                onClick={() => selectedPlan(plan.name)}
            >
                Seleccionar Plan
            </button>
        </div>
    );
}