export const getBooks = async () => {
  const res =await fetch("https://book-loop-server-bidc.onrender.com/books");
  if (!res.ok) {
    throw new Error("failed to fetch books");
  }
  return res.json();
};
