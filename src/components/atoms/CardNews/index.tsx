

const CardNews = ({ isHeader, title, imageUrl }: { isHeader?: boolean, title: string, imageUrl: string }) => {
    return (
        <div className="group">

            {
                isHeader ? (
                    <div>
                        <div className="rounded-xl bg-[#F3F5F8] lg:grid lg:grid-cols-3 lg:mb-10">
                            <div className="overflow-hidden rounded-l-lg col-span-2">
                                <img src={imageUrl}
                                    alt="img-new"
                                    className="group-hover:scale-105 ease-in-out transition-all duration-[1500ms]" />
                            </div>

                            <div className="flex items-center justify-center">
                                <a href="#" className="text-3xl mx-10 mt-5 mb-10 font-semibold group-hover:text-indigo-600 ease-in-out 
                                    transition-all duration-[1500ms] hidden lg:block ">
                                    {title}
                                </a>
                            </div>

                        </div>
                        <a href="#" className="text-xl md:text-3xl mt-5 mb-10 font-semibold group-hover:text-indigo-600 ease-in-out 
                                    transition-all duration-[1500ms] block lg:hidden">
                            {title}
                        </a>
                    </div>
                ) : (
                    <div>
                        <div className="overflow-hidden rounded-xl">
                            <img src={imageUrl}
                                alt="img-new"
                                className="group-hover:scale-105 ease-in-out transition-all duration-[1500ms]" />
                        </div>

                        <a href="#" className="text-sm md:text-lg font-bold my-3 group-hover:text-indigo-600 ease-in-out 
                                transition-all duration-[1500ms] line-clamp-3">
                            {title}
                        </a>
                    </div>
                )
            }
        </div>
    )
}

export default CardNews