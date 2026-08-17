import reorderPhones from '../assets/third.png'

export const ReorderSection = () => {
  return (
    <section className="grid items-center gap-8 py-4 sm:py-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
      <div className="text-center lg:text-left">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
          One-click reordering keeps them coming back
        </h3>
        <p className="mx-auto mt-4 max-w-md text-base font-medium leading-7 text-white lg:mx-0">
          Easy to view order history at a glance
          <br />
          Easy to track order with clear status
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={reorderPhones}
          alt="Order history and order tracking screens"
          className="w-full max-w-[520px]"
        />
      </div>
    </section>
  )
}
