import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-saas-layout',
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
  template: `
    <main class="flex flex-col h-[100dvh] w-screen border-2 border-red-500">
      <app-navbar></app-navbar>
      <app-sidebar class="h-full"></app-sidebar>
    </main>

    <!-- <p>main-layout works!</p>
    <router-outlet></router-outlet> -->
  `,
  styles: ``,
})
export class SaasLayoutComponent {}
