import { ArrowRight, Briefcase, ClipboardText, MapPinLine } from '@phosphor-icons/react'
import { Link } from 'gatsby'
import React from 'react'

function CareerDetail() {
  return (
    <>
        <section className="bg-grey-50 py-20 mb-10">
            <div className="w-9/12 mx-auto max-w-[1440px]">
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10 xl:gap-0">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <div className="flex gap-1.5">
                                    <div>
                                        <MapPinLine size={20} className="text-secondary-500" />
                                    </div>
                                    <span className="body-md-400 text-grey-700">Tokyo, Japan</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div>
                                        <Briefcase size={20} className="text-success-500" />
                                    </div>
                                    <span className="body-md-400 text-grey-700">Full-Time</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div>
                                        <ClipboardText size={20} className="text-warning-500" />
                                    </div>
                                    <span className="body-md-400 text-grey-700">1 Vacancy</span>
                                </div>
                            </div>
                            <h1 className="heading-02 text-grey-900">Product Designer (UI/UX Designer)</h1>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2 grow">
                                <span className="body-lg-500 text-primary-500 uppercase">address</span>
                                <p className="body-lg-400 text-grey-900">1702 Olympic Boulevard <br /> Santa Monica, CA 90404</p>
                            </div>
                            <div className="flex flex-col gap-2 grow">
                                <span className="body-lg-500 text-primary-500 uppercase">contact</span>
                                <p className="body-lg-400 text-grey-900">career.eduguard@gamil.com <br /> (219) 555-0114</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="#" className="btn-lg btn-primary primary w-fit">
                            Apply Now <ArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-6/12 mx-auto max-w-[650px] mb-16">
            <div className="flex flex-col gap-10">
                <div>
                    <h3 className="body-xxl-500 text-grey-900 mb-4">Who we are</h3>
                    <p className="body-md-400 text-grey-600">Sed lacinia accumsan eros in pretium. Praesent vitae eros condimentum, elementum nisl quis, vestibulum nulla. Aenean quis nibh ullamcorper, suscipit magna et, pretium nisi. Sed sed egestas mi. Donec viverra efficitur ipsum, ut cursus risus fringilla id.</p>
                </div>

                <div>
                    <h3 className="body-xxl-500 text-grey-900 mb-4">Requirements</h3>
                    <ul className="flex flex-col gap-2.5 text-grey-600 list-disc px-4">
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                    </ul>
                </div>

                <div>
                    <h3 className="body-xxl-500 text-grey-900 mb-4">Benefits</h3>
                    <ul className="flex flex-col gap-2.5 text-grey-600 list-disc px-4">
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                        <li className="body-md-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aperiam!</li>
                    </ul>
                </div>

                <div>
                    <h3 className="body-xxl-500 text-grey-900 mb-4">Salary</h3>
                    <p className="body-md-400 text-grey-700">Based on Skills [20K - 40K (USD) and Other Benefits</p>
                </div>
                
                <Link to="#" className="btn btn-primary primary w-fit self-center">
                    Apply Now <ArrowRight />
                </Link> 
            </div>
        </section>
    </>
  )
}

export default CareerDetail

export const Head = () => <title>Career Details</title>