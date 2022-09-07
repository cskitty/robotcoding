import Image from 'next/future/image'

import { Container } from '@/components/Container'
 

const testimonials = [
  [
    {
      content:
        'We want to thank you all for making our days of fun. It was fun making the robots, and my favorite part was when our robots were dancing. The hardest part was the Geo Course because it was very hard to program the robots. I really enjoyed making the robot so thank you for all that you did for us.',
      author: {
        name: 'Hellen',
        role: 'Student',
      },
    },
    {
      content:
        'I liked when we got to program the robot at the competition. I also liked when my team got an award at the end of the competition.',
      author: {
        name: 'Jessica',
        role: 'Student',
      },
    },
  ],
  [
    {
      content:
        'Thank you for teaching us robotics. It was fun, and I hope you can come again. I had fun programming and building the robot. It was the hardest part but the most fun part.',
      author: {
        name: 'Julissa',
        role: 'Student',
      },
    },
    {
      content:
        'Thank you for coming to my school to teach and let us build robots. The part I loved the most was when our robots danced all because of us. My parents loved when they got to build half of the robot too.',
      author: {
        name: 'Anahi',
        role: 'Student',
      },
    },
  ],
    [
    {
      content:
        'Thank you for teaching me how to program a robot and making it dance. Those five weeks were fun. It was easy learning to make the robot go left and right and arc-left and arc-right. I appreciate you all for teaching us.',
      author: {
        name: 'Christian',
        role: 'Student',
      },
    },
    {
      content:
        'I just want to say that it was really fun building robot cars. You made us very happy because it was fun typing in the codes and making the robot dance.',
      author: {
        name: 'Andrew',
        role: 'Student',
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by our students.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our robotics programming is so simple that all students love it. 
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
