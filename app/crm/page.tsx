"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Nav } from "@/components/Nav";

export default function CRMPage() {
  const [betaSignups, setBetaSignups] = useState<any[]>([]);
  const [trainerSignups, setTrainerSignups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"beta" | "trainers">("beta");

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const { data: beta } = await supabase
          .from("beta_signups")
          .select("*")
          .order("created_at", { ascending: false });

        const { data: trainers } = await supabase
          .from("trainer_signups")
          .select("*")
          .order("created_at", { ascending: false });

        setBetaSignups(beta || []);
        setTrainerSignups(trainers || []);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main>
      <Nav />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold mb-2">Signups CRM</h1>
          <p className="text-[var(--color-muted)]">
            Beta signups: {betaSignups.length} | Trainer signups:{" "}
            {trainerSignups.length}
          </p>
        </div>

        <div className="flex gap-3 mb-6 border-b border-[var(--color-border)]">
          <button
            onClick={() => setActiveTab("beta")}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === "beta"
                ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            Beta Signups ({betaSignups.length})
          </button>
          <button
            onClick={() => setActiveTab("trainers")}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === "trainers"
                ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            Trainer Signups ({trainerSignups.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : activeTab === "beta" ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-3 px-4 font-semibold text-[var(--color-muted)]">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--color-muted)]">
                    Platform
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--color-muted)]">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--color-muted)]">
                    Signup Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {betaSignups.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-[var(--color-muted)]">
                      No signups yet
                    </td>
                  </tr>
                ) : (
                  betaSignups.map((signup) => (
                    <tr
                      key={signup.id}
                      className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface)]/50 transition-colors"
                    >
                      <td className="py-3 px-4">{signup.email}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                          {signup.platform === "ios" ? "iOS" : "Android"}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                          {signup.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[var(--color-muted)]">
                        {formatDate(signup.created_at)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="space-y-4">
            {trainerSignups.length === 0 ? (
              <div className="text-center py-8 text-[var(--color-muted)]">
                No trainer signups yet
              </div>
            ) : (
              trainerSignups.map((trainer) => (
                <div
                  key={trainer.id}
                  className="card p-6 border border-[var(--color-border)]"
                >
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[var(--color-muted)] mb-1">
                        Name
                      </p>
                      <p className="font-semibold">{trainer.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-muted)] mb-1">
                        Email
                      </p>
                      <p className="font-semibold">{trainer.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-muted)] mb-1">
                        Phone
                      </p>
                      <p className="font-semibold">{trainer.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-muted)] mb-1">
                        Gym Name
                      </p>
                      <p className="font-semibold">{trainer.gym_name || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-muted)] mb-1">
                        Clients
                      </p>
                      <p className="font-semibold">{trainer.client_count || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-muted)] mb-1">
                        Experience
                      </p>
                      <p className="font-semibold">
                        {trainer.experience_years
                          ? `${trainer.experience_years} years`
                          : "—"}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-[var(--color-muted)] mb-2">
                      Interests
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.interest_areas?.map((interest: string) => (
                        <span
                          key={interest}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                    <span className="text-xs text-[var(--color-muted)]">
                      {formatDate(trainer.created_at)}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                      {trainer.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
}
