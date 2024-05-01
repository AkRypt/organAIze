export default function Loading() {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="w-[80%] p-8 bg-base-100 rounded-lg flex flex-col justify-center items-center"
                style={{ background: "radial-gradient(#E1DAD6 10%, #faf7f5 50%)" }}>

                <p className="text-2xl font-bold text-center prose">
                    Loading...
                </p>

                <div className="relative mb-10 p-10 w-full">
                    <div className="loader-inner">
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
    )
}