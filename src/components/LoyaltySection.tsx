import loyaltyPhones from '../assets/second.png'

export const LoyaltySection = () => {
  return (
    <section className="grid items-center gap-8 py-4 sm:py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <div className="flex justify-center lg:justify-start">
        <img
          src={loyaltyPhones}
          alt="QR code, loyalty points, and voucher screens"
          className="w-full max-w-[620px]"
        />
      </div>

      <div className="text-center lg:text-right">
        <p className="text-lg font-medium leading-8 text-white sm:text-xl">
          Scan to Order &amp; Earn (Wallet QR)
          <br />
          Built-in Loyalty Engine (White to Platinum)
          <br />
          Easy to Redeem Loyalty Points
        </p>
      </div>
    </section>
  )
}
