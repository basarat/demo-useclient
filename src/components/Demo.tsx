'use client';

export const Demo = () => {
  return (
    <div onClick={() => alert("hello")}>
      <h1>Will this be rendered on the server?</h1>
    </div>
  );
};
