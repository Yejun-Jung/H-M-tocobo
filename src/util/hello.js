const img = (path) => `/img/${path}`;
export const helloData = {

  media: {
    type: "image",                     // "image" | "video"
    src: img("feature_img.png"),   // public 폴더 기준
    alt: "Pink square demo image",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  eyebrow: "TRUST & BUY",
  title: "H&M <br/> Collection",
  description:
    "합리적인 가격으로 만나는 H&M 최상의 퀄리티 <br>당신의 직감을 믿고 지금 바로 시작하세요.",
  cta: {
    label: "만나러가기",
    href: "/about"
  }
};


