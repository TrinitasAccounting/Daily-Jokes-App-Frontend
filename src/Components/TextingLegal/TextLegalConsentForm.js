


import { Description, Field, Label, Switch } from '@headlessui/react'
import { useState } from 'react'



const TextLegalConsentForm = () => {

    const [enabled, setEnabled] = useState(false)


    return (
        <div className="justify-center  grid grid-cols-1 place-items-center">

            {/* Actual legal text and documentation for the customer to read through */}
            <div className=" mt-20 ">
                <p className="max-w-3xl ">
                    Informed Consent for Text (SMS) Messaging

                    With your consent, Happy Appy would like to send text (SMS) messages to the mobile number you have provided in our records.

                    By providing your informed consent where indicated, you acknowledge that you have understood the information below and agree to participate in our text (SMS) messaging service.

                    Purpose and Description: Happy Appy’s text (SMS) messaging service is designed to provide you with helpful information, content of the day, and notifications/posts via text messages sent to your mobile phone. We may use text (SMS) messages to communicate with you for a variety of purposes, including:

                    content of the day
                    announcements and reminders of upcoming events
                    reminders about membership renewal
                    surveys and polls

                    Voluntary Participation: Participation in our text (SMS) messaging service is entirely voluntary. You have the right to refuse or withdraw your consent at any time.

                    Benefits and Risks: Benefits: The text (SMS) messaging service aims to keep you informed about Happy Appy by providing an additional method of convenient and timely communication.

                    Risks: While every effort will be made to protect the security and confidentiality of information transmitted through text (SMS) messages, there are inherent risks associated with all electronic communication. These risks include unauthorized access, loss of privacy, and potential breach of sensitive information. It is important to be aware that text (SMS) messages may not be entirely secure and could be intercepted or accessed by unintended recipients.

                    Potential Costs: Participation in the text (SMS) messaging service may involve standard text messaging charges applied by your mobile service provider. Please consult your mobile service provider regarding any applicable fees or charges.
                </p>

            </div>


            <div>

                {/* Toggle button and text for the user to select consent from */}
                <Field className="flex items-center justify-between mt-10">
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className=" group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
                    >
                        <span
                            aria-hidden="true"
                            className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                        />
                    </Switch>
                    <span className="flex grow flex-col pl-5">
                        <Label as="span" passive className="text-sm/6 font-medium text-gray-900">
                            I Agree
                        </Label>
                        <Description as="span" className="text-sm text-gray-500">
                            This provides legal consent for Happy Appy to send sms text to your cell phone on file
                        </Description>
                    </span>
                </Field>


                {/* This is changing the button depending on if consent toggle is selected________ */}
                {enabled ?

                    <div className="mt-16 ">
                        <a href='/signup' >
                            <button type="button"
                                className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                            >
                                Complete Signing Up
                            </button>
                        </a>
                    </div>

                    :

                    <div className="mt-16 ">
                        <a>
                            <button type="button"
                                className="rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-300"
                            >
                                Complete Signing Up
                            </button>
                        </a>
                    </div>
                }
                <div className="mt-10">
                    <a>
                        <button type="button"
                            className="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300"
                        >
                            Exit to Home Screen
                        </button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default TextLegalConsentForm;