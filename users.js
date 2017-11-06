var users = [
  {
  "hn": "1234567890",
  "idCard": "1103000080128",
  "nameTitle": "นางสาว",
  "name": "หัตถภรณ์",
  "surname": "ฉายกำเหนิด",
  "gender": "หญิง",
  "birthDay": "26/7/1995",
  "nation": "ไทย",
  "religion": "พุทธ",
  "houseNumber": "C82",
  "alley": "-",
  "street": "-",
  "swine": "-",
  "locality": "พรหมณี",
  "district": "เมือง",
  "county": "นครนายก",
  "postcode": "26001",
  "telephone": "0806355985",
  "medicalEligibilityVerification": "ชำระเอง",
  "symptom": "บวมน้ำ",
  "nameRelative": "ธนภาส",
  "surnameRelative": "เลาหสินนุรักษ์",
  "contact": "ผู้ปกครอง",
  "telephoneRelative": "0806355986",
  "pic": "-"
},
{
  "hn": "1",
  "idCard": "1600100651243",
  "nameTitle": "นาย",
  "name": "รัฐภูมิ",
  "surname": "บุญเกตุ",
  "gender": "ชาย",
  "birthDay": "14/12/1995",
  "nation": "ไทย",
  "religion": "พุทธ",
  "houseNumber": "502/11",
  "alley": "10",
  "street": "-",
  "swine": "-",
  "locality": "นครสรรค์ตก",
  "district": "เมือง",
  "county": "นครสรรค์",
  "postcode": "60000",
  "telephone": "0872187545",
  "medicalEligibilityVerification": "ชำระเอง",
  "symptom": "ภูมิแพ้",
  "nameRelative": "อมรรัตน์",
  "surnameRelative": "จรเขตร์",
  "contact": "แม่",
  "telephoneRelative": "0833421131",
  "pic": "-"
}
];

exports.findAll = function() {
    return users;
};

exports.findByid = function (id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) return users[i];
    }
};
