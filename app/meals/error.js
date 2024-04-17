"use client";

export default function ErrorPage({ error }) {
  return (
    <main className='error'>
      <h1>An error occured!</h1>
      <p>{error.toString()}</p>
    </main>
  );
}
