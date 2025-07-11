import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

type Package = {
  id: number
  title: string
  crossprice?: string
  price: string
  badge?: string
  description: string
  benifits: string
  features: string[]
  note1?: string
  note?: string
  para?: string
}

export const packages: Package[] = [
  {
    id: 1,
    title: 'Beginner Package Boot camp',
    crossprice: '100',
    price: '$99',
    badge: '50% off',
    description: 'Get in early. Start building your AI empire.',
    benifits: 'What you get:',
    features: [
      'Access to the Warrior Room — discover upcoming AI tools before they blow up',
      'Limited use of powerful AI bots — test and automate your first AI workflows',
      'Opportunity to apply as an influencer and grow your reach',
      'Exclusive training modules & mini-courses — quick, actionable strategies to make money with AI',
      'Weekly insider AI tips and project alerts to stay ahead of the game',
      'Access to a private VIP community — network, ask questions, and get support',
      'Bot usage cheatsheets & templates for fast, effective results',
      'Monthly group Q&A or AMA sessions with Marshall or the team',
      'Early access and discounts on upcoming features and upgrades',
    ],
    note: 'Over $1000+ in value — all for just $99.',
    para: '3 days trial in $1',
  },
  {
    id: 2,
    title: 'Beginner Package Boot camp',
    price: '$199',
    badge: '50% discount real price',
    description: 'For founders and creators ready to dominate the AI game.',
    benifits: 'What you get:',
    features: [
      'Full access to the Warrior Room with exclusive early releases of the hottest AI tools',
      'Priority opportunity to apply as an influencer and grow your network',
      'Regular updates and insider drops on new AI projects and money-making strategies',
      'Step-by-step monetization guides and tutorials to help you maximize every tool',
      'Access to the private VIP community for support, networking, and collaboration',
      'Monthly live group Q&A and coaching sessions with Marshall and experts',
      'Early access and exclusive discounts on all new features and tools',
    ],
    note: 'Over $10000+ in value — all for just $199.',
  },
  {
    id: 3,
    title: 'White House Package',
    price: '$20,000',
    badge: 'Elite access for founders ready to lead and build their AI empire',
    description: ' ',
    benifits: 'What you get:',
    features: [
      'Private calls with AI founders and industry leaders',
      'Investor introductions (no funding guarantees)',
      'Custom AI built for your business, free of charge',
      'Priority to join our exclusive core team',
      'Unlimited access to all courses and training',
      '1-on-1 coaching with Marshall for personalized growth',
      'VIP invites to masterminds and exclusive events',
      'Priority early access to new AI tools and features',
      'Early access to new AI tools and features',
      'Tailored growth and monetization strategy',
    ],
    note1:'For serious founders ready to dominate the AI space.',
    note: 'Over $100k+ in value — all for just $20k.',
  },
]

export default function PricingCard() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Pricing Options</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 ">
        {packages.map((pack) => (
          <div
            key={pack.id}
            className="border border-[#D10800] p-6  flex flex-col bg-neutral-900   pt-[24px] pb-[16px] pr-[16px] pl-[10px] gap-[18px] rounded-xl  max-w-96 "
          >
           <div className=' text-[32px] pr-5  w-80'>

             <h2 className=" font-bold mb-2 text-[20px]">{pack.title}</h2>

           

           <div className=' pr-[8px] text-[32px] gap-[17px] mt-8'>
             {/* Cross price */}
            {pack.crossprice && (
              <div className=" font-bold text-[20px] text-white line-through decoration-[#D10800] mb-1 ">
                {pack.crossprice}$
              </div>
            )}
             {/* Main price */}
            <div className=" font-bold mb-1">{pack.price}</div>

            {/* Badge */}
            {pack.badge && (
              <div className=" text-[20px] font-bold mb-2 ">({pack.badge})</div>
            )}

            <p className="text-sm text-white mb-5">{pack.description}</p>
           </div>

           </div>
            {/* Button */}
            <button className="  text-[16px]  bg-[#D10800] hover:bg-red-700 text-white font-semibold py-2 rounded mb-4 md:mt-10 mt-[40px]">
              Get started
            </button>

            {/* Benefits */}
            <p className="text-base font-semibold mb-3">{pack.benifits}</p>

            {/* Features */}
            <ul className="space-y-2 text-sm mb-4">
              {pack.features.map((feature, idx) => (
                <li key={idx} className="flex gap-2 items-start ">
                  <IoMdCheckmark className="text-[#D10800] text-xl mt-0.5" />
                  <span className='text-[#FFFFFF]'>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Bottom notes */}
            <div className=" ">
              <div>
                {pack.note && (
                <p className="md:[333px] md:[95px] text-[16px] font-semibold text-center mb-2 md:ml-5">{pack.note1}</p>

             
              )}
                 {pack.note && (
                <p className="text-[16px] font-semibold text-center mb-2">{pack.note}</p>
                 )}
              </div>
              {pack.para && (
                <p className="text-red-500 md:text-center text-[20px] font-semibold mt-2 pb-7">{pack.para}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
