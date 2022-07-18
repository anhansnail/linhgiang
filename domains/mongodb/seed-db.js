
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Nguyễn Trường Giang",
      parent: {
        father: "Họ Tên Bố",
        mother: "Nguyễn Thuý Nga"
      },
      location: {
        text: "Tống Duy Tân - Hoàn Kiếm - Hà Nội - Việt Nam",
        map: "https://goo.gl/maps/JsqLu6agbbj2APmq7"
      },
      time_start: {
        date: {
          lunar: {
            day: "7",
            month: "8",
            year: "2022"
          },
          day_of_week: "7",
          solar: {
            day: "10",
            month: "08",
            year: "2022"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "MB Bank",
        provider_number: "9971997555555",
        holder_name: "NGUYEN TRUONG GIANG"
      }, {
        provider_name: "Techcombank",
        provider_number: "19034892842011",
        holder_name: "NGUYEN TRUONG GIANG"
      }, {
        provider_name: "Momo",
        provider_number: "0973699999",
        holder_name: "NGUYEN TRUONG GIANG"
      }, {
        provider_name: "Airpay",
        provider_number: "0973699999",
        holder_name: "NGUYEN TRUONG GIANG"
      }],
      email: "minhanhvuongvn.com",
      phone: "0973699999",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    female: {
      name: "Vương Thuỳ Linh",
      parent: {
        father: "Họ Tên Bố",
        mother: "Nguyễn Thị Lê"
      },
      location: {
        text: "Thạch Bàn - Long Biên - Hà Nội - Việt Nam",
        map: "https://goo.gl/maps/JsqLu6agbbj2APmq7"
      },
      time_start: {
        date: {
          lunar: {
            day: "7",
            month: "8",
            year: "2022"
          },
          day_of_week: "7",
          solar: {
            day: "10",
            month: "08",
            year: "2022"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Techcombank",
        provider_number: "19033799999999",
        holder_name: "VUONG THUY LINH"
      }, {
        provider_name: "Techcombank",
        provider_number: "19033799999999",
        holder_name: "VUONG THUY LINH"
      }, {
        provider_name: "Momo",
        provider_number: "09736",
        holder_name: "VUONG THUY LINH"
      }, {
        provider_name: "Airpay",
        provider_number: "0973699999",
        holder_name: "NGUYEN TRUONG GIANG"
      }],
      email: "minhanhvuongvn.com",
      phone: "0985123123",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
