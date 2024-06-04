import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GzmDividerClass } from './gzm-divider.class';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'gzm-divider',
  templateUrl: './gzm-divider.component.html',
  styleUrl: './gzm-divider.component.scss',
})
export class GzmDividerComponent implements OnInit {
  @Input() properties!: GzmDividerClass;

  ngOnInit(): void {
    if (!this.properties) {
      this.properties = new GzmDividerClass();
    }
  }
}
