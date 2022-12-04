import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'


import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const { login, user } = useAuth();
  
  const router = useRouter();

  const [data, setData] = useState({ email: " ", password: " " });
  const [error, setError] = useState(false);

  const timer = setTimeout(() => {
    setError(false);
  }, 9000);

  function timeout() {
    clearTimeout(timer);
  }

  async function handleSubmitData(e) {
    e.preventDefault();

    console.log(data.email, data.password);
    try {
      await login(data.email, data.password);
      router.push("/class");
      console.log(user);
    } catch (err) {
      setError("err");
      //console.error(err);
    }
  }

  
  return (
    <>
      <Head>
        <title>Starcoder</title>
      </Head>
      <AuthLayout>
                {error && (
          <div
            onErrorCapture={timeout}
            className="text-center absolute bottom-20 left-0 right-0"
          >
            <a className="px-4 text-sm space-y-2 py-3 bg-red-100 text-red-500 font-medium rounded-md">
              {" "}
              Wrong username or password
            </a>
          </div>
        )}
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmitData} className="mt-10 grid grid-cols-1 gap-y-8">
            <div className="form-group mb-6">
              <label
                htmlFor="email"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="password"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
            </div>

          <div>
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>

          </div>
        </form>
      </AuthLayout>
    </>
  )
}
