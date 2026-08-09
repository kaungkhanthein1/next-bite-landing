import qrMobile from '../assets/qr-mobile.jpg'
import qrAdmin from '../assets/qr-admin.jpg'

export const QrSection = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-8 py-8">
      <div className="flex flex-col items-center">
        <h3 className="text-sm font-semibold text-[#1E293B] mb-3 text-center">
          Mobile App's QR Code
        </h3>
        <div className="bg-[#E2ECF8] rounded-2xl p-4 sm:p-6">
          <div className="bg-white rounded-xl p-4 flex items-center justify-center">
            <img
              src={qrMobile}
              alt="Mobile QR Code"
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-sm font-semibold text-[#1E293B] mb-3 text-center">
          Admin Dashboard QR Code
        </h3>
        <div className="bg-[#E2ECF8] rounded-2xl p-4 sm:p-6">
          <div className="bg-white rounded-xl p-4 flex items-center justify-center">
            <img
              src={qrAdmin}
              alt="Admin Dashboard QR Code"
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
