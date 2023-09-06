import { InputControl, InputPrefix, InputRoot } from '@/components/Form/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import {
  Bold,
  ChevronDown,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail,
  UploadCloud,
  User,
} from 'lucide-react'
import * as FileInput from '../components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-medium text-zinc-900 dark:text-zinc-100'>Settings</h1>
      <SettingsTabs />

      <div className='mt-6 flex flex-col'>
        <header className='flex flex-col justify-between gap-4 border-b border-zinc-200 dark:border-zinc-700 pb-5 lg:flex-row lg:items-center'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900 dark:text-zinc-100'>Personal info</h2>
            <span className='text-sm text-zinc-500 dark:text-zinc-400'>
              Update your photo and personal details here.
            </span>
          </div>

          <nav className='flex items-center gap-2'>
            <Button variant='outline'>Cancel</Button>
            <Button
              type='submit'
              form='settings'
              className='rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700'
            >
              Save
            </Button>
          </nav>
        </header>
        <form
          id='settings'
          className='mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700'
        >
          <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='firstName'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
              Name
            </label>
            <div className='flex flex-col lg:grid lg:grid-cols-2 gap-6'>
              <InputRoot>
                <InputControl id="firstName" defaultValue='The' />
              </InputRoot>
              <div className="flex flex-col gap-3 lg:block">
              <label
                htmlFor='lastName'
                className='text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:hidden'
              >
                Last name
              </label>
              <InputRoot>
                <InputControl id="lastName" defaultValue='Tunnes' />
              </InputRoot>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
              Email address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className='h-5 w-5 text-zinc-500' />
              </InputPrefix>
              <InputControl
                id='email'
                type='email'
                defaultValue='tunnes@example.com'
              />
            </InputRoot>
          </div>
          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='photo'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300' // substituir a mt por space-y-1
            >
              Your photo
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className='flex flex-col lg:flex-row lg:items-start gap-5'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label htmlFor='role' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Role
            </label>
            <InputRoot>
              <InputControl id='role' defaultValue='Front-end Developer' />
            </InputRoot>
          </div>
          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='country'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
              Country
            </label>
            <Select placeholder='Select a Coutry...'>
              <SelectItem value='br' text='Brazil' />
              <SelectItem value='us' text='United State' />
              <SelectItem value='arg' text='Argentinian' />
            </Select>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='timezone'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
              Timezone
            </label>
            <Select placeholder='Select a timezone...'>
              <SelectItem
                value='utc8'
                text='Pacific Standard Time (UTC-08:00)'
              />
              <SelectItem value='utc3' text='America São Paulo (UTC-03:00)' />
            </Select>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='bio'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300' // substituir a mt por space-y-1
            >
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short introduction.
              </span>
            </label>
            <div className='space-y-3'>
              <div className='flex flex-col lg:grid lg:grid-cols-2 gap-3'>
                <Select defaultValue='normal' placeholder=''>
                  <SelectItem
                    value='normal'
                    defaultChecked
                    text='Normal Text'
                  />
                  <SelectItem
                    value='utc3'
                    text='America São Paulo (UTC-03:00)'
                  />
                </Select>
                <div className='flex items-center gap-1 '>
                  <Button variant='ghost' type='button'>
                    <Bold className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button variant='ghost' type='button'>
                    <Italic className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button variant='ghost' type='button'>
                    <Link className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button variant='ghost' type='button'>
                    <List className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button variant='ghost' type='button'>
                    <ListOrdered
                      className='h-4 w-4 text-zinc-500'
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                id='bio'
              />
            </div>
          </div>
          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='project'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300' // substituir a mt por space-y-1
            >
              Portfolio projects
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <nav className='flex items-center justify-end gap-2 pt-5'>
            <button
              type='button'
              className='rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700'
            >
              Save
            </button>
          </nav>
        </form>
      </div>
    </>
  )
}
