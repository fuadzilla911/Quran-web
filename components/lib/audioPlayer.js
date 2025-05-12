export function playAyah(ayahId) {
  const audio = new Audio(`https://verses.quran.com/${ayahId}.mp3`);
  audio.play();
}
