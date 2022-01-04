import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //  this.setHeroe(id);
    // });

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.findHeroe(id)))
      .subscribe((heroe: Heroe) => {
        this.heroe = heroe;
      });
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

  // setHeroe(id: string) {
  //   this.heroeService.findHeroe(id).subscribe((res) => (this.heroe = res));
  // }
}
