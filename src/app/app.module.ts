import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterModule } from './auth/register/register.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { authReducer } from './state/auth/auth.reducer';
import { surfcampReducer } from './state/surfcamp/surfcamp.reducer';
import { userReducer } from './state/user/user.reducer';
import { AuthGuard } from './services/auth-guard.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4500', options: {} };
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({
            auth: authReducer,
            surfcamp: surfcampReducer,
            user: userReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        CoreModule,
        HttpClientModule,
        FontAwesomeModule,
        RegisterModule,
        SocketIoModule.forRoot(config),
    ],
    providers: [{ provide: AuthGuard }],
    bootstrap: [AppComponent],
})
export class AppModule {}
