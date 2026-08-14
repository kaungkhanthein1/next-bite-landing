export const FeaturesSection = () => {
  return (
    <section className="space-y-14 py-4 sm:space-y-16 sm:py-6">
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Action-Oriented
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-7 text-white sm:text-base lg:mx-0">
            An easy platform to manage menus, track order delivery, and give
            points to customers with one click
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/mockups-tracking.jpg"
            alt="Tracking mockup"
            className="w-full max-w-[560px]"
          />
        </div>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex justify-center lg:justify-start">
          <img
            src="/assets/mockups-customizable.jpg"
            alt="Customizable mockup"
            className="w-full max-w-[560px]"
          />
        </div>

        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Easily redeem points for exclusive gift vouchers
          </h3>
        </div>
      </div>
    </section>
  )
}
