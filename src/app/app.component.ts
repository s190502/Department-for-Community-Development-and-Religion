import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective, IgxToggleActionDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value?: string;
}
