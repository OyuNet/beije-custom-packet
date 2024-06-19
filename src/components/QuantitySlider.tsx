import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

interface QuantitySliderProps {
  min: number;
  max: number;
  value: number;
  step: number;
  name: string;
  onChange: (event: any, value: number | number[]) => void;
}

export default function QuantitySlider({ min, max, value, step, name, onChange }: QuantitySliderProps) {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Typography id="discrete-slider" gutterBottom>
        {name}
      </Typography>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        step={step}
        marks
        min={min}
        max={max}
        sx={{
          color: "#333131",
        }}
      />
      <div className="flex justify-between mt-2">
        <Typography variant="h6" align="left" gutterBottom>
          {min}
        </Typography>
        <Typography variant="h6" align="right" gutterBottom>
          {max}
        </Typography>
      </div>
    </div>
  );
}
