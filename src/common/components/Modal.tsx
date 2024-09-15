import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react';
import {ReactNode} from "react";


interface IGameDataModalComponentProps {
    isOpen: boolean;
    textButtonConfirm: string;
    textButtonCancel: string;
    closeModal: (action: boolean) => void;
    onClickConfirm: () => void;
    children: ReactNode;
}


export default function Modal({
                                  isOpen,
                                  textButtonConfirm,
                                  textButtonCancel,
                                  closeModal,
                                  onClickConfirm,
                                  children,
                              }: IGameDataModalComponentProps): JSX.Element {

    return (
        <Transition show={isOpen}>
            <Dialog className="relative z-10" onClose={() => closeModal(false)}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </TransitionChild>

                <div className="fixed inset-0 z-10 mt-20 sm:mt-0 md:mt-0 lg:mt-0 w-screen  overflow-y-auto">
                    <div
                        className="flex min-h-full items-center lg:items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel
                                className="md:items-center md:justify-center relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl md:w-full md:max-w-2xl sm:p-6">

                                {children}

                                <div className="border-t border-gray-200 my-4"></div>
                                <div className="flex w-full items-center justify-end gap-3">
                                    <button
                                        type="button"
                                        className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        onClick={() => closeModal(false)}
                                    >
                                        {textButtonCancel}
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        onClick={onClickConfirm}
                                    >
                                        {textButtonConfirm}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}