"use client";

export default function DeleteBtn(props: any) {
  return (
    <>
      <button
        onClick={() => {
          props.deletefn(props.id);
        }}
        className="inline-block rounded-md bg-red-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-700 transition"
      >
        Delete
      </button>
    </>
  );
}
