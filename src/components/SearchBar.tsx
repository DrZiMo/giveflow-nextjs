import { Search } from 'lucide-react'
import { Input } from './ui/input'

const SearchBar = ({
  value,
  setValue,
}: {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div className='relative w-full'>
      <Search
        className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
        size={18}
      />
      <Input
        type='text'
        placeholder='Search causes ...'
        className='pl-10'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
