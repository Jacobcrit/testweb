function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  
  if (userText === "") return;
  
  const userBubble = document.createElement("div");
  userBubble.className = "bubble user";
  userBubble.textContent = userText;
  chatBox.appendChild(userBubble);
  
  const botBubble = document.createElement("div");
  botBubble.className = "bubble bot";
  botBubble.textContent = generateBotResponse(userText);
  chatBox.appendChild(botBubble);
  
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(text) {
  const lower = text.toLowerCase();
  if (lower.includes("sayang")) return "Iya sayanggg 😚💞 aku di sini kok!";
  if (lower.includes("kangen")) return "Awww aku juga kangen bangettt 😭💘";
  if (lower.includes("cape") || lower.includes("capek")) return "Jangan cape-cape yaa, sini peluk dulu 🫂💕";
  return "Hehe aku dengerin kamu kok, ceritaa terus yaa 🤗🌸";
}