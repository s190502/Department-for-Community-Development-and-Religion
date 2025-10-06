import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-list-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, FormsModule],
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  public value?: string;
}
