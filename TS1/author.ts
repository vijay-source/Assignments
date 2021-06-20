type Author = {
  authorName: name | string;
  age: Number;
  biography: String;
  email?: String;
};

type name = {
  firstName: String;
  middleName?: String;
  lastName: String;
};

const author1: Author = {
  authorName: {
    firstName: "Vivek",
    middleName: "Dutta",
    lastName: "Mishra",
  },
  age: 30,
  biography: "A Good Author who is expert in IT technologies",
  email: "vivek@gmail.com",
};

const author2: Author = {
  authorName: "chetan Bhagat",
  age: 40,
  biography: "A Good Author who wrotes good books",
  email: "chetanBhagat@gmail.com",
};

const author3: Author = {
  authorName: {
    firstName: "Bhanu",
    middleName: "Prakash",
    lastName: "Boligonda",
  },
  age: 23,
  biography: "A Author who never read books",
  email: "bhanu@gmail.com",
};

const authors: any = [author1, author2, author3];

// let authorNames: string[] = [];

let authorNames = authors.map((author: any) => {
  // console.log(typeof author.authorName);
  if (typeof author.authorName === "string") {
    return author.authorName;
  } else {
    if (!author.authorName.middleName) {
      return author.authorName.firstName + " " + author.authorName.lastName;
    } else {
      return (
        author.authorName.firstName +
        " " +
        author.authorName.middleName +
        " " +
        author.authorName.lastName
      );
    }
  }
});

console.log("authorNames ", authorNames);

// let author: Author = {
//   name: "Vivek Dutta Mishra",
//   age: 40,
//   biography: "An IT lead who can write some good books",
// };

// author.email = "vivek@gmail.com";

// author.age = 45;

// delete author.age;

// console.log("author", author);
