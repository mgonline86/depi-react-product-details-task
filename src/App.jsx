import Details from "./components/Details";
import Gallery from "./components/Gallery";
import image1 from "./imgs/product-view01.webp";
import image2 from "./imgs/product-view02.webp";
import image3 from "./imgs/product-view03.webp";
import image4 from "./imgs/product-view04.webp";
import image5 from "./imgs/product-view05.jpg";
import image6 from "./imgs/product-view06.jpg";

const product = {
  name: "Product Name",
  price: 120,
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  sizes: [
    { label: "Small", value: "s" },
    { label: "Medium", value: "m" },
    { label: "Large", value: "l" },
    { label: "Extra Large", value: "xl" },
  ],
  images: [image1, image2, image3, image4, image5, image6],
};

function App() {
  return (
    <main>
      <div className="container flex gap-x-5 gap-y-2 justify-evenly flex-wrap">
        <Gallery images={product.images} />
        <Details product={product} />
      </div>
    </main>
  );
}

export default App;
