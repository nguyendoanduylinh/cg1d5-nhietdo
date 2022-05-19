let nhap = parseFloat(prompt("Nhap do C"));
if (nhap < -273) {
  alert(`Celsius cannot be lower than -273`);
} else if (nhap >= -273) {
  let newNhietDo = new NhietDo(nhap);
  alert(`Do F la ${newNhietDo.doCF(nhap)}`);
  alert(`Do K la ${newNhietDo.doCK(nhap)}`);
}
