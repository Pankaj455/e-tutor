import { Disclosure } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'
import React from 'react'

function Filter({containerStyles}) {
  return (
    <div className={`${containerStyles} rounded-2xl bg-white`}>
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between items-center border border-solid border-grey-100 p-5 text-left text-grey-900 labels-xxl hover:text-primary-500 hover:border-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75 group">
                        <span className="uppercase">Category</span>
                        <CaretDown
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-6 w-6 text-grey-900 group-hover:text-primary-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        If you're unhappy with your purchase for any reason, email us
                        within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between items-center border border-solid border-grey-100 p-5 text-left text-grey-900 labels-xxl hover:text-primary-500 hover:border-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75 group">
                        <span className="uppercase">Rating</span>
                        <CaretDown
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-grey-900 group-hover:text-primary-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        No.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </div>
  )
}

export default Filter