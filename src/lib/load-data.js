// get books
export const getBooks = async () => {
  const res = await fetch("https://book-loop-server-bidc.onrender.com/books", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("failed to fetch books");
  return res.json();
};

// get book details
export const getBooksDetails = async (id) => {
  const res = await fetch(
    `https://book-loop-server-bidc.onrender.com/books/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("failed to fetch book details");
  return res.json();
};

// features
export const getFeatures = async () => {
  const res = await fetch(
    "https://book-loop-server-bidc.onrender.com/features",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("failed to fetch features");
  return res.json();
};

// stats
export const getStats = async () => {
  const res = await fetch("https://book-loop-server-bidc.onrender.com/stats", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("failed to fetch stats");
  return res.json();
};

// faqs
export const getFaq = async () => {
  const res = await fetch("https://book-loop-server-bidc.onrender.com/faqs", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("failed to fetch faqs");
  return res.json();
};