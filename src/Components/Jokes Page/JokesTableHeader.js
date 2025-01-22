


import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
    { name: 'Applied', href: '#', current: false },
    { name: 'Phone Screening', href: '#', current: false },
    { name: 'Interview', href: '#', current: true },
    { name: 'Offer', href: '#', current: false },
    { name: 'Hired', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function JokesTableHeader() {
    return (
        <div className="border-b border-gray-200 pb-5 sm:pb-0">
            <h3 className="text-2xl font-semibold text-gray-100">Browse Our Jokes From Last Year</h3>

            {/* Button for adding a new joke, using grid layout for Div to position it____________________________ */}
            <div className='grid grid-cols-5 gap-4'>
                <div class="p-4">Item 1</div>
                <div class=" p-4">Item 2</div>
                <div class=" p-4">Item 2</div>
                <div class=" p-4">Item 2</div>
                <div class=" p-4">
                    <button
                        type="button"
                        className="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                    >
                        Add New Joke
                    </button>
                </div>
            </div>



            <div className="mt-3 sm:mt-16">
                <div className="grid grid-cols-1 sm:hidden">
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                        defaultValue={tabs.find((tab) => tab.current).name}
                        aria-label="Select a tab"
                        className="text-gray-100 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-100"
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name} >{tab.name}</option>
                        ))}
                    </select>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                    />
                </div>
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                aria-current={tab.current ? 'page' : undefined}
                                className={classNames(
                                    tab.current
                                        ? 'border-indigo-100 text-indigo-200'
                                        : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-100',
                                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
                                )}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
