// Quran-web/pages/quran.js
export async function getAllSurahs() {
  const response = await fetch('https://api.alquran.cloud/v1/surah');
  return await response.json();
}

export async function getAyahs(surahNumber) {
  const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`);
  return await response.json();
}
