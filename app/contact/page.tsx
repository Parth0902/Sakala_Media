"use client";
import React from "react";
import ContactHeader from "@/components/contact/contactHeader";
import ContactForm from "@/components/contact/contactForm";
import ContactInfo from "@/components/contact/contactInfo";

// import styles from "@/components/Contact.module.css";

const Contact = () => {
  return (
    <div className={"min-h-screen bg-white"}>
      <main className="container mx-auto px-4 py-12">
        <ContactHeader />
        <ContactInfo />
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;

// export const ContactSection = ({
//   heading,
//   subheading,
//   contactInfo,
// }: {
//   heading: string;
//   subheading: string;
//   contactInfo: string[];
// }) => {
//   return (
//     <section className={styles.contactSection} role="region" aria-label="Contact Information">
//       <div className={styles.container}>
//         <div className={styles.content}>
//           <div className={styles.headingColumn}>
//             <div className={styles.headingWrapper}>
//               <h3 className={styles.subheading}>{subheading}</h3>
//               <h1 className={styles.heading}>{heading}</h1>
//             </div>
//           </div>
//           {contactInfo.map((info, index) => (
//             <div key={index} className={styles.infoColumn}>
//               {/* <AssistanceInfo {...info} /> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
