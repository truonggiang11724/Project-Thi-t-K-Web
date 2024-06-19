function toggleNavbar() {
    var navbarLinks_L = document.getElementById("navbarLinks");
    navbarLinks_L.classList.toggle("show");
}

// Bút bấm trở về đầu trang
const mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Cài đặt select địa điểm xuất phát
const provinceDistrictMap = {
  hanoi: [
      { value: 'caugiay', text: 'Cầu Giấy' },
      { value: 'dongda', text: 'Đống Đa' },
      { value: 'hadong', text: 'Hà Đông' }
  ],
  tphcm: [
      { value: '1', text: 'Quận 1' },
      { value: '2', text: 'Quận 2' },
      { value: '3', text: 'Quận 3' }
  ],
  hatinh: [
      { value: 'thanhpho', text: 'Thành phố Hà Tĩnh' },
      { value: 'huongson', text: 'huyện Hương Sơn' },
      { value: 'nghixuan', text: 'huyện Nghi Xuân' }
  ],
  nghean: [
    { value: 'thanhpho', text: 'Thành phố Vinh' },
    { value: 'dienchau', text: 'huyện Diễn Châu' },
    { value: 'quyhop', text: 'huyện Quỳ Hợp' }
  ],
  thanhhoa: [
    { value: 'thanhphoth', text: 'Thành phố Thanh Hóa' },
    { value: 'thanhphoss', text: 'Thành phố Sầm Sơn' },
    { value: 'quangxuong', text: 'huyện Quảng Xương' }
  ]
};

document.getElementById('Province').addEventListener('change', function() {
  const province = this.value;
  const districtSelect = document.getElementById('District');
  
  // Xóa các lựa chọn hiện tại của quận/huyện
  while (districtSelect.options.length > 1) {
      districtSelect.remove(1);
  }

  // Nếu tỉnh/thành phố không được chọn, kết thúc hàm
  if (!province) return;

  // Thêm các lựa chọn quận/huyện tương ứng
  const districts = provinceDistrictMap[province];
  districts.forEach(district => {
      const option = document.createElement('option');
      option.value = district.value;
      option.text = district.text;
      districtSelect.add(option);
  });
});

// Phần comment

document.getElementById('comment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var comment = document.getElementById('comment').value;

  if (name && comment) {
      var commentSection = document.getElementById('comments');
      var newComment = document.createElement('div');
      newComment.classList.add('comment');
      
      var commentHTML = `
          <div class="comment-content">
              <h4>${name}</h4>
              <p>${comment}</p>
          </div>
      `;
      newComment.innerHTML = commentHTML;
      commentSection.appendChild(newComment);

      // Reset the form
      document.getElementById('comment-form').reset();
  }
});
// Tham khảo giá

const thamkhaogia = document.getElementById("price");
    function onthamkhao(){
      thamkhaogia.style.display= "block";
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      });  
      
    } 
