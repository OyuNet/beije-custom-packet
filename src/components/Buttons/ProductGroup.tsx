import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

interface ProductGroupProps {
  products: string[];
  width?: number;
  onProductClick: Function;
  className: string
}

export default function ProductGroup({ products, width, onProductClick, className }: ProductGroupProps) {

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleButtonClick = (product: string) => {
    setSelectedProduct(product);

    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <ButtonGroup
      className={className}
      variant="text"
      aria-label="ürün seçimi"
      sx={{
        width: width ? `${width}px` : "100%",
        '& .MuiButton-root': {
          color: '#333131',
          borderBottom: '2px solid transparent',
          '&:hover': {
            borderBottomColor: '#333131',
          },
        },
        '& .MuiButton-root.Mui-selected': {
          color: '#333131',
          borderBottomColor: '#333131',
        },
        '& .MuiButton-root.Mui-selected:hover': {
          borderBottomColor: '#333131',
        },
        '& .MuiButtonGroup-grouped:not(:last-child)': {
          borderRight: 'none',
        },
      }}
    >
      {products.map((product, index) => (
        <Button 
          key={index}  
          sx={{ width: `${width ? width / products.length : 200}px`, textTransform: "none" }}
          onClick={() => handleButtonClick(product)}
        >
          <p className="font-normal text-gray-700 text-lg">{product}</p>
        </Button>
      ))}
    </ButtonGroup>
  );
}
