var registerUsers = [
  {
    "idCard": "1234567890123",
    "nameTitle": "นาย",
    "name": "อภินันท์",
    "surname": "สิงค์บุตร",
    "gender": "ชาย",
    "birthDay": "28/10/1995",
    "nation": "ไทย",
    "religion": "พุทธ",
    "houseNumber": "100-102",
    "alley": "-",
    "street": "-",
    "swine": "-",
    "locality": "หนองหญ้าไซ้",
    "district": "เมือง",
    "county": "สุพรรณบุรี",
    "postcode": "70000",
    "telephone": "0898765432",
    "medicalEligibilityVerification": "ชำระเอง",
    "symptom": "ขาหัก",
    "nameRelative": "ประพิณพร",
    "surnameRelative": "หมู่ก้อน",
    "contact": "แม่",
    "telephoneRelative": "0812345678",
    "pic": "-"
}
];

exports.findAll = function() {
    return registerUsers;
};

exports.findByid = function (id) {
    for (var i = 0; i < registerUsers.length; i++) {
        if (registerUsers[i].id == id) return registerUsers[i];
    }
};
