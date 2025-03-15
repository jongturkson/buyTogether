// src/api/api.js
const API_BASE_URL = 'https://rrn24.techchantier.site/buy-together-api/public/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
    };
  };
  return {
      'Accept': 'application/json',
  };
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `API request failed with status ${response.status}`);
  }
  if (response.status === 204) return null; // No Content
  return response.json();
};

// User Authentication
export const registerUser = async (userData) => {
  const formData = new FormData();
  Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
  });

  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
    body: formData,
  });
  return handleResponse(response);
};

// Log in an existing user
export const loginUser = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      
      body: JSON.stringify(credentials),
    });
    const data = await handleResponse(response);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  };
  

export const logoutUser = async () => {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: 'POST',
    headers: getAuthHeaders(),
  });
  localStorage.removeItem('token');
  return handleResponse(response);
};

// Purchase Goals (Groups)
export const getPurchaseGoals = async () => {
  const response = await fetch(`${API_BASE_URL}/purchase-goals`, {
    method: 'GET',
    headers: getAuthHeaders(), // This endpoint does not require authentication
  });
  return handleResponse(response);
};

export const getPurchaseGoal = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/purchase-goals/${goalId}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

export const createPurchaseGoal = async (goalData) => {
    const formData = new FormData();
    Object.keys(goalData).forEach(key => {
        formData.append(key, goalData[key]);
    });
  const response = await fetch(`${API_BASE_URL}/purchase-goals`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: formData,
  });
  return handleResponse(response);
};

export const updatePurchaseGoal = async (goalId, goalData) => {
    const formData = new FormData();
    Object.keys(goalData).forEach(key => {
        formData.append(key, goalData[key]);
    });
  const response = await fetch(`${API_BASE_URL}/purchase-goals/${goalId}`, {
    method: 'PUT', // or PATCH if you're only updating some fields
    headers: getAuthHeaders(),
    body: formData,
  });
  return handleResponse(response);
};

export const deletePurchaseGoal = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/purchase-goals/${goalId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

export const changePurchaseGoalStatus = async (goalId) => {
    const response = await fetch(`${API_BASE_URL}/purchase-goals/${goalId}/change-status`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  };

// User Participation
export const getParticipants = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/purchase-goals/${goalId}/participants`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

export const joinPurchaseGoal = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/purchase-goals/${goalId}/join`, {
    method: 'POST',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

export const approveParticipant = async (goalId, userId) => {
  const response = await fetch(`${API_BASE_URL}/purchase-goals/${goalId}/approve/${userId}`, {
    method: 'POST',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

export const declineParticipant = async (goalId, userId) => {
  const response = await fetch(`${API_BASE_URL}/purchase-goals/${goalId}/decline/${userId}`, {
    method: 'POST',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};



