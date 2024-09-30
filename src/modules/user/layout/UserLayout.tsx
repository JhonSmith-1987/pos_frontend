import Header from "../components/Header.tsx";
import {ReactNode, useState} from "react";
import Sidebar from "../components/Sidebar.tsx";
import {useNavigate} from "react-router-dom";

interface Props {
    children:ReactNode;
}

export default function UserLayout({children}:Props) {

    const navigate = useNavigate();
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

    function redirectNavSidebar(path:string) {
        navigate(path);
        setIsOpenSidebar(false);
    }

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Header
                isOpenSidebar={isOpenSidebar}
                closeSidebar={(action) => setIsOpenSidebar(action)}
                redirectNav={(path) => redirectNavSidebar(path)}
            />
            <Sidebar
                isOpenSidebar={isOpenSidebar}
                closeSidebar={setIsOpenSidebar}
                redirectNav={(path) => redirectNavSidebar(path)}
            />
            <div className="w-full h-full bg-light-gray overflow-hidden">
                {children}
            </div>
        </div>
    );
}