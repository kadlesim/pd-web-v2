import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { ResultListComponent } from './result-list/result-list.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {EventListService} from './event-list/event-list.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        component: BlogComponent
      },
      {
        path: 'blog-post/:id',
        component: BlogPostComponent
      }
    ]
  },
  {
    path: 'blog-post/:title/:image/:text',
    component: BlogPostComponent
  },
  {
    path: 'player-list',
    component: PlayerListComponent
  },
  {
    path: 'event-list',
    component: EventListComponent,
    resolve: {
      // events: EventsResolver
    }
  },
  {
    path: 'media',
    component: MediaComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'result-list',
    component: ResultListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'player-detail',
    component: PlayerDetailComponent
  },
  { path: '',
    // redirectTo: '/home',
    component: HomeComponent
    // pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    BlogPostComponent,
    EventComponent,
    EventListComponent,
    LoginComponent,
    MediaComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    ResultListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    EventListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
