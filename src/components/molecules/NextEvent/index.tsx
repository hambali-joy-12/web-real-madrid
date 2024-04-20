
import { useState } from "react"
import { GoArrowRight } from "react-icons/go"
import CheckBox from "../../atoms/CheckBox"

const NextEvent = () => {
    const [openModal, setIsOpenModal] = useState(false)
    return (
        <section className="mb-40 flex flex-col gap-3">
            <div className="flex itmems-center justify-between">
                <h1 className="text-3xl font-bold">Next Event</h1>
                <div>
                    <GoArrowRight size={25} className="text-gray-400" />
                </div>
            </div>
            <div>
                <button onClick={() => setIsOpenModal(!openModal)}>
                    filter teams
                </button>
            </div>
            {
                openModal ? <div className="fixed bottom-0 top-0 left-0 right-0 h-screen w-screen backdrop-blur-2xl">
                    <div className="w-full h-full relative">
                        <div className="bg-white w-full absolute bottom-0 p-5 rounded-t-3xl px-5 px:mx-20 flex flex-col gap-5">
                            <div className="flex justify-between ">
                                <button className="text-sm font-semibold text-indigo-600">Reset Filters</button>
                                <button onClick={() => setIsOpenModal(!openModal)}>x</button>
                            </div>
                            <p className="text-xl font-bold">Filter Teams</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <p className="text-lg font-bold">Football</p>
                                    <div className="flex flex-col gap-3">
                                        <CheckBox />
                                        <CheckBox />
                                        <CheckBox />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">Football</p>
                                    <div className="flex flex-col gap-3">
                                        <CheckBox />
                                        <CheckBox />
                                        <CheckBox />
                                    </div>
                                </div>
                            </div>
                            <button className="w-full text-white bg-indigo-700 py-2 rounded-lg bg-gradient-to-r from-[#3E31FB] to-[#825DF6] font-bold">
                                Show events
                            </button>
                        </div>
                    </div>
                </div> : null
            }
        </section>
    )
}

export default NextEvent