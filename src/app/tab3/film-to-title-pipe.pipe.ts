import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmToTitlePipe',
})
export class FilmToTitlePipePipe implements PipeTransform {
  transform(value: string): string {
    let newString;
    newString = value.replace('.jpg', '');
    newString = newString.replaceAll('-', ' ');
    return newString;
  }
}
