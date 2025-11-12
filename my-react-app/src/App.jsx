import { useState } from "react";
import FormComponent from "./FormComponent";
import DisplayComponent from "./DisplayComponent";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div>
      <FormComponent onSubmit={(data) => setFormData(data)} />
      <DisplayComponent data={formData} />
    </div>
  );
}

export default App;