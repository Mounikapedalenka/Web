import React, { useState } from "react";
function StudentPlacementForm() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [gradeLevel, setGradeLevel] = useState("");
const [schoolName, setSchoolName] = useState("");
const handleSubmit = (event) => {
event.preventDefault();
// do something with the form data, like submit it to a server
console.log("Form submitted with values:", {
firstName,
lastName,
gradeLevel,
schoolName,
});
// clear the form fields
setFirstName("");
setLastName("");
setGradeLevel("");
setSchoolName("");
};
return (
<form onSubmit={handleSubmit}>
<label>
First Name:
<input
type="text"
value={firstName}
onChange={(event) => setFirstName(event.target.value)}
/>
</label>
<label>
Last Name:
<input
type="text"
value={lastName}
onChange={(event) => setLastName(event.target.value)}
/>
</label>
<label>
Grade Level:
<input
type="text"
value={gradeLevel}
onChange={(event) => setGradeLevel(event.target.value)}
/>
</label>
<label>
School Name:
<input
type="text"
value={schoolName}
onChange={(event) => setSchoolName(event.target.value)}
/>
</label>
<button type="submit">Submit</button>
</form>
);
}
export default StudentPlacementForm;
