import { Component, OnInit } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // 指出product是从父组件传入的
  @Output() notify = new EventEmitter(); // 

  constructor() {}

  ngOnInit() {}
}
