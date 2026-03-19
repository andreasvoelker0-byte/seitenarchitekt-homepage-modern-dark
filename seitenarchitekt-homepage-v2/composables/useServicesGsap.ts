import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useServicesGsap = () => {
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
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: index % 4 === 0 ? 0 : 0.03,
            scrollTrigger: {
              trigger: element,
              start: 'top 86%'
            }
          }
        )
      })

      const heroContent = document.querySelector<HTMLElement>('[data-services-hero-content]')
      const heroImage = document.querySelector<HTMLElement>('[data-services-hero-image]')
      const heroBg = document.querySelector<HTMLElement>('[data-services-hero-bg]')
      const qualityBg = document.querySelector<HTMLElement>('[data-services-quality-bg]')

      if (heroContent) {
        gsap.fromTo(heroContent, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      }

      if (heroImage) {
        gsap.fromTo(
          heroImage,
          { opacity: 0, y: 34, scale: 0.94, rotate: 2 },
          { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 1.2, ease: 'power3.out', delay: 0.12 }
        )
      }

      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 28,
          scale: 1.2,
          ease: 'none',
          scrollTrigger: {
            trigger: heroBg.parentElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
      }

      if (qualityBg) {
        gsap.to(qualityBg, {
          yPercent: 22,
          scale: 1.16,
          ease: 'none',
          scrollTrigger: {
            trigger: qualityBg.parentElement,
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
