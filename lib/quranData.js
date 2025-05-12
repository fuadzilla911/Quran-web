// lib/quranData.js
export async function getSurahs() {
  const res = await fetch('https://api.alquran.cloud/v1/surah');
  return res.json();
}
