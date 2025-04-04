import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Equipamento,
  EquipmentModel,
  EquipmentPosition,
  EquipmentState,
  EquipmentStateHistory,
} from '../../interfaces/equipamentos';

@Injectable({
  providedIn: 'root',
})
export class EquipamentoService {
  private equipamentosUrl = 'assets/equipment.json';
  private modelosUrl = 'assets/equipment-models.json';
  private posicoesUrl = 'assets/equipment-positions.json';
  private estadosUrl = 'assets/equipment-states.json';
  private historicoEstadosUrl = 'assets/equipment-state-history.json';

  constructor(private http: HttpClient) {}

  getEquipamentos(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.equipamentosUrl);
  }

  getModelosEquipamento(): Observable<EquipmentModel[]> {
    return this.http.get<EquipmentModel[]>(this.modelosUrl);
  }

  getPosicoesEquipamento(): Observable<EquipmentPosition[]> {
    return this.http.get<EquipmentPosition[]>(this.posicoesUrl);
  }

  getEstadosEquipamento(): Observable<EquipmentState[]> {
    return this.http.get<EquipmentState[]>(this.estadosUrl);
  }

  getHistoricoEstadosEquipamento(): Observable<EquipmentStateHistory[]> {
    return this.http.get<EquipmentStateHistory[]>(this.historicoEstadosUrl);
  }
}
