import type React from "react";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandBluesky } from "react-icons/tb";
import { TbBrandMedium } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";

import SocialLink from "./components/SocialLink";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Nicolas Payot
        </h1>
        <div className="mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-3">
            Frontend Enthusiast
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 h-6">
            Senior Software Engineer @&nbsp;
            <Link
              className="underline underline-offset-8 hover:decoration-sky-500 hover:dark:decoration-sky-400"
              href="https://www.datadoghq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datadog
            </Link>
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <SocialLink
            href="https://github.com/nicolaspayot"
            icon={<TbBrandGithub />}
            label="GitHub"
          />
          <SocialLink
            href="https://x.com/npayot"
            icon={<RiTwitterXFill />}
            label="X"
          />
          <SocialLink
            href="https://bsky.app/profile/nicolaspayot.bsky.social"
            icon={<TbBrandBluesky />}
            label="Bluesky"
          />
          <SocialLink
            href="https://medium.com/@npayot"
            icon={<TbBrandMedium />}
            label="Medium"
          />
          <SocialLink
            href="https://linkedin.com/in/npayot"
            icon={<TbBrandLinkedin />}
            label="LinkedIn"
          />
        </div>
      </main>
      <footer className="w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Copyright © {new Date().getFullYear()} | All rights reserved.</p>
      </footer>
    </div>
  );
}
