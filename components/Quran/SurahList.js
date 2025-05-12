export default function SurahList({ surahs }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {surahs.map(surah => (
        <div key={surah.id} className="p-4 border rounded-lg">
          <h3>{surah.name}</h3>
          <p>Ayahs: {surah.ayahCount}</p>
        </div>
      ))}
    </div>
  )
}
