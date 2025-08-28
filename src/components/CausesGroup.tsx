import { CauseGroupProps } from '@/app/types/causes.types'
import Cause from './Cause'

const CauseGroup: React.FC<CauseGroupProps> = ({ causes, number = 4 }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
      {causes.slice(0, number).map((cause, index) => (
        <Cause
          key={index}
          id={cause.id}
          name={cause.name}
          short_description={cause.short_description}
          amount_needed={cause.amount_needed}
          current_amount={cause.current_amount}
          category={cause.category}
          is_trending={cause.is_trending!}
          cause_pic={cause.cause_pic}
          long_description={cause.long_description}
        />
      ))}
    </div>
  )
}

export default CauseGroup
