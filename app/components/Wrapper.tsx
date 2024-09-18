"use client";

import { SetStateAction, useState } from "react";
import MapView from "./MapView";
import EquipmentDetails from "./EquipmentDetails";
import { MainSearch } from "./MainSearch";

export default function Wrapper() {
  const [selectedEquipment, setSelectedEquipment] = useState(
    null
  );

  const [filters, setFilters] = useState({ searchTerm: "", status: "" });

  const handleFilterChange = (newFilters: SetStateAction<{ searchTerm: string; status: string; }>) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({ searchTerm: "", status: "" });
  };

  return (
    <div>
      <h1 className="text-center">Monitoramento de Equipamentos</h1>
      <MainSearch onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} />
      <div className="flex">
        <EquipmentDetails equipment={selectedEquipment} />
        <MapView filters={filters} onSelectEquipment={setSelectedEquipment} />
      </div>
    </div>
  );
}
