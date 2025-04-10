"use client";

import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

interface PriceRangeSelectorProps {
  value: [number, number | null]; // null means Max+
  onChange: (range: [number, number | null]) => void;
}

const presetOptions: { label: string; value: [number, number | null] }[] = [
  { label: "All", value: [0, null] },
  { label: "Under ₹1000", value: [0, 1000] },
  { label: "₹1000 - ₹5000", value: [1000, 5000] },
  { label: "₹5000 - ₹10000", value: [5000, 10000] },
  { label: "₹10000+", value: [10000, null] }, // null for Max+
];

export default function PriceRangeSelector({
  value,
  onChange,
}: PriceRangeSelectorProps) {
  const [min, max] = value;

  // Internal state for the slider's visual value.
  // When max is null (meaning 'Max+'), we use 10000 as the internal representation.
  const [sliderValue, setSliderValue] = useState<[number, number]>([
    min,
    max === null ? 10000 : max,
  ]);

  // If the parent's value changes, update the slider's internal state.
  useEffect(() => {
    setSliderValue([min, max === null ? 10000 : max]);
  }, [min, max]);

  // This function only updates the visual indicator
  const handleSliderChange = (val: number[]) => {
    setSliderValue([val[0], val[1]]);
  };

  // This function fires when the user finishes interacting with the slider.
  // It commits the value change to the parent.
  const handleSliderCommit = (val: number[]) => {
    const committedRange: [number, number | null] = [
      val[0],
      val[1] === 10000 ? null : val[1],
    ];
    onChange(committedRange);
  };

  // On preset change, update both the parent state and the internal state.
  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = presetOptions.find((opt) => opt.label === e.target.value);
    if (selected) {
      onChange([selected.value[0], selected.value[1]]);
      setSliderValue([
        selected.value[0],
        selected.value[1] === null ? 10000 : selected.value[1],
      ]);
    }
  };

  return (
    <div>
      {/* Preset Selector */}
      <select className="input mb-2 w-full" onChange={handlePresetChange}>
        {presetOptions.map((opt) => (
          <option key={opt.label}>{opt.label}</option>
        ))}
      </select>

      {/* Custom Slider */}
      <Slider
        min={0}
        max={10000}
        step={100}
        value={sliderValue}
        onValueChange={handleSliderChange}
        onValueCommit={handleSliderCommit}
      />

      {/* Display the current slider values. Inputs are disabled just for indicator purpose. */}
      <div className="flex gap-2 mt-2">
        <input
          type="number"
          className="input w-1/2"
          value={sliderValue[0]}
          placeholder="Min"
          disabled
        />
        <input
          type="number"
          className="input w-1/2"
          value={sliderValue[1] === 10000 ? "" : sliderValue[1]}
          placeholder="Max"
          disabled
        />
      </div>
    </div>
  );
}
