import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Service
import { WishListService } from './services/wish-list.service';

//Components
import { TodoComponent } from '../pages/todo/todo.component';
import { DoneComponent } from '../pages/done/done.component';
import { AddComponent } from '../pages/add/add.component';
import { TabsPage } from '../pages/tabs/tabs';

//Pipe
import { PlaceHolderPipe } from './pipes/placeholder.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    TodoComponent,
    DoneComponent,
    TabsPage,
    AddComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodoComponent,
    DoneComponent,
    TabsPage,
    AddComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
