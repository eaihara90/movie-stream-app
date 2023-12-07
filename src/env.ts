const API_PROTOCOL = import.meta.env.VITE_API_PROTOCOL;
const API_HOST = import.meta.env.VITE_API_HOST;
const API_PORT = import.meta.env.VITE_API_PORT;
const API_PATH = import.meta.env.VITE_API_PATH;

export const baseApi: string = `${API_PROTOCOL}://${API_HOST}:${API_PORT}/${API_PATH}`;