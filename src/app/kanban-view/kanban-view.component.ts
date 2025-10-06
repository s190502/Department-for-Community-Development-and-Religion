import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-kanban-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxRippleDirective, IgxButtonDirective, FormsModule],
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.scss']
})
export class KanbanViewComponent {
  public value?: string;
}
