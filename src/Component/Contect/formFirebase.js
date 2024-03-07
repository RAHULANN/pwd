import { db } from "../../Firebase.js"; // Import the Firebase configuration
const handleSubmit = async (formData) => {
  try {
    // Add form data to Firestore collection

    console.log(formData);
    await db.collection("formData").add(formData);
    // alert("Form submitted successfully!");
    // Clear form fields after submission
    // setName("");
    // setEmail("");
    return;
  } catch (error) {
    console.error("Error submitting form:", error);
    return;
    // alert("An error occurred while submitting the form.");
  }
};

export { handleSubmit };
