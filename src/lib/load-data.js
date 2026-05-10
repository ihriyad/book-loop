// get book
export const getBooks = async () => {
  const res = await fetch("https://book-loop-server-bidc.onrender.com/books");
  if (!res.ok) {
    throw new Error("failed to fetch books");
  }
  return res.json();
};

// get book details
export const getBooksDetails = async (id) => {
  const res = await fetch(
    `https://book-loop-server-bidc.onrender.com/books/${id}`,
  );
  if (!res.ok) {
    throw new Error("failed to fetch books details");
  }
  return res.json();
};

//features & stats for about book loop section
export const getFeatures = async () => {
  const res = await fetch(
    "https://book-loop-server-bidc.onrender.com/features",
  );
  if (!res.ok) {
    throw new Error("failed to fetch features");
  }
  return res.json();
};

export const getStats = async () => {
  const res = await fetch("https://book-loop-server-bidc.onrender.com/stats");
  if (!res.ok) {
    throw new Error("failed to fetch stats");
  }
  return res.json();
};
//faq data for faq section:

export const getFaq = async () => {
  const res = await fetch("https://book-loop-server-bidc.onrender.com/faqs");
  if (!res.ok) {
    throw new Error("failed to fetch stats");
  }
  return res.json();
};