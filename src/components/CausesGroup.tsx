import { CauseGroupProps } from '@/app/types/causes.types'
import Cause from './Cause'

const CauseGroup: React.FC<CauseGroupProps> = ({ causes, number = 4 }) => {
  return (
    <div className='grid grid-cols-4 gap-6 mt-10'>
      {causes.slice(0, number).map((cause, index) => (
        <Cause
          key={index}
          id={cause.id}
          title={cause.title}
          description={cause.description}
          amountNeeded={cause.amountNeeded}
          currentAmount={cause.currentAmount}
          category={cause.category}
          trending={cause.trending!}
          imageUrl={cause.imageUrl}
          donors={cause.donors}
          likes={cause.likes}
          longDescription={cause.longDescription}
        />
      ))}
    </div>
  )
}

export default CauseGroup
