import React, { useOptimistic, useState, useTransition } from "react";

const updateLikesInDb = async (newCount) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (Math.random() < 0.2) {
    throw new Error("Network error");
  }
  return newCount;
};

function LikeButton({ initialLikes }) {
  const [confirmedLikes, setConfirmedLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    confirmedLikes,
    (currentLikes, optimisticUpdate) => currentLikes + optimisticUpdate,
  );
  const handleLike = async () => {
    startTransition(async () => {
      addOptimisticLike(1);

      try {
        const updatedCount = await updateLikesInDb(confirmedLikes + 1);
        setConfirmedLikes(updatedCount);
      } catch (error) {
        console.error("Failed to update like count:", error);
      }
    });
  };

  return (
    <button onClick={handleLike} disabled={isPending}>
      {optimisticLikes} Likes
      {isPending && <span style={{ marginLeft: "8px" }}>(Please Wait...)</span>}
    </button>
  );
}

function UseOptimisticHookDemo() {
  return (
    <>
      <LikeButton initialLikes={0} />
    </>
  );
}

export default UseOptimisticHookDemo;
