import { Button } from "@mui/material";
import { packs } from "@/datas/packs";

export default function PackageBox({
    product,
    items,
    handleRemoveFromPack
}: {
    product: string;
    items: { orderNum: number; amount: number }[];
    handleRemoveFromPack: Function;
}) {
    return (
        <div key={product} className="bg-white rounded-lg p-4 shadow-xl my-6 px-6">
          <p className="text-lg">
            {product.split(" ")
              .filter((text) => text !== "beije")
              .map((text) => text + " ")} 
              Paketleri
          </p>
          <p className="text-gray-700">
            {items.map((item) => `${item.amount} ${packs[`${product}`]?.[item.orderNum]?.name}`).join(", ")}
          </p>
          <Button 
            sx={{ textTransform: "none", color: "black" }} 
            className="rounded-2xl mb-2"
            onClick={() => handleRemoveFromPack(product)}
          >
            Paketten Çıkar
          </Button>
        </div>
    );
}