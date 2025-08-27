import { ChartLine, Earth, ShieldCheck } from 'lucide-react'

const RightAboutPart = () => {
  const iconSize = 27
  const rightItems = [
    {
      icon: ChartLine,
      title: 'Data-Driven Impact',
      subText:
        'Access detailed analytics and real-time metrics to understand\nthe true impact of your charitable contributions.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Transactions',
      subText:
        'Your payments are protected with bank-level security and\nencryption technology.',
    },
    {
      icon: Earth,
      title: 'Global Impact',
      subText:
        'Support causes around the world with our international network\nof verified organizations.',
    },
  ]
  return (
    <div className=''>
      <ul className='flex flex-col gap-16'>
        {rightItems.map((item, index) => (
          <li key={index}>
            <div className='flex items-center gap-6'>
              <div className='bg-primary/10 rounded-full p-4 text-primary'>
                <item.icon size={iconSize} />
              </div>
              <div>
                <h1 className='text-xl text-primary font-[500] mb-2'>
                  {item.title}
                </h1>
                <p>{item.subText}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RightAboutPart
