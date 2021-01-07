const db = require("./db");
const Query = {
  greeting: () => "Welcome abroad 1/7/2021",
  students: () => db.students.list(),
  studentById: (root, args, context, info) => {
    //   args will contain parameter passed in query
    return db.students.get(args.id);
  },
};
const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + " " + root.lastName;
  },
  college: (root) => {
    return db.colleges.get(root.collegeId);
  },
};
module.exports = { Query, Student };
