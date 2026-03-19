import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useHomeGsap = () => {
  let ctx: gsap.Context | null = null
  let cleanup: Array<() => void> = []

  const initAnimations = () => {
    if (!import.meta.client) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    cleanup = []

    ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 46 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power3.out',
            delay: index % 4 === 0 ? 0 : 0.04,
            scrollTrigger: {
              trigger: element,
              start: 'top 86%'
            }
          }
        )
      })

      const heroImage = document.querySelector<HTMLElement>('[data-hero-image]')
      if (heroImage) {
        gsap.fromTo(
          heroImage,
          { opacity: 0, y: 36, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.15, ease: 'power3.out', delay: 0.12 }
        )
      }

      const parallax = document.querySelector<HTMLElement>('[data-parallax-bg]')
      if (parallax) {
        gsap.to(parallax, {
          yPercent: 34,
          scale: 1.18,
          ease: 'none',
          scrollTrigger: {
            trigger: parallax.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }

      const nav = document.querySelector<HTMLElement>('[data-header]')
      if (nav) {
        ScrollTrigger.create({
          start: 32,
          end: 99999,
          onUpdate: self => {
            const active = self.scroll() > 22
            nav.classList.toggle('bg-[rgba(7,7,7,0.84)]', active)
            nav.classList.toggle('shadow-[0_16px_50px_rgba(0,0,0,0.35)]', active)
            nav.classList.toggle('border-[rgba(201,167,106,0.24)]', active)
          }
        })
      }

      const dot = document.querySelector<HTMLElement>('[data-cursor-dot]')
      const ring = document.querySelector<HTMLElement>('[data-cursor-ring]')

      if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
        const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
        const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
        const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3.out' })
        const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3.out' })

        const move = (event: PointerEvent) => {
          dotX(event.clientX)
          dotY(event.clientY)
          ringX(event.clientX)
          ringY(event.clientY)
        }

        window.addEventListener('pointermove', move)
        cleanup.push(() => window.removeEventListener('pointermove', move))
      }
    })
  }

  const destroyAnimations = () => {
    cleanup.forEach(fn => fn())
    cleanup = []
    ctx?.revert()
    ctx = null
  }

  return {
    initAnimations,
    destroyAnimations
  }
}
