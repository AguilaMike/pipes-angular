import { Component, Input, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'pipes-container-page',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './container-page.component.html',
  styleUrl: './container-page.component.scss'
})
export class ContainerPageComponent implements OnInit {
  @Input() public title!: string;
  @Input() public description!: string;

  ngOnInit(): void {
    if (!this.title) throw new Error('Attribute title is required');
    if (!this.description) throw new Error('Attribute description is required');
  }
}
