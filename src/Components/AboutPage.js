


import GivingPicture from '../Images/GivingPicture.jpg';



const stats = [
    { label: 'First Giving Goal', value: '$ 1 million' },
    { label: 'Donated To Date', value: '$ 15,200' },
    // { label: 'Total Users Making a Difference', value: '22 users' },
]
const values = [
    {
        name: 'Honesty and Character',
        description:
            'We believe in doing and being who we say we are to the world and behind closed doors. We make all donations and everything about the company as clear as possible. We will never hide anything from our users or anyone.',
    },
    {
        name: 'Giving',
        description:
            'In a world of greed, we want to be different and give back. We know that none of us can take anything with us when we die, so our mission is to give as much as we can to this world while we have it.',
    },
    {
        name: 'Faith',
        description:
            'We are a founded on Christian principles, but our main goal is show love to this world. We believe loving others and deeply caring for those around us is most important. We encourage people of all religions to join us and bring more love into this world.',
    },
    {
        name: 'Being a source of Happiness to the world',
        description:
            'We enjoy bring a smile to peoples faces, and so we built a company around it. If we can just add 1 laugh to someone\'s day then we have made this world that much better. Join us on the journey to laughter and happiness.',
    },
    {
        name: 'Always Listening, Learning, and Adapting',
        description:
            'Our team has a life long desire to always be learning and adapting. We make it a priority to listen to our users feedback, and adapt to it. Sometimes it isn\'t always simple, but we promise to listen and grow together, with our user base.',
    },
    // {
    //     name: 'Enjoy downtime',
    //     description:
    //         'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    // },
]









export default function AboutPage() {




    return (
        <div className="bg-gray-900">


            <main className="isolate">
                {/* Main top content section */}
                <div className="relative isolate -z-10">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-500 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-700">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-3xl">
                                    <h1 className="text-pretty text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">

                                        We make changing the world achievable for everyone by simplifying how people give and connect.
                                    </h1>
                                    <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                                        We believe in leading by example, dedicating over half our revenue to helping others. While we aim to bring
                                        smiles to our users' faces, our deeper mission is creating lasting positive change. Experience has shown us
                                        that collective giving, even in small amounts, can have tremendous impact. We provide a simple platform for
                                        users to unite and make meaningful differences together. To maintain transparency and show the real impact of
                                        every contribution, we share weekly updates demonstrating how donations have transformed lives.
                                    </p>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-32 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">

                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">Our mission</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-xl/8 text-gray-300">
                                    With giving back what we built a company on, our first goal is to donate $1 million dollars to help communities
                                    all over. Being a young company, we keep our goals small but we have faith that we could be giving millions per month
                                    as the Lord blesses this company and movement.
                                </p>
                                <p className="mt-10 max-w-xl text-base/7 text-gray-300">
                                    To the right you will see our current donations to date and where we are headed. We are confident and hopeful that
                                    others will join us along this journey.
                                </p>
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                            <dt className="text-base/7 text-gray-400">{stat.label}</dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-100">{stat.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img
                        alt=""
                        src={GivingPicture}
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">Our values</h2>
                        <p className="mt-6 text-lg/8 text-gray-400">
                            These are the values that we were founded on and what our company stands for.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name}>
                                <dt className="font-semibold text-gray-100">{value.name}</dt>
                                <dd className="mt-1 text-gray-400">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>


            </main>

            {/* Footer */}
            <footer className="mt-16 sm:mt-32">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        &copy; 2024 Happy Appy, Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
