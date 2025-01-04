import React from "react";

const ContactInfo = () => {
  return (
      <section className="container mx-auto px-4 lg:px-24 bg-black text-white p-10 rounded-3xl mb-16">
        <h3 className="text-xl font-semibold mb-4">CONTACT INFO</h3>
        <h4 className="text-4xl font-bold mb-10">We Are Always<br />Happy To Assist You.</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h5 className="font-semibold mb-2">Contact Number</h5>
            <p className="text-xl mb-4">(+91) 8860013162</p>
            <p className="text-sm opacity-80">
              Assistance Hours:<br />
              Monday - Friday<br />
              6 AM to 8 AM IST
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Email Address</h5>
            <p className="text-xl mb-4">support@samfmedia.com</p>
            <p className="text-sm opacity-80">
              Assistance Hours:<br />
              Monday - Friday<br />
              6 AM to 8 AM IST
            </p>
          </div>
        </div>
      </section>
  );
};

export default ContactInfo;
