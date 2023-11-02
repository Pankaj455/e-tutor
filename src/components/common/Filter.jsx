import { Disclosure } from '@headlessui/react'
import { CaretDown, Square } from '@phosphor-icons/react'
import React, { useState } from 'react'
import FilterCheck from './FilterCheck'
import { categories } from '../../utils/constant'

const filters = [
    {
        name: "categories",
        items: categories.map(category => category.name),
    },
    {
        name: "rating",
        items: [
            "5 Star & up",
            "4 Star & up",
            "3 Star & up",
            "2 Star & up",
            "1 Star & up",
        ],
    },
    {
        name: "course level",
        items: [
            "All Level",
            "Beginner",
            "Intermediate",
            "Expert"
        ]
    },
    {
        name: "duration",
        items: [
            "0-1 Hour",
            "1-3 Hours",
            "3-6 Hours",
            "6-10 Hours",
            "10+ Hours",
        ]
    }
]

function Filter({containerStyles}) {

    return (
        <div className={`${containerStyles} rounded-2xl bg-white`}>
            {filters.map((filter, idx) => {
                return (<Disclosure key={idx}>
                    {({ open }) => (
                        <div className="mb-6">
                            <Disclosure.Button className="flex w-full justify-between items-center border border-solid border-grey-100 p-5 text-left text-grey-900 labels-xxl hover:text-primary-500 hover:border-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75 group">
                                <span className="uppercase">{filter.name}</span>
                                <CaretDown
                                    className={`${
                                        open ? 'rotate-180 transform transition-all duration-300' : ''
                                    } h-6 w-6 text-grey-900 group-hover:text-primary-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-5 py-3 text-sm text-gray-500 border-x border-b border-solid border-grey-100">
                                <div className="flex flex-col gap-2.5">
                                    {/*<div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <input type="checkbox" id="category" className="hidden filter-checks" />
                                            <Square size={20} className="text-grey-200" />
                                            <label htmlFor="category" className="body-md-400 text-grey-700 cursor-pointer select-none">Development</label>
                                        </div>
                                        <span className="select-none body-md-400 text-grey-500">342</span>
                                    </div>*/}
                                {filter.items.map(item => {
                                    return <FilterCheck key={item} id={item} label={item} count={342} />
                                })}
                                </div> 
                            </Disclosure.Panel>
                        </div>
                    )}
                </Disclosure>)
            })}
        </div>
    )
}

export default Filter