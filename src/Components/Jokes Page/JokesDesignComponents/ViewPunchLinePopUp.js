

import { useOutletContext } from 'react-router-dom'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


import { ImTux } from "react-icons/im";
import { ImTongue2 } from "react-icons/im";
import { ImWink2 } from "react-icons/im";
import { ImSleepy2 } from "react-icons/im";
import { ImHipster2 } from "react-icons/im";
import { ImHappy2 } from "react-icons/im";




export default function ViewPunchLinePopUp({ selectedJoke }) {

    const { openViewPunchLinePopUp, setOpenViewPunchLinePopUp } = useOutletContext();



    // Switching the icon symbol bassed on the joke Id
    function alternatePunchLineSymbol(selectedJoke) {
        let backgroundNumber = (selectedJoke.jokeId + 7) % 5;
        switch (backgroundNumber) {
            case 1:
                return (<ImTux size={75} />);
            case 2:
                return (<ImTongue2 size={75} />);
            case 3:
                return (<ImWink2 size={75} />);
            case 4:
                return (<ImSleepy2 size={75} />);
            case 5:
                return (<ImHipster2 size={75} />);
            case 6:
                return (<ImHappy2 size={75} />);
            default:
                return (<ImTux size={75} />);
        }
    }

    // Switching the background colors based on the joke id
    function alternatePunchLineColor(selectedJoke) {
        let backgroundNumber = (selectedJoke.jokeId + 7) % 5;
        switch (backgroundNumber) {
            case 1:
                return ("relative transform overflow-hidden rounded-lg bg-yellow-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95");
            case 2:
                return ("relative transform overflow-hidden rounded-lg bg-blue-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95");
            case 3:
                return ("relative transform overflow-hidden rounded-lg bg-red-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95");
            case 4:
                return ("relative transform overflow-hidden rounded-lg bg-green-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95");
            case 5:
                return ("relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95");
            case 6:
                return ("relative transform overflow-hidden rounded-lg bg-orange-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95");
            default:
                return ("relative transform overflow-hidden rounded-lg bg-yellow-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95");
        }
    }


    return (
        <Dialog open={openViewPunchLinePopUp} onClose={setOpenViewPunchLinePopUp} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        // Change statement that calls the function to change the class and the background color_______
                        className={alternatePunchLineColor(selectedJoke)}
                    >
                        <div>
                            <div className="mx-auto flex  items-center justify-center ">
                                {/* Change statement that calls the function to change the symbol for the punch line background */}
                                {alternatePunchLineSymbol(selectedJoke)}
                            </div>
                            <div className="mt-3 text-center sm:mt-5">
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {selectedJoke.question}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:mt-16">
                                <DialogTitle className="sm:text-2xl font-semibold text-gray-900">
                                    {selectedJoke.answer}
                                </DialogTitle>
                                <div className="mt-3">
                                    {/* <p className="text-sm text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center sm:mt-12">
                            <button
                                type="button"
                                onClick={() => setOpenViewPunchLinePopUp(false)}
                                className="flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Back to Jokes
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
