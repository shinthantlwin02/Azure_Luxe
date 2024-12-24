import axios from 'axios';

export const createBooking = async (formData) => {
  try {
    // const params = new URLSearchParams(formData).toString();
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/book/register?name=${formData.name}&phone=${formData.phone}&roomId=${formData.roomId}&checkInDate=${formData.checkInDate}&checkOutDate=${formData.checkOutDate}&adults=${formData.adults}&children=${formData.children}`,
      {
        headers: { accept: '*/*' },
      }
    );
    console.log("res", response)

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to register booking');
  }
};

export const fetchBookings = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/book`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error; 
    }
  };
