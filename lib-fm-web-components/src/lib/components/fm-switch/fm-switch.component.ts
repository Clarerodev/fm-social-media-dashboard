import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fm-switch',
  templateUrl: './fm-switch.component.html',
  styleUrls: ['./fm-switch.component.scss'],
})
export class FmSwitchComponent implements OnInit{
  @Output() checkedTheme: EventEmitter<string> = new EventEmitter();
  private themeDark = 'dark';
  private themeLight = 'light';

  public elChecked = false;
  public themeSelected = this.themeDark;

  ngOnInit(): void {
    this.checkedTheme.emit(this.themeSelected);
  }

  public onChangeTheme(ev: Event) {
    this.elChecked = !this.elChecked;
    this.themeSelected = this.elChecked ? this.themeLight : this.themeDark;
    this.checkedTheme.emit(this.themeSelected);
  }
}
