import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import HomeUser from "../modules/user/screens/HomeUser.tsx";
import LoginLayout from "../modules/login/layout/LoginLayout.tsx";
import Account from "../modules/user/screens/Account.tsx";

export default function Router() {

    return (
        <>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
                containerClassName="overflow-auto"
            />
            <Routes>
                <Route path="/" element={ <LoginLayout/> }/>
                <Route path="/home" element={ <HomeUser/> }/>
                <Route path="/accounts" element={ <Account/> }/>
                {/*<Route path="/" element={ <Navigate to="user"/> }/>*/}
            </Routes>
        </>
    );
}