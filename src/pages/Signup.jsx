import { useForm } from "react-hook-form";


export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Signup successful ");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Signup Form
        </h2>


        <label className="block mb-1 font-medium text-gray-700">First Name</label>
        <input
          className="w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("firstName", {
            required: "First name is required",
            maxLength: 10,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}

    
        <label className="block mb-1 font-medium text-gray-700">Middle Name</label>
        <input
          className="w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("middleName", {
            required: "Middle name is required",
            maxLength: 10,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.middleName && (
          <p className="text-red-500 text-sm">{errors.middleName.message}</p>
        )}

        
        <label className="block mb-1 font-medium text-gray-700">Last Name</label>
        <input
          className="w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("lastName", {
            required: "Last name is required",
            maxLength: 10,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}

    
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

    
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Password cannot exceed 20 characters",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
              message:
                "Password must include uppercase, lowercase, number & special character",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        
        <label className="block mb-1 font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          className="w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Phone must be 10 digits & start with 6-9",
            },
          })}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}

    
        <label className="block mb-1 font-medium text-gray-700">
          Role Selection
        </label>
        <select
          className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("role", { required: true })}
        >
          <option value="Guest">Guest</option>
          <option value="Hotel Manager">Hotel Manager</option>
          <option value="Admin">Admin</option>
        </select>

        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
