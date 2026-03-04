// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("footer_logo.svg"),
  alt: "TOCOBO 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "본 사이트의 콘텐츠는 저작권 보호를 받고 있는",
  "H&M Hennes & Mauritz AB의 자산입니다.",
  "법인명: 에이치앤엠헤네스 앤 모리츠 주식회사",
  "통신판매업 신고번호 : 2022-서울강남-01184",
  "사업자등록번호: 220-87-83339",
  "대표자: 아담 칼슨, 선보라미, 아네타 포쿠친스카",
  "주소: 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182",
  "대표번호: 080-822-0220 info.kr@hm.com ",
];
export const footerLegal = {
  links: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "전화 연락 :",
  tel: { value: "080-822-0220", href: "tel:0808220220" },
  hours: "월요일 - 금요일 : 10am - 7pm",
  notice: "토요일 - 일요일 : 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "카테고리",
    items: [
      { label: "WOMEN", href: "/category/women" },
      { label: "MEN", href: "/category/men" },
      { label: "KIDS", href: "/category/kids" },
      { label: "HOME", href: "/category/home" },
      { label: "기프트카드", href: "/category/giftcard" },
    ],
  },
  {
    title: "기업정보",
    items: [
      { label: "H&M 채용정보", href: "/career" },
      { label: "H&M 회사소개", href: "/about" },
      { label: "H&M GROUP 지속가능성", href: "/sustainability" },
      { label: "언론", href: "/press" },
      { label: "IR 정보", href: "/ir" },
      { label: "기업지배구조", href: "/governance" },
    ],
  },
  {
    title: "고객지원",
    items: [
      { label: "고객 서비스", href: "/customer-service" },
      { label: "내 계정", href: "/my-account" },
      { label: "매장 찾기", href: "/store-locator" },
      { label: "개인정보 처리방침", href: "/privacy" },
      { label: "문의하기", href: "/contact" },
      { label: "안전한 쇼핑", href: "/safe-shopping" },
      { label: "COOKIE SETTINGS", href: "/cookie-settings" },
    ],
  },
  {
    title: "멤버십 혜택",
    items: [
      { label: "신규 회원 10% 할인", href: "/membership-new" },
      { label: "멤버십 가입하기", href: "/membership-join" },
      { label: "멤버십 정보", href: "/membership-info" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
