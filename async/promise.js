// promise => loi hua: co the lam duoc hoac khong lam duoc
// trong truong hop nay:
// lam duoc : co so thang nam
// khong lam duoc : khong co so thang nam

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
      isSuccess = true;
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

xinSoDT()
  .then((soDt) => {
    sacPin(soDt)
      .then((soDt) => {
        goichoNam(soDt);
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));
