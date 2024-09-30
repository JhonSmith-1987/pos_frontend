import {UsersIcon} from "@heroicons/react/24/outline";


interface Props {
    isOpenSidebar: boolean;
    closeSidebar: (action:boolean) => void;
    redirectNav: (path:string) => void;
}

export default function Sidebar({isOpenSidebar, closeSidebar, redirectNav}: Props) {

    function handleNavRedirect(path: string) {
        redirectNav(path);
    }

    return (
        <div
            className={`absolute top-0 left-0 w-full h-screen bg-dark-gray bg-opacity-10 
                            transition-transform duration-300 ease-in-out 
                            ${isOpenSidebar ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={() => closeSidebar(false)}
        >
            <div
                className="absolute top-0 left-0 flex flex-col items-start justify-start px-4 py-4 w-72 h-screen bg-dark-gray z-50"
                onClick={(e) => e.stopPropagation()}
            >
                <img className="w-16 h-16 rounded-full" alt="logo_sidebar" src="/img/img-tarjet-6.jpg"/>
                <div className="flex flex-col w-full mt-16">
                    <div className="flex items-center text-light-gray hover:text-gray-300 cursor-pointer" onClick={() => handleNavRedirect('/accounts')}>
                        <UsersIcon className="h-6 w-6 mr-2" />
                        Ver todas las cuentas
                    </div>
                </div>
            </div>
        </div>
    );
}