import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AuthService } from "./auth.service"
import { TestBed } from "@angular/core/testing";


describe('AuthService Test',()=>{
    let service : AuthService;
    let httpMock: HttpTestingController;

    
    beforeEach( ()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[AuthService]
        })
        service = TestBed.inject(AuthService);
        httpMock = TestBed.inject(HttpTestingController);
    })

    afterEach( ()=>{
        httpMock.verify();
    });

    it('Debería hacer una llamada al endpoint /register y devolver el resultado', ()=>{
        // Arrange
        const userEmail = 'test@test.com';
        const userpassword = '#Clave1234';
        const mockResponse = {ok: true, msg: 'User registered successfully'}
        // Act & Assert
        service.register(userEmail, userpassword).subscribe(
            response =>{
                expect(response).toEqual(mockResponse)
            }
        );

        // Assert segunda parte para los servicios en el front - Realizar el firmado de la petición
        const req = httpMock.expectOne(`${service['apiUrl']}/register`);
    
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({email: userEmail, password: userpassword});
        req.flush(mockResponse);
    })

})