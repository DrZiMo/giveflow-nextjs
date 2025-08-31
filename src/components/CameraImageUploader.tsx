import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import ImageUploader from './ImageUploader'
import { Camera } from 'lucide-react'

const CameraImageUploader = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='absolute w-10 h-10 bg-card rounded-full bottom-0 right-0 flex justify-center items-center border border-muted-foreground/60 text-muted-foreground cursor-pointer hover:text-muted-foreground transition'>
          <Camera />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] flex justify-center items-center'>
        <ImageUploader />
      </DialogContent>
    </Dialog>
  )
}

export default CameraImageUploader
