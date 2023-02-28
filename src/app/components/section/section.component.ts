import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/service/game.service';



@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  gamer: Game[] = [];

  filtro: string = "";

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.gameService.findAllPesquisa(this.filtro).subscribe((resposta) => {
      this.gamer = resposta;
    })
  }

}
