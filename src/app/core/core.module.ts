import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        MenuComponent,
    ],
    imports: [CommonModule, FontAwesomeModule],
    exports: [HeaderComponent, FooterComponent, ButtonComponent, MenuComponent],
})
export class CoreModule {}
