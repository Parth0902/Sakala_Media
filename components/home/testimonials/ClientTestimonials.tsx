interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  quoteImage?: string;
}

interface ClientTestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "XY @ XYZ Firm",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    avatar: "https://dashboard.codeparrot.ai/api/assets/Z2UuihEM3nUkN20J",
  },
  {
    id: 2,
    name: "John Doe",
    role: "XY @ XYZ Firm",
    content:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress. Services in Development Website, Shopify and Wordpress",
    avatar: "https://dashboard.codeparrot.ai/api/assets/Z2UuihEM3nUkN20K",
    quoteImage: "https://dashboard.codeparrot.ai/api/assets/Z2UuihEM3nUkN20L",
  },
  {
    id: 3,
    name: "John Doe",
    role: "XY @ XYZ Firm",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    avatar: "https://dashboard.codeparrot.ai/api/assets/Z2UuihEM3nUkN20M",
  },
  {
    id: 4,
    name: "John Doe",
    role: "XY @ XYZ Firm",
    content:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress. Services in Development Website, Shopify and Wordpress",
    avatar: "https://dashboard.codeparrot.ai/api/assets/Z2UuihEM3nUkN20N",
    quoteImage: "https://dashboard.codeparrot.ai/api/assets/Z2UuihEM3nUkN20O",
  },
];

export const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ testimonials = defaultTestimonials }) => {
  return (
    <div className="testimonials-container">
      <h2>Here’s what Our Clients Have To Say</h2>
      <p>
        At Skala, our clients are at the heart of everything we do. We believe in building strong, lasting partnerships
        by delivering personalized solutions that truly meet their needs. Your success is our success, and we’re
        committed to going above and beyond to ensure your goals are not just met, but exceeded.
      </p>
      <div className="testimonials-scroll">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <div className="avatar-container">
                <img src={testimonial.avatar} alt="avatar" className="avatar" />
              </div>
              <div className="user-info">
                <h3 className="user-name">{testimonial.name}</h3>
                <p className="user-role">{testimonial.role}</p>
              </div>
              {testimonial.quoteImage && <img src={testimonial.quoteImage} alt="quote" className="quote-image" />}
            </div>
            <p className="testimonial-content">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
