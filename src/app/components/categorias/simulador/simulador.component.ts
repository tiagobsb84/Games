import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

    gamer: Game[] = [];

    constructor(private gameService: GameService) {}

    ngOnInit(): void {
      this.findAllSimulador();
    }

    findAllSimulador(): void {
      this.gameService.findAll().subscribe((resposta) => {
        this.gamer = resposta.filter(game => game.genero == 'simulador');
      })
    }
}
