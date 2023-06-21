import { BLOG_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center">
        <img src='/assets/blog/logo/ametokidokicoffee.png' className="w-16 h-16 rounded-full" />
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          {BLOG_NAME}
        </h1>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        コーヒー好きエンジニアの技術ブログ
      </h4>
    </section>
  )
}

export default Intro
