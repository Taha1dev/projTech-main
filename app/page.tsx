import HeroComponent from './components/hero-component'
import MagicButton from './components/ui/MagicButton'
import { landingPageContent } from './constants'
import {
  Sponsers,
  StickyScroll,
  WhyChooseUs,
  ServicesContainer,
  Blurlayer,
  DevelopmentProcess,
  Testimonials,
} from './constants/barel.components'

export default function Home() {
  return (
    <>
      <HeroComponent
        title={landingPageContent.hero.title}
        sub={landingPageContent.hero.sub}
        children={<MagicButton value={`Let's work together`} />}
      />

      <Sponsers />
      <WhyChooseUs />
      <StickyScroll />
      <ServicesContainer />
      <DevelopmentProcess />
      <Testimonials />
    </>
  )
}
