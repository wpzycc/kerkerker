export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-gradient-to-b from-black to-gray-950">
      <div className="mx-auto px-4 md:px-12 py-12">


        {/* 底部信息 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>© 2026 可可影视</span>
            <span className="text-gray-700">|</span>
            <span>仅供学习交流使用</span>
          </div>

          <div className="flex items-center gap-6">
 
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              回到顶部
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
