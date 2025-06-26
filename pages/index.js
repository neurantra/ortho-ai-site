
export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Ortho AI Clinic</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-blue-900">
          Combining compassionate orthopedic care with intelligent technology.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow">
            Schedule Appointment
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700">Joint Replacement</h3>
            <p className="mt-2 text-gray-700">Precision-guided replacements for hips, knees, and shoulders.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700">Sports Injuries</h3>
            <p className="mt-2 text-gray-700">Advanced care for ACL tears, fractures, and ligament injuries.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700">Arthritis Management</h3>
            <p className="mt-2 text-gray-700">Tailored plans to reduce pain and increase mobility.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet Dr. Iyer</h2>
        <p className="text-lg text-gray-700">
          Dr. Iyer is a board-certified orthopedic surgeon with over 15 years of experience in joint preservation and robotic-assisted surgery. He believes in merging high-touch care with cutting-edge tools like AI to enhance every patient’s journey.
        </p>
      </section>

      {/* Contact/CTA */}
      <section className="bg-blue-700 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">Questions? Ready to book? We're here to help.</p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
}