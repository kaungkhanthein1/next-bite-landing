export const HeroSection = () => {
  return (
    <section className="grid gap-x-8 gap-y-10 pb-4 pt-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-x-12 lg:gap-y-12 lg:pt-8">
      <div className="max-w-[470px] pt-8 text-center lg:pt-12 lg:text-left">
        <h1 className="mx-auto text-[2rem] font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-[2.45rem] sm:leading-[1.03] md:text-[2.8rem] lg:mx-0 lg:text-[2.7rem]">
          Sell More, Deliver Faster, Keep Customers Coming Back
        </h1>
        <p className="mx-auto mt-4 max-w-[420px] text-[0.76rem] leading-6 text-white sm:text-sm sm:leading-6 lg:mx-0 lg:text-[0.8rem]">
          An easy platform to manage menus, track order delivery, and give
          points to customers with one click
        </p>
      </div>

      <div className="flex justify-center lg:justify-end lg:row-start-1 lg:col-start-2 lg:pt-8">
        <div className="w-full max-w-[260px] overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/assets/qr-admin.jpg"
            alt="Admin QR code"
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="flex justify-center lg:col-start-1 lg:row-start-2 lg:justify-start lg:pt-2">
        <div className="w-full max-w-[260px] overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/assets/qr-mobile.jpg"
            alt="Mobile QR code"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
