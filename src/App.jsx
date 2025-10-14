export default function App() {
    return (
        <div className="min-h-dvh bg-neutral-100">
            {/* 가운데 420px 모바일 프레임 */}
            <div
                className="
          mx-auto w-full max-w-[420px] min-h-dvh bg-white
          shadow-lg md:rounded-2xl
          pb-[max(16px,env(safe-area-inset-bottom))]
        "
            >
                {/* 상단 안전영역(노치) */}
                <div className="pt-[max(12px,env(safe-area-inset-top))]" />

                {/* 헤더 */}
                <header className="px-4 py-3 border-b">
                    <h1 className="text-lg font-semibold">Floorida Mobile</h1>
                </header>
            </div>
        </div>
    );
}
