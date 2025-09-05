'use client'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import SaveLaterButton from './SaveLaterButton'
import { Progress } from './ui/progress'
import { AlertCircleIcon, ArrowRight, ThumbsUp } from 'lucide-react'
import SmallTitle from './SmallTitle'
import { Button } from './ui/button'
import { ICause } from '@/app/types/causes.types'
import { useCreateDonation } from '@/lib/hook/useDonation'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { Form, FormField, FormItem, FormControl, FormMessage } from './ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DonationSchema } from '@/app/schemas'
import * as z from 'zod'
import SelectAmount from './SelectAmount'
import { useGetNumberOfDonors } from '@/lib/hook/useCauses'
import NumberOfDonors from './NumberOfDonors'
import LikeButton from './LikeButton'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useRouter } from 'next/navigation'
import { Alert, AlertTitle } from './ui/alert'

type DonationFormValues = z.infer<typeof DonationSchema>

const DonationInfo = ({ selectedCause }: { selectedCause: ICause }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const buttonSize = 17
  const { mutate: createDonation, isPending } = useCreateDonation()
  const isCompleted =
    selectedCause.amount_needed === selectedCause.current_amount
  const router = useRouter()

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(DonationSchema),
    defaultValues: {
      cause_id: selectedCause.id,
      amount: 0,
    },
  })

  const { data: donorsData, isLoading } = useGetNumberOfDonors(selectedCause.id)

  if (!selectedCause) return 'Cause not found'

  const percentage =
    (selectedCause.current_amount / selectedCause.amount_needed) * 100

  const onSubmit = (data: DonationFormValues) => {
    if (isLoggedIn) {
      router.push('/auth/login')
      return
    }
    createDonation(
      { cause_id: data.cause_id, amount: data.amount },
      {
        onSuccess: (res) => {
          if (res?.sessionUrl) {
            window.location.href = res.sessionUrl
          }
        },
        onError: () => {
          toast.error('Failed to create donation session', { id: toastId })
        },
      }
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className='flex justify-between'>
            <CardTitle className='text-xl font-semibold'>
              Donate to {selectedCause.name}
            </CardTitle>
            <div className='flex gap-4 items-center'>
              <SaveLaterButton causeId={selectedCause.id} size={buttonSize} />
              <LikeButton
                causeId={selectedCause.id}
                likes={selectedCause._count.like}
                buttonSize={buttonSize}
              />
            </div>
          </CardHeader>
          <CardContent>
            {/* Progress */}
            <div className='flex justify-between items-center text-sm'>
              <span className='text-md font-semibold'>
                ${selectedCause.current_amount.toLocaleString()}
              </span>
              <span className='text-muted-foreground'>
                Goal: ${selectedCause.amount_needed.toLocaleString()}
              </span>
            </div>
            <Progress value={percentage} className='mt-2' />
            <div className='flex justify-between items-center text-sm text-muted-foreground mt-1'>
              <span>{percentage.toFixed(0)}% completed</span>
              <NumberOfDonors
                donors={donorsData?.donorsCount || 0}
                selectedCauseId={selectedCause.id}
                isLoadingDonor={isLoading}
              />
            </div>

            {/* Select Amount */}
            <div className='mt-6'>
              <SmallTitle text='Select Amount' />
              <FormField
                control={form.control}
                name='amount'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SelectAmount
                        onSelect={(val) => field.onChange(val)}
                        isError={!!form.formState.errors.amount}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {isLoggedIn ? null : (
              <Alert variant={'warning'} className='w-full mt-6'>
                <AlertCircleIcon />
                <AlertTitle>Login first before you donate!</AlertTitle>
              </Alert>
            )}

            {/* Donate Button */}
            <Button
              className='mt-6 w-full rounded-lg py-5'
              type='submit'
              disabled={isPending || isCompleted}
            >
              {isPending ? (
                'Processing...'
              ) : isCompleted ? (
                'Completed'
              ) : (
                <>
                  Donate now <ArrowRight />
                </>
              )}
            </Button>

            <div className='w-full my-5 bg-muted-foreground/70 h-[1px]'></div>
            <p className='text-center text-sm text-muted-foreground/90'>
              Secured by GiveFlow • 100% secure payment
            </p>
          </CardContent>
        </Card>
      </form>
    </Form>
  )
}

export default DonationInfo
