


'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'

export default function TermsAndConditionsToggle({ setEnabledTermsAndConditions, enabledTermsAndConditions }) {


    return (
        <Field className="flex items-center">
            <Switch
                checked={enabledTermsAndConditions}
                onChange={setEnabledTermsAndConditions}
                className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 data-[checked]:bg-amber-400"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
            </Switch>
            <Label as="span" className="ml-3 text-sm">
                <span className="font-medium text-gray-100">You agree to our <a href="/text/legal" className="text-blue-400">Terms and Conditions</a> </span>{' '}
            </Label>
        </Field>
    )
}
