// @ts-nocheck

import { useState, useEffect } from "react";
import { getIndiaState, getIndiaDistrict } from "india-state-district";

interface StateDistrictSelectorProps {
  defaultState?: string;
  defaultDistrict?: string;
  onChange?: (values: { state: string; district: string }) => void;
  className?: string;
  disabled?: boolean;
}

interface StateType {
  state: string;
  code: string;
}

function StateDistrictSelector({
  defaultState = "",
  defaultDistrict = "",
  onChange,
  className = "",
  disabled = false,
}: StateDistrictSelectorProps) {
  const states = getIndiaState();

  const [selectedState, setSelectedState] = useState<StateType>(() => {
    const defaultStateObj =
      states.find((s) => s.state === defaultState) || states[0];
    return defaultStateObj;
  });

  const [selectedDistrict, setSelectedDistrict] = useState(defaultDistrict);
  const [districts, setDistricts] = useState<string[]>(() =>
    selectedState ? getIndiaDistrict(selectedState.code) : []
  );

  useEffect(() => {
    if (defaultState) {
      const stateObj = states.find((s) => s.state === defaultState);
      if (stateObj) {
        setSelectedState(stateObj);
      }
    }
  }, [defaultState, states]);

  useEffect(() => {
    if (selectedState) {
      const stateDistricts = getIndiaDistrict(selectedState.code);
      setDistricts(stateDistricts);
      if (!stateDistricts.includes(selectedDistrict)) {
        setSelectedDistrict("");
      }
    } else {
      setDistricts([]);
      setSelectedDistrict("");
    }
  }, [selectedState, selectedDistrict]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stateObj = states.find((s) => s.state === e.target.value);
    if (stateObj) {
      setSelectedState(stateObj);
      setSelectedDistrict("");
      onChange?.({ state: stateObj.state, district: "" });
    }
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDistrict = e.target.value;
    setSelectedDistrict(newDistrict);
    onChange?.({ state: selectedState.state, district: newDistrict });
  };

  return (
    <div className={className}>
      <div>
        <label>State</label>
        <select
          value={selectedState.state}
          onChange={handleStateChange}
          disabled={disabled}
          className="w-full  py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.code} value={state.state}>
              {state.state}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>District</label>
        <select
          value={selectedDistrict}
          onChange={handleDistrictChange}
          disabled={disabled || !selectedState}
          className="w-full  py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select District</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StateDistrictSelector;
