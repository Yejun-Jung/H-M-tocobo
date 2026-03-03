
const img = (path) => `/img/${path}`

export const headerData = {

    logo: {
        src: img('logo.svg'),
        alt: 'H&M',
        href: '/'
    },
    menus: [
        {
            id: 'hero',
            label: 'hero',
            href: '#hero',
            type: 'section'
        },
        {
            id: 'cta',
            label: 'cta',
            href: '#cta',
            type: 'section'
        },
        {
            id: 'collection',
            label: 'collection',
            href: '#collection',
            type: 'section'
        },
        {
            id: 'instagram',
            label: 'instagram',
            href: '#instagram',
            type: 'section'
        },
        {
            id: 'accessory',
            label: 'accessory',
            href: '#accessory',
            type: 'section'
        },
    ],
    utils: [
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "like", label: "좋아요", icon: img("icon_like.svg"), href: "#" },
        { id: ",my", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("icon_cart.svg"), href: "#" },
    ],
    // 상단 공지/배너 (TopBanner용)
    topBanner: {
        enabled: true,
        height: 64,                   // px
        items: [
            { id: "tb-1", text: "합리적인 가격으로 만나는 회원 특별가", href: "#" },
            { id: "tb-2", text: "회원만을 위한 특별가와 추첨 이벤트를 지금 경험하세요.", href: "#" },
            { id: "tb-3", text: "업데이트 안내", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.png"),
        background: "#DC272D",
        color: "#fff",
    },
}