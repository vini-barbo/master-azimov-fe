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
        <div
          class="flex flex-col gap-2 w-full h-full max-w-full border-2 border-red-500 px-2">
          <app-guide></app-guide>
          <router-outlet class="w-full max-w-full"></router-outlet>
        </div>
        <!-- <div class="  w-full max-w-full px-3">
          <app-guide></app-guide>
          <div class="flex-1 py-2">
            <router-outlet></router-outlet>
          </div>
        </div> -->
      </div>
    </main>
  `,
  styles: ``,
})
export class SaasLayoutComponent {}
