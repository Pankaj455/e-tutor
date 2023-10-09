import { Envelope, PaperPlaneRight } from "@phosphor-icons/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { branches } from "../utils/constant";
import { FormInput, FormTextArea, Divider } from "../components/common";

const ContactPage = () => {

  /**
   * TODO -> update background image in the branches section for each branch
   */
  // const branchesBg = ["../images/contact/branches-1", "../images/contact/branches-2", "../images/contact/branches-3", "../images/contact/branches-4"]

  return (
      <>
        <section className="w-9/12 mx-auto max-w-[1440px] pt-8">
          <div className="grid grid-cols-12 gap-20">
            <div className="col-span-6 py-20">
              <div className="flex flex-col gap-6">
                <h1 className="heading-01 text-grey-900">Connect with us</h1>
                <p className="body-xl-400 text-grey-700">Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.</p>
                <Link to="#" className="btn btn-primary primary w-fit"><Envelope /> Copy Email</Link>
              </div>
            </div>
            <div className="col-span-6">
              <StaticImage
                src="../images/contact/contact-main.png"
                alt="contact with us"
                placeholder="none"
                className="h-full w-100"
              />
            </div>
          </div>
        </section>

        <Divider />

        <section className="w-9/12 mx-auto max-w-[1440px] py-20">
          <h2 className="heading-02 text-grey-900 text-center mb-4">Our branches all over the world.</h2>
          <p className="body-xl-400 text-grey-700 text-center mb-10">Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>

          <div className="grid grid-cols-12 gap-6">
            {branches.map((branch, idx) => {
              return (
                <div className="col-span-3" key={idx}>
                  <div className="relative">
                    <StaticImage 
                      src="../images/contact/branches-1.png"
                      alt="branches-image"
                      className="w-full"
                    />
                    <div className="absolute start-0 end-0 bottom-0 w-100 px-6 pb-6">
                      <div className="bg-white pt-5 pb-4 flex flex-col items-center">
                        <p className="body-lg-500 text-grey-900">{branch.country}</p>
                        <span className="body-md-400 text-grey-600">{branch.address1}</span>
                        <span className="body-md-400 text-grey-600">{branch.address2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="py-20 bg-grey-50">
          <div className="w-9/12 mx-auto max-w-[1440px]">
            <h2 className="heading-02 text-grey-900 text-center mb-10">Contact Us</h2>
            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-6">
                <p className="body-xxxl text-grey-900 mb-10">Will you be in Los Angeles or any other branches any time soon? Stop by the office! We'd love to meet.</p>
                <div className="py-8 grid grid-cols-12 gap-6 border-b border-solid border-grey-100">
                  <span className="label-xl text-primary-500 uppercase col-span-4">Address</span>
                  <div className="flex flex-col gap-2 col-span-8">
                    <span className="body-lg-400 text-grey-900">1702 Olympic Boulevard</span>
                    <span className="body-lg-400 text-grey-900">Santa Monica, CA 90404</span>
                  </div>
                </div>
                <div className="py-8 grid grid-cols-12 gap-6 border-b border-solid border-grey-100">
                  <span className="label-xl text-primary-500 uppercase col-span-4">Phone Number</span>
                  <div className="flex flex-col gap-2 col-span-8">
                    <span className="body-lg-400 text-grey-900">(480) 555-0103 </span>
                    <span className="body-lg-400 text-grey-900">(219) 555-0114</span>
                  </div>
                </div>
                <div className="py-8 grid grid-cols-12 gap-6">
                  <span className="label-xl text-primary-500 uppercase col-span-4">Email address</span>
                  <div className="flex flex-col gap-2 col-span-8">
                    <span className="body-lg-400 text-grey-900">help.eduguard@gmail.com</span>
                    <span className="body-lg-400 text-grey-900">career.eduguard@gamil.com</span>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="bg-white p-10">
                  <h3 className="body-xxxl text-grey-900 mb-3">Get In touch</h3>
                  <p className="body-lg-400 text-grey-500 mb-8">Feel free contact with us, we love to make new partners & friends</p>
                  <form action="#" className="flex flex-col gap-4">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <FormInput
                          type="text"
                          label="First Name"
                          placeholder="First name..."
                        />
                      </div>
                      <div className="col-span-6">
                        <FormInput
                          type="text"
                          label="Last Name"
                          placeholder="Last name..."
                        />
                      </div>
                    </div>

                    <FormInput
                      type="email"
                      label="Email"
                      placeholder="Email Address"
                    />

                    <FormInput
                      type="text"
                      label="Subject"
                      placeholder="Message Subject"
                    />

                    <FormTextArea
                      label="Message"
                      placeholder="Message"
                      styles="mb-8"
                    />

                    <button className="btn-lg btn-primary primary w-fit">Send Message <PaperPlaneRight /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
  )
}

export default ContactPage

export const Head = () => <title>Contact</title>
