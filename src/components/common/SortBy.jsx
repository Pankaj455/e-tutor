import { Listbox, Transition } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'
import React, {Fragment, useState} from 'react'


const people = [
    { name: 'Most Popular' },
    { name: 'Newest' },
    { name: 'Highest Rated' },
]
  
function SortBy(){
const [selected, setSelected] = useState(people[0])

return (
    <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 w-56">
        <Listbox.Button className="form-input flex items-center justify-between w-full px-4">
            <span className="block truncate body-lg-400 text-grey-700">{selected.name}</span>
            <span className="pointer-events-none flex items-center pr-2">
            <CaretDown
                weight="bold"
                className="h-5 w-5 text-grey-900"
                aria-hidden="true"
            />
            </span>
        </Listbox.Button>
        <Transition
            as={Fragment}
            enter="transform transition duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 body-md-400 shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
                <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-6 pr-4 ${
                    active ? 'bg-primary-500 text-white' : 'text-grey-900'
                    }`
                }
                value={person}
                >
                {({ selected }) => (
                    <>
                    <span
                        className={`block truncate`}
                    >
                        {person.name}
                    </span>
                    {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                        <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                    ) : null} */}
                    </>
                )}
                </Listbox.Option>
            ))}
            </Listbox.Options>
        </Transition>
        </div>
    </Listbox>
)
}

export default SortBy