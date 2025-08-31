import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import ImageUploader from './ImageUploader'

const ProfileImageUploader = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='mt-3 text-primary hover:underline transition font-semibold'>
          Change Photo
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] flex justify-center items-center'>
        <ImageUploader />
      </DialogContent>
    </Dialog>
  )
}

export default ProfileImageUploader
