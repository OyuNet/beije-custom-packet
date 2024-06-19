export default function getNonZeros(values: { [key: string]: number[] }) {
    const result: { [key: string]: { orderNum: number; amount: number }[] } = {};
    for (const product in values) {
      const productValues = values[product];
      if (productValues) {
        const nonZeros = productValues.map((value, index) => ({
          orderNum: index,
          amount: value
        })).filter(item => item.amount > 0);
        if (nonZeros.length > 0) {
          result[product] = nonZeros;
        }
      }
    }
    return result;
}