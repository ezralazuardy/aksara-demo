"use client";

import GitHubButton from "react-github-btn";

export default function Header() {
  return (
    <div className="grid grid-cols-2 mb-4">
      <div className="w-full flex justify-start">
        <h1 className="text-3xl font-bold">ꦲ Aksara</h1>
      </div>
      <div className="w-full flex justify-end pt-1">
        <GitHubButton
          href="https://github.com/ezralazuardy/aksara"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          data-show-count="true"
          aria-label="Star ezralazuardy/aksara on GitHub"
        >
          Star
        </GitHubButton>
      </div>
    </div>
  );
}
