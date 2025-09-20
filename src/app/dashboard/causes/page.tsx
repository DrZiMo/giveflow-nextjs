'use client'

import {
  Plus,
  Search,
  Leaf,
  GraduationCap,
  Apple,
  Stethoscope,
  PawPrint,
  Scale,
  Ambulance,
  Users,
  Palette,
  TrendingUp,
  Pencil,
  Trash,
  Star,
  StarOff,
  Check,
  X,
} from 'lucide-react'
import Loading from '@/app/loading'
import { useCauses, useToggleActive } from '@/lib/hook/useCauses'
import { CausesStatus, ICause } from '@/app/types/causes.types'
import { useState, useMemo } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import ProfileTitle from '@/components/ProfileTitle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useQueryClient } from '@tanstack/react-query'

// helper function
const shortenText = (text: string, maxLength = 80) => {
  if (!text) return ''
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

const CausePage = () => {
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
  const [causeSearch, setCauseSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('Newest Causes')

  const queryClient = useQueryClient()

  const { data, isLoading } = useCauses(causeSearch, category, sort)
  const toggleActive = useToggleActive()

  const handleActivity = (id: string) => {
    toggleActive.mutate(id, {
      onSuccess: (res) => {
        toast.success(res.message, { id: toastId })
        queryClient.invalidateQueries({ queryKey: ['causes'] })
      },
      onError: () => {
        toast.error('Failed to toggle activeness', { id: toastId })
      },
    })
  }

  const categoryIcon: Record<string, React.ElementType> = {
    Environment: Leaf,
    Education: GraduationCap,
    Hunger: Apple,
    Health: Stethoscope,
    Animals: PawPrint,
    Climate: Leaf,
    'Social Justice': Scale,
    'Disaster Relief': Ambulance,
    'Youth Development': Users,
    'Arts and Culture': Palette,
  }

  const causes = data?.causes || []

  const categories = useMemo(() => {
    const unique = new Map()
    causes.forEach((c: ICause) => {
      if (c.category) {
        unique.set(c.category.id, c.category.name)
      }
    })
    return Array.from(unique, ([id, name]) => ({ id, name }))
  }, [causes])

  return (
    <div>
      <ProfileTitle
        title='Cause Management'
        subtitle='Review, approve, and manage fundraising campaigns'
      />

      <div className='w-full my-5 flex justify-end'>
        <Link href={'/dashboard/causes/new'}>
          <Button>
            <Plus />
            Create Cause
          </Button>
        </Link>
      </div>

      {/* Search + Filters */}
      <div className='flex items-center gap-1 md:gap-3 mt-8 relative'>
        <div className='relative w-full'>
          <Search
            className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
            size={18}
          />
          <Input
            type='text'
            placeholder='Search causes ...'
            className='pl-10'
            value={causeSearch}
            onChange={(e) => setCauseSearch(e.target.value)}
          />
        </div>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder='Filter' />
          </SelectTrigger>
          <SelectContent side='bottom'>
            <SelectItem value='All'>All</SelectItem>
            {categories.map((cat) => (
              <SelectItem value={cat.name} key={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue placeholder='Sort' />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((s, index) => (
              <SelectItem key={index} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Causes List */}
      <div className='mt-20'>
        {isLoading ? (
          <Loading />
        ) : causes.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {causes.map((s: ICause) => {
              const percentage = (s.current_amount / s.amount_needed) * 100
              const Icon = categoryIcon[s.category?.name || ''] || Leaf

              return (
                <Card key={s.id} className='h-fit py-0'>
                  {/* Header Section */}
                  <div className='relative h-[150px] w-full rounded-t-sm overflow-hidden'>
                    <img
                      src={s.cause_pic || '/no photo.jpg'}
                      alt={s.name}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute top-0 left-0 w-full h-full flex justify-between px-3 py-2 z-10'>
                      <span className='bg-background px-3 py-1 shadow rounded-full text-[0.7rem] 2xl:text-sm h-fit flex items-center gap-2'>
                        <Icon size={15} />
                        {s.category ? s.category.name : 'Uncategorized'}
                      </span>
                      {s.is_trending && (
                        <span className='bg-primary text-white px-3 py-1 rounded-full text-[0.7rem] 2xl:text-sm h-fit flex gap-2 items-center'>
                          <TrendingUp size={15} /> Trending
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className='px-4 pb-4'>
                    <Badge
                      variant={
                        s.status === CausesStatus.ACTIVE
                          ? 'success'
                          : s.status === CausesStatus.PENDING
                          ? 'warning'
                          : s.status === CausesStatus.REJECTED
                          ? 'destructive'
                          : s.status === CausesStatus.INACTIVE
                          ? 'secondary'
                          : 'default'
                      }
                    >
                      {s.status}
                    </Badge>
                    <h2 className='text-lg font-semibold'>{s.name}</h2>
                    <p className='text-gray-500 text-sm'>
                      {shortenText(s.short_description)}
                    </p>

                    {/* Progress Section */}
                    <div className='mt-3'>
                      <div className='flex justify-between text-sm'>
                        <span>${s.current_amount} raised</span>
                        <span className='text-gray-500'>
                          ${s.amount_needed} goal
                        </span>
                      </div>
                      <Progress value={percentage} className='mt-2' />
                    </div>

                    <div className='flex items-center gap-2 mt-4'>
                      <Button>
                        <Pencil />
                      </Button>
                      {s.is_featured ? (
                        <Button>
                          <StarOff />
                        </Button>
                      ) : (
                        <Button>
                          <Star />
                        </Button>
                      )}
                      {s.status !== CausesStatus.ACTIVE ? (
                        <Button
                          variant={'success'}
                          onClick={() => handleActivity(s.id)}
                        >
                          <Check />
                        </Button>
                      ) : (
                        <Button
                          variant={'destructive'}
                          onClick={() => handleActivity(s.id)}
                        >
                          <X />
                        </Button>
                      )}
                      <Button variant={'destructive'}>
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        ) : (
          <p className='text-muted-foreground mt-4'>No causes found</p>
        )}
      </div>
    </div>
  )
}

export default CausePage
