import { twMerge } from 'tailwind-merge'
import Loader from '@/components/Loader'

export default function Button({
  children,
  loading = false,
  variant = 'secondary',
  ...restProps
}: {
  children: React.ReactNode
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <button
        className={twMerge(
          'relative h-[32px] rounded-md cursor-pointer hover:brightness-120',
          variant === 'primary' && 'bg-blue-500 text-white',
          variant === 'secondary' && 'bg-gray-300 text-gray-800',
          variant === 'danger' && 'bg-red-500 text-white'
        )}
        {...restProps}>
        {loading ? <Loader color="#fff" /> : children}
      </button>{' '}
    </>
  )
}
