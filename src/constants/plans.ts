import {PlanModel} from "../common/models/PlanModel.ts";

export const plans: PlanModel[] = [
    {
        name: "Free",
        price: "$0",
        description: "Incluye características básicas para comenzar.",
        features: ["1 usuario", "Soporte básico", "Acceso limitado"],
    },
    {
        name: "Basic",
        price: "$10/mes",
        description: "Características esenciales para pequeñas empresas.",
        features: ["5 usuarios", "Soporte prioritario", "Acceso ilimitado"],
    },
    {
        name: "Standard",
        price: "$20/mes",
        description: "Plan avanzado con todas las características.",
        features: ["Usuarios ilimitados", "Soporte 24/7", "Acceso completo"],
    },
];