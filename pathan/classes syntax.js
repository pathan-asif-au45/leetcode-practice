class student {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.tardies = 1;
  }
  fullname() {
    return `your fullname is ${this.firstname} ${this.lastname}`;
  }
  marklate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "you are expelled";
    }
    return `${this.firstname} ${this.lastname} has been late ${this.tardies} times `;
  }
}
let firststudent = new student("aqib", "alvi");
console.log(firststudent.marklate());
