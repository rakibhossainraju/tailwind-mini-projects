import { ProductModel } from "./components/ProductModel.jsx";
import { PricingCard } from "./components/PricingCard.jsx";
import { EmailCard } from "./components/EmailCard.jsx";
import { ImageGallery } from "./components/ImageGallery.jsx";

export default function App() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-blue-100">
      {/*Components Here*/}
      <ImageGallery />
    </section>
  );
}
