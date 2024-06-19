"use client";
import Header from "@/components/Header/Header";
import QuantitySlider from "@/components/QuantitySlider";
import Link from "next/link";
import { useState } from "react";
import YourPack from "@/components/YourPack";
import ProductGroup from "@/components/Buttons/ProductGroup";
import { packs } from "@/datas/packs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [isCartDisabled, setIsCartDisabled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("beije Ped");
  const [sliderValues, setSliderValues] = useState<{
    [key: string]: number[];
  }>({
    "beije Ped": [0, 0, 0],
    "beije Günlük Ped": [0, 0],
    "beije Tampon": [0, 0, 0]
  });

  const handleProductSelection = (product: string) => {
    setSelectedProduct(product);
  };

  const handleSliderChange = (index: number, val: number) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [selectedProduct]: prevValues[selectedProduct].map((v, i) =>
        i === index ? val : v
      )
    }));
  };

  return (
    <main className="min-h-screen flex flex-col">
      <title>Kendi Paketini Oluştur | beije.</title>
      <Header />

      <div className="flex flex-col lg:flex-row mx-5 md:mx-20 my-24 mt-32 justify-center gap-24">
        <div className="flex flex-col flex-1 space-y-4 max-w-[500px]">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl">Kendi Paketini Oluştur</h1>
            <Link href="#" className="text-lg text-gray-700 font-light">
              Nasıl Çalışır?
            </Link>
          </div>

          <p className="text-gray-500">
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </p>

          <ProductGroup
            className="my-4 md:my-16"
            products={["beije Ped", "beije Günlük Ped", "beije Tampon"]}
            width={500}
            onProductClick={handleProductSelection}
          />

          <div className="w-full space-y-4">
            {packs[selectedProduct].map((pack, i: number) => (
              <QuantitySlider
                key={i}
                min={pack.min}
                max={pack.max}
                value={sliderValues[selectedProduct][i]}
                name={pack.name}
                step={pack.step}
                onChange={(_, val) => {
                  if (typeof val === "number") {
                    handleSliderChange(i, val);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-center lg:max-w-[450px]">
          <YourPack
            isCartDisabled={isCartDisabled}
            setIsCartDisabled={setIsCartDisabled}
            sliderValues={sliderValues}
            className=" grow"
            setSliderValues={setSliderValues}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
