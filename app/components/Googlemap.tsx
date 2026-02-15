"use client";

export default function Googlemap() {
  return (
    <div className="py-12 px-6">
      <h2 className="text-5xl font-extrabold text-center text-black mb-10">
        Your Ayurvedic Healing Starts Here – Visit Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f1234567%3A0xabcdef123456789!2sVedi%20Wellness%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Vedi Wellness Bengaluru
          </h3>
          <p className="text-gray-700 mb-2">bengaluru@vediwellness.com</p>
          <p className="text-gray-700 mb-6">+91-8045683156</p>

          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Head Office
          </h3>
          <p className="text-gray-700 mb-2">namaste@vediherbals.com</p>
          <p className="text-gray-700">+91-22-48931316</p>
        </div>
      </div>
    </div>
  );
}

