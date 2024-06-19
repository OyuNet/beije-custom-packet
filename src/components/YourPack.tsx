import IconUpdate from "@/components/Icons/Update";
import Image from "next/image";
import { Button } from "@mui/material";
import calcPrice from "@/functions/calcPrice";
import getNonZeros from "@/functions/getNonZeros";
import PackageBox from "./Boxes/PackageBox";

interface YourPackProps {
  isCartDisabled: boolean;
  setIsCartDisabled: Function;
  className?: string;
  sliderValues: { [key: string]: number[] };
  setSliderValues: Function;
}

export default function YourPack({ isCartDisabled, setIsCartDisabled, className, sliderValues, setSliderValues }: YourPackProps) {

  const handleRemoveFromPack = (product: string) => {
    const updatedSliderValues = {
      ...sliderValues,
      [product]: sliderValues[product].map(() => 0)
    };
    setSliderValues(updatedSliderValues);
  };

  const nonZeros = getNonZeros(sliderValues);

  Number(calcPrice(sliderValues)) > 0 ? setIsCartDisabled(true) : setIsCartDisabled(false);

  return (
    <div className={`bg-white rounded-3xl p-8 ${className} w-1/3 overflow-x-hidden`}>
      <p className="text-3xl font-medium">Özel Paketin</p>

      <div className="bg-white rounded-xl p-4 my-6 shadow-2xl flex gap-3 items-center">
        <IconUpdate />
        <p className="font-light">2 ayda 1 gönderim</p>
      </div>

      <Image 
        src="/ped.png"
        width={400}
        height={200}
        alt="ped görsel"
      />

      <div className="overflow-x-hidden">
        {Object.entries(nonZeros).map(([product, items]) => (
          <PackageBox 
            key={product}
            product={product}
            items={items}
            handleRemoveFromPack={handleRemoveFromPack}
          />
        ))}
      </div>

      <Button sx={{ textTransform: "none" }} disabled={!isCartDisabled} className="w-full mt-12 rounded-full bg-gray-200 text-lg py-3">
        Sepete Ekle (₺{calcPrice(sliderValues)})
      </Button>
    </div>
  );
}
