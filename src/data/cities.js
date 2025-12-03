// Popular cities database for autocomplete
export const cities = [
  // Major World Cities
  'New York', 'London', 'Paris', 'Tokyo', 'Dubai', 'Singapore', 'Hong Kong',
  'Sydney', 'Mumbai', 'Delhi', 'Shanghai', 'Beijing', 'Seoul', 'Bangkok',
  'Istanbul', 'Moscow', 'Berlin', 'Madrid', 'Rome', 'Amsterdam', 'Vienna',
  'Zurich', 'Stockholm', 'Copenhagen', 'Oslo', 'Helsinki', 'Prague',
  'Budapest', 'Warsaw', 'Athens', 'Cairo', 'Cape Town', 'Lagos',
  
  // US Cities
  'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio',
  'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth',
  'Columbus', 'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle',
  'Denver', 'Washington', 'Boston', 'El Paso', 'Nashville', 'Detroit',
  'Oklahoma City', 'Portland', 'Las Vegas', 'Memphis', 'Louisville',
  'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento',
  'Kansas City', 'Mesa', 'Atlanta', 'Colorado Springs', 'Raleigh', 'Omaha',
  'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Cleveland', 'Wichita',
  'Arlington', 'New Orleans', 'Bakersfield', 'Tampa', 'Honolulu', 'Anaheim',
  'Aurora', 'Santa Ana', 'St. Louis', 'Riverside', 'Corpus Christi',
  'Pittsburgh', 'Lexington', 'Anchorage', 'Stockton', 'Cincinnati',
  'St. Paul', 'Toledo', 'Newark', 'Greensboro', 'Plano', 'Henderson',
  'Lincoln', 'Buffalo', 'Fort Wayne', 'Jersey City', 'Chula Vista',
  'Orlando', 'St. Petersburg', 'Norfolk', 'Chandler', 'Laredo',
  'Madison', 'Durham', 'Lubbock', 'Winston-Salem', 'Garland', 'Glendale',
  'Hialeah', 'Reno', 'Baton Rouge', 'Irvine', 'Chesapeake', 'Irving',
  'Scottsdale', 'North Las Vegas', 'Fremont', 'Gilbert', 'San Bernardino',
  'Boise', 'Birmingham',
  
  // UK Cities
  'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Sheffield', 'Bristol',
  'Glasgow', 'Leicester', 'Edinburgh', 'Leeds', 'Cardiff', 'Belfast',
  'Newcastle', 'Sunderland', 'Brighton', 'Hull', 'Plymouth', 'Stoke-on-Trent',
  'Wolverhampton', 'Derby', 'Swansea', 'Southampton', 'Salford', 'Aberdeen',
  'Westminster', 'Portsmouth', 'York', 'Peterborough', 'Dundee', 'Lancaster',
  'Oxford', 'Newport', 'Preston', 'St Albans', 'Norwich', 'Chester',
  'Cambridge', 'Salisbury', 'Exeter', 'Gloucester', 'Listen', 'Worcester',
  
  // Canadian Cities
  'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa',
  'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener', 'London', 'Victoria',
  'Halifax', 'Oshawa', 'Windsor', 'Saskatoon', 'St. Catharines', 'Regina',
  'Kelowna', 'Barrie', 'Sherbrooke', 'Guelph', 'Kanata', 'Abbotsford',
  'Trois-Rivières', 'Kingston', 'Milton', 'Moncton', 'White Rock',
  
  // Australian Cities
  'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle',
  'Canberra', 'Sunshine Coast', 'Wollongong', 'Hobart', 'Geelong', 'Townsville',
  'Cairns', 'Darwin', 'Toowoomba', 'Ballarat', 'Bendigo', 'Albury', 'Launceston',
  'Mackay', 'Rockhampton', 'Bunbury', 'Bundaberg', 'Coffs Harbour', 'Wagga Wagga',
  
  // European Cities
  'Barcelona', 'Milan', 'Munich', 'Hamburg', 'Naples', 'Turin', 'Palermo',
  'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen',
  'Leipzig', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Duisburg',
  'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Mannheim',
  'Augsburg', 'Wiesbaden', 'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig',
  'Chemnitz', 'Kiel', 'Aachen', 'Halle', 'Magdeburg', 'Freiburg', 'Krefeld',
  'Lübeck', 'Mainz', 'Erfurt', 'Rostock', 'Kassel', 'Hagen', 'Potsdam',
  'Saarbrücken', 'Hamm', 'Mülheim', 'Ludwigshafen', 'Leverkusen', 'Oldenburg',
  
  // Asian Cities
  'Bangkok', 'Jakarta', 'Manila', 'Kuala Lumpur', 'Ho Chi Minh City', 'Hanoi',
  'Yangon', 'Phnom Penh', 'Vientiane', 'Bandar Seri Begawan', 'Dili',
  'Colombo', 'Kathmandu', 'Thimphu', 'Male', 'Islamabad', 'Karachi', 'Lahore',
  'Dhaka', 'Chittagong', 'Kabul', 'Tehran', 'Isfahan', 'Mashhad', 'Tabriz',
  'Bhubaneswar', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad',
  'Baghdad', 'Basra', 'Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Kuwait City',
  'Doha', 'Manama', 'Muscat', 'Abu Dhabi', 'Sharjah', 'Amman', 'Jerusalem',
  'Tel Aviv', 'Beirut', 'Damascus', 'Aleppo', 'Ankara', 'Izmir', 'Bursa',
  'Antalya', 'Adana', 'Gaziantep', 'Konya', 'Mersin', 'Kayseri', 'Eskişehir',
  
  // African Cities
  'Johannesburg', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein',
  'East London', 'Pietermaritzburg', 'Witbank', 'Welkom', 'Kimberley',
  'Polokwane', 'Nelspruit', 'George', 'Rustenburg', 'Potchefstroom',
  'Klerksdorp', 'Middelburg', 'Upington', 'Oudtshoorn', 'Paarl',
  'Stellenbosch', 'Worcester', 'Hermanus', 'Mossel Bay', 'Knysna',
  
  // South American Cities
  'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza',
  'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Goiânia', 'Belém',
  'Porto Alegre', 'Guarulhos', 'Campinas', 'Nova Iguaçu', 'Maceió',
  'São Luís', 'Duque de Caxias', 'Natal', 'Teresina', 'São Bernardo do Campo',
  'Campo Grande', 'Jaboatão dos Guararapes', 'Osasco', 'Santo André',
  'João Pessoa', 'Contagem', 'São José dos Campos', 'Ribeirão Preto',
  'Uberlândia', 'Sorocaba', 'Aracaju', 'Feira de Santana', 'Cuiabá',
  'Joinville', 'Aparecida de Goiânia', 'Londrina', 'Juiz de Fora', 'Ananindeua',
  'Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'San Miguel de Tucumán',
  'Mar del Plata', 'Salta', 'Santa Fe', 'San Juan', 'Resistencia', 'Santiago del Estero',
  'Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Huancayo', 'Piura', 'Iquitos',
  'Cusco', 'Chimbote', 'Tacna', 'Ica', 'Juliaca', 'Sullana', 'Chincha Alta',
  'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta',
  'Bucaramanga', 'Pereira', 'Santa Marta', 'Ibagué', 'Pasto', 'Manizales',
  'Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta', 'Temuco',
  'Rancagua', 'Talca', 'Arica', 'Chillán', 'Iquique', 'Los Ángeles',
  'Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto', 'Maracay', 'Ciudad Guayana',
  'Barcelona', 'Maturín', 'Puerto La Cruz', 'Turmero', 'Ciudad Bolívar', 'Mérida',
  'Quito', 'Guayaquil', 'Cuenca', 'Santo Domingo', 'Machala', 'Durán',
  'Manta', 'Portoviejo', 'Ambato', 'Riobamba', 'Loja', 'Esmeraldas'
];

// Function to search cities based on input
export const searchCities = (query, limit = 5) => {
  if (!query || query.length < 2) return [];
  
  const lowercaseQuery = query.toLowerCase();
  
  // First, find cities that start with the query
  const startsWithMatches = cities.filter(city => 
    city.toLowerCase().startsWith(lowercaseQuery)
  );
  
  // Then, find cities that contain the query but don't start with it
  const containsMatches = cities.filter(city => 
    city.toLowerCase().includes(lowercaseQuery) && 
    !city.toLowerCase().startsWith(lowercaseQuery)
  );
  
  // Combine and limit results
  return [...startsWithMatches, ...containsMatches].slice(0, limit);
}; 