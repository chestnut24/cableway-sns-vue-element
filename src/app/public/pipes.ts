import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }
  transform(value: any, args?: any): any {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

}


@NgModule({
  declarations: [
    SafeHtmlPipe,
  ],

  exports: [
    SafeHtmlPipe,
  ],
  providers: []
})
export class PipesModule {}
