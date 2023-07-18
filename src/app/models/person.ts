export class Person {
    id?: number;
    title: string;
    phone: number;
    email: string;
    designation: string
  
    constructor(id: number = null, title: string = '', phone: number = 0, email: string = '', designation: string = '') {
      this.id = id;
      this.title = title;
      this.phone = phone;
      this.email = email;
      this.designation = designation;
    }
  }
  