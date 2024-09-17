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

export const RegisterUser = async (body) => {
  return fetch(`${API_ENDPOIND}/register`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });
};

export const Logout = async (token) => {
  return fetch(`${API_ENDPOIND}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}` // Asegúrate de que el token se envía aquí correctamente
    }
  });
};

export const getInfoFromUser = async (path, token) => {
  return fetch(`${API_ENDPOIND}/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
};


export const ListItems = (path, pageNumber, token) => {
  console.log(`${API_ENDPOIND}/shop/${path}/${pageNumber}`)
  return (
    fetch(`${API_ENDPOIND}/shop/${path}/${pageNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
  )
}

// export const SendEmailToResetPassword = async (body) => {
//     return fetch(`${API_ENDPOIND}/shop/auth/recover`, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         }
//     });
// };

// export const ResetPassword = async (body, token) => {
//     return fetch(`${API_ENDPOIND}/shop/auth/reset/${token}`, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         }
//     });
// };

export const ListPedidosByClient = (path, pageNumber, client, token) => {
  return (
    fetch(`${API_ENDPOIND}/shop/${path}/${client}/${pageNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
  )
}

export const List = (path, token) => {
  return (
    fetch(`${API_ENDPOIND}/shop/${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
  )
}

export const Get = (path, code, token) => {
  return (
    fetch(`${API_ENDPOIND}/shop/${path}?termino=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
  )
}

export const GetById = (path, code, token) => {
  return (
    fetch(`${API_ENDPOIND}/shop/${path}/${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
  )
}

// export const GetReport = (start, end, path, signal, module) => fetch(`${API_ENDPOIND}/shop/${path}/${start}/${end}`, {
//     method: 'GET',
//     signal,
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Module': module,
//         Authorization: `Bearer ${getCookie('token')}`
//     }
// })

export const Submit = async (body, path, token) => {
  return fetch(`${API_ENDPOIND}/shop/${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
};

export const Edit = async (body, path, code, token) => {
  return fetch(`${API_ENDPOIND}/shop/${path}/${code}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
};

export const Delete = async (code, path, token) => {
  return fetch(`${API_ENDPOIND}/shop/${path}/${code}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
};

