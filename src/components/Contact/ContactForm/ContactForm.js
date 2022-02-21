import React, { useState, useEffect } from "react";
import axios from "axios";

//import css
import classes from "./ContactForm.module.css";
import classesDark from "./ContactFormDark.module.css";

//import function
import validate from "./ValidateInfo";

//import component
import Logo from "../../Logo/Logo";

//import icons
import * as MdIcons from "react-icons/md";
import Spinner from "../../../assets/images/Spinner.svg";

const ContactForm = (props) => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    branch: "1",
    section: "",
    studentNo: "",
    universityRollNo: "",
    question: "",
    question2: "",
  });

  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  // const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formError, setFormError] = useState(<div></div>);
  const [postReq, setPostReq] = useState(false);

  const valueChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const { submitContact } = props;

    if (Object.keys(errors).length === 0 && isSubmit) {
      submitContact();
    }
  }, [errors, props, isSubmit]);

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(values));

    if (Object.keys(validate(values)).length === 0) {
      setPostReq(true);
      axios
        .get(`https://admin-dsc.herokuapp.com/candidates?email=${values.email}`)
        .then(function (response) {
          // handle success
          if (response.data.length === 0) {
            validateStudentNo();
          } else {
            setPostReq(false);
            setFormError(
              <div className={styles.error}>
                <MdIcons.MdError />
                <p>Email Already Registered</p>
              </div>
            );
          }
        })
        .catch(function (error) {
          // handle error
          setPostReq(false);
          setFormError(
            <div className={styles.error}>
              <MdIcons.MdError />
              <p>Error Ocurred</p>
            </div>
          );
        });
    }
  };

  const validateStudentNo = () => {
    axios
      .get(
        `https://admin-dsc.herokuapp.com/candidates?studentNo=${values.studentNo}`
      )
      .then(function (response) {
        // handle success
        if (response.data.length === 0) {
          validateUniversityRollNo();
        } else {
          setPostReq(false);
          setFormError(
            <div className={styles.error}>
              <MdIcons.MdError />
              <p>Student No. Already Registered</p>
            </div>
          );
        }
      })
      .catch(function (error) {
        // handle error
        setPostReq(false);
        setFormError(
          <div className={styles.error}>
            <MdIcons.MdError />
            <p>Error Ocurred</p>
          </div>
        );
      });
  };

  const validateUniversityRollNo = () => {
    axios
      .get(
        `https://admin-dsc.herokuapp.com/candidates?universityRollNo=${values.universityRollNo}`
      )
      .then(function (response) {
        // handle success
        if (response.data.length === 0) {
          submitData();
        } else {
          setPostReq(false);
          setFormError(
            <div className={styles.error}>
              <MdIcons.MdError />
              <p>UnivRollNo. Already Registered</p>
            </div>
          );
        }
      })
      .catch(function (error) {
        // handle error
        setPostReq(false);
        setFormError(
          <div className={styles.error}>
            <MdIcons.MdError />
            <p>Error Ocurred</p>
          </div>
        );
      });
  };

  const submitData = () => {
    let data = values;
    setPostReq(true);
    axios
      .post("https://admin-dsc.herokuapp.com/candidates", data, {
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      })
      .then((res) => {
        console.log("successfully registered");
        setPostReq(false);
        console.log(res);
        setIsSubmit(true);
      })
      .catch((err) => {
        setPostReq(false);
        console.log(err);
        console.log(err.response);
        setFormError(
          <div className={styles.error}>
            <MdIcons.MdError />
            <p>Error Ocurred</p>
          </div>
        );
      });
  };

  return (
    <div className={styles.formContentLeft}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.logo}>
          <Logo theme={props.theme} />
        </div>
        <h1>Register</h1>
        <div className={styles.formFields}>
          <div className={styles.formInputs}>
            <label htmlFor="fullName" className={styles.formLabel}>
              Full Name
            </label>
            <div>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Full Name"
                className={styles.formInput}
                value={values.fullName}
                onChange={valueChangeHandler}
              />
              {errors.fullName && <p>{errors.fullName}</p>}
            </div>
          </div>
          <div className={styles.formInputs}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className={styles.formInput}
                value={values.email}
                onChange={valueChangeHandler}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
          </div>
          <div className={styles.formInputs}>
            <label htmlFor="branch" className={styles.formLabel}>
              Branch
            </label>
            <select
              id="branch"
              name="branch"
              value={values.branch}
              onChange={valueChangeHandler}
            >
              <option value="CSE">CSE</option>
              <option value="CS">CS</option>
              <option value="CSE (AI & ML)">CSE (AI & ML)</option>
              <option value="CSE (DS)">CSE (DS)</option>
              <option value="IT">IT</option>
              <option value="CS/IT">CS/IT</option>
              <option value="EEE">EEE</option>
              <option value="ECE">ECE</option>
              <option value="EIE">EIE</option>
              <option value="CE">CE</option>
              <option value="ME">ME</option>
            </select>
          </div>
          <div className={styles.formInputs}>
            <label htmlFor="section" className={styles.formLabel}>
              Section
            </label>
            <div>
              <input
                id="section"
                type="text"
                name="section"
                placeholder="Enter your Section"
                className={styles.formInput}
                value={values.section}
                onChange={valueChangeHandler}
              />
              {errors.section && <p>{errors.section}</p>}
            </div>
          </div>
          <div className={styles.formInputs}>
            <label htmlFor="student_number" className={styles.formLabel}>
              Student Number
            </label>
            <div>
              <input
                id="student_number"
                type="text"
                name="studentNo"
                placeholder="Student Number"
                className={styles.formInput}
                value={values.studentNo}
                onChange={valueChangeHandler}
              />
              {errors.studentNo && <p>{errors.studentNo}</p>}
            </div>
          </div>
          <div className={styles.formInputs}>
            <label
              htmlFor="university_roll_number"
              className={styles.formLabel}
            >
              University Roll Number
            </label>
            <div>
              <input
                id="university_roll_number"
                type="text"
                name="universityRollNo"
                placeholder="University Roll Number"
                className={styles.formInput}
                value={values.universityRollNo}
                onChange={valueChangeHandler}
              />
              {errors.universityRollNo && <p>{errors.universityRollNo}</p>}
            </div>
          </div>
          <div className={styles.formInputs}>
            <label htmlFor="question" className={styles.formLabel}>
              Github Profile Link
            </label>
            <div>
              <input
                id="question"
                type="text"
                name="question"
                placeholder="Enter Link Here (if any)"
                className={styles.formInput}
                value={values.question}
                onChange={valueChangeHandler}
              />
              {errors.question && <p>{errors.question}</p>}
            </div>
          </div>
          <div className={styles.formInputs}>
            <label htmlFor="question2" className={styles.formLabel}>
              LinkedIn Profile Link
            </label>
            <div>
              <input
                id="question2"
                type="text"
                name="question2"
                placeholder="Enter Link Here (if any)"
                className={styles.formInput}
                value={values.question2}
                onChange={valueChangeHandler}
              />
              {errors.question2 && <p>{errors.question2}</p>}
            </div>
          </div>
        </div>
        {formError}
        {postReq ? (
          <button className={styles.formInputSpinnerBtn} type="submit">
            <img src={Spinner} alt="spinner" height="19px" />
          </button>
        ) : (
          <button className={styles.formInputBtn} type="submit">
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
