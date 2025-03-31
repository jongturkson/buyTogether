// api.js
const API_BASE_URL = 'https://rrn24.techchantier.site/buy-together-api/public';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Request failed');
  }
  return response.json();
};

const getHeaders = (isJson = true) => {
  const token = localStorage.getItem('token');
  const headers = {
    Accept: 'application/json',
  };
  if (isJson) {
    headers['Content-Type'] = 'application/json';
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

// Authentication
export const registerUser = async (userData) => {
  const formData = new FormData();
  for (const key in userData) {
    formData.append(key, userData[key]);
  }
  const response = await fetch(`${API_BASE_URL}/api/register`, {
    method: 'POST',
    headers: getHeaders(false),
    body: formData,
  });
  return handleResponse(response);
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(credentials),
  });
  const data = await handleResponse(response); // Call handleResponse only once
  localStorage.setItem('token', data.data.token); // Store the token
  localStorage.setItem('user', JSON.stringify(data.data.user)); // Store the user data
  return data;
};

export const logoutUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/logout`, {
    method: 'POST',
    headers: getHeaders(),
  });
  return handleResponse(response);
};

// Purchase Goals
export const getPurchaseGoals = async () => {
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals`, {
    method: 'GET',
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const getPurchaseGoal = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals/${goalId}`, {
    method: 'GET',
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const createPurchaseGoal = async (goalData) => {
  const formData = new FormData();
  for (const key in goalData) {
    formData.append(key, goalData[key]);
  }
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals`, {
    method: 'POST',
    headers: getHeaders(false),
    body: formData,
  });
  return handleResponse(response);
};

export const updatePurchaseGoal = async (goalId, goalData) => {
  const formData = new FormData();
  for (const key in goalData) {
    formData.append(key, goalData[key]);
  }
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals/${goalId}`, {
    method: 'PUT',
    headers: getHeaders(false),
    body: formData,
  });
  return handleResponse(response);
};

export const deletePurchaseGoal = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals/${goalId}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const changePurchaseGoalStatus = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals/${goalId}/change-status`, {
    method: 'POST',
    headers: getHeaders(),
  });
  return handleResponse(response);
};

// User Participation
export const getPurchaseGoalParticipants = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals/${goalId}/participants`, {
    method: 'GET',
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const joinPurchaseGoal = async (goalId) => {
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals/${goalId}/join`, {
    method: 'POST',
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const approveUser = async (goalId, userId) => {
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals/${goalId}/approve/${userId}`, {
    method: 'POST',
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const declineUser = async (goalId, userId) => {
  const response = await fetch(`${API_BASE_URL}/api/purchase-goals/${goalId}/decline/${userId}`, {
    method: 'POST',
    headers: getHeaders(),
  });
  return handleResponse(response);
};
