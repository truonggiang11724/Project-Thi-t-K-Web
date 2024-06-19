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