// lib/audioPlayer.js
export function playAyah(recitationUrl) {
  new Audio(recitationUrl).play();
}

// Usage in component:
<button onClick={() => playAyah('https://verses.quran.com/alawsi/001001.mp3')}>
  Play Ayah
</button>
