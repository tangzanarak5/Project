var registerUsers = [
    {
      id: "0",
      hn: null,
      cid: "1600100651243",
      prename: "นาย",
      fname: "Ratabhoom",
      lname: "Boongate",
      gender: "ชาย",
      birthday: "0000-00-00 00:00:00",
      nation: "ไทย",
      religion: "พุทธ",
      address: "502/11 ม.10 ต.Nakhonsawantok อ.Maeung นครสวรรค์ 60000 ",
      phone: "0873187545",
      rightname: "ชำระเงินเอง",
      parent_type: "Friend",
      parent_fname: "Thanapas",
      parent_lname: "Laohsinnulak",
      parent_phone: "0873356698",
      register_time: "2017-11-29 13:27:01",
      edit_time: null,
      approve_time: null,
      type: "patient",
      status: "pending",
      avatar: "https://firebasestorage.googleapis.com/v0/b/fir-appproject14.appspot.com/o/uploads%2Fimages%2F1600100651243?alt=media&token=af313a20-2763-4563-9a36-51a20af35530",
      symptom: "Sick"
  },
  {
    id: "1",
    hn: null,
    cid: "1234567890123",
    prename: "นาย",
    fname: "อภินันท์",
    lname: "สิงค์บุตร",
    gender: "ชาย",
    birthday: "28/10/1995 00:00:00",
    nation: "ไทย",
    religion: "พุทธ",
    address: "100-102 ม.10 ต.หนองหญ้าไซ้ อ.เมือง สุพรรณบุรี 60000 ",
    phone: "0898765432",
    rightname: "ชำระเงินเอง",
    parent_type: "แม่",
    parent_fname: "ประพิณพร",
    parent_lname: "หมู่ก้อน",
    parent_phone: "0812345678",
    register_time: "2017-11-29 13:27:01",
    edit_time: null,
    approve_time: null,
    type: "patient",
    status: "pending",
    avatar: "https://firebasestorage.googleapis.com/v0/b/fir-appproject14.appspot.com/o/uploads%2Fimages%2F1600100651243?alt=media&token=af313a20-2763-4563-9a36-51a20af35530",
    symptom: "Sick"
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
