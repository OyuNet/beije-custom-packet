import { packs } from "@/datas/packs";
import { prices } from "@/datas/prices";

export default function calcPrice(sliderValues: { [key: string]: number[] } ) {
    let totalPrice = 0.00;
  
    Object.entries(sliderValues).forEach(([product, amounts]) => {
      const packInfo = packs[product];
      const priceMatrix = prices[product];
  
      if (!packInfo || !priceMatrix) {
        console.error(`Pack or price data missing for product: ${product}`);
        return;
      }
  
      let productTotal = 0;
      amounts.forEach((amount, index) => {
        if (typeof amount !== "number" || amount < 0 || amount/10 >= priceMatrix[index].length) {
          console.error(`Invalid amount (${amount}) for product: ${product}`);
          return;
        }
        
        const price = priceMatrix[index][amount/10];
        productTotal += price;
      });
  
      totalPrice += productTotal;
    });
  
    return totalPrice.toFixed(2);
}