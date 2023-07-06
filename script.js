"use strict";

// Output Elements
const resultDay = document.querySelector(".output-day");
const resultMonth = document.querySelector(".output-month");
const resultYear = document.querySelector(".output-year");
const submitBtn = document.querySelector(".submit-btn");

// Input Elements
let isValid = false;
const inputDay = document.querySelector(".input-day");
const inputMonth = document.querySelector(".input-month");
const inputYear = document.querySelector(".input-year");

// Error Elements
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    errorDay.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = "";
  }
  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
  }
});

inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    errorMonth.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = "";
  }
  if (+inputMonth.value === 0) {
    isValid = false;
    errorMonth.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorMonth.textContent = "";
  }
});

inputYear.addEventListener("input", (e) => {
  if (+inputYear.value > 2023) {
    errorYear.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorYear.textContent = "";
  }
  if (+inputYear.value === 0) {
    errorYear.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorYear.textContent = "";
  }
});

// Calculate Date
submitBtn.addEventListener("click", function () {
  let inputDayValue = document.querySelector(".input-day").value;
  let inputMonthValue = document.querySelector(".input-month").value;
  let inputYearValue = document.querySelector(".input-year").value;

  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = 1 + date.getMonth();
  let currentYear = date.getFullYear();
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (inputDayValue === "" || inputMonthValue === "" || inputYearValue === "") {
    resultDay.textContent = "--";
    resultMonth.textContent = "--";
    resultYear.textContent = "--";
  } else {
    if (inputDayValue > currentDay) {
      currentDay = currentDay + month[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }

    if (inputMonthValue > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }

    let outputDay = currentDay - inputDayValue;
    let outputMonth = currentMonth - inputMonthValue;
    let outputYear = currentYear - inputYearValue;

    resultDay.innerHTML = outputDay;
    resultMonth.innerHTML = outputMonth;
    resultYear.innerHTML = outputYear;
  }
});
