import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [HeaderComponent],
})
export class CoreModule {}
