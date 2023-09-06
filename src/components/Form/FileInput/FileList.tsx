'use client'

import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/utils/formatBytes'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from '@/components/Button'
import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className='mt-4 space-y-3' ref={parent}>
      {files.map((file) => (
        <FileItem key={file.name} name={file.name} size={file.size} state="progress" />
      ))}
    </div>
  )
}
