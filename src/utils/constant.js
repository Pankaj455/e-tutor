import { Armchair, BugDroid, Camera, ChartBarHorizontal, CircleWavyCheck, CreditCard, FirstAidKit, ForkKnife, Gift, GlobeHemisphereWest, Handshake, Headphones, MegaphoneSimple, Notebook, Package, PenNib, Receipt, Stack, Translate, Trophy, Users } from "@phosphor-icons/react";

import netflix from "../images/about/companies/netflix.svg"
import youtube from "../images/about/companies/youtube.svg"
import google from "../images/about/companies/google.svg"
import lenovo from "../images/about/companies/lenovo.svg"

export const CATEGORY_ICON_MAP = {
    "IT & Software": ChartBarHorizontal,
    "Business": Handshake,
    "Finance & Accounting": CreditCard,
    "Personal Development": BugDroid,
    "Office Productivity": Receipt,
    "Marketing": MegaphoneSimple,
    "Photography & Video": Camera,
    "Lifestyle": Package,
    "Design": PenNib,
    "Health & Fitness": FirstAidKit,
    "Music": Headphones,
    "Translation": Translate
}

export const categories = [
    {
        name: "IT & Software",
        count: "22,649",
        theme: "secondary",
        Icon: ChartBarHorizontal,
    },
    {
        name: "Business",
        count: "52,822",
        theme: "success",
        Icon: Handshake,
    },
    {
        name: "Finance & Accounting",
        count: "33,822",
        theme: "warning",
        Icon: CreditCard,
    },
    {
        name: "Personal Development",
        count: "20,822",
        theme: "success",
        Icon: BugDroid,
    },
    {
        name: "Office Productivity",
        count: "13,932",
        theme: "grey",
        Icon: Receipt,
    },
    {
        name: "Marketing",
        count: "12,068",
        theme: "secondary",
        Icon: MegaphoneSimple,
    },
    {
        name: "Photography & Video",
        count: "6,196",
        theme: "grey",
        Icon: Camera,
    },
    {
        name: "Lifestyle",
        count: "2,736",
        theme: "warning",
        Icon: Package,
    },
    {
        name: "Design",
        count: "2,600",
        theme: "primary",
        Icon: PenNib,
    },
    {
        name: "Health & Fitness",
        count: "1,678",
        theme: "success",
        Icon: FirstAidKit,
    },
    {
        name: "Music",
        count: "959",
        theme: "warning",
        Icon: Headphones,
    },
    {
        name: "Translation",
        count: "1,022",
        theme: "primary",
        Icon: Translate,
    },
]

export const benefits = [
    {
        name: "Healthy Food & Snacks",
        theme: "primary",
        Icon: ForkKnife,
    },
    {
        name: "Personal Career Growth",
        theme: "secondary",
        Icon: ChartBarHorizontal,
    },
    {
        name: "Vacation & Paid Time Off",
        theme: "success",
        Icon: Armchair,
    },
    {
        name: "Special Allowance & Bonuse",
        theme: "warning",
        Icon: Gift,
    },
    {
        name: "Competitive Salary",
        theme: "success",
        Icon: CreditCard,
    },
    {
        name: "Well-being memberships",
        theme: "primary",
        Icon: Handshake,
    },
    {
        name: "Maternity/Paternity Benefits",
        theme: "grey",
        Icon: Trophy,
    },
    {
        name: "Eduguard Annual Events",
        theme: "secondary",
        Icon: ForkKnife,
    },
]

export const companies = [
    {
        url: netflix,
        alt: "netflix logo",
    },
    {
        url: youtube,
        alt: "youtube logo",
    },
    {
        url: google,
        alt: "google logo",
    },
    {
        url: lenovo,
        alt: "lenovo logo",
    },
    {
        url: netflix,
        alt: "netflix logo",
    },
    {
        url: youtube,
        alt: "youtube logo",
    },
    {
        url: google,
        alt: "google logo",
    },
    {
        url: lenovo,
        alt: "lenovo logo",
    },
]

export const funFact = [
    {
        count: "67.1k",
        title: "Students",
        Icon: Users,
        iconColor: "text-primary-500"
    },
    {
        count: "26k",
        title: "Certified Instructor",
        Icon: Notebook,
        iconColor: "text-secondary-500"
    },
    {
        count: "72",
        title: "Country Language",
        Icon: GlobeHemisphereWest,
        iconColor: "text-error-500"
    },
    {
        count: "99.9%",
        title: "Success Rate",
        Icon: CircleWavyCheck,
        iconColor: "text-success-500"
    },
    {
        count: "57",
        title: "Trusted Companies",
        Icon: Stack,
        iconColor: "text-warning-500"
    },
]

export const branches = [
    {
        country: "Los Angeles, California",
        address1: "1702 Olympic Boulevard",
        address2: "Santa Monica, CA 90404"
    },
    {
        country: "Tokyo, Japan",
        address1: "901 N Pitt Str., Suite 170",
        address2: "Tokyo, VA 22314, Japan"
    },
    {
        country: "Moscow, Russia",
        address1: "Anjeliersstraat 470H, 1015 NL",
        address2: "Moscow, Russia"
    },
    {
        country: "Mumbai, India",
        address1: "36 East 20th St, 6th Floor",
        address2: "Mumbai, India"
    },
]

export const jobs = [
    {
        position: "Product Designer (UI/UX Designer)",
        location: "Tokyo, Japan",
        type: "Full-Time",
        vacancies: 3,
        deadline: "30 June, 2021",
    },
    {
        position: "Product Designer (UI/UX Designer)",
        location: "Tokyo, Japan",
        type: "Full-Time",
        vacancies: 3,
        deadline: "30 June, 2021",
    },
    {
        position: "Product Designer (UI/UX Designer)",
        location: "Tokyo, Japan",
        type: "Full-Time",
        vacancies: 3,
        deadline: "30 June, 2021",
    },
    {
        position: "Product Designer (UI/UX Designer)",
        location: "Tokyo, Japan",
        type: "Full-Time",
        vacancies: 3,
        deadline: "30 June, 2021",
    }
]
