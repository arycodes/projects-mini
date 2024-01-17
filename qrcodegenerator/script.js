var qrcode = new QRCode("qrcode", {
    text: "https://www.example.com",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

document.getElementById('inputText').addEventListener('input', function (e) {
    qrcode.clear();
    qrcode.makeCode(e.target.value);
});
