// ApiService.ts
const API_BASE_URL = 'http://localhost:3001/api'; // Twój adres backendu

async function apiRequest(path: string, method: string = 'GET', data?: any) {
  const url = `${API_BASE_URL}${path}`;

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // Dodaj inne nagłówki, jeśli są potrzebne
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export default apiRequest;
