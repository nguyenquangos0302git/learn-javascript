const xinSoDT = () => {
  console.log("goi dien xin so dien thoai thang nam");
  console.log("dang tim ...");

  // resolve: bien dau vao
  // reject: bien dau vao
  // khong thay doi duoc
  const thaoTacTimKiem = new Promise((resolve, reject) => {
    let daTimThay;

    setTimeout(() => {
      daTimThay = true;
      if (daTimThay) {
        let soDt = 123456;
        console.log("Day roi. So cua no la: " + soDt);
        resolve(soDt); // return data ta muon tra lai
      } else {
        reject("Tao khong co so thang nam"); // loi ta muon tra lai
      }
    }, 1000);
  });

  return thaoTacTimKiem;
};

const sacPin = (soDt) => {
  console.log("Dang sac pin ...");

  const dangSacPin = new Promise((resolve, reject) => {
    let isSuccess;

    setTimeout(() => {
      isSuccess = false;
      if (isSuccess) {
        console.log("Sac pin day");
        resolve(soDt);
      } else {
        reject("Sac pin that bai");
      }
    }, 1000);
  });

  return dangSacPin;
};

const goichoNam = (data) => console.log(data);

// hanh dong
const handDong = async () => {
  try {
    let sdt = await xinSoDT();
    sdt = await sacPin(sdt);
    goichoNam(sdt);
  } catch (error) {
    console.log(error);
  }
};

handDong();
