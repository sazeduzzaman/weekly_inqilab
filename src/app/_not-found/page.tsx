export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md">
        <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
            The page {"your'e"} looking for {"doesn't"} seem to exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default page;
