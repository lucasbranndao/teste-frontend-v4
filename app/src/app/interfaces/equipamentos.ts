// equipamento
export interface Equipamento {
  id: string;
  equipmentModelId: string;
  name: string;
}

// modelo do equipamento e lucro
export interface EquipmentModel {
  id: string;
  name: string;
  hourlyEarnings: HourlyEarning[];
}

export interface HourlyEarning {
  equipmentStateId: string;
  value: number;
}

// Localização e historico
export interface EquipmentPosition {
  equipmentId: string;
  positions: Position[];
}

export interface Position {
  date: string;
  lat: number;
  lon: number;
}

// Status do equipamento e historico de uso
export interface EquipmentState {
  id: string;
  name: string;
  color: string;
}

export interface EquipmentStateHistory {
  equipmentId: string;
  states: StateRecord[];
}
export interface StateRecord {
  date: string;
  equipmentStateId: string;
}
