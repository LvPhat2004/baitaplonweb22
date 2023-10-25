function kiemTraSoDienThoai() {
  var soDienThoai = document.getElementById("soDienThoai").value;
  var pattern = /^[0-9]{10}$/; // Định dạng số điện thoại: 10 chữ số

  if (!pattern.test(soDienThoai)) {
      alert("Số điện thoại không đúng định dạng. Vui lòng nhập lại.");
      return false; // Ngăn form được submit nếu số điện thoại không hợp lệ
  } else {
      alert("Đăng ký thành công!"); // Display a success message
      // Replace 'success.html' with the URL of the page you want to redirect to
      window.location.href = 'https://trangchu.datpham98.repl.co/';
      return false; // Prevent form submission
  }
}