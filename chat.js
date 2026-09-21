
/* =================================
   FRIEND SEARCH
================================= */

function searchFriends() {

    const input = document
        .getElementById("friendSearch")
        .value
        .toLowerCase();

    const friends = document.querySelectorAll(".friend-card");

    friends.forEach(function(friend) {

        const name = friend
            .getAttribute("data-name")
            .toLowerCase();

        if (name.includes(input)) {
            friend.style.display = "flex";
        } else {
            friend.style.display = "none";
        }

    });
}


/* =================================
   CHAT USER NAME
================================= */

const params = new URLSearchParams(window.location.search);

const friend = params.get("friend");

if (friend && document.getElementById("friendName")) {

    document.getElementById("friendName").innerText = friend;

    document.getElementById("chatAvatar").innerText =
        friend.charAt(0).toUpperCase();

}


/* =================================
   SEND MESSAGE
================================= */

function sendMessage() {

    const input = document.getElementById("messageInput");
    const messages = document.getElementById("messages");

    if (!input || input.value.trim() === "") {
        return;
    }

    const messageText = input.value.trim();

    const message = document.createElement("div");

    message.className = "message sent";

    const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    message.innerHTML = `
        <div class="message-bubble">
            ${messageText}
        </div>

        <small>${currentTime}</small>
    `;

    messages.appendChild(message);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;
}


/* =================================
   ENTER TO SEND
================================= */

const messageInput = document.getElementById("messageInput");

if (messageInput) {

    messageInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            sendMessage();
        }

    });

}


/* =================================
   EMOJI
================================= */

function addEmoji() {

    const input = document.getElementById("messageInput");

    if (input) {

        input.value += " 😊";

        input.focus();

    }
}