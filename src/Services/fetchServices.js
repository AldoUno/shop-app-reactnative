const API_ENDPOIND = process.env.EXPO_PUBLIC_BASE_URL
const API_VERSION = process.env.EXPO_PUBLIC_VERSION

export const LoginInit = async (body) => {
    return fetch(`${API_ENDPOIND}/login`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
};

export const ListItems = (path, pageNumber, token) => {
  console.log(`${API_ENDPOIND}/shop/${path}/${pageNumber}/10`)
  return (
    fetch(`${API_ENDPOIND}/shop/${path}/${pageNumber}/10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Authorization: `Bearer ${token}`
      }
    })
  )
}
