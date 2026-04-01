import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'saffron'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none'

    const variants = {
      primary:
        'bg-forest-700 text-white hover:bg-forest-800 active:scale-[0.98] shadow-sm hover:shadow-md',
      secondary:
        'bg-warm-100 text-forest-800 hover:bg-warm-200 active:scale-[0.98]',
      ghost:
        'text-forest-700 hover:bg-warm-100 active:scale-[0.98]',
      outline:
        'border border-forest-700 text-forest-700 hover:bg-forest-50 active:scale-[0.98]',
      saffron:
        'bg-saffron-500 text-white hover:bg-saffron-600 active:scale-[0.98] shadow-sm hover:shadow-md',
    }

    const sizes = {
      sm: 'text-xs px-4 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export default Button
