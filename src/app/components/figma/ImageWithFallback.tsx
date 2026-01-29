import React, { useState, useMemo } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

function isValidImageSrc(src: string | undefined): boolean {
  if (!src || typeof src !== 'string') return false
  const s = src.trim()
  return s.startsWith('http://') || s.startsWith('https://') || s.startsWith('/') || s.startsWith('data:')
}

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const effectiveSrc = useMemo(() => {
    const { src } = props
    if (didError) return ERROR_IMG_SRC
    if (!isValidImageSrc(src)) {
      const text = encodeURIComponent(typeof props.alt === 'string' ? props.alt : 'Project')
      return `https://placehold.co/600x400/1e1b4b/a78bfa?text=${text}`
    }
    return src ?? ''
  }, [props.src, props.alt, didError])

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={effectiveSrc} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
