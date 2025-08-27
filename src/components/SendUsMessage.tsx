import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Send } from 'lucide-react'

const SendUsMessage = () => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='text-2xl font-[650]'>Send us a Message</CardTitle>
        <CardDescription className='text-md'>
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row justify-between gap-5'>
              <div className='grid gap-2 w-full'>
                <Label htmlFor='fullname'>Full Name *</Label>
                <Input
                  id='fullname'
                  type='text'
                  placeholder='Enter your full name'
                  required
                />
              </div>
              <div className='grid gap-2 w-full'>
                <Label htmlFor='email'>Email Address *</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Enter your email address'
                  required
                />
              </div>
            </div>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='subject'>Subject *</Label>
              <Input
                id='subject'
                type='text'
                placeholder='What is this about?'
                required
              />
            </div>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='message'>Message *</Label>
              <Textarea
                id='message'
                placeholder='Tell us more about your inquiry ...'
                className='h-auto min-h-[150px] resize-none'
                rows={6}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type='submit' className='w-full'>
          <Send /> Send Message
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SendUsMessage
