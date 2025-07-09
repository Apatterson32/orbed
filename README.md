# Voice-Reactive Orb (2D MVP)

A real-time, voice-reactive orb that visually responds to user voice input. This project is an MVP focused on a 2D implementation using JavaScript, HTML, and the Web Audio API. The orb's properties (such as size and color) change dynamically based on the user's voice, creating an engaging visual experience for AI assistants or interactive web applications.

---

## Features

- **Real-Time Audio Visualization**: The orb reacts instantly to microphone input.  
- **2D Canvas Rendering**: Lightweight and browser-compatible.  
- **Dynamic Visual Feedback**: Orb size and color change with voice volume and intensity.  
- **Modular & Extensible**: Clean structure for future enhancements (e.g., 3D, frequency analysis).  

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)  
- Microphone access  

### Installation

Clone the repository:

```bash
git clone https://github.com/apatterson32/orbed.git
cd orbed
```

Open the project:

- Simply open `index.html` in your browser.

---

## Usage

1. Allow microphone access when prompted.  
2. Speak into your microphone and watch the orb react in real time.  
3. Customize orb behavior by editing `main.js`.

---

## Project Structure

| File/Folder     | Description                          |
|----------------|--------------------------------------|
| `index.html`   | Main HTML entry point                |
| `main.js`      | Core JavaScript logic (audio + orb)  |
| `style.css`    | Basic styling for the canvas         |
| `README.md`    | Project documentation                |

---

## How It Works

1. **Audio Capture**: Uses the Web Audio API to access the user's microphone.  
2. **Audio Analysis**: Analyzes real-time volume and frequency data.  
3. **Orb Visualization**: Renders and animates a 2D orb on an HTML `<canvas>`, updating its properties based on audio input.

---

## Roadmap

- ✅ 2D MVP: Volume-reactive orb  
- ⏳ Add frequency-based color changes  
- ⏳ 3D orb using Three.js  
- ⏳ Visual states for listening/thinking/speaking  
- ⏳ Customizable themes  

---

## Resources

- [MDN Web Audio API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)  
- [Dynamic UI for AI Voice Assistant (YouTube)](https://www.youtube.com/)  
- [voice-change-o-matic (GitHub)](https://github.com/mdn/voice-change-o-matic)

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the **MIT License**.
