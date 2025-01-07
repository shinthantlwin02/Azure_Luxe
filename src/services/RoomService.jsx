import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createRoom = async (formData) => {
  try {
    const params = new URLSearchParams(formData).toString();
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/room/create?${params}`,
      {
        headers: { accept: '*/*' },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create room');
  }
};

export const deleteRoom = async (roomId) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_BASE_URL}/room/delete/${roomId}`,
      { headers: { accept: '*/*' } }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete room');
  }
};

export const fetchRooms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/room`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error; 
  }
};

export const getRoomById = async (roomId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/room/${roomId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching room with ID ${roomId}:`, error);
    throw error;
  }
};

