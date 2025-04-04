import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquipamentosComponent } from './funcionalidades/equipamentos/equipamentos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EquipamentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
