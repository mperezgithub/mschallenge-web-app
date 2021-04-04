import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClientService } from './client.service';

const dummyClientListResponse = {
  mensaje: 'Lista de todos los clientes',
  data: [
    { id: 1, nombre: 'Juan', apellido: 'Mansilla', edad:30 },
    { id: 2, nombre: 'David', apellido: 'Luque', edad:50 },
  ],
};

describe('ClientService', () => {
    let injector: TestBed;
    let service: ClientService;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ClientService],
      });
  
      injector = getTestBed();
      service = injector.get(ClientService);
      httpMock = injector.get(HttpTestingController);
    });
  
    afterEach(() => {
      httpMock.verify();
    });
  
    it('getAll() should return data and message', () => {
      service.getAll().subscribe((res) => {
        expect(res).toEqual(dummyClientListResponse);
        expect(res.mensaje).toEqual('Lista de todos los clientes');
      });
  
      const req = httpMock.expectOne('http://localhost:8080/api/clientes/listclientes');
      expect(req.request.method).toBe('GET');
      req.flush(dummyClientListResponse);
    });
  });