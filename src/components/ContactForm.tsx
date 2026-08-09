export const ContactForm = () => {
  return (
    <div className="space-y-6 py-8">
      <h2 className="font-bold text-[#1E293B] text-xl md:text-2xl">
        Explore More About Our App Feature
      </h2>
      <form name="contact" method="POST" data-netlify="true" className="space-y-4">
        {/* Hidden input required for Netlify static form detection in React */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-semibold text-[#1E293B]">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="your name"
              className="bg-[#E2ECF8] rounded-xl px-4 py-3 outline-none placeholder:text-[#64748B]"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-[#1E293B]">
              Mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@example.com"
              className="bg-[#E2ECF8] rounded-xl px-4 py-3 outline-none placeholder:text-[#64748B]"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xs font-semibold text-[#1E293B]">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="your phone number"
              className="bg-[#E2ECF8] rounded-xl px-4 py-3 outline-none placeholder:text-[#64748B]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company" className="text-xs font-semibold text-[#1E293B]">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="your company"
              className="bg-[#E2ECF8] rounded-xl px-4 py-3 outline-none placeholder:text-[#64748B]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-[#1E293B]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="message"
            rows={5}
            className="w-full bg-[#E2ECF8] rounded-xl px-4 py-3 outline-none resize-none placeholder:text-[#64748B]"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#A2C0E8] text-white font-medium px-8 py-2.5 rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
