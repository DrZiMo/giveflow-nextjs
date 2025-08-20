import { Search } from 'lucide-react'
import { Input } from './ui/input'

const SearchBar = () => {
  return (
    <div className='flex items-center w-full pl-3'>
      <Search size={18} className='text-muted-foreground' />
      <Input
        type='text'
        placeholder='Search causes...'
        className='shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 ml-2 border border-input'
      />
    </div>
  )
}

export default SearchBar
