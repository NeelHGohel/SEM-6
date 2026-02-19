import React, { useActionState } from "react";

async function increment(previousState, formData) {
  return previousState + 1;
}

function UseActionStateHookDemo() {
  const [state, actionToTake] = useActionState(increment, 0);

  return (
    <form>
      {state}
      <button formAction={actionToTake}>Increment</button>
    </form>
  );
}

export default UseActionStateHookDemo;
