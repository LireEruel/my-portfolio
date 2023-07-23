const experiences = [
  {
    imgUrl: require("assets/image/first_line_logo.png"),
    title: "첫 줄",
    content:
      "첫줄은 모델이 감정을 분류하고 욕설탐지를 하여 감정그래프 제공 및 자동 필터링 같은 다양한 기능을 가진 웹 페이지입니다.",
    contribution: [
      "데이터 크롤링 및 전처리",
      "사용자 페이지 및 관리자 페이지 front-end 구현",
    ],
    stack: ["django", "React JS", "Python", "Selenium", "Beautiful Soup"],
  },
  {
    imgUrl: require("assets/image/bukPagoLogo.png"),
    title: "북파고",
    content:
      "북파고는 북한어를 남한어로 번역해주는 웹 페이지입니다. 파일번역 및 남북한 단어사전도 제공합니다.",
    contribution: ["데이터 크롤링 및 전처리", "메인페이지 front-end 구현"],
    stack: ["React JS", "React JS", "Python"],
  },
  {
    imgUrl: require("assets/image/baby_shower_logo.jpg"),
    title: "돌잔치 초대장",
    content:
      "조카의 돌잔치 초대장을 웹으로 구현하였습니다. 다양한 css 효과를 사용하였으며 간단한 댓글 기능이 포함되었습니다.",
    contribution: ["front-end 구현"],
    stack: ["svelte"],
  },
];

export default experiences;
