

export default function DonationsMainPage() {
    return (
        <>

            <main className="grid h-screen min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h1 className="mt-0 text-balance text-5xl font-semibold tracking-tight text-gray-100 sm:text-7xl">
                        Coming Soon
                    </h1>
                    <p className="mt-10 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                        We are currently increasing customer base, and will update on our first charitable giving soon
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </a>
                        {/* <a href="#" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a> */}
                    </div>
                </div>
            </main>
        </>
    )
}
