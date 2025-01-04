import React from "react";
import Image, { StaticImageData } from "next/image";
import googleLogo from "@/assets/google-logo.webp";
import samsungLogo from "@/assets/samsung-logo.png";

interface FirmLogo {
  name: string;
  logoUrl: StaticImageData;
}

const firmLogos: FirmLogo[] = [
  { name: "AYUR", logoUrl: googleLogo },
  { name: "AdTik", logoUrl: samsungLogo },
];

const testimonials = [
  {
    name: "Mr. John Doe",
    title: "X-Y-Z Store Owner",
    content:
      "Duis tempor mauris at ex dapibus, nec scelerisque dolor faucibus. Praesent vel turpis in erat gravida scelerisque. Aenean id lectus nec nisi aliquam finibus eget id metus.",
  },
  {
    name: "Mrs. Martha Steen",
    title: "X-Y-Z Store Owner",
    content:
      "Duis tempor mauris at ex dapibus, nec scelerisque dolor faucibus. Praesent vel turpis in erat gravida scelerisque. Aenean id lectus nec nisi aliquam finibus eget id metus.",
  },
  {
    name: "Dr. David Fernand",
    title: "X-Y-Z Store Owner",
    content:
      "Duis tempor mauris at ex dapibus, nec scelerisque dolor faucibus. Praesent vel turpis in erat gravida scelerisque. Aenean id lectus nec nisi aliquam finibus eget id metus.",
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-black text-white p-8 md:p-16">
      <div className="px-4 lg:px-24 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{"Here's What Our Clients Have To Say"}</h2>
            <p className="mb-8">
              {
                " At Skala, Our Clients Are At The Heart Of Everything We Do. We Believe In Building Strong, Lasting Partnerships By Delivering Personalized Solutions That Truly Meet Their Needs. Your Success Is Our Success, And We're Committed To Going Above And Beyond To Ensure Your Goals Are Not Just Met, But Exceeded."
              }
            </p>
            <div>
              <h3 className="text-sm uppercase mb-4">Firms Represented:</h3>
              <div className="flex space-x-4">
                {firmLogos.map((firm) => (
                  <Image
                    key={firm.name}
                    src={firm.logoUrl}
                    alt={firm.name}
                    width={100}
                    height={50}
                    className="bg-white p-2 rounded"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg mr-4"></div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-sm">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
