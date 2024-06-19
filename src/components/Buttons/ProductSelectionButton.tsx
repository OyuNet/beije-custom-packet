import { Button } from "@mui/material";

export default function ProdSelectButton({
    name,
    width
}: {
    name: string,
    width: number
}) {
    return (
        <Button sx={{ width: `${width}px`, textTransform: "none" }}><p className="font-normal text-gray-700 text-lg">{name}</p></Button>
    );
}