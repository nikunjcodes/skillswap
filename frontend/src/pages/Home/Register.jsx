import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authServices";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [agreeError, setAgreeError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
    if (e.target.checked) setAgreeError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setErrors({});
    setAgreeError("");

    if (!agree) {
      setAgreeError("You must agree to the terms and conditions.");
      return;
    }

    setLoading(true);

    try {
      const response = await registerUser(user);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      navigate("/dashboard");
    } catch (err) {
      const backendErrors = err.response?.data;
      if (backendErrors?.errors) {
        const fieldErrors = {};
        backendErrors.errors.forEach(({ field, message }) => {
          if (!fieldErrors[field]) fieldErrors[field] = [];
          fieldErrors[field].push(message);
        });
        setErrors(fieldErrors);
      } else if (backendErrors?.message) {
        setError(backendErrors.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card with modern design */}
        <div className="bg-white rounded-2xl shadow-medium p-8 sm:p-10 animate-scaleIn border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-2xl mb-4">
              <svg
                className="w-8 h-8 text-brand-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600 text-sm">
              Join SkillSwap and start your learning journey
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-fadeIn">
              <p className="text-red-600 text-sm font-medium text-center">
                {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="input-modern"
              />
              {errors.name && (
                <ul className="mt-2 text-sm text-red-600 space-y-1">
                  {errors.name.map((msg, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <span className="text-red-500">•</span> {msg}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="input-modern"
              />
              {errors.email && (
                <ul className="mt-2 text-sm text-red-600 space-y-1">
                  {errors.email.map((msg, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <span className="text-red-500">•</span> {msg}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
                placeholder="Create a strong password"
                className="input-modern"
              />
              {errors.password && (
                <ul className="mt-2 text-sm text-red-600 space-y-1">
                  {errors.password.map((msg, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <span className="text-red-500">•</span> {msg}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={handleAgreeChange}
                className="mt-0.5 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="agree"
                className="text-sm text-gray-700 cursor-pointer"
              >
                I agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium underline"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
            {agreeError && (
              <p className="text-red-600 text-sm font-medium -mt-2">
                {agreeError}
              </p>
            )}

            {/* Submit Button */}
            {loading ? (
              <div className="flex justify-center py-3">
                <div className="w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3 rounded-xl font-semibold shadow-brand-md hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-200"
              >
                Create Account
              </button>
            )}
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center justify-center gap-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-sm text-gray-500 font-medium">
              or sign up with
            </span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Login */}
          <button
            onClick={() =>
              (window.location.href = `${backendUrl}/api/auth/google`)
            }
            className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
              Sign up with Google
            </span>
          </button>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* Additional Info */}
        <p className="mt-6 text-center text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <a href="#" className="underline hover:text-gray-700">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
