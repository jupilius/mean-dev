import {Pipe, PipeTransform} from '@angular/core';
/**
 * Created by kitri06 on 2017-05-17.
 */
@Pipe({
  name: 'toolong'
})

export class ToolongPipe implements PipeTransform {
  transform(value: string, homMany: number): string {
    if (!homMany) {
      homMany = 20;
    }
    if (value.length > homMany) {
      return value.substr(0, homMany) + '...';
    } else {
      return value;
    }
  }
}
