import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { ButtonBackComponent } from './button-back/button-back.component';
import { StarContainerComponent } from './star-container/star-container.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { CommentsComponent } from './comments/comments.component';
import { MenuDesktopComponent } from './menu-desktop/menu-desktop.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        MenuComponent,
        LayoutComponent,
        ButtonBackComponent,
        StarContainerComponent,
        SkillsFormComponent,
        CommentsComponent,
        MenuDesktopComponent,
        NotFoundComponent,
    ],
    imports: [CommonModule, FontAwesomeModule, RouterModule],
    exports: [
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        MenuComponent,
        LayoutComponent,
        ButtonBackComponent,
        StarContainerComponent,
        SkillsFormComponent,
        CommentsComponent,
    ],
})
export class CoreModule {}
