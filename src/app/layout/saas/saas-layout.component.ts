import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GuideComponent } from './guide/guide.component';

@Component({
  selector: 'app-saas-layout',
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, GuideComponent],
  template: `
    <main class="flex flex-col h-[100dvh] w-[100dvw] bg-[#f5f5f5]">
      <app-navbar></app-navbar>
      <div class="flex flex-row h-full w-full">
        <app-sidebar class="h-full"></app-sidebar>
        <div class=" flex flex-col w-full px-3">
          <app-guide></app-guide>
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
  styles: ``,
})
export class SaasLayoutComponent {}
