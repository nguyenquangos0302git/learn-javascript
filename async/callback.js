// callback function
// cu phap: function(callback): callback la 1 function

// const getPhoneNumber = (callback) => {
//   let phoneNumber;

//   console.log("Cho tao xin so thang nam");

//   console.log("Thang ban dang tim so thang nam");

//   setTimeout(() => {
//     phoneNumber = 12345;
//     console.log("Day da tim duoc so thang nam.  ");
//     callback(phoneNumber);
//   }, 1000);
// };

// const callback = (phoneNumber) => {
//   console.log(phoneNumber);
// };

// getPhoneNumber();

// van de tren minh da duoc giai quyet
// tuy nhien co 1 van de moi
// van de la khi ta co qua nhieu callback functions

// vi du sau khi co so dien thoai roi ma dien thoai het pin => phai di sac pin
// de can goi cho thang nao ta can phai co 3 hanh dong:
// step 1: xin so
// step 2: sac pin
// step 3: goi cho thang nam

const xinSoDT = (sacPin) => {
  let phoneNumber;

  console.log("Cho tao xin so thang nam");

  console.log("Thang ban dang tim so thang nam");

  setTimeout(() => {
    phoneNumber = 12345;
    console.log("Day da tim duoc so thang nam.  ");
    sacPin(phoneNumber, goichoNam);
  }, 1000);
};

const sacPin = (phoneNumber, goichoNam) => {
  console.log("Dang sac pin");
  setTimeout(() => {
    console.log("sac pin xong");
    goichoNam(phoneNumber);
  }, 2000);
};

const goichoNam = (phoneNumber) => {
  console.log("Dang goi cho nam");
};

xinSoDT(sacPin);

// co the thay ta vo cung kho khan khi su dung callback long callback nhu the
// rat de roi
// rat kho debug

// => promise
