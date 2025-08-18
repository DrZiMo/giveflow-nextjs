import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='flex items-center w-full bg-second border border-neutral-200 pl-3 rounded-md gap-5'>
      <Search size={19} className='text-almost-black' />
      <input
        type='text'
        placeholder='Search causes...'
        className='pl-0 py-3 pr-3 flex-1 outline-0'
      />
    </div>
  )
}

export default SearchBar
