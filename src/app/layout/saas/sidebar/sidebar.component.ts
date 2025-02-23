import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, TuiButton],
  template: `
    <div
      class=" flex h-full  flex-col  bg-[#188083] justify-between px-4 text-white shadow-xl shadow-blue-gray-900/5">
      <div class="flex flex-col gap-5 pt-3">
        <a
          ariaLabel
          [type]="'button'"
          tuiButton
          *ngFor="let item of topIcons"
          [iconStart]="item.icon"
          class="!bg-transparent hover:!bg-white hover:!text-[#188083]  active:!bg-white active:!text-[#188083]">
        </a>
      </div>
      <div>
        <hr class="my-2 border-blue-gray-50" />
        <div class="flex flex-col gap-5">
          <a
            ariaLabel
            [type]="'button'"
            tuiButton
            *ngFor="let item of bottonIcons"
            [iconStart]="item.icon"
            class="!bg-transparent hover:!bg-white hover:!text-[#188083]  active:!bg-white active:!text-[#188083]">
          </a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SidebarComponent {
  topIcons = [
    { path: '/reviews', icon: '@tui.archive', title: 'Reviews' },
    { path: '/teams', icon: '@tui.users', title: 'Teams' },
  ];
  bottonIcons = [
    { path: '/profile', icon: '@tui.user', title: 'Profile' },
    { path: '/settings', icon: '@tui.settings', title: 'Settings' },
    { path: '/logout', icon: '@tui.log-out', title: 'Log Out' },
  ];
}
