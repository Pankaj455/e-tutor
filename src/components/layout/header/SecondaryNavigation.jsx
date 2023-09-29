import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Bell, Heart, MagnifyingGlass, ShoppingCartSimple } from '@phosphor-icons/react'

function SecondaryNavigation() {
  return (
    <div className="px-8 py-4 flex justify-between secondary-nav">
        <div className="flex gap-12">
            <Link to="/">
                <StaticImage
                    src="../../../images/logos/header-logo.svg"
                    layout="fixed"
                    alt="e-tutor logo"
                />
            </Link>
            <div className="flex gap-4">
                <div className="relative search-container">
                    <input
                        type="text"
                        placeholder="What do you want learn..."
                        className="form-input search min-w-[400px]"
                    />
                    <MagnifyingGlass size={24} className="search-icon" />
                </div>
            </div>
        </div>
        <div className="flex gap-6">
            <button><Bell size={24} className="text-grey-900" /></button>
            <button><Heart size={24} className="text-grey-900" /></button>
            <button><ShoppingCartSimple size={24} className="text-grey-900" /></button>
            <div className="flex gap-3">
                <Link to="#" className="btn btn-secondary primary">Create Account</Link>
                <Link to="#" className="btn btn-primary primary">Sign In</Link>
            </div>
        </div>
    </div>
  )
}

export default SecondaryNavigation