'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Editor } from '@tinymce/tinymce-react'
import { useAddNewCategory, useGetAllCategory } from '@/lib/hook/useCategory'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useQueryClient } from '@tanstack/react-query'
import { useCreateCause } from '@/lib/hook/useCauses'
import { useRouter } from 'next/navigation'

interface FormData {
  name: string
  short_description: string
  long_description: string
  amount_needed: number
  category_id: string
  urgency_level: string
}

interface Props {
  causePic: File | null
}

const NewCauseForm: React.FC<Props> = ({ causePic }) => {
  const [newCategory, setNewCategory] = useState<string | ''>()
  const [formData, setFormData] = useState({
    name: '',
    short_description: '',
    long_description: '',
    amount_needed: '',
    category_id: '',
    urgency_level: '',
  })
  const queryClient = useQueryClient()

  const { data, isLoading } = useGetAllCategory()
  const addNewCategory = useAddNewCategory()
  const addNewCause = useCreateCause()
  const router = useRouter()

  const handleChange = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const fd = new FormData()
    if (causePic) fd.append('causePic', causePic)
    fd.append('name', formData.name)
    fd.append('short_description', formData.short_description)
    fd.append('long_description', formData.long_description)
    fd.append('amount_needed', formData.amount_needed.toString())
    fd.append('category_id', formData.category_id)
    fd.append('urgency_level', formData.urgency_level)
    console.log('Submitting cause:', fd)

    addNewCause.mutate(fd, {
      onSuccess: () => {
        toast.success('Create cause successfully', { id: toastId })
        router.push('/dashboard/causes')
      },
      onError: (err) => {
        toast.error(err.message, { id: toastId })
      },
    })
  }

  const handleNewCategory = (newCategory: string) => {
    if (!newCategory.trim()) return
    addNewCategory.mutate(
      { name: newCategory },
      {
        onSuccess: () => {
          toast.success('added new category', { id: toastId })
          queryClient.invalidateQueries({ queryKey: ['all-category'] })
        },
        onError: (err) => {
          toast.error(err.message, { id: toastId })
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6 p-4 max-w-2xl mx-auto'>
      {/* Cause Name */}
      <div className='space-y-3'>
        <Label htmlFor='name'>Cause Name</Label>
        <Input
          id='name'
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder='Enter cause name'
          required
        />
      </div>

      {/* Short Description */}
      <div className='space-y-3'>
        <Label htmlFor='short_description'>Short Description</Label>
        <Input
          id='short_description'
          value={formData.short_description}
          onChange={(e) => handleChange('short_description', e.target.value)}
          placeholder='Short description...'
        />
      </div>

      {/* Long Description */}
      <div className='space-y-3'>
        <Label>Long Description</Label>
        <Editor
          apiKey='13dohz58dvcfp7iubzyr1s4fj3wsrrkf56v9zl6c9bgfxx2b'
          value={formData.long_description}
          onEditorChange={(content) =>
            handleChange('long_description', content)
          }
          init={{
            plugins: [
              'anchor',
              'autolink',
              'charmap',
              'codesample',
              'emoticons',
              'link',
              'lists',
              'media',
              'searchreplace',
              'table',
              'visualblocks',
              'wordcount',
              'checklist',
              'mediaembed',
              'casechange',
              'formatpainter',
              'pageembed',
              'a11ychecker',
              'tinymcespellchecker',
              'permanentpen',
              'powerpaste',
              'advtable',
              'advcode',
              'advtemplate',
              'ai',
              'uploadcare',
              'mentions',
              'tinycomments',
              'tableofcontents',
              'footnotes',
              'mergetags',
              'autocorrect',
              'typography',
              'inlinecss',
              'markdown',
              'importword',
              'exportword',
              'exportpdf',
            ],
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ],
            uploadcare_public_key: '44f37bc51a798181191b',
          }}
        />
      </div>

      {/* Amount Needed */}
      <div className='space-y-3'>
        <Label htmlFor='amount_needed'>Amount Needed ($)</Label>
        <Input
          type='number'
          id='amount_needed'
          value={formData.amount_needed}
          onChange={(e) =>
            handleChange('amount_needed', Number(e.target.value))
          }
          required
        />
      </div>

      {/* Category */}
      <div className='space-y-3'>
        <Label>Category</Label>
        <Select onValueChange={(val) => handleChange('category_id', val)}>
          <SelectTrigger>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            {isLoading
              ? '...'
              : data?.categories.map((category, index) => (
                  <SelectItem value={category.id} key={index}>
                    {category.name}
                  </SelectItem>
                ))}
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline' size='sm' className='mt-2'>
              + Add New Category
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-80'>
            <div className='space-y-3'>
              <Label htmlFor='newCategory'>New Category</Label>
              <Input
                id='newCategory'
                placeholder='Enter category name'
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <Button
                onClick={() => {
                  handleNewCategory(newCategory || '')
                  setNewCategory('')
                }}
                disabled={!newCategory?.trim() || addNewCategory.isPending}
                className='w-full'
              >
                {addNewCategory.isPending ? '...' : 'Save Category'}
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Urgency Level */}
      <div className='space-y-3'>
        <Label>Urgency Level</Label>
        <Select onValueChange={(val) => handleChange('urgency_level', val)}>
          <SelectTrigger>
            <SelectValue placeholder='Select urgency' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='LOW'>Low</SelectItem>
            <SelectItem value='MEDIUM'>Medium</SelectItem>
            <SelectItem value='HIGH'>High</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type='submit' className='w-full' disabled={addNewCause.isPending}>
        Create Cause
      </Button>
    </form>
  )
}

export default NewCauseForm
