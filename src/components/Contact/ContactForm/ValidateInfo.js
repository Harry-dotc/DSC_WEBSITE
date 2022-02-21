export default function validateInfo(values) {
  let errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.section) {
    errors.section = "Enter Section";
  } else if (!/^\d+$/.test(values.section)) {
    errors.section = "Invalid! Number only";
  }

  if (!values.studentNo) {
    errors.studentNo = "Enter Student Number";
  } else if (values.studentNo.length !== 7) {
    errors.studentNo = "Student Number should be of 7 digits";
  } else if (!/^\d+$/.test(values.studentNo)) {
    errors.studentNo = "Invalid! Numbers only";
  }

  if (!values.universityRollNo) {
    errors.universityRollNo = "Enter University Roll Number";
  } else if (
    values.universityRollNo.length !== 13 &&
    values.universityRollNo.length !== 10
  ) {
    errors.universityRollNo = "Invalid University Roll Number";
  } else if (!/^\d+$/.test(values.universityRollNo)) {
    errors.universityRollNo = "Invalid! Numbers only";
  }

  return errors;
}
