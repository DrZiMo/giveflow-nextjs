import { UserProps } from '@/app/types/users.types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useUpdateUserAdmin } from '@/lib/hook/useUser'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import FormError from '../FormError'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useQueryClient } from '@tanstack/react-query'

export function DashboardEditUser({
  isButton,
  user,
}: {
  isButton: boolean
  user: UserProps
}) {
  const [firstName, setFirstName] = useState<string | ''>(user.first_name || '')
  const [lastName, setLastName] = useState<string | ''>(user.last_name || '')
  const [error, setError] = useState<string | ''>('')
  const { mutate: updateUser } = useUpdateUserAdmin()
  const queryClient = useQueryClient()

  const handleEdit = () => {
    if (firstName?.trim() === '' || lastName?.trim() === '') {
      setError('Fill all the inputs')
      return
    }

    const data = {
      id: user.id!,
      first_name: firstName!,
      last_name: lastName!,
    }

    updateUser(data, {
      onSuccess: () => {
        toast.success('User updated successfully', { id: toastId })
        queryClient.invalidateQueries({ queryKey: ['all-users'] })
        queryClient.invalidateQueries({ queryKey: ['single-user'] })
      },
    })
    console.log(data)
  }

  return (
    <Popover>
      <PopoverTrigger className='border-0! bg-transparent! w-fit! p-0!' asChild>
        <Button variant='outline'>
          {isButton ? (
            <Button variant={'default'}>
              <Pencil /> Edit
            </Button>
          ) : (
            <Pencil
              size={17}
              className='hover:text-primary transition cursor-pointer'
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div>
            <h4 className='leading-none font-medium'>Edit User</h4>
          </div>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>First name</Label>
              <Input
                id='width'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                defaultValue={user.first_name || ''}
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxWidth'>Last name</Label>
              <Input
                id='maxWidth'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                defaultValue={user.last_name || ''}
                className='col-span-2 h-8'
              />
            </div>
            <FormError message={error || null} />
            <Button onClick={handleEdit}>Edit</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
