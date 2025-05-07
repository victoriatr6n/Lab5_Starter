// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

function init() {
  let voices = [];

  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") return;

    voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById("voice-select");
    voiceSelect.innerHTML = '';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  function speak() {
    const text = document.getElementById("text-to-speak").value;
    const utterance = new SpeechSynthesisUtterance(text);

    const voiceSelect = document.getElementById("voice-select");
    const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute("data-name");

    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    synth.cancel();
    document.querySelector("img").src = "assets/images/smiling-open.png"

    utterance.onend = () => {
      document.querySelector("img").src = "assets/images/smiling.png";
    };
    synth.speak(utterance);
  }

  populateVoiceList();

  if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  document.querySelector("button").addEventListener("click", speak);
}