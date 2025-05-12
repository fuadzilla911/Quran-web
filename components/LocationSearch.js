export default function LocationSearch() {
  const [query, setQuery] = useState('');
  
  const searchHalalPlaces = async () => {
    const res = await fetch(`/api/halal?location=${query}`);
    return await res.json();
  };
  
  return (
    <input 
      type="text" 
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Find halal restaurants..."
    />
  )
}
