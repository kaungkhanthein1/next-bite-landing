import qrMobile from '../assets/qr-mobile.jpg'
import vector from '../assets/vector.png'

export const QrSection = () => {
  return (
    <section className="grid items-center gap-8 py-6 sm:py-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
      <div className="relative flex flex-col items-center gap-4 overflow-visible lg:items-start">
        <p className="text-lg font-semibold text-white sm:text-xl">
          Scan to view Demo of NextBite
        </p>
        <div className="relative w-full max-w-[280px]">
          <img
            src={vector}
            alt="decorative arrow pointing to QR"
            className="pointer-events-none absolute -right-[39px] -top-[41px] h-[100px] w-[36px] sm:-right-[47px] sm:-top-[45px] sm:h-[130px] sm:w-[48px] rotate-[10deg] object-contain"
          />
          <div className="w-full overflow-hidden rounded-2xl bg-white p-3 shadow-2xl">
            <img
              src={qrMobile}
              alt="QR code to view NextBite demo"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      <div className="text-center lg:text-right">
        <p className="text-lg font-medium leading-8 text-white sm:text-xl">
          Scale without complexity
          <br />
          Single source of truth for your entire chain
          <br />
          Manage 1 store or 100 stores—the workflow stays the same
        </p>
      </div>
    </section>
  )
}
