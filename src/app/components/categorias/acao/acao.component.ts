import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  gamer: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.findAllAcao();
  }

  findAllAcao(): void {
    this.gameService.findAll().subscribe((resposta) => {
      this.gamer = resposta.filter(gamer => gamer.genero == 'acao'); 
    })
  }
}
