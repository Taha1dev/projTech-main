export const landingPageContent = {
  hero: {
    title: 'We Build Tech Infrastructure for the Future of Business',
    sub: '  We create modern, user-friendly websites. Our clean design makes your online presence stand out, and our team delivers exceptional results.',
  },
  whyChooseUs: {
    title: 'Why Choose ProjTech',
    desc: `We combine expertise, innovation, and reliability to deliver
              top-tier software solutions tailored to your business needs. Our
              team specializes in web and mobile development, UI/UX design, AI,
              cloud services, and cybersecurity, ensuring scalable, secure, and
              user-friendly solutions that drive growth and long-term success.`,
    stats: [
      {
        value: '81+',
        label: 'Satisfied Clients',
      },
      {
        value: '86+',
        label: 'Successful Projects',
      },
      {
        value: '5+',
        label: 'Years of Experience',
      },
    ],
  },
}
export const faqContent = {
  title: 'FAQs Made Simple and Clear',
  sub: 'Find clear and concise answers to the most frequently asked questions about our services, policies, and more. If you need additional help, feel free to reach out to us anytime!'
}
export const contactContent = {
  title: 'Get in Touch with ProjTech',
  sub: 'We’d love to hear from you! Whether you have questions, need support, or want to explore how we can work together, feel free to reach out. Our team is here to assist you.'
}
export const servicesContent = {
  title: 'Our Solutions and Services',
  sub: 'We offer a range of services designed to meet your needs. our expertise ensures quality, reliability, and results. Explore how we can help you achieve your goals.',
  form: 'Ready to Build Something Amazing ?'
}
export const projectsContent = {
  title: 'Our Tech-Driven Project Showcase',
  sub: 'Explore our portfolio of innovative projects that showcase ProjTech’s expertise in IT solutions, our work reflects our commitment to excellence, security, and seamless user experiences. Discover how we bring ideas to life with technology.',
  form: 'Ready to Build Something Amazing ?'
}
export const aboutContent = {
  title: 'Innovating the Digital World',
  sub: 'At ProjTech, we take pride in delivering high-quality, innovative solutions that transform businesses. Here are some of our flagship projects that showcase our expertise and commitment to excellence:',
  form: 'Discover our Projects',
  services: {
    title: "Our services",
    desc: "We offer a range of services designed to meet your needs. our expertise ensures quality, reliability, and results. Explore how we can help you achieve your goals."
  },
  footer: {
    title: 'What Sets Us Apart?',
    desc: "At ProjTech, we stand out by delivering innovative solutions, building strong partnerships, and driving real business impact with passion and excellence."
  },
  contactTitle: 'We are happy to answer all your questions!'
}
interface CTA {
  value: string
  path: string
}

interface ServiceItem {
  id: number
  title: string
  description: string
  image: string
}

interface Service {
  id: number
  title: string
  description: string
  cta: CTA
  data: ServiceItem[]
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Development & Implementation',
    description:
      'Our "Development & Implementation" service transforms your vision into reality with precision and expertise. We collaborate with you to design and execute effective plans, ensuring seamless integration and measurable results. From innovative product development to efficient process implementation, our team is dedicated to driving your success.',
    cta: {
      value: 'Need Help?',
      path: '/',
    },
    data: [
      {
        id: 1,
        title: 'Mobile App Development',
        description:
          'Have an app developed: We create custom mobile apps for iOS and Android—professionally, efficiently, and tailored to your requirements.',
        image: './services/DI/1.jpg',
      },
      {
        id: 2,
        title: 'Web Development',
        description:
          'Have a web app developed: We create custom, interactive, and high-performance applications for your business.',
        image: './services/DI/2.jpg',
      },
      {
        id: 3,
        title: 'Platform Development',
        description:
          'Have a platform developed: We build custom digital platforms—from marketplaces to SaaS solutions.',
        image: './services/DI/3.jpg',
      },
      {
        id: 4,
        title: 'AI Integration',
        description:
          'Integrate AI into your app: We implement artificial intelligence into existing applications to automate processes, enhance user experiences, and drive innovation. Secure your consultation now!',
        image: './services/DI/4.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Strategy & Consultancy',
    description:
      'Our "Strategy & Consultancy" service empowers businesses with tailored solutions for growth. We work closely with clients to understand challenges and objectives, crafting actionable strategies. Whether entering new markets, optimizing operations, or enhancing customer engagement, our consultants guide you.',
    cta: {
      value: 'Need Help?',
      path: '/',
    },
    data: [
      {
        id: 1,
        title: 'Project Planning',
        description: `With thorough market analysis and strategic consultancy, we lay the foundation for a successful digital solution tailored to your needs.`,
        image: './services/SC/1.jpg',
      },
      {
        id: 2,
        title: 'Requirements Analysis & Roadmap',
        description:
          'We develop clear project roadmaps that cover all requirements and ensure a structured implementation to efficiently achieve your goals.',
        image: './services/SC/2.jpg',
      },
      {
        id: 3,
        title: 'Consultancy on Optimal Approach',
        description:
          'We advise you on the best technologies for your app or web application, ensuring your solution is scalable and future-proof.',
        image: './services/SC/3.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'Design & User Experience',
    description: `Our "UI & UX Design" service transforms digital experiences
      with user-centered design principles. We collaborate with clients to create intuitive
      and engaging interfaces that enhance user satisfaction and drive business success.
      Whether you're launching a new app, redesigning a website our
      designers are here to elevate your digital presence.`,
    cta: {
      value: 'Need Help?',
      path: '/',
    },
    data: [
      {
        id: 1,
        title: 'Interface Design',
        description:
          'Through interactive Figma prototypes, we provide you with a clear picture of how your application will look and feel – intuitive, modern, and user-friendly.',
        image: './services/DUX/1.jpg',
      },
      {
        id: 2,
        title: 'Prototype Development',
        description:
          'Our design process puts users at the centre and ensures that your application is not only aesthetically pleasing but also functional.',
        image: './services/DUX/2.jpg',
      },
      {
        id: 3,
        title: 'UX Design',
        description:
          'Working closely with you, we incorporate continuous feedback into the design to guarantee the best possible user experience.',
        image: './services/DUX/3.jpg',
      },
    ],
  },
]
interface SponsersDataProps {
  id: number | string
  src: string
  height: number
  width: number
  alt: string
  loading: 'eager' | 'lazy'
}

export const sponsers: SponsersDataProps[] = [
  {
    id: 1,
    src: '/sp1.png',
    height: 59,
    width: 229,
    alt: '',
    loading: 'lazy',
  },
  {
    id: 2,
    src: '/sp2.png',
    height: 63,
    width: 253,
    alt: '',
    loading: 'lazy',
  },
  {
    id: 3,
    src: '/sp3.png',
    height: 63,
    width: 223,
    alt: '',
    loading: 'lazy',
  },
  {
    id: 4,
    src: '/sp4.png',
    height: 69,
    width: 194,
    alt: '',
    loading: 'lazy',
  },
  {
    id: 5,
    src: '/sp5.png',
    height: 82,
    width: 87,
    alt: '',
    loading: 'lazy',
  },
]
export const features = [
  {
    icon: '/icons/hq.png',
    title: 'High-Quality Standards',
  },
  {
    icon: '/icons/ad.png',
    title: 'Accurate in Delivery',
  },
  {
    icon: '/icons/cs.png',
    title: 'Continuous Support',
  },
  {
    icon: '/icons/cca.png',
    title: 'Client-Centric Approach',
  },
]
