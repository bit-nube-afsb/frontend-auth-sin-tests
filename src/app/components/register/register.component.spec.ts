import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RegisterComponent } from "./register.component"
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

describe('RegisterComponent Test', ()=>{
    let component : RegisterComponent;
    let fixture : ComponentFixture<RegisterComponent>;
    let authServiceSpy : jasmine.SpyObj<AuthService>;
    let routerSpy : jasmine.SpyObj<Router>;

    beforeEach( async()=>{
        const authSpy = jasmine.createSpyObj('AuthService',['register']);
        const routerSpyObj = jasmine.createSpyObj('Router',['navigate']);
        await TestBed.configureTestingModule({
            imports: [RegisterComponent],
            providers: [
                {provide: AuthService, useValue: authSpy},
                {provide: Router, useValue: routerSpyObj}
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
        routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
        fixture.detectChanges();
    });

    it('Debería crear un componente', ()=>{
        expect(component).toBeTruthy();
    })
})