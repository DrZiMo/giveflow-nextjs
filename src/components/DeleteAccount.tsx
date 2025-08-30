import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { Button } from './ui/button'
import { useDeleteUser } from '@/lib/hook/useUser'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'

const DeleteAccount = () => {
  const { mutate: deleteAccount } = useDeleteUser()
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleDeleteAccount = () => {
    deleteAccount(undefined, {
      onSuccess: () => {
        toast.success('Account deleted successfully')
        router.push('/')
        queryClient.invalidateQueries({ queryKey: ['single-user'] })
      },
      onError: () => {
        toast.error('Error deleting account')
      },
    })
  }

  return (
    <div className='mt-10 w-full p-4 border border-destructive bg-destructive/5 rounded-md text-destructive'>
      <h1 className='font-semibold'>Delete Account</h1>
      <p>
        Permanently delete your account and all associated data. This action
        cannot be undone.
      </p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={'destructive'} className='mt-3'>
            Delete Account
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant={'destructive'} onClick={handleDeleteAccount}>
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default DeleteAccount
