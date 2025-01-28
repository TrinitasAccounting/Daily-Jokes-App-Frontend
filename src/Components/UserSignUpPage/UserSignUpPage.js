
import { useOutletContext } from 'react-router-dom'
import { use, useState } from 'react';

import TermsAndConditionsToggle from './TermsAndConditionsToggleButton';


import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function UserSignUpPage() {

    const { addNewUser, } = useOutletContext();
    const [enabledTermsAndConditions, setEnabledTermsAndConditions] = useState(false)

    const [addUserForm, setAddUserForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        phoneNumber: "",
        countryCode: 1
    });

    // Updating the addUserForm as the form is filled out
    function handleChangeUpdatedAddUserForm(event) {
        setAddUserForm({ ...addUserForm, [event.target.name]: event.target.value })
    };

    function handleSubmissionOfAddNewUser(event) {
        event.preventDefault();
        addNewUser(addUserForm)

        setAddUserForm({
            email: "",
            firstName: "",
            lastName: "",
            username: "",
            phoneNumber: "",
            countryCode: 1
        })
    }








    return (
        <div className="relative isolate bg-gray-900 sm:h-screen">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 size-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                            >
                                <defs>
                                    <pattern
                                        x="100%"
                                        y={-1}
                                        id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                                        width={200}
                                        height={200}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
                            </svg>
                            <div
                                aria-hidden="true"
                                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                                    }}
                                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                                />
                            </div>
                        </div>
                        <h2 className=" text-4xl font-semibold tracking-tight text-yellow-200 sm:text-5xl">Sign Up</h2>
                        <p className="mt-6 text-lg/8 text-gray-300">
                            Join the effort to make this world a better place, one smile at a time! Laugh at the jokes but smile about the kids lives you are helping!
                        </p>
                        <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    401 Washington Blvd
                                    <br />
                                    Jersey City, New Jersey 07310
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                                        +1 (864) 965-8638
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:clay@trinitasaccounting.com" className="hover:text-white">
                                        clay@trinitasaccounting.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>



                <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"

                                        value={addUserForm.firstName}
                                        onChange={handleChangeUpdatedAddUserForm}

                                        className="block w-full rounded-md bg-yellow-200/25 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={addUserForm.lastName}
                                        onChange={handleChangeUpdatedAddUserForm}
                                        className="block w-full rounded-md bg-yellow-200/25 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={addUserForm.email}
                                        onChange={handleChangeUpdatedAddUserForm}
                                        className="block w-full rounded-md bg-yellow-200/25 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-8 gap-x-8">


                                <div className="sm:col-span-2 col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
                                        Country Code
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="countryCode"
                                            name="countryCode"
                                            type="tel"
                                            value={addUserForm.countryCode}
                                            onChange={handleChangeUpdatedAddUserForm}
                                            className="block w-full rounded-md bg-yellow-200/25 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-6 col-span-6">
                                    <div className="grid grid-cols-4">

                                        <label htmlFor="phone-number" className="sm:col-span-1 col-span-2 block text-sm/6 font-semibold text-white">
                                            Phone number
                                        </label>
                                        <label htmlFor="phone-number" className="sm:col-span-2 col-span-2 sm:px-2 px-1 block text-sm/6 font-semibold text-gray-400">
                                            123-456-7890
                                        </label>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="tel"
                                            value={addUserForm.phoneNumber}
                                            onChange={handleChangeUpdatedAddUserForm}
                                            className="block w-full rounded-md bg-yellow-200/25 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="sm:col-span-2 col-span-2">
                                <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                                    Username
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="username"
                                        value={addUserForm.username}
                                        onChange={handleChangeUpdatedAddUserForm}
                                        rows={1}
                                        className="block w-full rounded-md bg-yellow-200/25 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <TermsAndConditionsToggle setEnabledTermsAndConditions={setEnabledTermsAndConditions} enabledTermsAndConditions={enabledTermsAndConditions} />
                        </div>

                        {/* Verifying that the phone number is the correct length and the terms and conditions is selected */}
                        {/* Need to add a regular expression here to make sure it is a phone number format, one of the validations I will add */}
                        {(enabledTermsAndConditions && !(addUserForm.phoneNumber.length < 12) && !(addUserForm.phoneNumber.length > 12)) ?
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    onClick={handleSubmissionOfAddNewUser}
                                    className="rounded-md bg-amber-200 px-3.5 py-2.5 text-center text-sm font-semibold text-gray- shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>

                            :

                            <div className="mt-8 flex justify-end">
                                <a
                                    className="rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-gray- shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </a>
                            </div>




                        }
                        {/* <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                onClick={handleSubmissionOfAddNewUser}
                                className="rounded-md bg-amber-200 px-3.5 py-2.5 text-center text-sm font-semibold text-gray- shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div> */}
                    </div>
                </form>
            </div>
        </div>
    )
}
