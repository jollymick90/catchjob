import React, { useState } from "react";

export function RForm(props: any) {
  const [name, setName] = useState("");
  
  const handleSubmit = (evt: any) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}