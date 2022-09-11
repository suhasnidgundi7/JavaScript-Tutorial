StudentDetails = [
  {
    name: "Sumit",
    marks: 80,
    grade: "",

    set SetGrade(Grade) {
      this.grade = Grade;
    },
  },
  {
    name: "Kalpesh",
    marks: 77,
    grade: "",

    set SetGrade(Grade) {
      this.grade = Grade;
    },
  },
  {
    name: "Amit",
    marks: 88,
    grade: "",

    set SetGrade(Grade) {
      this.grade = Grade;
    },
  },
  {
    name: "Tejas",
    marks: 93,
    grade: "",

    set SetGrade(Grade) {
      this.grade = Grade;
    },
  },
  {
    name: "Abhishek",
    marks: 65,
    grade: "",

    set SetGrade(Grade) {
      this.grade = Grade;
    },
  },
];

function SortByGrade() {
  StudentDetails.map((item, index) => {
    if (item.marks <= 60) {
      item.SetGrade = "E";
    } else if (item.marks <= 70) {
      item.SetGrade = "D";
    } else if (item.marks <= 80) {
      item.SetGrade = "C";
    } else if (item.marks <= 90) {
      item.SetGrade = "B";
    } else if (item.marks <= 100) {
      item.SetGrade = "A";
    }
  });

  console.table(StudentDetails)

}

SortByGrade();
