import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinToss } from './coin-toss';

describe('CoinToss', () => {
  let component: CoinToss;
  let fixture: ComponentFixture<CoinToss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinToss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinToss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
