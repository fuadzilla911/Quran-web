// pages/surahs.js
import { getAllSurahs } from '../lib/quranApi';

export async function getStaticProps() {
  const surahs = await getAllSurahs();
  return { props: { surahs } };
}

export default function SurahList({ surahs }) {
  return (
    <div>
      {surahs.data.map(surah => (
        <div key={surah.number}>
          <h3>{surah.englishName} ({surah.name})</h3>
          <p>Ayahs: {surah.numberOfAyahs}</p>
        </div>
      ))}
    </div>
  );
}
