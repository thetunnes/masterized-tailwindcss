import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className={twMerge(
        'min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 dark: px-3 py-2 shadow-sm outline-none',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20'
        )}
    />
  )
}
