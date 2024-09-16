import {Toaster} from "react-hot-toast";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginLayout from "../modules/login/layout/LoginLayout.tsx";
import Layout from "../modules/super-admin/layout/Layout.tsx";
import Home from "../modules/super-admin/screens/Home.tsx";
import Account from "../modules/super-admin/screens/Account.tsx";
import Users from "../modules/super-admin/screens/Users.tsx";

export default function Router() {

    return (
        <>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
                containerClassName="overflow-auto"
            />
            <Routes>
                <Route path="/login" element={ <LoginLayout/> }/>
                <Route path="/s_admin" element={ <Layout/> }>
                    <Route path="home" element={<Home/>}/>
                    <Route path="account" element={<Account/>}/>
                    <Route path="user" element={<Users/>}/>
                    <Route index element={<Navigate to="home"/>}/>
                </Route>
                <Route path="/" element={<Navigate to="s_admin"/>}/>
            </Routes>
        </>
    );
}