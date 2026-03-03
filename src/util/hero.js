const img = (path) => `/img/${path}`;


// Hero 슬라이더용 "가짜 DB" 데이터
export const heroSlides = [
  {
    id: "hs-1",
    title: "NEW Silouet <br>Collection",
    subtitle: "더 새롭고  더 새로운 실루엣✨",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "컬렉션 보러가기",
    ctaHref: "/products",
    image: {
      desktop: img("slider1.svg"),
      mobile: img("main_mo_1.jpg"),
    },
    alt: "비건 스킨케어 히어로 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "HAPPY NEW YEAR <br> BEST SELLERS",
    subtitle: "밸런타인데이 스타일✨      ",
    desc: "가볍지만 깊게, 산뜻한 촉촉함",
    ctaText: "컬렉션 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("slider2.svg"),
      mobile: img("main_mo_2.jpg"),
    },
    alt: "보습 라인 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "NEW Silouet <br>Collection",
    subtitle: "더 새롭고  더 새로운 실루엣✨",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "컬렉션 보러가기",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:  img("slider3.svg"),
      mobile: img("main_mo_3.jpg"),
    },
    alt: "민감 피부 라인 배너",
    active: true,
    order: 3,
  },
  {
    id: "hs-4",
    title: "NEW Silouet <br>Collection",
    subtitle: "더 새롭고  더 새로운 실루엣✨",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "컬렉션 보러가기",
    ctaHref: "/about",
    image: {
      desktop:  img("slider4.svg"),
      mobile: img("main_mo_4.jpg"),
    },
    alt: "브랜드 철학 배너",
    active: true,
    order: 4,
  },
];