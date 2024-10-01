import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MotoGuard } from './moto.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Mocking the necessary dependencies
class MockRouter {
  // Mock the required methods or properties
}

describe('MotoGuard', () => {
  let guard: MotoGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MotoGuard,
        { provide: Router, useClass: MockRouter } // Use mock router
      ]
    });
    guard = TestBed.inject(MotoGuard); // Inject the MotoGuard
    router = TestBed.inject(Router); // Inject the Router if needed
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation', () => {
    const route = new ActivatedRouteSnapshot();
    const state: RouterStateSnapshot = { url: '/some-url' } as RouterStateSnapshot;

    // Implement your guard logic here if needed.
    // You can also spy on router methods if you want to check their calls.
    const canActivate = guard.canActivate(route, state);
    
    expect(canActivate).toBeTrue(); // Update this according to your guard logic
  });

  // Add more tests for other scenarios as needed
});
