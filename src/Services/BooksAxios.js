import axios from "axios";

export async function postBook(book) {
  const options = {
    method: "POST",
    url: "http://localhost:3001/books/create",
    data: book,
  };
  try {
    console.log(book);
    const response = await axios.post(options.url, options.data);

    return response.data;
  } catch (error) {
    console.error(error);
    console.log(error.response);
  }
}
