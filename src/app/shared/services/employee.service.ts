import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { EMPLO, employees } from 'src/app/constant/employee';
import Swal from 'sweetalert2';
import { employee } from '../interface/employee.model';

@Injectable({
  providedIn: 'root',
})
export class employeeService {
  private emploList: employee[] = [];
  private storage: Storage = sessionStorage;
  private employeeConstant = employees;

  constructor() {}

  //menampilkan data
  list(): Observable<employee[]> {
    return new Observable<employee[]>((observer: Observer<employee[]>) => {
      const sessionEmployees = this.employeeConstant;
      try {
        if (!sessionEmployees) {
          this.emploList = employees;
          observer.next(this.emploList);
        } else {
          this.emploList = sessionEmployees;
          observer.next(this.emploList);
        }
        this.setToStorage();
      } catch (error: any) {
        observer.error(error.message);
      }
    });
  }

  //menyimpan data

  save(Employee: employee): Observable<void> {
    return new Observable<void>((observer: Observer<void>): void => {
      try {
        if (Employee.id) {
          this.emploList = this.emploList.map((t) => {
            if (t.id == Employee.id) t = Employee;
            return t;
          });
          Swal.fire(
            'Edit data berhasil ditambahkan!',
            'You clicked the button!',
            'success'
          );
        } else {
          Employee.id = makeid(4);
          console.log('Employee: ', Employee);
          this.employeeConstant.push(Employee);

          Swal.fire(
            'Data Employee baru berhasil ditambahkan!',
            'You clicked the button!',
            'success'
          );
        }

        Swal.fire(
          'Data berhasil ditambahkan!',
          'You clicked the button!',
          'success'
        );

        this.setToStorage();
        observer.next();
      } catch (error: any) {
        observer.error(error.message);
      }
    });
  }
  setToStorage(): void {
    console.log('Employee constant: ', this.employeeConstant);
    this.employeeConstant = this.emploList;
    // this.storage.setItem(EMPLO, JSON.stringify(this.emploList));
  }

  // delete data
  remove(firstName: string, lastName: string): Observable<void> {
    return new Observable<void>((observer: Observer<void>): void => {
      try {
        for (let i = 0; i < this.emploList.length; i++) {
          if (
            this.emploList[i].firstName === firstName &&
            this.emploList[i].lastName === lastName
          ) {
            this.emploList.splice(i, 1);
            this.setToStorage();
            observer.next();
          }
        }
      } catch (error: any) {
        observer.error(error.message);
      }
    });
  }

  //method get id
  get(id: string): Observable<employee> {
    return new Observable<employee>((observer: Observer<employee>) => {
      try {
        const employee = this.emploList.find((e) => e.id == id) as employee;
        observer.next(employee);
        console.log(employee);
      } catch (error: any) {
        observer.error(error.message);
      }
    });
  }
}

function makeid(length: number): string {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
