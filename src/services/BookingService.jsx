import axios from 'axios';
import { toast } from 'react-toastify';

export const createBooking = async (formData) => {
  try {
    // const params = new URLSearchParams(formData).toString();
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/book/register?name=${
        formData.name
      }&phone=${formData.phone}&roomId=${formData.roomId}&checkInDate=${
        formData.checkInDate
      }&checkOutDate=${formData.checkOutDate}&adults=${
        formData.adults
      }&children=${formData.children}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      }
    );

    toast.success(response.data?._metadata.message);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || 'Failed to register booking');
    throw new Error(
      error.response?.data?.message || 'Failed to register booking'
    );
  }
};

export const fetchBookings = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/book`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const deleteBooking = async (bookingId) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/book/cancel?bookingId=${bookingId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      }
    );
    toast.success('Booking Deleted!');
    return response.data;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};

export const fetchAllBookings = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/book/all-book`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const updateBookingStatus = async (bookingId, status) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_BASE_URL}/book/status?bookingId=${bookingId}&status=${status}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      }
    );
    toast.success('Booking Approved!');
    return response.data;
  } catch (error) {
    console.error('Error approving booking:', error);
    throw error;
  }
};
