import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { MenuController } from '@ionic/angular';

import { TutorialPage } from './tutorial';

import { IonicStorageModule } from '@ionic/storage-angular';
describe('TutorialPage', () => {
  let fixture, app;
  beforeEach(waitForAsync(() => {
    const menuSpy = jasmine.createSpyObj('MenuController', [
      'toggle',
      'enable'
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [TutorialPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicStorageModule.forRoot()],
      providers: [
        { provide: MenuController, useValue: menuSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialPage);
    app = fixture.debugElement.componentInstance;
    app.storage.create();
  });
  it('should create the tutorial page', () => {
    // @ts-ignore
    expect(app).toBeTruthy();
  });

  it('should check the tutorial status', async () => {
    const didTuts = await app.storage.get('ion_did_tutorial');
    // @ts-ignore
    expect(didTuts).toBeFalsy();
  });
});
