import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, ButtonComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [HeaderComponent, FooterComponent, ButtonComponent],
})
export class CoreModule {}
