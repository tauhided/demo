class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  print() {
    return `${this.name} has not a job yet!!!`
  }
}

class Tauhid extends Person {
  constructor(name, job, location) {
    super(name, job)
    this.name = name;
    this.job = job;
    this.location = location;
  }

  print() {
    return `${this.name} lives in ${this.location}`
  }
}