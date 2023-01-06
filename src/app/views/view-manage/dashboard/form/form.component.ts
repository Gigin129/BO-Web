import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { convertFormatRp, formList } from 'src/app/constant/employee';
import { employee } from 'src/app/shared/interface/employee.model';
import { employeeService } from 'src/app/shared/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  emplo?: employee;
  listForm: any = [];
  maxDate: string = this.dateToString(new Date());
  basicSalaryFormat!: string;
  imageSrc!: string;
  img!: string;
  constructor(
    private EmployeeService: employeeService,
    private router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listForm = formList;
    this.route.params.subscribe({
      next: (params: Params) => {
        const { id } = params;
        this.EmployeeService.get(id).subscribe({
          next: (emplo: employee) => {
            this.emplo = emplo;
            this.basicSalaryFormat = emplo.tesSalary;
            this.setFormValue(this.emplo);
            this.changeConvertRp();
          },
        });
      },
    });
  }

  employeeGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required]),
    tesSalary: new FormControl('', [Validators.required]),
    // basicSalary: new FormControl('', [
    //   Validators.required,
    //   // Validators.pattern('^[0-9]*$'),
    // ]),
    status: new FormControl('', [Validators.required]),
    group: new FormControl('', [Validators.required]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    image: new FormControl(''),
  });

  // validation
  isFormValid(employeeField: string): boolean {
    const control: AbstractControl = this.employeeGroup.get(
      employeeField
    ) as AbstractControl;
    return control && control.invalid && (control.dirty || control.touched);
  }

  onSubmit() {
    //mengambil variable dri formgroup
    const {
      id,
      username,
      firstName,
      lastName,
      email,
      birthDate,
      tesSalary,
      status,
      group,
      description,
      image,
    } = this.employeeGroup.value;

    const birthdate = this.employeeGroup.controls['birthDate'].value;
    this.employeeGroup.controls['image']?.setValue(this.imageSrc);
    this.employeeGroup.controls['birthDate'].setValue(new Date(birthdate));
    console.log('Form: ', this.employeeGroup.value);
    if (this.employeeGroup.valid) {
      this.EmployeeService.save(this.employeeGroup.value).subscribe();
      this.onFormReset();
      this.router.navigateByUrl('view');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Masukkan data dengan benar',
      });
    }
  }

  onFormReset() {
    this.employeeGroup.reset();
  }

  emailValidation(email: any): boolean {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  ngOnChanges(): void {
    this.setFormValue(this.emplo as employee);
  }

  setFormValue(employee: employee) {
    console.log(employee.image);
    if (employee) {
      this.employeeGroup.controls['id']?.setValue(employee.id);
      this.employeeGroup.controls['username']?.setValue(employee.username);
      this.employeeGroup.controls['firstName']?.setValue(employee.firstName);
      this.employeeGroup.controls['lastName']?.setValue(employee.lastName);
      this.employeeGroup.controls['email']?.setValue(employee.email);
      this.employeeGroup.controls['birthDate']?.setValue(
        this.dateToString(employee.birthDate)
      );
      this.employeeGroup.controls['tesSalary']?.setValue(employee.tesSalary);
      // this.employeeGroup.controls['basicSalary']?.setValue(employee.lastName);
      // console.log(employee.basicSalary);
      this.employeeGroup.controls['status']?.setValue(employee.status);
      this.employeeGroup.controls['group']?.setValue(employee.group);
      this.employeeGroup.controls['description']?.setValue(
        employee.description
      );
      this.img = employee.image;
    }
  }
  dateToString(date: Date): string {
    return format(new Date(date), 'yyyy-MM-dd', { locale: id });
  }

  readPhotoUrl(file: any): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  eventImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.readPhotoUrl(file);
    }
  }

  changeConvertRp(): void {
    if (this.basicSalaryFormat.includes(',')) {
      this.basicSalaryFormat = this.basicSalaryFormat.slice(
        0,
        this.basicSalaryFormat.lastIndexOf(',')
      );
    }
    const basicSalaryRp = this.basicSalaryFormat.replace(/\D/g, '');
    this.employeeGroup.controls['tesSalary']?.setValue(
      (this.basicSalaryFormat = convertFormatRp(basicSalaryRp))
      // this.convertFormatRp(Number(basicSalaryRp))
    );
  }

  // convertFormatRp(amount: number): string {
  //   return (this.basicSalaryFormat = new Intl.NumberFormat('id-ID', {
  //     style: 'currency',
  //     currency: 'IDR',
  //   }).format(amount));
  // }
}
