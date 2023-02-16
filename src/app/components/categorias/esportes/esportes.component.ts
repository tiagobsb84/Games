import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-esportes',
  templateUrl: './esportes.component.html',
  styleUrls: ['./esportes.component.css']
})
export class EsportesComponent implements OnInit {

  gamer: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.findAllEsportes();
  }

  findAllEsportes(): void {
    this.gameService.findAll().subscribe((resposta) => {
      this.gamer = resposta.filter(game => game.genero == 'esporte');
    })
  }
}
