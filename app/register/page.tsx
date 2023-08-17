"use client"
import React, { useState } from 'react'; // Import React and useState
import { submitToSupabase } from '/Users/yeiterilsosingkoireng/Downloads/LiveTrendzy-master/app/register/create.js'; // Import the Supabase integration

export default function Pricing() {
    // State for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { // Use React.FormEvent<HTMLFormElement>
        event.preventDefault();

        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        try {
            // Call the Supabase function to submit data
            await submitToSupabase(email, password);
            console.log('Data inserted successfully');
            // Redirect or perform other actions on successful insert
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    return (
        <div className="px-5 sm:px-6 lg:px-12 xl:px-32 py-8 h-[1000px]">
            {/* ... Other components */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* ... Other form inputs */}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required
                />
                {/* ... Other form elements */}
                <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{' '}
                    <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Login here
                    </a>
                </p>
            </form>
        </div>
    );
}
