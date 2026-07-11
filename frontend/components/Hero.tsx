"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Bot,
  FileText,
  ImageIcon,
  Landmark,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 text-white">

      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              🚀 Welcome to Digital Desk
            </span>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight">
              One Platform
              <br />
              For Every
              <br />
              Digital Service
            </h1>

            <p className="mt-8 text-lg text-blue-100 leading-8">
              Government Services, PDF Tools, Image Tools,
              AI Assistant, Passport Photo, Bill Payments
              and 100+ Digital Solutions.
            </p>

            {/* Search */}

            <div className="mt-10 flex items-center rounded-2xl bg-white p-2 shadow-xl">

              <Search className="ml-3 text-slate-500" />

              <input
                placeholder="Search any service..."
                className="flex-1 bg-transparent px-4 py-3 text-slate-800 outline-none"
              />

              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
                Search
              </button>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="btn-primary flex items-center gap-2">
                Explore Services
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary flex items-center gap-2 border-white text-white hover:text-blue-700">
                <Bot size={18} />
                AI Assistant
              </button>

            </div>

          </motion.div>
                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 border border-white/20">
              <Landmark className="mb-5 text-cyan-300" size={42} />
              <h3 className="text-2xl font-bold">Government</h3>
              <p className="mt-3 text-blue-100">
                100+ Government Services
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 border border-white/20">
              <FileText className="mb-5 text-orange-300" size={42} />
              <h3 className="text-2xl font-bold">PDF Tools</h3>
              <p className="mt-3 text-blue-100">
                Merge, Split, Compress
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 border border-white/20">
              <ImageIcon className="mb-5 text-green-300" size={42} />
              <h3 className="text-2xl font-bold">Image Tools</h3>
              <p className="mt-3 text-blue-100">
                Passport Photo & Remove BG
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 border border-white/20">
              <ShieldCheck className="mb-5 text-yellow-300" size={42} />
              <h3 className="text-2xl font-bold">100% Secure</h3>
              <p className="mt-3 text-blue-100">
                Fast & Secure Processing
              </p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}