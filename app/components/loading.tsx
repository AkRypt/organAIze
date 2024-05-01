export default function Loading() {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="w-[80%] p-8 bg-base-100 rounded-lg flex flex-col justify-center items-center relative">

                {/* Background */}
                <div className="absolute top-0 h-full w-full rotate-180 transform bg-base-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

                <div className="relative">
                    <p className="text-2xl font-bold text-center prose">
                        Loading...
                    </p>

                    <div className="relative mb-10 p-10 w-full">
                        <div className="loader-inner">
                            <div className="loader-line-wrap">
                                <div className="loader-line border-2 border-black"></div>
                            </div>
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                        </div>
                    </div>


                    <p className="text-center">
                        Please wait while the AI generates a schedule that best suits you...
                    </p>
                </div>
            </div>
        </div>
    )
}