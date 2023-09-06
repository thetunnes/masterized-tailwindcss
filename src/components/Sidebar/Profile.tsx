import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className='grid grid-cols-profile items-center gap-3'>
      <img
        src='https://github.com/thetunnes.png'
        className='h-10 w-10 rounded-full'
        alt=''
      />

      <div className='flex flex-1 flex-col truncate'>
        <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-100'>The Tunnes</span>
        <span className='truncate text-sm text-zinc-500 dark:text-zinc-400'>
          cauepani06@gmail.com
        </span>
      </div>

      <Button variant='ghost' type='button' className='ml-auto rounded-md p-2 hover:bg-zinc-50'>
        <LogOut className='h-5 w-5 text-zinc-500' />
      </Button>
    </div>
  )
}
