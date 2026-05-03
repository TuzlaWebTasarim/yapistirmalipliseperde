(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const NAV_LINKS = [
    {
        href: '#urunler',
        label: 'Ürünler'
    },
    {
        href: '#nasil-calisir',
        label: 'Nasıl Çalışır'
    },
    {
        href: '#kalite',
        label: 'Kalite'
    },
    {
        href: '#bolgeler',
        label: 'Hizmet Bölgeleri'
    },
    {
        href: '#sss',
        label: 'SSS'
    },
    {
        href: '#iletisim',
        label: 'İletişim'
    }
];
function Header() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 48)
            }["Header.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        "aria-label": "Fenetre Systems Ana Sayfa",
                        className: "flex items-center gap-2.5 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PliseSVGLogo, {}, void 0, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-sm font-800 tracking-tight",
                                        style: {
                                            color: '#404e5e',
                                            fontWeight: 800
                                        },
                                        children: "Fenetre Systems"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] font-500 tracking-widest uppercase",
                                        style: {
                                            color: '#83bd81'
                                        },
                                        children: "Yapıştırmalı Plise Perde"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex items-center gap-7",
                        "aria-label": "Ana Menü",
                        children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "text-sm font-medium transition-colors duration-200 hover:text-[#83bd81]",
                                style: {
                                    color: scrolled ? '#404e5e' : '#404e5e'
                                },
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://wa.me/905403363873?text=Merhaba%2C%20yapıştırmalı%20plise%20perde%20hakkında%20bilgi%20almak%20istiyorum.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95",
                            style: {
                                background: 'linear-gradient(135deg,#83bd81,#6aa868)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {}, void 0, false, {
                                    fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                "Teklif Al"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lg:hidden flex flex-col gap-1.5 p-2",
                        onClick: ()=>setMenuOpen(!menuOpen),
                        "aria-label": "Menü",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `block h-0.5 w-6 rounded transition-all duration-200 bg-[#404e5e] ${menuOpen ? 'rotate-45 translate-y-2' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `block h-0.5 w-6 rounded transition-all duration-200 bg-[#404e5e] ${menuOpen ? 'opacity-0' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `block h-0.5 w-6 rounded transition-all duration-200 bg-[#404e5e] ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden bg-white border-t border-[#e8f0e8] px-4 pb-5 pt-3 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-1",
                        "aria-label": "Mobil Menü",
                        children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>setMenuOpen(false),
                                className: "py-2.5 text-sm font-medium text-[#404e5e] border-b border-[#f0f8ef] hover:text-[#83bd81] transition-colors",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://wa.me/905403363873?text=Merhaba%2C%20yapıştırmalı%20plise%20perde%20hakkında%20bilgi%20almak%20istiyorum.",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white",
                        style: {
                            background: 'linear-gradient(135deg,#83bd81,#6aa868)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {}, void 0, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            "WhatsApp ile Teklif Al"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Header, "EaXJNDiM7KISlWFYokQmqh/1M0I=");
_c = Header;
function PliseSVGLogo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "36",
                height: "36",
                rx: "9",
                fill: "#83bd81",
                fillOpacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    0,
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 7 + i * 5,
                        y: "10",
                        width: "3",
                        height: "16",
                        rx: "1.5",
                        fill: "#83bd81",
                        opacity: 1 - i * 0.13
                    }, i, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 26 L29 26",
                stroke: "#404e5e",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 10 L29 10",
                stroke: "#404e5e",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c1 = PliseSVGLogo;
function WhatsAppIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/Header.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c2 = WhatsAppIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "PliseSVGLogo");
__turbopack_context__.k.register(_c2, "WhatsAppIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const FAQS = [
    {
        q: 'Yapıştırmalı plise perde nedir, nasıl çalışır?',
        a: 'Yapıştırmalı plise perde; cam çerçevesine ya da pencere kasasına özel çift taraflı yapışkan bant ile sabitlenen, katlanır akordeon yapılı bir perde sistemidir. 14 mm ince profiller cam yüzeyine yapışır; perdeler bu profillerin içindeki kılavuz rayda ileri-geri hareket eder. Vida veya matkap kullanılmaz. Cam açıldığında perde de camla birlikte hareket ettiğinden balkon sistemlerine biçilmiş kaftan özelliğindedir.'
    },
    {
        q: 'Montaj için usta gelmesi gerekiyor mu?',
        a: 'Türkiye siparişlerinde ücretsiz montaj ekibi hizmeti sunulur. Avrupa ve yurt dışı siparişleri demonte olarak gönderilir; ürünle birlikte adım adım Türkçe-İngilizce-Almanca kılavuz ve video QR kodu eklenir. Çoğu müşteri bu kılavuzla 15-20 dakikada kurulumu tamamlar.'
    },
    {
        q: 'Yapışkan bant cam yüzeyine zarar verir mi?',
        a: 'Hayır. Kullandığımız 3M VHB sanayi tipi bant, cam yüzeyini çizmez ve leke bırakmaz. Söküldüğünde cam üzerinde iz kalmaz; bant artığı varsa %99 alkol veya izopropil alkol ile kolayca temizlenir. Bant, normal oda sıcaklığında beş yılı aşkın süre yapışkanlığını korur.'
    },
    {
        q: 'Kaç günde teslim alırım?',
        a: 'Türkiye içinde siparişler 1-3 iş günü içinde hazırlanır ve kargo verilir. Kargo süresi 1-2 iş günüdür. Almanya, Hollanda ve Belçika için toplam süre 4-7 iş günüdür. Fransa ve Avusturya 5-8, İsviçre ve İtalya ise 6-10 iş günüdür. Kargo takip kodu SMS ve WhatsApp ile anlık iletilir.'
    },
    {
        q: 'Ölçü nasıl almalıyım?',
        a: 'Cam ya da pencere kasasının iç genişliğini ve yüksekliğini milimetre cinsinden ölçün. Balkon sistemleri için her kanat ayrı ayrı ölçülmelidir. Ölçü fotoğrafını WhatsApp\'a gönderirseniz teknik ekibimiz sizi bilgilendirir. Hata payı veya tolerans keserimize dahil olduğundan ekstra ölçü bırakmanıza gerek yoktur.'
    },
    {
        q: 'Hangi cam tiplerine uyumlu?',
        a: 'Isıcam, tek cam, temperli cam, lamineli cam ve PVC çerçeveli tüm pencere sistemlerine uygulanabilir. Alüminyum çerçeveli katlanır cam balkon (akordiyon) sistemlerine de montaj yapılmaktadır. Ancak yüzeyde silikon, yağ veya kir varsa bant tutunmayabilir; montaj öncesi alkollü bezle temizlik yapılması önerilir.'
    },
    {
        q: 'Garanti kapsamı nedir?',
        a: 'Mekanizma ve profil sistemi için 2 yıl, kumaş solması ve renk bozulması için 3 yıl yazılı üretici garantisi verilir. Kullanım hatası, fiziksel darbe veya yanlış temizlik ürünü kaynaklı hasarlar kapsam dışındadır. Garanti belgesi her siparişle birlikte gönderilir.'
    },
    {
        q: 'Fiyatlar neye göre değişiyor?',
        a: 'Fiyat; pencere ölçüsü, kumaş türü (tül, saten, blackout, honeycomb) ve montaj sistemine (yarı yapıştırmalı, tam yapıştırmalı) göre belirlenir. Standart fiyatlarımız fabrikadan doğrudan satış yapıldığından piyasanın altındadır. Kesin teklif için ölçü ve model tercihinizi WhatsApp\'a göndermeniz yeterlidir.'
    },
    {
        q: 'Temizlik nasıl yapılır?',
        a: 'Kumaş temizliği için ılık suyla nemlendirilmiş yumuşak bir bez yeterlidir; deterjan kullanılmasına gerek yoktur. Antistatik apre sayesinde günlük toz tutulmaz. Kumaş, kasasından çıkarılarak 30°C nazik programda makinede yıkanabilir. Profil rayları ise kuru bir bez veya yumuşak fırça ile temizlenir.'
    },
    {
        q: 'Avrupa\'ya nasıl sipariş verebilirim?',
        a: 'WhatsApp (+90 540 336 3873) veya e-posta (info@fenetresystems.com) yoluyla iletişime geçin. Ölçü ve model bilginizi paylaşın; fatura ve ödeme seçeneklerini (banka transferi veya PayPal) sunuyoruz. Ödeme onayından sonra üretim başlar; kargo firması takip koduyla birlikte bildirilir.'
    },
    {
        q: 'Bayilik veya toplu sipariş yapılabiliyor mu?',
        a: 'Evet. Mimar, iç mimar, müteahhit ve esnaf ortaklarımıza özel bayilik koşulları sunulmaktadır. Toplu siparişlerde indirimli fiyat tablosu ve öncelikli üretim sırası avantajı sağlanır. Bayilik için WhatsApp üzerinden "Bayilik" yazarak başvurabilirsiniz.'
    },
    {
        q: 'Renk ve desen seçimi nasıl yapılır?',
        a: 'Fiziksel kumaş kartelası talep üzerine kargo ücreti dahil olarak gönderilir. Dijital katalog ise WhatsApp\'a anlık iletilir. 500\'ü aşkın renk ve desen seçeneği mevcuttur. Baskılı ve desenli seriler için özel görsel baskı da kabul edilmektedir.'
    }
];
function FAQ() {
    _s();
    const [openIdx, setOpenIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f)=>({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.a
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "sss",
        className: "section-pad bg-white",
        "aria-labelledby": "sss-baslik",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqJsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge inline-flex mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionIcon, {}, void 0, false, {
                                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                        lineNumber: 77,
                                        columnNumber: 51
                                    }, this),
                                    " SSS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "sss-baslik",
                                className: "text-3xl sm:text-4xl font-extrabold mb-4",
                                style: {
                                    color: '#404e5e'
                                },
                                children: "Sıkça Sorulan Sorular"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divider-green mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-relaxed",
                                style: {
                                    color: '#5a6878'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        title: "Cam balkon plise perde",
                                        style: {
                                            color: '#83bd81',
                                            fontWeight: 600
                                        },
                                        children: "Cam balkon plise perde"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    " siparişinden montaja kadar aklınızdaki her sorunun yanıtı burada."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: FAQS.map((faq, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border overflow-hidden",
                                style: {
                                    borderColor: openIdx === idx ? '#83bd81' : '#e0ece0'
                                },
                                itemScope: true,
                                itemProp: "mainEntity",
                                itemType: "https://schema.org/Question",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full text-left flex items-center justify-between gap-3 px-5 py-4 transition-colors",
                                        style: {
                                            background: openIdx === idx ? 'rgba(131,189,129,0.06)' : '#fafdf9'
                                        },
                                        onClick: ()=>setOpenIdx(openIdx === idx ? null : idx),
                                        "aria-expanded": openIdx === idx,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-sm sm:text-base pr-4",
                                                style: {
                                                    color: '#404e5e'
                                                },
                                                itemProp: "name",
                                                children: faq.q
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform",
                                                style: {
                                                    background: openIdx === idx ? '#83bd81' : 'rgba(131,189,129,0.12)',
                                                    transform: openIdx === idx ? 'rotate(45deg)' : 'none'
                                                },
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                                    open: openIdx === idx
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    openIdx === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 pb-5",
                                        style: {
                                            background: 'rgba(131,189,129,0.04)'
                                        },
                                        itemScope: true,
                                        itemProp: "acceptedAnswer",
                                        itemType: "https://schema.org/Answer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed",
                                            style: {
                                                color: '#5a6878'
                                            },
                                            itemProp: "text",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-4",
                                style: {
                                    color: '#5a6878'
                                },
                                children: "Yanıt bulamadığınız bir sorunuz mu var?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20hakkında%20sormak%20istediğim%20bir%20şey%20var.",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:scale-105",
                                style: {
                                    background: 'linear-gradient(135deg,#83bd81,#6aa868)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WAIcon, {}, void 0, false, {
                                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    " WhatsApp ile Sorun"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(FAQ, "JHeU1KdNesf9XDvPtRBg+hOAqPM=");
_c = FAQ;
function QuestionIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
        }, void 0, false, {
            fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
            lineNumber: 154,
            columnNumber: 132
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
        lineNumber: 154,
        columnNumber: 10
    }, this);
}
_c1 = QuestionIcon;
function PlusIcon({ open }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 1v12M1 7h12",
            stroke: open ? '#fff' : '#83bd81',
            strokeWidth: "2",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
            lineNumber: 160,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_c2 = PlusIcon;
function WAIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
            lineNumber: 166,
            columnNumber: 132
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/FAQ.tsx",
        lineNumber: 166,
        columnNumber: 10
    }, this);
}
_c3 = WAIcon;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FAQ");
__turbopack_context__.k.register(_c1, "QuestionIcon");
__turbopack_context__.k.register(_c2, "PlusIcon");
__turbopack_context__.k.register(_c3, "WAIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function MobileBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-[#e0ece0] shadow-xl",
        style: {
            background: '#fff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "tel:+905403363873",
                className: "flex-1 flex flex-col items-center justify-center gap-0.5 py-3 transition-colors hover:bg-[#f0f8ef] active:bg-[#e0f0de]",
                "aria-label": "Telefon ile ara",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {}, void 0, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold",
                        style: {
                            color: '#404e5e'
                        },
                        children: "Ara"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-px bg-[#e0ece0]"
            }, void 0, false, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/905403363873?text=Merhaba%2C%20yapıştırmalı%20plise%20perde%20hakkında%20bilgi%20almak%20istiyorum.",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-1 flex flex-col items-center justify-center gap-0.5 py-3 transition-colors hover:bg-[#f0f8ef] active:bg-[#e0f0de]",
                "aria-label": "WhatsApp ile yaz",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WAIcon, {}, void 0, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold",
                        style: {
                            color: '#25d366'
                        },
                        children: "WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = MobileBar;
function PhoneIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
            fill: "#404e5e"
        }, void 0, false, {
            fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c1 = PhoneIcon;
function WAIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "#25d366",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pliseperde/yapistirmalipliseperde/src/components/MobileBar.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c2 = WAIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MobileBar");
__turbopack_context__.k.register(_c1, "PhoneIcon");
__turbopack_context__.k.register(_c2, "WAIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pliseperde$2f$yapistirmalipliseperde$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/pliseperde/yapistirmalipliseperde/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_pliseperde_yapistirmalipliseperde_0z0g__2._.js.map