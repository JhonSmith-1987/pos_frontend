import {Bars3Icon, HomeIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";

interface Props {
    isOpenSidebar: boolean;
    closeSidebar: (action:boolean) => void;
    redirectNav: (path:string) => void;
}

export default function Header({isOpenSidebar, closeSidebar, redirectNav}: Props) {

    function redirectHome() {
        redirectNav('/home');
    }

    return (
        <header className="flex w-full bg-navy-blue">
            <div className="flex items-center justify-center bg-cyan-light w-24">
                <Bars3Icon
                    onClick={() => closeSidebar(!isOpenSidebar)}
                    className="w-10 h-10 text-light-gray cursor-pointer"
                />
            </div>
            <div className="flex items-center justify-start w-24 pl-2">
                <HomeIcon className="w-6 h-6 text-light-gray cursor-pointer" onClick={redirectHome}/>
            </div>
            <div className="flex items-center justify-center w-full">
                <form className="flex items-center justify-start gap-3 border-b w-72">
                    <button>
                        <MagnifyingGlassIcon className="w-6 h-6 text-light-gray"/>
                    </button>
                    <input className="bg-transparent focus:outline-none border-0 text-light-gray text-sm" type="text"/>
                </form>
            </div>
        </header>
    );
}