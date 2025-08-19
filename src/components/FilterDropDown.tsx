'use client'

import causes from '@/app/data/causes'
import { FilterIcon } from 'lucide-react'
import { useState } from 'react'

const FilterDropDown = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div>
      <div className='filter-categories list-none flex items-center flex-wrap gap-2'>
        <li
          className={`border border-neutral-200 w-fit py-1 px-2 rounded-sm cursor-pointer hover:bg-primary hover:border-primary hover:text-background transition ${
            selectedCategory === 'All'
              ? 'bg-primary border-primary text-background'
              : 'border-neutral-200 bg-transparent text-neutral-950'
          }`}
          onClick={() => handleSelectedCategory('All')}
        >
          All
        </li>
        {causes.map((cause) => (
          <li
            key={cause.category}
            className={`border  w-fit py-1 px-2 rounded-sm cursor-pointer hover:bg-primary hover:border-primary hover:text-background transition ${
              selectedCategory === cause.category
                ? 'bg-primary border-primary text-background'
                : 'border-neutral-200 bg-transparent text-neutral-950'
            }`}
            onClick={() => handleSelectedCategory(cause.category)}
          >
            {cause.category}
          </li>
        ))}
      </div>
    </div>
  )
}

export default FilterDropDown
