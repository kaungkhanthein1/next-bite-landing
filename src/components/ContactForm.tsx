export const ContactForm = () => {
  return (
    <section className="space-y-6 rounded-[2rem] border border-slate-800/70 bg-[#0E1424]/80 p-6 shadow-[0_30px_100px_rgba(2,6,23,0.5)] backdrop-blur sm:p-8 lg:p-10">
      <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-left">
        Want to know more about our  projects
      </h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-4"
      >
        {/* Hidden input required for Netlify static form detection in React */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="your name"
              className="rounded-2xl border border-slate-700 bg-[#152338] px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#F97316]/60 focus:ring-2 focus:ring-[#F97316]/20"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-white"
            >
              Mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@example.com"
              className="rounded-2xl border border-slate-700 bg-[#152338] px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#F97316]/60 focus:ring-2 focus:ring-[#F97316]/20"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-white"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="your phone number"
              className="rounded-2xl border border-slate-700 bg-[#152338] px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#F97316]/60 focus:ring-2 focus:ring-[#F97316]/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="company"
              className="text-sm font-medium text-white"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="your company"
              className="rounded-2xl border border-slate-700 bg-[#152338] px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#F97316]/60 focus:ring-2 focus:ring-[#F97316]/20"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="message"
            rows={7}
            className="w-full resize-none rounded-2xl border border-slate-700 bg-[#152338] px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#F97316]/60 focus:ring-2 focus:ring-[#F97316]/20"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-xl bg-[#0B0F19] px-8 py-2.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(148,163,184,0.12)] transition hover:bg-[#141b2c]"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  )
}
