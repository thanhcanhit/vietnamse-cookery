function textToSpeech(text: string) {
	const msg = new SpeechSynthesisUtterance(text);
	// Get voice from device
	const voices = window.speechSynthesis.getVoices();
	// Default device
	msg.voice = voices[0];
	// Play sound
	window.speechSynthesis.speak(msg);
}

export {textToSpeech};