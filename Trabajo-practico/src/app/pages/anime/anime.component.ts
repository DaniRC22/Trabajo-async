import { Component } from '@angular/core';
import { AnimeService } from '../../shared/anime.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  public buscar= new FormControl('');
  public form = new FormGroup({
    buscar : this.buscar,
  });
constructor(private animeService: AnimeService){
  this.buscar.valueChanges.pipe(debounceTime(1000),).subscribe((value) => {
    value && this.animeService.searchAnime(value).subscribe(console.log);
  })
}
}
