'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { ROLE, UserProps } from '@/app/types/users.types'
import {
  Bookmark,
  ChartArea,
  Clock,
  LogOut,
  Newspaper,
  Phone,
  Settings,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { useQueryClient } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { logoutUser } from '@/lib/api/auth'
import { logout } from '@/store/authSlice'
import { clearUser } from '@/store/userSlice'

const UserProfilePicture = ({ user }: { user: UserProps }) => {
  const queryClient = useQueryClient()
  const dispatch = useDispatch<AppDispatch>()
  const links = [
    {
      title: 'Profile',
      url: `/profile/${user.id}`,
      icon: User,
    },
    {
      title: 'Summary',
      url: `/profile/${user.id}/summary`,
      icon: Newspaper,
    },
    {
      title: 'History',
      url: `/profile/${user.id}/history`,
      icon: Clock,
    },
    {
      title: 'Saved Causes',
      url: `/profile/${user.id}/saved-causes`,
      icon: Bookmark,
    },
    {
      title: 'Settings',
      url: `/profile/${user.id}/settings`,
      icon: Settings,
    },
  ]

  const handleLogout = async () => {
    try {
      await logoutUser()
      queryClient.removeQueries({ queryKey: ['whoami'], exact: true })
      dispatch(logout())
      dispatch(clearUser())
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='w-9 h-9 rounded-full cursor-pointer'>
          {user.profile_pic ? (
            <img
              src={user.profile_pic}
              alt={user.first_name}
              className='w-full h-full object-cover rounded-full'
            />
          ) : (
            <div className='bg-primary w-full h-full flex items-center justify-center rounded-full'>
              <User />
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='start'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          {links.map((link) => (
            <DropdownMenuItem key={link.title}>
              <Link href={link.url} className='w-full flex gap-2 items-center'>
                <link.icon /> {link.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={'/contact'} className='w-full flex gap-2 items-center'>
            <Phone /> Contact Support
          </Link>
        </DropdownMenuItem>
        {user.role === ROLE.ADMIN ? (
          <DropdownMenuItem>
            <Link
              href={'/dashboard'}
              className='w-full flex gap-2 items-center'
            >
              <ChartArea /> Dashboard
            </Link>
          </DropdownMenuItem>
        ) : null}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserProfilePicture
