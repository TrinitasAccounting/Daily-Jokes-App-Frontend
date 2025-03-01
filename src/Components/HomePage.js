

import MobileCombinedNoBackground from '../Images/MobileCombinedNoBackground.png';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, } from '@heroicons/react/24/outline'





// What customers receive daily, weekly, monthly in the customer incentives section
const incentives = [
    {
        name: 'Daily Jokes via Text',
        description: "Every day users receive a sms text with a new dad joke from our database of over 1000 dad jokes!",
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
        name: 'Personalized Donations to Charity',
        description: 'A user selected from multiple of or partner charities, and we donate over half of our revenue every month to the charity they choose!',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-gift-card-light.svg',
    },
    {
        name: 'Weekly Charity Updates via Text',
        description: "Every Friday we send out a donations update/post, so we all can see the tangible changes we are helping make for this world!",
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-delivery-light.svg',
    },

]


// For the bottom page links section
const footerNavigation = {
    solutions: [
        { name: 'Hosting', href: '#' },
        { name: 'Data Services', href: '#' },
        { name: 'Uptime Monitoring', href: '#' },
        { name: 'Enterprise Services', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Reference', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'X',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

// For the Charities section
const cards = [
    {
        name: 'Orphans in Need, USA',
        description: 'This charity is dedicated to providing long-term and consistent support to orphan children and their families in need.',
        link: "https://oinusa.org/about-us/"
    },
    {
        name: 'Samaritan\'s Purse',
        description: 'This is a nondenomination christina orgnanization providing spiritual and physical aid to hurting people around the world.',
        link: "https://www.samaritanspurse.org/our-ministry/christian-charity/"
    },
    {
        name: 'Our Fatherless Foundation',
        description: 'This charity helps support single family households without a father present. Helping to guide, teach, and provide to the children as they grow into young men and women.',
        link: "https://www.ourfatherless.org/"
    },
]


// Frequently Asked questions section
const faqs = [
    {
        question: "Are these jokes clean or safe for kids?",
        answer:
            "Absolutely, this is one of our core principles. We are a christian organization and we vet each joke to make sure it passes our standards of: no curse words, no provactive or rude language, no sexual undertones, etc.",
    },
    {
        question: "Are you giving out my phone number to other companies or spam?",
        answer:
            "Definitely not! We hate this just as much as you do and do not sell or give any user information to outside sources. We are solely in house and keep everything confidential!",
    },
    {
        question: "Is there a trial period I can do?",
        answer:
            "Unfortunately right now there is not. We will be adding a link where you can see examples of the jokes and what the daily message would look like. But for now, all users must sign up directly. Remember, a majority of your monthly fee goes to help those in need, so you are giving a smile just as you are receiving a smile.",
    },
    {
        question: "Do you store my credit card information?",
        answer:
            "We happily do not, we use Stripe payment solution to handle our transactions. All we keep is your information as a user and then we let Stripe's security maintain your payment information. So you don't have to worry about any hacks at all.",
    },
    {
        question: "Will I ever see if our donations make an actual difference?",
        answer:
            "Great question, so first and foremost we are very transparent as a company. We post on the donations page of our website, the exact amount and to whom the donations go to each month. So all of our users can rest assured their money is going to great causes. In the future we are excited about partnering with multiple charities and allowing them to send pictures, videos, or post to our users each month. Showing to the users what their donations are doing directly to help the children and people in need. So yes as soon as we can, you will be able to draw an even bigger smile as you see exactly what your capital is doing to help others.",
    },

]







export default function HomePage() {



    return (
        <div className="bg-gray-900">
            <main>

                {/* First section of landing page content, tag line and picture */}
                <div className="relative isolate overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
                            {/* <img
                                alt="Your Company"
                                src={Logo1}
                                className="h-11"
                            /> */}
                            <div className="mt-24 sm:mt-32 lg:mt-16">
                                <a href="/jokes" className="inline-flex space-x-6">
                                    <span className="rounded-full bg-indigo-300/10 px-3 py-1 text-sm/6 font-semibold text-amber-300 ring-1 ring-inset ring-indigo-500/20">
                                        Browse Last Year's Jokes
                                    </span>
                                    {/* <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                                        <span>Just shipped v1.0</span>
                                        <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-500" />
                                    </span> */}
                                </a>
                            </div>
                            <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                                A Dad Joke A Day Keeps the Stress Away
                            </h1>
                            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                                Join us to receive a smile everyday and stay to see the worldly difference we make together by giving back
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="/signup"
                                    className="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-gray-950 shadow-sm hover:bg-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    Get started
                                </a>
                                <a href="/about" className="text-sm/6 font-semibold text-white">
                                    Learn more about us <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                            <div className="shadow-xl shadow-gray-900 max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                                <img
                                    alt="App screenshot"
                                    src={MobileCombinedNoBackground}
                                    width={2432}
                                    height={1442}
                                    className=" sm:w-[38rem] w-[30rem] rounded-[40px]  "
                                />

                            </div>
                        </div>
                    </div>
                </div>


                {/* Customer Incentives section */}
                <div className="bg-gray-900">
                    <div className="flex justify-center ">
                        <p className="text-gray-100 sm:text-6xl text-2xl mt-10">What We Actually Do</p>
                    </div>
                    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                            {incentives.map((incentive) => (
                                <div key={incentive.name}>
                                    <img alt="" src={incentive.imageSrc} className="h-24 w-auto bg-gray-300 rounded-3xl" />
                                    <h3 className="mt-6 text-md font-medium text-gray-100">{incentive.name}</h3>
                                    <p className="mt-2 text-md text-gray-400">{incentive.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="flex justify-center ">
                        <h2 className="text-gray-100 max-w-2xl">***Announcement: we are super excited to say we have a mobile app in development, we are hopeful it will launch in the next 3-4 months. Eliminating the need for boring text, and opening the door to a much more interactive experience for our users.</h2>
                    </div>
                </div>


                {/* Charities Section */}
                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                    />
                    <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        />
                    </div>
                    <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:max-w-6xl lg:mx-0">
                            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Charities and Donations</h2>
                            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                                We want to make a difference in this world and we wanted to provide an easy way for others to do this as well. How do we do this, well when we started the company we vowed to give away 51% or more of our total revenue each month. And we happily do so month after month, allowing our users to know their $4.99 monthly subscription fee is going to a great cause. Below you will find some of our partnering charities that we donate too. In a future update, we will give each user the option to pick the charity they would like to donate too. As our goal is to not only entertain our users daily with jokes and memes, but to help make a lasting difference in this world.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                            {cards.map((card) => (
                                <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                                    {/* <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" /> */}
                                    <div className="text-base/7">
                                        <h3 className="font-semibold text-xl text-yellow-200">{card.name}</h3>
                                        <p className="mt-2 text-gray-300">{card.description}</p>
                                        <a href={card.link}
                                            className='text-indigo-400'>
                                            Link to Website
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Reviews Section */}
                <section className="bg-gray-900 py-24 sm:py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                                {/* <img alt="" src="https://tailwindui.com/plus/img/logos/tuple-logo-white.svg" className="h-12 self-start" /> */}
                                <figure className="mt-10 flex flex-auto flex-col justify-between">
                                    <blockquote className="text-lg/8 text-white">
                                        <p>
                                            “I have always sent dad jokes to my family and with a cringe, laugh at every one of them. Now, I get a joke texted to my phone every morning, putting a smile on my face! The real joy is knowing, my simple donation ends up making a huge difference for the charities and people this app supports.”
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-10 flex items-center gap-x-6">

                                        <span className="inline-flex size-10 items-center justify-center rounded-full bg-gray-500">
                                            <span className="font-medium text-white">CM</span>
                                        </span>
                                        <div className="text-base">
                                            <div className="font-semibold text-white">Cassidy M.</div>
                                            <div className="mt-1 text-gray-400">Dad Joke Enthusiast</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">

                                <figure className="mt-10 flex flex-auto flex-col justify-between">
                                    <blockquote className="text-lg/8 text-white">
                                        <p>
                                            “I must admit, I only signed up to begin with because I wanted to be a little part in the giving to charities. But I quickly realized I was getting a good laugh or smile everyday as well. You would be shocked how funny dad jokes can truly be. Great start to my morning everyday!”
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-10 flex items-center gap-x-6">

                                        <span className="inline-flex size-10 items-center justify-center rounded-full bg-gray-500">
                                            <span className="font-medium text-white">AR</span>
                                        </span>
                                        <div className="text-base">
                                            <div className="font-semibold text-white">Andy R.</div>
                                            <div className="mt-1 text-gray-400">Part-time Comedian</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>


                {/* FAQ section */}
                <div className="mx-auto mt-32 pb-20 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-4xl divide-y divide-gray-300/10">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                            Frequently asked questions
                        </h2>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-300/10">
                            {faqs.map((faq) => (
                                <Disclosure key={faq.question} as="div" className="pt-6">
                                    <dt>
                                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-100">
                                            <span className="text-base/7 font-semibold">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                                <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </dt>
                                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                                        <p className="text-base/7 text-gray-100">{faq.answer}</p>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>



            </main>

            {/* Footer */}
            <footer className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="border-t border-white/10 py-12 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center gap-x-6 md:order-2">
                        {footerNavigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
                        &copy; 2024 Sanctus, Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </div >
    )
}