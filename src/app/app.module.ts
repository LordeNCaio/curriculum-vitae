import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { InformationComponent } from './components/information/information.component';
import { RecordComponent } from './components/record/record.component';
import { SimpleRecordComponent } from './components/simple-record/simple-record.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InformationComponent,
        RecordComponent,
        SimpleRecordComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
}
