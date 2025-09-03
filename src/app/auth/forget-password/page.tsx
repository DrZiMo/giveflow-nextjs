'use client'

import { resetPasswordSchema } from '@/app/schemas'
import FormError from '@/components/FormError'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RootState } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as z from 'zod'

const ForgetPassword = () => {
  const router = useRouter()
  const tempToken = useSearchParams().get('t')
  const user = useSelector((state: RootState) => state.auth.user)
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: user?.email || '',
    },
    mode: 'onTouched',
  })

  const onSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
    router.replace(
      `/auth/verify-reset-code?email=${values.email}&t=${tempToken}`
    )
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <Card className='w-[90%] md:w-[400px]'>
        <CardHeader>
          <CardTitle>Forget Password</CardTitle>
          <CardDescription>
            Enter your email to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit((value) => onSubmit(value))}>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='grid w-full max-w-sm items-center gap-3'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Mail
                          className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                          size={18}
                        />
                        <Input
                          {...field}
                          type='email'
                          placeholder='Enter your email'
                          className='pl-10'
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormError message={''} />

              <Button
                type='submit'
                className='ml-auto mt-4'
                disabled={
                  !form.formState.isValid ||
                  Object.values(form.getValues()).some((v) => !v)
                }
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ForgetPassword
