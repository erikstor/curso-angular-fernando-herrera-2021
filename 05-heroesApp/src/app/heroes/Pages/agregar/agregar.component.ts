import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      description: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.findHeroe(id)))
      .subscribe((heroe) => {
        this.heroe = heroe;
      });
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe).subscribe((heroe) => {
        this.mostrarSnackBar('Registro actualizado');
      });
    } else {
      this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.mostrarSnackBar('Registro creado');
        this.router.navigate(['/heroes/editar', heroe.id]);
      });
    }
  }

  borrar() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '35%',
      data: { ...this.heroe }, // Se hace asi para cuando quiera modificar algo, de esta manera no afecta al objeto original
    });

    dialog.afterClosed().subscribe((result) => {
      if (this.heroe.id && result === true) {
        this.heroesService.borrarHeroe(this.heroe.id).subscribe((resp) => {
          this.mostrarSnackBar('Registro borrado');
          this.router.navigate(['/heroes']);
        });
      }
    });
  }

  mostrarSnackBar(mensaje: string): void {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 3000,
    });
  }
}
