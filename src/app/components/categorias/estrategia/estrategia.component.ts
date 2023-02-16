import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-estrategia',
  templateUrl: './estrategia.component.html',
  styleUrls: ['./estrategia.component.css']
})
export class EstrategiaComponent implements OnInit {

  gamer: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.findAllEstrategia();
  }

  findAllEstrategia(): void {
    this.gameService.findAll().subscribe((resposta) => {
      this.gamer = resposta.filter(game => game.genero == 'estrategia');
    })
  }
}
