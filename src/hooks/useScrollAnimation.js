import { useEffect, useRef, useState } from 'react'

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
    const elementRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)

    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true,
        delay = 0
    } = options

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                        if (triggerOnce) {
                            setHasAnimated(true)
                        }
                    }, delay)
                } else if (!triggerOnce && !hasAnimated) {
                    setIsVisible(false)
                }
            },
            {
                threshold,
                rootMargin
            }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [threshold, rootMargin, triggerOnce, delay, hasAnimated])

    return [elementRef, isVisible]
}

// Hook for staggered animations
export const useStaggeredAnimation = (itemCount, options = {}) => {
    const containerRef = useRef(null)
    const [visibleItems, setVisibleItems] = useState(new Set())

    const {
        threshold = 0.1,
        staggerDelay = 100,
        triggerOnce = true
    } = options

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Animate items with stagger effect
                    for (let i = 0; i < itemCount; i++) {
                        setTimeout(() => {
                            setVisibleItems(prev => new Set([...prev, i]))
                        }, i * staggerDelay)
                    }
                } else if (!triggerOnce) {
                    setVisibleItems(new Set())
                }
            },
            { threshold }
        )

        observer.observe(container)

        return () => {
            observer.unobserve(container)
        }
    }, [itemCount, staggerDelay, threshold, triggerOnce])

    return [containerRef, visibleItems]
}

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
    const elementRef = useRef(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current
            if (!element) return

            const rect = element.getBoundingClientRect()
            const scrolled = window.pageYOffset
            const rate = scrolled * -speed
            
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setOffset(rate)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed])

    return [elementRef, offset]
}

// Hook for text reveal animation
export const useTextReveal = (text, options = {}) => {
    const [revealedText, setRevealedText] = useState('')
    const [isRevealing, setIsRevealing] = useState(false)
    const elementRef = useRef(null)

    const {
        speed = 50,
        threshold = 0.5
    } = options

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isRevealing) {
                    setIsRevealing(true)
                    let currentIndex = 0
                    
                    const revealInterval = setInterval(() => {
                        if (currentIndex <= text.length) {
                            setRevealedText(text.slice(0, currentIndex))
                            currentIndex++
                        } else {
                            clearInterval(revealInterval)
                            setIsRevealing(false)
                        }
                    }, speed)

                    return () => clearInterval(revealInterval)
                }
            },
            { threshold }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [text, speed, threshold, isRevealing])

    return [elementRef, revealedText, isRevealing]
}

// Hook for counter animation
export const useCounterAnimation = (endValue, options = {}) => {
    const [count, setCount] = useState(0)
    const elementRef = useRef(null)
    const [hasStarted, setHasStarted] = useState(false)

    const {
        duration = 2000,
        threshold = 0.5,
        startValue = 0
    } = options

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                    const startTime = Date.now()
                    const startVal = startValue
                    const endVal = endValue

                    const updateCount = () => {
                        const elapsed = Date.now() - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        
                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                        const currentValue = Math.floor(startVal + (endVal - startVal) * easeOutQuart)
                        
                        setCount(currentValue)

                        if (progress < 1) {
                            requestAnimationFrame(updateCount)
                        }
                    }

                    requestAnimationFrame(updateCount)
                }
            },
            { threshold }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [endValue, duration, threshold, startValue, hasStarted])

    return [elementRef, count]
}
