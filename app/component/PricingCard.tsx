import React from 'react'
import { Package } from '../pricingdata/PricingData'
import { IoMdCheckmark } from 'react-icons/io'

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
      'Access to the Warrior Room — discover upcoming AI founders and AI resources',
      'Unlock power tools, apps, and AI services before others',
      'Exclusive training modules & mini-courses',
      'AI-powered templates and frameworks',
      'AI job boards and early job alerts',
      'Access to AI pitch decks & templates for fast, effective fundraising',
    ],
    note: 'Over $1000+ in value — all for just $99.',
    para:' 3 days trial in $1'
  },
  {
    id: 2,
    title: 'Beginner Package Boot camp',
    price: '$199',
    badge: '50% discount real price',
    description: 'For founders and creators ready to dominate the AI game.',
     benifits: 'What you get:',
    features: [
      'Access to the Warrior Room with early access to AI resources',
      'Apply as an AI advisor, founder or investor',
      'Regular updates and AI job matching',
      'Exclusive AI training videos and resources',
      'Access to private AI community channels',
      'AI pitch decks, investor lists & contracts',
    ],
    note: 'Over $10000+ in value — all for just $199.',
  },
  {
    id: 3,
    title: 'White House Package',
    price: '$20,000',
    description: 'Elite access for founders ready to lead and build their AI empire.',
     benifits: 'What you get:',
    features: [
      'Private chats with AI founders and investors',
      'Priority AI job matching',
      'Exclusive contracts, fundraising templates',
      'Private mastermind groups',
      'VIP invites to AI events',
      'Access to elite AI tools and networks',
    ],
    note: 'Over $100k+ in value — all for just $20k.',
  },
]


export default function PricingCard() {
  return (
  <div className="bg-black text-white flex flex-col items-center justify-center p-8">
  <h1 className="text-3xl font-bold mb-6 mt-4">Pricing Options</h1>
  <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 ">
    {packages.map((pack) => (
      <div
        key={pack.id}
        className="border border-[#D10800] p-6 rounded-xl flex flex-col bg-neutral-900 w-[389.33px] h-full "
      >
        {/* Top content */}
        <div>
          <h2 className="text-[20px] font-bold mb-2">{pack.title}</h2>
          {pack .crossprice && (
            <div className='flex gap-1'>
            <div className=" text-sm text-white line-through mb-2 flex">
              {pack.crossprice} 
              </div>
              <div>
                $
              </div>
              </div>
          )}
          <div className="text-[px] font-bold text-[20px] mb-1">{pack.price}</div>
          {pack.badge && (
            <div className="text-sm font-semibold mb-2">({pack.badge})</div>
          )}
          <p className="text-white mb-5 text-[12px]">{pack.description}</p>
          <div className=''>
            <button className="w-full bg-[#D10800] hover:bg-red-700 text-white  py-2 rounded text-center justify-center mt-1.5">
            Get started
          </button>
          </div>

          {/* Features and Benefits */}
          {pack.benifits && (
            <p className="text-sm mb-3 mt-3">{pack.benifits}</p>
          )}
          <ul className="space-y-2 text-sm mb-4">
            {pack.features.map((feature, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="text-[#D10800]"><IoMdCheckmark className='text-2xl' /></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom section — pinned to bottom */}
        <div className="">
         
          {pack.note && (
            <p className="text-xs text-center">{pack.note}</p>
          )}
          <p className="text-red-500 text-center pt-5">{pack.para}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}
