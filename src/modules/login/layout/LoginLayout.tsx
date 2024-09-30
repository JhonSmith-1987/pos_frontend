import {useState} from "react";
import SignIn from "../components/SignIn.tsx";
import Register from "../components/Register.tsx";
import SubscriptionPlans from "../components/SubscriptionPlans.tsx";

export default function LoginLayout() {

    const [showLogin, setShowLogin] = useState<string>('login');

     return (
         <div className="min-h-screen bg-dark-gray flex items-center justify-center">
             {showLogin === 'login' &&
                <SignIn
                    setShowLogin={(data) => setShowLogin(data)}
                />
             }
             {showLogin === 'register' &&
                 <Register
                     setShowLogin={(data) => setShowLogin(data)}
                 />
             }
             {showLogin === 'plan' &&
                 <SubscriptionPlans
                     setShowLogin={(data) => setShowLogin(data)}
                 />
             }
         </div>
     );
}