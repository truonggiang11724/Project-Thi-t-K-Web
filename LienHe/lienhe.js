document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.querySelector('.chat-box');
    const inputBox = document.querySelector('.input-box input');
    const sendButton = document.querySelector('.input-box button');

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);

        const messageText = document.createElement('p');
        messageText.textContent = text;

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('time');
        timeSpan.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        messageDiv.appendChild(messageText);
        messageDiv.appendChild(timeSpan);
        chatBox.appendChild(messageDiv);

        // Cuộn xuống cuối cùng của chat box để hiển thị tin nhắn mới nhất
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendButton.addEventListener('click', function() {
        const messageText = inputBox.value.trim();
        if (messageText !== '') {
            appendMessage(messageText, 'user');
            inputBox.value = '';

            // Giả sử chúng ta có một người quản lý trả lời ngay lập tức (phản hồi tự động)
            setTimeout(function() {
                appendMessage('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.', 'manager');
            }, 1000);
        }
    });

    // Gửi tin nhắn khi nhấn phím Enter
    inputBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
