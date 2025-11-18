import { useForm } from "react-hook-form";


export function CourseDetails() {
const { register, handleSubmit, formState:{ errors } } = useForm();


const onSubmit = (data) => {
console.log("Details fetched for", data.courseid);
};


return (
<form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-2xl shadow mt-4">
<h2 className="text-xl font-bold mb-3">Course Details</h2>


<input className="border p-2 w-full" placeholder="Course ID"
{...register("courseid", { required: true })} />
{errors.courseid && <p className="text-red-500">Course ID required</p>}


<button className="bg-green-600 text-white p-2 rounded-xl mt-4" type="submit">Get Details</button>
</form>
);
}