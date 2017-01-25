import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {HomePage} from "../pages/home/home";
import {TabsPage} from "../pages/tabs/tabs";
import {HackerNewsService} from "../providers/HackerNewsService";
import {NewsDetailPage} from "../pages/news-detail/news-detail";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, HackerNewsService]
})
export class AppModule {
}
