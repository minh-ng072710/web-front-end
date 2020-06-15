import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    userData: Observable<firebase.User>;
    constructor(private angularFireAuth: AngularFireAuth) {
        this.userData = angularFireAuth.authState;
    }
    SignUp(email: string) {
        let password = '123456'
        this.angularFireAuth
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                window.alert('Successfully signed up!');
                // window.location.href='/home'
                return res
            })
            .catch(error => {
                window.alert(error.message);
            });
    }
    SignIn(email: string, password: string) {
        this.angularFireAuth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                window.location.href = '/home/dashboard'
            })
            .catch(err => {
                window.alert(err.message);
            });
    }
    doGoogleLogin() {
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.GoogleAuthProvider()
            provider.addScope('profile');
            provider.addScope('email');
            this.angularFireAuth
                .signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                    window.location.href = "/cate" //Hàm resolve returns a Promise object that is resolved with a given value
                }, err => {
                    console.log(err);
                    reject(err);
                })
        })
    }
}