import heroPhone from '../assets/first.png'

export const HeroSection = () => {
  return (
    <section className="grid gap-x-8 gap-y-10 pb-4 pt-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-x-12 lg:gap-y-12 lg:pt-8">
      <div className="max-w-[520px] pt-8 text-center lg:pt-12 lg:text-left">
        <h1 className="mx-auto text-[2rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-[2.45rem] sm:leading-[1.03] md:text-[2.8rem] lg:mx-0 lg:text-[2.7rem]">
          One Unified Platform to Run Your Entire QSR Chain
        </h1>
        <p className="mx-auto mt-4 max-w-[480px] text-[0.9rem] font-medium leading-6 text-white sm:text-base sm:leading-7 lg:mx-0">
          From customer ordering to loyalty points and daily operations—manage
          unlimited restaurants and locations from a single, powerful
          dashboard. No more switching between many different apps
        </p>
      </div>

      <div className="flex justify-center lg:justify-end lg:row-start-1 lg:col-start-2 lg:pt-4">
        <div className="w-full max-w-[360px] overflow-hidden">
          <img
            src={heroPhone}
            alt="NextBite ordering app on a phone"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
