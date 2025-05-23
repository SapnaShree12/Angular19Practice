import { Component, ComponentRef, inject, TemplateRef, Type, viewChild, ViewContainerRef } from "@angular/core";
import { WidgetComponent } from "./widget/widget/widget.component";
import { NgComponentOutlet } from "@angular/common";
import { WeatherContentComponent } from "./widget/weather-content/weather-content.component"
import { AppRoutingModule } from "./app-routing-module";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
@Component({
  selector: "app-root",
  template: `
     <router-outlet></router-outlet>
    <img class="logo" src="./logo.svg" alt="Decoded Frontend" />
    <h1 class="page-title">ngContentOutlet Demo</h1>
    <ng-template #contentTpl>
      <app-weather-content />
    </ng-template>
    <main id="content">
      <ng-container
        [ngComponentOutlet]="component"
        [ngComponentOutletInputs]="componentInputs"
        [ngComponentOutletContent]="content"></ng-container>
      <section class="toolbar">
        <button (click)="createComponent()" class="create">Create Component</button>
        <button (click)="destroyComponent()" class="destroy">Destroy Component</button>
      </section>
    </main>
  `,
  imports: [NgComponentOutlet, WeatherContentComponent,RouterOutlet]
})
export class AppComponent {
  vcr = inject(ViewContainerRef);
  contentTpl = viewChild<TemplateRef<unknown>>('contentTpl')
  protected content: Node[][] = [];
  protected component: Type<WidgetComponent> | null = null;
  protected componentInputs = {
    title: 'Weather',
    description: 'Currently in Vienna:'
  }

  createComponent() {
    this.content = [
      this.vcr.createEmbeddedView(this.contentTpl()!).rootNodes
    ]
    this.component = WidgetComponent;
  }
  destroyComponent() {
    this.component = null;
  }
}
