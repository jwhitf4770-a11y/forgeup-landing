"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function SetupPage() {
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [equipment, setEquipment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || files.length === 0) {
      alert("Please provide an email and at least one image");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("equipment", equipment);
      files.forEach((file) => formData.append("files", file));

      const response = await fetch("/api/setup", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error submitting setup. Please try again.");
      }
    } catch (err) {
      console.error("Setup error:", err);
      alert("Error submitting setup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Nav />
      <article className="px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              Let Milo See Your Setup
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Upload photos of your equipment, gym setup, or recent workouts. Milo learns better when he understands your constraints.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 card p-7">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-primary)]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Describe your setup & training context</label>
                <textarea
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  placeholder="e.g., Home gym with rack + dumbbells 5-90 lbs. Previous programs: 5/3/1, GZCLP. Injury history: shoulder impingement 2020. Current volume: 4 days/week."
                  className="w-full px-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] min-h-[120px]"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload photos & screenshots</label>
                <p className="text-xs text-[var(--color-muted)] mb-4">
                  Share photos of your gym setup, equipment, recent workouts, training logs, or screenshots of previous programs. Milo learns your constraints, injuries, and what's worked before.
                </p>
                <div className="border-2 border-dashed border-[var(--color-border)] rounded-lg p-6 text-center hover:border-[var(--color-primary)] transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-sm text-[var(--color-muted)] mb-2">Click to upload or drag and drop</div>
                    <div className="text-xs text-[var(--color-muted)]">Screenshots, PNG, JPG, GIF, PDF up to 10MB each</div>
                  </label>
                </div>
                {files.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">{files.length} file(s) selected:</p>
                    <ul className="space-y-1">
                      {files.map((file) => (
                        <li key={file.name} className="text-xs text-[var(--color-muted)]">
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? "Submitting..." : "Submit Setup"}
              </button>
            </form>
          ) : (
            <div className="card p-7 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="font-display text-2xl font-bold mb-2">Setup received</h2>
              <p className="text-[var(--color-muted)] mb-6">
                Milo has your photos and equipment list. This helps him build a program that actually works in your space.
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                Check your email for next steps.
              </p>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="text-center text-sm text-[var(--color-muted)]">
              Not ready to upload yet?{" "}
              <a href="/waitlist" className="text-[var(--color-primary)] hover:underline">
                Join the waitlist
              </a>
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
