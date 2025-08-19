'use client'

import { ListFilter } from 'lucide-react'
import React, { useState } from 'react'

const SortDropDown = () => {
  const [selectedSort, setSelectedSort] = useState('Newest Causes')
  const sortOptions = [
    'Newest Causes',
    'Oldest Causes',
    'Most Liked',
    'Highest Amount Needed',
    'Nearly Funded',
    'Most Funded',
    'Least Funded',
    'Urgency Level',
  ]

  const handleSelectedSort = (sort: string) => {
    setSelectedSort(sort)
  }

  return (
    <div>
      <h1 className='flex items-center gap-2 text-primary text-xl'>
        <ListFilter /> Sort Causes
      </h1>
      <div>
        {sortOptions.map((sort, index) => (
          <li
            key={index}
            className={`border  w-fit py-1 px-2 rounded-sm cursor-pointer hover:bg-primary hover:border-primary hover:text-background transition ${
              selectedSort === sort
                ? 'bg-primary border-primary text-background'
                : 'border-neutral-200 bg-transparent text-neutral-950'
            }`}
            onClick={() => handleSelectedSort(sort)}
          >
            {sort}
          </li>
        ))}
      </div>
    </div>
  )
}

export default SortDropDown
