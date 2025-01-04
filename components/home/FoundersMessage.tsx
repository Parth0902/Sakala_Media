import Image from "next/image";
import founderImage from "@/assets/founder.png";

export default function FoundersMessage() {
  return (
    <div className="w-full">
      {/* Founder Message Section */}
      <section className="mx-auto px-4 lg:px-24 py-12 flex flex-col items-center lg:flex-row lg:justify-center gap-32">
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <Image src={founderImage} alt="Founder" width={400} height={600} className="rounded-lg w-full object-cover" />
        </div>
        <div className="w-full lg:max-w-2xl lg:w-1/2 space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-black text-4xl font-bold">A Message From Our Founder</h2>
            <h3 className="text-4xl font-semibold text-blue-600">Swarith Alapati</h3>
          </div>
          <div className="space-y-4 text-white text-2xl">
            <p>
              {
                "Welcome To Skala – Where Your Digital Journey Reaches New Heights. As Founder, I Bring A Wealth Of Experience To Lead Our Dynamic Team In Boosting Your Business's Online Impact. We Specialize In Savvy Online Advertising, From Google Ads To Social Media Engagement, Ensuring Your Brand Stands Out. "
              }
            </p>
            <p>
              {
                "But We Don't Stop At Marketing. Our Tech Expertise Delivers Custom Web Solutions And Engaging Apps, All Powered By Smart Data Insights For Strategic Growth."
              }
            </p>
            <p>Join Us At Skala, Your Ally In Crafting A Standout Digital Legacy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
