// problem
// khong co so cua thang nam
// muon xin so cua thang nam
// goi cho thang khac
// hoi so dien thoai cua thang nam
// thang nay phai co thoi gian de tim

const getPhoneNumber = (_) => {
  let phoneNumber;

  console.log("Cho tao xin so thang nam");

  console.log("Thang ban dang tim so thang nam");

  setTimeout(() => {
    phoneNumber = 12345;
    console.log("Day da tim duoc so thang nam.  ");
  }, 1000);

  // cach sua sai
  setTimeout(() => {
    console.log(phoneNumber);
  }, 1500);
};

getPhoneNumber();

// tren thuc te ta khong biet duoc request no ton mat bao nhieu thoi gian
// cach sua tren la sai
