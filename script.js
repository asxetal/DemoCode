document.addEventListener("DOMContentLoaded", function() {
  // Hiển thị loading skeleton trong 2 giây
  setTimeout(function() {
      document.getElementById("loading").style.display = "none"; // Ẩn skeleton
      document.getElementById("content").style.display = "block"; // Hiển thị nội dung
  }, 2000); // Thay đổi thời gian theo ý muốn
});
