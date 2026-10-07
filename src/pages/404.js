// src/pages/404.js
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm max-w-md w-full space-y-6">
          <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
            404
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Sorry Captain, the loot is on another island! The page you were looking for doesn't exist or has moved.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold transition shadow-sm w-full"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 - Page Not Found | Carter Gordon</title>;