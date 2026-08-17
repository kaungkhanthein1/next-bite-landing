export const ContactForm = () => {
  return (
    <section className="space-y-6 py-4 sm:py-6">
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Ready to digitize your QSR chain?
        </h2>
        <p className="mt-1 text-sm text-white/70">(No credit card required)</p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
      >
        {/* Hidden input required for Netlify static form detection in React */}
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="min-w-[200px] flex-1 rounded-xl bg-[#002B4A]/80 px-5 py-4 text-base font-semibold text-white/80 outline-none transition placeholder:text-white/80 focus:ring-2 focus:ring-[#F97316]/40"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="min-w-[200px] flex-1 rounded-xl bg-[#002B4A]/80 px-5 py-4 text-base font-semibold text-white/80 outline-none transition placeholder:text-white/80 focus:ring-2 focus:ring-[#F97316]/40"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="min-w-[200px] flex-1 rounded-xl bg-[#002B4A]/80 px-5 py-4 text-base font-semibold text-white/80 outline-none transition placeholder:text-white/80 focus:ring-2 focus:ring-[#F97316]/40"
        />

        <button
          type="submit"
          className="rounded-xl bg-[#F97316] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#ea6a0e]"
        >
          Request a Demo
        </button>
      </form>
    </section>
  )
}
