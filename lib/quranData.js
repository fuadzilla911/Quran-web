// pages/api/quran/[surahId].js
export default async function handler(req, res) {
  const { surahId } = req.query;
  const apiRes = await fetch(`https://api.alquran.cloud/v1/surah/${surahId}/ar.alafasy`);
  const data = await apiRes.json();
  res.status(200).json(data);
}
