import { useState } from "react";

function Submit() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="Submit">
        {submitted? <h1 id="submitted">Form Submitted</h1> : null}
      <form action="" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Submit;
