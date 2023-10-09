import React from 'react'
import IconButton from './IconButton'
import Divider from './Divider'
import { Briefcase, CheckCircle, ClipboardText, MapPinLine, PaperPlaneRight, ArrowRight } from "@phosphor-icons/react";

function JobCard({job}) {
    const {position, location, type, vacancies, deadline} = job;
  return (
    <div className="py-6 flex flex-col gap-6 bg-white">
        <div className="flex flex-col gap-5 px-6">
            <h4 className="body-xxl-500 text-grey-900">{position}</h4>
            <div className="flex gap-4">
                <div className="flex gap-1.5">
                    <div>
                        <MapPinLine size={20} className="text-secondary-500" />
                    </div>
                    <span className="body-md-400 text-grey-700">{location}</span>
                </div>
                <div className="flex gap-1.5">
                    <div>
                        <Briefcase size={20} className="text-success-500" />
                    </div>
                    <span className="body-md-400 text-grey-700">{type}</span>
                </div>
                <div className="flex gap-1.5">
                    <div>
                        <ClipboardText size={20} className="text-warning-500" />
                    </div>
                    <span className="body-md-400 text-grey-700">{vacancies === 1 ? "1 Vacancy" : `${vacancies} Vacancies`}</span>
                </div>
            </div>
        </div>

        <Divider />

        <div className="flex justify-between items-center px-6">
            <p className="body-md-500 text-error-500">
                Deadline: <span className="body-md-400 text-grey-600">{deadline}</span>
            </p>
            <div>
                <IconButton variant="secondary" color="primary" route="#" icon={ArrowRight} />
            </div>
        </div>
    </div>
  )
}

export default JobCard