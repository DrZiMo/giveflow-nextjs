'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const Sort = () => {
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

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Sort' />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((sort, index) => (
          <SelectItem
            key={index}
            value={sort}
            // onClick={() => handleSelectedSort(sort)}
          >
            {sort}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default Sort
