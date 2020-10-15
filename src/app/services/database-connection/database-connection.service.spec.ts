import {TestBed} from '@angular/core/testing';

import {DatabaseService} from './database.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('DatabaseConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
                                                    imports: [HttpClientTestingModule]
                                                  }).compileComponents()
  );

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });
});
