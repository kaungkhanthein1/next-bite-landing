import mockupTracking from '../assets/mockups-tracking.jpg'
import mockupCustom from '../assets/mockups-customizable.jpg'

export const FeaturesSection = () => {
  return (
    <section className="pt-12 sm:pt-16 md:pt-24 pb-8 space-y-12 sm:space-y-16">
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold text-[#1E293B] text-lg sm:text-xl md:text-2xl">
            Effortless Shopping, Real-Time Order Tracking
          </h3>
          <p className="mt-3 text-sm text-[#64748B] max-w-sm mx-auto md:mx-0">
            Find your ideal style in just a few click and track your orders
            effortlessly every step of the way
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={mockupTracking}
            alt="Order tracking mockup"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8">
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold text-[#1E293B] text-lg sm:text-xl md:text-2xl">
            Customizable Experience
          </h3>
          <p className="mt-3 text-sm text-[#64748B] max-w-sm mx-auto md:mx-0">
            Switch languages (English/Myanmar) and display modes (Light/Dark)
            with a single tap
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={mockupCustom}
            alt="Customization mockup"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
