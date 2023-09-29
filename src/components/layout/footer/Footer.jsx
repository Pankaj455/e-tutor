import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { ArrowRight } from '@phosphor-icons/react'
import WithoutAuthFooter from './WithoutAuthFooter'
import BecomeInstructorFooter from './BecomeInstructorFooter'


const Footer = () => {

  return (
    <footer className="bg-grey-900">
      <div className="container w-9/12 mx-auto">
        <WithoutAuthFooter />
        {/* <BecomeInstructorFooter /> */}

        <div className="py-20">
          <div className="grid grid-cols-12 gap-12 xl:gap-6">
            <div className="col-span-4">
              <Link to="/">
                {/* <img src={footerLogo} /> */}
                <StaticImage src="../../../images/logos/footer-logo.svg"  alt="e-tutor logo" className="mb-5" />
              </Link>
              <p className="body-md-400 text-grey-500 mb-6">Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.</p>

              {/* social links */}
              <div className="flex gap-3">
                <Link to="/" className="py-3.5 px-4 bg-grey-800-40 footer-social">
                  <StaticImage src="../../../images/icons/facebook-logo.svg" alt="facebook profile" layout="fixed" width={18} height={18} />
                </Link>
                <Link to="/" className="py-3.5 px-4 bg-grey-800-40 footer-social">
                  <StaticImage src="../../../images/icons/instagram-logo.svg" alt="instagram profile" layout="fixed" width={18} height={18} />
                </Link>
                <Link to="/" className="py-3.5 px-4 bg-grey-800-40 footer-social">
                  <StaticImage src="../../../images/icons/linkedin-logo.svg" alt="linkedin profile" layout="fixed" width={18} height={18} />
                </Link>
                <Link to="/" className="py-3.5 px-4 bg-grey-800-40 footer-social">
                  <StaticImage src="../../../images/icons/twitter-logo.svg" alt="twitter profile" layout="fixed" width={18} height={18} />
                </Link>
                <Link to="/" className="py-3.5 px-4 bg-grey-800-40 footer-social">
                  <StaticImage src="../../../images/icons/youtube-logo.svg" alt="youtube profile" layout="fixed" width={18} height={18} />
                </Link>
              </div>
            </div>
            <div className="col-span-8 grid grid-cols-12 gap-4 xl:gap-6">
              <div className="col-span-6 xl:col-span-6 2xl:col-span-3">
                <p class="label-lg text-white uppercase mb-5">Top 4 Category</p>
                <ul>
                  <li className="py-1.5"><Link to="/" className="nav-link">Development</Link></li>
                  <li className="py-1.5"><Link to="/courses" className="nav-link">Finance & Accounting</Link></li>
                  <li className="py-1.5"><Link to="/about" className="nav-link">Design</Link></li>
                  <li className="py-1.5"><Link to="/contact" className="nav-link">Business</Link></li>
                </ul>
              </div>
              <div className="col-span-6 xl:col-span-6 2xl:col-span-3">
                <p class="label-lg text-white uppercase mb-5">Quick Links</p>
                <ul>
                  <li className="py-1.5"><Link to="/about" className="nav-link">About</Link></li>
                  <li className="py-1.5"><Link to="/courses" className="nav-link">
                    <span>Become Instructor</span><ArrowRight /></Link></li>
                  <li className="py-1.5"><Link to="/contact" className="nav-link">Contact</Link></li>
                  <li className="py-1.5"><Link to="/about" className="nav-link">Career</Link></li>
                </ul>
              </div>
              <div className="col-span-6 xl:col-span-6 2xl:col-span-3">
                <p class="label-lg text-white uppercase mb-5">Support</p>
                <ul>
                  <li className="py-1.5"><Link to="/" className="nav-link">Help Center</Link></li>
                  <li className="py-1.5"><Link to="/courses" className="nav-link">FAQs</Link></li>
                  <li className="py-1.5"><Link to="/about" className="nav-link">Terms & Condition</Link></li>
                  <li className="py-1.5"><Link to="/contact" className="nav-link">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="col-span-6 xl:col-span-6 2xl:col-span-3">
                <div className="w-fit">
                  <p class="label-lg text-white uppercase mb-5">Downlaod our app</p>
                  <div className="flex flex-col gap-3">
                    <Link to="#" className="download-app-link py-3 px-5 bg-grey-800-40 flex gap-3.5">
                      <StaticImage
                        src="../../../images/icons/apple-logo.svg"
                        width={32}
                        height={32}
                        layout="fixed"
                        alt="app store"
                      />
                      <div className="flex flex-col gap-0.5">
                        <span className="body-tiny-400 text-grey-300">Download now</span>
                        <span className="body-lg-500 text-white">App Store</span>
                      </div>
                    </Link>
                    <Link to="#" className="download-app-link py-3 px-5 bg-grey-800-40 flex gap-3.5">
                      <StaticImage
                        src="../../../images/icons/google-play-store-logo.svg"
                        width={32}
                        height={32}
                        layout="fixed"
                        alt="google play store"
                      />
                      <div className="flex flex-col gap-0.5">
                        <span className="body-tiny-400 text-grey-300">Download now</span>
                        <span className="body-lg-500 text-white">Play Store</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <p className="body-md-400 text-grey-500">Developed by <a href="https://github.com/pankaj455" className="text-white" target="_blank" rel="noreferrer">@pankaj455</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer