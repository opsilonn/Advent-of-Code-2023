import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => MockBuilder(AppComponent, AppModule));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'Advent-of-Code-2023' title`, () => {
    expect(component.title).toEqual('Advent-of-Code-2023');
  });
});
