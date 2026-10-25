"use client";

import Reveal from "./reveal";
import { GITHUB_URL } from "../utils/links";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((m) => m.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-[170px] animate-pulse rounded-lg bg-[#161b22]" />
    ),
  }
);

const USERNAME = "VeekAustin";

export default function GithubActivity() {
  return (
    <section id="activity" className="bg-[#0f1a11] px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-4xl font-bold text-[#f0f6fc]">
          GitHub Activity
        </h2>
        <p className="mb-12 text-center text-sm text-[#484f58]">
          My contributions over the last year.
        </p>

        <Reveal>
          <div className="rounded-2xl border border-[#1a2e1e] bg-[#0d1117] p-6">
            {/* Scrolls sideways inside the card on small screens */}
            <div className="overflow-x-auto">
              <GitHubCalendar
                username={USERNAME}
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={13}
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
              />
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-[#238636] transition-colors hover:text-[#2ea043]"
            >
              View my GitHub profile →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}