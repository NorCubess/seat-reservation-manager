"use client";
import React, { useState } from "react";
import { Leckerli_One, Urbanist, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const leckerli = Leckerli_One({ subsets: ["latin"], weight: "400" });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#0E271B" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #2F855A 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #2F855A 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Login Card */}
      <div
        className="relative z-10 w-full max-w-md mx-4"
        style={{
          background: "#123524",
          border: "1px solid #2F855A",
          borderRadius: "20px",
          padding: "48px",
        }}
      >
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link href="/">
            <span
              className={`${leckerli.className} text-white text-4xl cursor-pointer hover:text-emerald-400 transition-colors`}
            >
              Restaurant
            </span>
          </Link>
          <p className={`${inter.className} text-white/70 text-sm mt-2`}>
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className={`${inter.className} text-white text-sm font-medium block mb-2`}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className={`${inter.className} w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-600/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm`}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className={`${inter.className} text-white text-sm font-medium block mb-2`}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className={`${inter.className} w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-600/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-emerald-600/30 bg-white/10 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
              />
              <span className={`${inter.className} text-white/70 text-sm ml-2`}>
                Remember me
              </span>
            </label>
            <Link
              href="#"
              className={`${inter.className} text-emerald-400 hover:text-emerald-300 text-sm transition-colors`}
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`${inter.className} w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors text-sm shadow-lg hover:shadow-xl`}
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-emerald-600/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`${inter.className} px-2 bg-[#123524] text-white/50`}>
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/10 border border-emerald-600/30 hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill="#fff"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#fff"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#fff"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#fff"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className={`${inter.className} text-white text-sm`}>Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/10 border border-emerald-600/30 hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className={`${inter.className} text-white text-sm`}>Facebook</span>
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className={`${inter.className} text-center text-white/70 text-sm mt-8`}>
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            Sign up
          </Link>
        </p>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className={`${inter.className} text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-2`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

// filepath: c:\Users\ronni\Desktop\seat-reservation-manager\src\app\login\page.tsx
