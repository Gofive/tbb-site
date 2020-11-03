import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SectionModule, SectionTitle, SectionContent } from '../../components/SectionModule'


import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';


import bannar1 from '../../assets/school/course/top.jpg'
import haitunimg from '../../assets/school/course/haitun.png'
import kctximg from '../../assets/school/course/kctx.png'

import hlkimg from '../../assets/school/course/hlk/img.jpg'
import hlkp1img from '../../assets/school/course/hlk/p1.png'
import hlkp2img from '../../assets/school/course/hlk/p2.png'
import hlkp3img from '../../assets/school/course/hlk/p3.png'
import hlkp4img from '../../assets/school/course/hlk/p4.png'
import yykimg from '../../assets/school/course/yyk/img.jpg'
import yykp1img from '../../assets/school/course/yyk/p1.png'
import yykp2img from '../../assets/school/course/yyk/p2.png'
import yykp3img from '../../assets/school/course/yyk/p3.png'
import yykp4img from '../../assets/school/course/yyk/p4.png'

import yskimg from '../../assets/school/course/ysk/img.jpg'
import yskp1img from '../../assets/school/course/ysk/p1.png'
import yskp2img from '../../assets/school/course/ysk/p2.png'
import yskp3img from '../../assets/school/course/ysk/p3.png'
import yskp4img from '../../assets/school/course/ysk/p4.png'

import yyqsimg from '../../assets/school/course/yyqs/img.jpg'
import yyqsp1img from '../../assets/school/course/yyqs/p1.png'
import yyqsp2img from '../../assets/school/course/yyqs/p2.png'
import yyqsp3img from '../../assets/school/course/yyqs/p3.png'
import yyqsp4img from '../../assets/school/course/yyqs/p4.png'

import steamimg from '../../assets/school/course/steam/img.jpg'
import steamp1img from '../../assets/school/course/steam/p1.png'
import steamp2img from '../../assets/school/course/steam/p2.png'
import steamp3img from '../../assets/school/course/steam/p3.png'
import steamp4img from '../../assets/school/course/steam/p4.png'

import xyjimg from '../../assets/school/course/xyj/img.jpg'
import xyjp1img from '../../assets/school/course/xyj/p1.png'
import xyjp2img from '../../assets/school/course/xyj/p2.png'
import xyjp3img from '../../assets/school/course/xyj/p3.png'
import xyjp4img from '../../assets/school/course/xyj/p4.png'




import 'video-react/dist/video-react.css';


const useStyles = makeStyles({

  companyIntro: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: "100%",

    "@media (max-width: 900px)": {

      fontSize: "0.3rem",
      letterSpacing: "0.1rem",
      lineHeight: "1.2rem",
      backgroundColor: "#f0f6fb",
    },
    "@media (min-width: 901px)": {

      fontSize: "1.6rem",
      letterSpacing: "0.16rem",
      lineHeight: "2.4rem",
    },
  },
  companyIntroP: {
    padding: "0 10%",

  },

  card: {
    maxWidth: 350,
    margin: "0px auto 35px auto",
    border: "0",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    backgroundColor: "#fafafa"

  },
  img: {
    height: 300,
    borderRadius: "1rem"
  },
  zxcard: {
    maxWidth: 650,
    margin: "0px auto 35px auto",
    border: "0",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    backgroundColor: "#fafafa"

  },
  zximg: {
    height: 400,
  },
  title: {
    fontSize: "1.5rem",
    letterSpacing: "0.15rem",
    fontWeight: 1000,
    color: "#33ccff",
    textAlign: "center"
  },
  sectionDivider: {
    width: "75%",
    maxWidth: "500px",
    height: "6px",
    backgroundColor: "#ffff99",
    textAlign: "center",
    display: "block",
    margin: "0px auto",
    marginTop: "10px",
  },

  description: {
    margin: "auto",
    fontSize: "1.6rem",
    letterSpacing: "0.16rem",
    lineHeight: "2.4rem",
    height: "100%",
    float: "left",
    "@media (max-width: 900px)": {
      padding: "0 1%"
    },
    "@media (min-width: 901px)": {
      padding: "0 10%"
    },
  },

  descriptionTitle: {
    color: "#000",
    fontWeight: 1000,

    "@media (max-width: 900px)": {
      fontSize: "1.3rem",
      letterSpacing: "0.08rem",
    },
    "@media (min-width: 901px)": {
      fontSize: "1.5rem",
      letterSpacing: "0.11rem",
    },

  },
  descriptionSubTitle: {
    "@media (max-width: 900px)": {
      fontWeight: 500,
      color: "#000",
      fontSize: "0.8rem",
      lineHeight: "1.6rem",
      letterSpacing: "0.1rem",
    },
    "@media (min-width: 901px)": {
      fontWeight: 500,
      color: "#000",
      fontSize: "0.8rem",
      lineHeight: "1.6rem",
      letterSpacing: "0.1rem",
    },
  },
  kctxImg: {

    "@media (max-width: 900px)": {
      width: "auto",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "300px",
      margin: "0 auto"
    },
    "@media (min-width: 901px)": {
      width: "auto",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "0 auto"
    },
  },
  tabLable: {

    "@media (max-width: 900px)": {
      margin: "0.3rem 0",
      paddingBottom: "0.2rem",
      minWidth: "5.0rem"
    },
    "@media (min-width: 901px)": {
      margin: "0.5rem 0",
      paddingBottom: "0.3rem",
      minWidth: "8.0rem"
    },

  },
  tabTitle: {

    "@media (max-width: 900px)": {
      fontSize: "0.8rem",
      fontWeight: "1000",
      lineHeight: "1.2rem"
    },
    "@media (min-width: 901px)": {
      fontSize: "1.3rem",
      fontWeight: "1000",
      lineHeight: "1.9rem"
    },
  },
  tabImg: {

    "@media (max-width: 900px)": {
      padding: "0 2%"
    },
    "@media (min-width: 901px)": {
      padding: "0 5%"
    },
  },
  tabTitleen: {

    "@media (max-width: 900px)": {
      fontSize: "0.4rem",
      fontWeight: "300",
      lineHeight: "0.8rem"
    },
    "@media (min-width: 901px)": {

      fontSize: "1.0rem",
      fontWeight: "300",
      lineHeight: "1.2rem"
    },
  },
  subItemStyle: {
    borderRadius: "10px",
    height: "100%",
    "@media (max-width: 900px)": {
      padding: "2%",
    },
    "@media (min-width: 901px)": {
      padding: "5%",
    },
  },
  subItemImgStyle: {
    "@media (max-width: 900px)": {
      width: "25%",
    },
    "@media (min-width: 901px)": {
      width: "40%",
    },
  }
  ,
  descriptionText: {
    paddingTop: "1.0rem",
    fontWeight: 300,
    fontSize: "0.9rem",
    letterSpacing: "0.1rem",
    lineHeight: "1.5rem"
  },
  descriptionTextItem: {
    textIndent: "2rem",
  },
  descriptionChildrenTitle: {
    fontWeight: 1000,
    fontSize: "0.9rem",
    letterSpacing: "0.1rem",
    lineHeight: "2.5rem",
    textAlign: "center"
  },
  descriptionChildrenText: {
    textIndent: "2rem",
    fontWeight: 200,
    fontSize: "0.8rem",
    letterSpacing: "0.1rem",
    lineHeight: "1.5rem"
  },

});


const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    '&$selected': {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  selected: {
  },
}))((props) => <Tab disableRipple {...props} />);

const AntTabs = withStyles({


  "@media (max-width: 900px)": {
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    scroller: {
      overflowX: "auto !important",
      overflowY: "hidden !important"
    }
  },
  "@media (min-width: 901px)": {
    root: {
      borderBottom: '1px solid #e8e8e8',
      overflow: "visible"
    },
    scroller: {
      overflow: "visible !important"
    }
  },
  indicator: {
    height: "0"
  },
})(Tabs);


const SliderBox = styled(Box)({
  "@media (max-width: 900px)": {
    height: "200px"
  },
  "@media (min-width: 900px)": {
    height: "400px"
  },
  "& .slick-slider": {
    height: "100%",
  },
});
const CarouselItem = styled("img")({
  objectFit: "cover",
  "@media (max-width: 900px)": {
    height: "200px"
  },
  "@media (min-width: 900px)": {
    height: "400px"
  },
});


const courseList = [
  {
    title: "欢乐课",
    value: "1",
    title_en: "Fun Class",
    imgsrc: hlkimg,
    descriptionTitle: "豚宝宝·Fun Class 欢乐课程",
    descriptionSubTitle: "——专属于6-36个月宝宝的感统体适能训练课",
    bgColor: "#f0fff0",
    borderColor: "#009933",
    text: ["豚宝宝欢乐课以著名的“脑科学”为理论依据,以感觉统合训练为基础,体适能训练为核心,设计出符合婴幼儿身心发展规律的感统体适能训练课程,让孩子获得与身体健康相关的核心经验,包括身体控制与平衡能力、身体移动能力、器械(具)控制能力、生活自理能力、自我保护能力。"],
    subText: [
      {
        iconImg: hlkp1img,
        title: "以体适能训练为核心",
        text: "体适能是身体适应外界环境的能力,可分成健康体适能和运动体适能。豚宝宝欢乐课通过技巧以及大器械和小教具的训练,锻炼婴幼儿的心肺耐力、柔软度、肌力、肌耐力、速度、爆发力、敏捷度、协调性和平衡感。"
      },
      {
        iconImg: hlkp2img,
        title: "以感统训练为基础",
        text: "感觉统合简称感统,是婴幼儿日常生活和学习的基础,0-3岁是感统失调的预防期。豚宝宝欢乐课通过视觉、听觉、触觉、前听觉和本体觉来促进婴幼儿感觉统合发展,预防感统失调,避免学习障碍,提升学习能力。"
      },
      {
        iconImg: hlkp3img,
        title: "培养良好运动习惯",
        text: "豚宝宝欢乐课积极进行家校联动,每节课都会安排课后指导,帮助家长带婴幼儿在家进行复习,养成良好的运动习惯,增强体质,预防疾病,促进婴幼儿大脑发育。"
      },
      {
        iconImg: hlkp4img,
        title: "中医养护伴随课堂",
        text: "豚宝宝欢乐课融入以专业的医学理论为基础的被动操和抚触操,帮助家长学习小儿推拿和按摩放松手法,缓解生长期肌肉的不适感,促进婴幼儿新陈代谢,增强抵抗力,预防疾病。"
      }
    ]
  },
  {
    title: "音乐课程",
    value: "2",
    title_en: "Music Class",
    imgsrc: yykimg,
    descriptionTitle: "豚宝宝·Music Class 音乐课程",
    descriptionSubTitle: "——专属于12-36个月宝宝的音乐启蒙和感知训练课",
    bgColor: "#faf0e6",
    borderColor: "#ff6600",
    text: ["皮亚杰说：\"儿童早期的社会行为处于自我中心和真正的社会化之间的中间地位, 只有当他们从自我中心状态中解脱出来,具备了与同伴进行有效的协作的能力,社会化便进入一个新阶段。\"而在这一过程当中,音乐教育起到了重要的推动作用。",
      "豚宝宝音乐课程融入德国奥尔夫世界级音乐,研发出符合中国宝宝的音乐启蒙和感知训练课程,内容融入五大洲12个国家主题音乐、经典电影音乐、全球知名歌手,培养宝宝早期乐感,同时促进脑部胼胝(pianzhi)体的发育,有效提高宝宝思维敏捷度,俗称记性好、反应快。让宝宝更加喜爱音乐,成为阳光快乐的宝宝。"],
    subText: [
      {
        iconImg: yykp1img,
        title: "融合全球多样化的音乐风格",
        text: "课程主题融合5大洲12个主题国家的音乐风格,主题鲜明,歌曲风格突出,让宝贝感受不同音乐的风格,感受与日常不一样的文化,鼓励并激发宝贝与生俱来的音乐潜能。"
      },
      {
        iconImg: yykp2img,
        title: "培养孩子的乐感",
        text: "课程通过音乐节奏、音乐教具、音乐游戏、音乐舞蹈,多方面锻炼宝贝的乐感,培养宝贝的肢体协调能力,专注力和社交互动参与能力。"
      },
      {
        iconImg: yykp3img,
        title: "丰富的音乐教具和乐器",
        text: "结合教学内容,我们为孩子准备了经典奥尔夫教具、音乐感统教具、音乐乐器等多样的教玩具。结合听、动、唱、动的教学形式,调动宝贝的多维度感官,帮助宝宝爱上音乐。"
      },
      {
        iconImg: yykp4img,
        title: "音乐儿歌教唱",
        text: "每个音乐主题,都会进行郎朗上口的音乐儿歌教唱,家长会共同参与,提升亲子之间的互动方式,帮助家长掌握与宝贝共同探索音乐的方式。"
      }
    ]
  },
  {
    title: "艺术课程",
    value: "3",
    title_en: "Art Class",
    imgsrc: yskimg,
    descriptionTitle: "豚宝宝·Art Class 艺术课程",
    descriptionSubTitle: "——专属于1.5-6岁宝宝的艺术创意课",
    bgColor: "#ffffe0",
    borderColor: "#ff9933",
    text: ["当代艺术教育过细的划分,使孩子在艺术视野和想象力上受到很大局限,艺术教育应该以遵循孩子身心发展为基础,保护孩子想象力,提高孩子综合艺术素养,而不是按照模式化去培养和塑造孩子。",
      "艺术课程基于当代先进的“大美术”艺术教育观念,根据幼儿美术发展的年龄特点,提供丰富的材料和多种艺术表现手法,旨在萌发对美的感受和体验。让幼儿创意潜能得到激发,创作出自己的艺术世界。"],
    subText: [
      {
        iconImg: yskp1img,
        title: "“大美术”教育观念",
        text: "基于当代先进的“大美术”艺术教育观念,涵盖绘画、雕塑、建筑、工艺等多种艺术门类,融合平面、立体、个人、集体、静态、动态等丰富的艺术表现形式,让孩子在艺术创造中,艺术视野和知识结构不受局限。"
      },
      {
        iconImg: yskp2img,
        title: "多元化创作材料",
        text: "我们给孩子们提供各种各样的绘画工具和材料,如油画棒、手指画颜料、水粉、水墨、马克笔、彩纸、瓦楞纸板、吹塑纸板、海绵、棉花、毛线、羽毛等。甚至生活中常见的生活物品、蔬菜、水果、废弃物品都是我们创作的材料。让孩子们尽可能多的接触到使用方法和创作效果各异的工具和材料,在尽情玩乐的过程中获得体验、大胆创造。"
      },
      {
        iconImg: yskp3img,
        title: "多感官教学",
        text: "在教学中,我们会通过调动孩子的各种感官,让孩子表现他们摸到的、听到的、尝到的、闻到的事物。引导孩子观察、感知真实事物,从而提高表现的能力,创造具有灵性的作品。"
      },
      {
        iconImg: yskp4img,
        title: "丰富的美术技法",
        text: "豚宝宝艺术课培养的孩子既是艺术创作者也是艺术欣赏者,让孩子在艺术欣赏到艺术创造的过程中,掌握美学规律,构建创意思维的习惯,培养孩子高品位的人生情趣和审美习惯。"
      }
    ]
  },
  {
    title: "语言情商课程",
    value: "4",
    title_en: "EQ Class",
    imgsrc: yyqsimg,
    descriptionTitle: "豚宝宝·EQ语言情商课程",
    descriptionSubTitle: "——专属于2-6岁宝宝的语言、社交(情商)课",
    bgColor: "#f0f8ff",
    borderColor: "#0099cc",
    text: ["豚宝宝语言情商课程根据儿童语言发展规律,实施最新国际情商标准,通过绘本阅读、朗诵表演、话剧表演、创意写画等表现形式,让孩子获得与社会交往、语言表达相关的核心经验,包括：情绪管理、人际交往、自信心、独立性、口语表达、自主阅读、文学语汇、识字书写等能力。"],
    subText: [
      {
        iconImg: yyqsp1img,
        title: "多措并举,全面提升情商力 ",
        text: "课程以孩子为中心,将自信心、情绪管理、人际交往、挫折抵抗、问题解决、独立性、同理心、责任心、自律等情商力的培养融入其中,通过绘本阅读、场景模拟、话剧表演、互动游戏等多种形式,让孩子学到具体方法,能够在日常生活中,更加主动地去运用。"
      },
      {
        iconImg: yyqsp2img,
        title: "丰富的语言环境,提高表达能力",
        text: "我们为孩子创设了一个充满安全感,温馨、愉快、丰富的语言环境,在这样的环境中,孩子没有压力,心情舒畅,有话敢说、想说、爱说。通过各种语言的适宜刺激,让孩子充分动手、动口、动脑,得到语言的练习机会和迁移运用,使每个孩子的语言得到开发,个性得到生动活泼的发展。"
      },
      {
        iconImg: yyqsp3img,
        title: "绘本阅读,培养自主阅读习惯",
        text: "绘本是早期阅读的首选。我们精心挑选优良的情商绘本,通过谈话、讲述、续编、角色扮演等多种形式激发孩子的阅读兴趣,再将阅读方法循序渐进地渗透给孩子,鼓励孩子主动进行阅读,逐步培养自主阅读习惯。"
      },
      {
        iconImg: yyqsp4img,
        title: "前识字、前书写,为入学做准备",
        text: "课程利用绘本阅读、快乐识字、创意写画等多种形式,引发孩子对阅读、识字和书写的兴趣,丰富孩子的读写经验,培养前阅读、前识字、前书写技能。科学地做好入学准备。"
      }
    ]
  },
  {
    title: "STEAM课程",
    value: "5",
    title_en: "STEAM Class",
    imgsrc: steamimg,
    descriptionTitle: "豚宝宝·STEAM 实验室",
    descriptionSubTitle: "——专属于2.5-6岁宝宝的科学启蒙课",
    bgColor: "#f0fff0",
    borderColor: "#99cc33",
    text: ["课程引入国际先进的STEAM教育理念,将科学、技术、工程、艺术和数学进行跨学科融合,通过项目探究的综合创新形式,培养孩子如同科学家一样的探究意识,建立好奇心,培养孩子发现问题、独立思考、动手创造、沟通合作及解决问题的综合能力。",
      "本课程以问题为导向,以情境引探究。通过生动有趣的教学情境引导幼儿对问题进行探究,思考解决方案,并设计项目作品。在解决问题的过程中,掌握所需知识,培养综合创新实践能力。"],
    subText: [
      {
        iconImg: steamp1img,
        title: "跨学科整合课程",
        text: "豚宝宝STEAM实验室课程,是真正STEAM教育理念的早期教育践行者,将S科学、T技术、E工程、M数学和A艺术五大学科融合起来进行综合教育。课程内容涉及到物理、化学、天文、生物技术、量子力学、建筑工程等学科内容,让孩子在探索体验中,得到科学启蒙。"
      },
      {
        iconImg: steamp2img,
        title: "游戏化教学",
        text: "生动有趣的游戏,总是能吸引孩子的注意,使孩子时刻保持兴奋、愉悦的精神状态。STEAM将化身为S博士、T工程师、E技术员、A艺术家、M数学家,每一个角色都会有特定的服装、道具、人设、动作。以游戏形式进入STEAM课堂教学中,再结合先进教玩具、教具,注重动手操作,寓教于玩,使抽象枯燥的内容变得让孩子乐于接受,营造出轻松自如的学习环境。"
      },
      {
        iconImg: steamp3img,
        title: "多元化教学资源",
        text: "结合教学内容,我们为孩子准备了拼搭类、化学类、物理类、生物类、工程类等多样的教玩具,包含各种试管、放大镜、显微镜、积木、电路板、VR、电子互动等产品。调动幼儿的多感官参与的特征,将抽象和难以理解的内容变得具体化和易于理解,吸引孩子的注意力,唤起高涨的学习情绪。"
      },
      {
        iconImg: steamp4img,
        title: "思维导图融入家庭教学",
        text: "思维导图是老师对课程进行全方位和系统的分析和描述。思维导图明确S、T、E、A、M五门学科在一节课中的运用,老师会课后向家长进行展示和讲解,让家长对课堂所学一目了然。再让思维导图融入到家庭教育中,让家长在课后更轻松有效的陪孩子进行复习巩固。"
      }
    ]
  },
  {
    title: "嘻游记",
    value: "6",
    title_en: "Outdoor Activity",
    imgsrc: xyjimg,
    descriptionTitle: "豚宝宝·Outdoor Activity嘻游记",
    descriptionSubTitle: "——专属于1-6岁宝宝的户外探索体验课",
    bgColor: "#e0ffff",
    borderColor: "#009999",
    text: ["“自然缺失症”这一概念,由美国记者兼儿童权益倡导者理查德·洛夫在《林间最后的小孩》一书中提出。自然缺失症不是一种需要医生诊断或需要服药治疗的病症,而是当今社会的一种危险的现象,即儿童在大自然中度过的时间越来越少,从而导致了一系列行为和心理上的问题。",
      "针对这样的现象,医生和专家都呼吁,父母要多带孩子到户外进行科学探索活动,让孩子接触多元的环境,开阔视野,接触大自然。激发孩子的求知欲,同时增进亲子之间的感情,让孩子爱上户外活动。"],
    subText: [
      {
        iconImg: xyjp1img,
        title: "丰富的户外场景",
        text: "活动种类丰富,带领孩子去到农庄、博物馆、动物园、森林等场景,不同于室内教室,户外的活动场景更加真实,天然,宽广,且具有变化,场景中都是实物,宝宝可以通过直接触摸、闻嗅、品尝等方式认识这些实物的形状、味道及颜色。"
      },
      {
        iconImg: xyjp2img,
        title: "游戏化学习",
        text: "活动老师会在每场活动扮演活动主题人物,引导孩子进入活动场景。"
      },
      {
        iconImg: xyjp3img,
        title: "五星级贴心服务",
        text: "嘻游记全程有专门的豚宝宝活动老师带队,专业的摄影跟拍,贴心准备豚宝宝小药箱和百宝箱,全程保障宝宝的健康安全。"
      },
      {
        iconImg: xyjp4img,
        title: "高质量亲子陪伴",
        text: "解决周末带娃难题,为家长和孩子创造高质量的亲子陪伴时光。"
      }
    ]
  },
]

export default function CourseDetail() {
  const matches = useMediaQuery('(min-width:900px)');

  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <SliderBox>
        <CarouselItem alt='1' width="100%" src={bannar1} />
      </SliderBox>
      <Container maxWidth='lg'>

        <SectionModule>
          <SectionTitle>
            <span style={{ display: "block" }}>豚宝宝教育理念</span>
            <span className={classes.sectionDivider}></span>
          </SectionTitle>
          <div>

          </div>
          <SectionContent>

            <Grid container >
              <Grid item xs={3} sm={3} md={3}>
                <img src={haitunimg} alt="" width="100%" />
              </Grid>
              <Grid item xs={9} sm={9} md={9}>
                <div className={classes.companyIntro}>
                  <p className={classes.companyIntroP}>
                    豚宝宝坚持“遵循天性,科学育儿”的育儿理念,以世界领先的“脑科学”为依据,结合孩子的关键期和敏感期,用游戏化教学手法,在适合的时候给予孩子适合的教育,孩子在这里不但能快乐成长,更能快乐成才。
                  </p>
                </div>
              </Grid>
            </Grid>

          </SectionContent>

        </SectionModule>

        <SectionModule>
          <SectionTitle>
            <span style={{ display: "block" }}>豚宝宝5+1课程体系</span>
            <span className={classes.sectionDivider}></span>
          </SectionTitle>
          <div>

          </div>
          <SectionContent>
            <Grid container >
              <Grid item xs={12} sm={12} md={12}>
                <img
                  src={kctximg} alt=""
                  className={classes.kctxImg}
                />
              </Grid>
            </Grid>
          </SectionContent>

          <SectionContent>
            <TabContext value={value}>
              <AntTabs
                onChange={handleChange}
                centered={matches ? true : false}
                variant={matches ? undefined : "scrollable"}
                scrollButtons={matches ? undefined : "on"}
                value={value}
                style={{ backgroundColor: "#eae5e5" }}
                TabIndicatorProps={{
                  style: {
                    height: "0px",
                  },
                  children:
                    <div
                      style={{
                        position: "absolute",
                        borderLeft: "30px solid transparent",
                        borderRight: "30px solid transparent",
                        borderBottom: "40px solid #fff",
                        width: "0px",
                        height: "0px",
                        left: "30%"
                      }}
                    />

                }}
              >
                {courseList.map(item => {
                  return (<AntTab
                    key={item.value}
                    label={
                      <div
                        style={{
                          borderBottom: value === item.value ? "3px solid #fff" : "3px solid #33ccff",
                          color: value === item.value ? "#fff" : "#000",
                        }}
                        className={classes.tabLable}
                      >
                        <div
                          className={classes.tabTitle}
                        >{item.title}</div>
                        <div
                          className={classes.tabTitleen}
                        >{item.title_en}</div>
                      </div>}
                    value={item.value}
                    style={{
                      backgroundColor: value === item.value ? item.borderColor : "",
                    }}
                  />
                  )
                }
                )
                }
              </AntTabs>
              <div style={{ marginTop: "2rem" }}>
                {courseList.map(item => {

                  return (
                    <TabPanel
                      key={item.value}
                      value={item.value}
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "3rem",
                        padding: "5%"
                      }}
                    >
                      <Grid container >
                        <Grid item xs={12} sm={12} md={6} className={classes.tabImg}>
                          <img src={item.imgsrc} width="100%" alt="" style={{ borderRadius: "10px" }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                          <div className={classes.description}>
                            <div
                              className={classes.descriptionTitle}
                              style={{
                                color: item.borderColor,
                              }}>{item.descriptionTitle}</div>
                            <div className={classes.descriptionSubTitle}>{item.descriptionSubTitle}</div>
                            <div className={classes.descriptionText}>
                              {item.text.map(textitem => {
                                return <div className={classes.descriptionTextItem} key={textitem}>{textitem}</div>
                              })}
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        spacing={3}
                        style={{
                          marginTop: "2rem"
                        }}>
                        {
                          item.subText.map(subitem => {
                            return (
                              <Grid
                                key={subitem.title}
                                item xs={12} sm={6} md={3} >
                                <div
                                  className={classes.subItemStyle}
                                  style={{
                                    border: "2px solid " + item.borderColor,
                                  }}
                                >
                                  <div style={{ textAlign: "center" }}>
                                    <img src={subitem.iconImg} alt="" className={classes.subItemImgStyle} />
                                  </div>
                                  <div className={classes.descriptionChildrenTitle}
                                    style={{ color: item.borderColor }}
                                  >{subitem.title}</div>
                                  <div className={classes.descriptionChildrenText}>{subitem.text}</div>
                                </div>
                              </Grid>
                            )
                          })
                        }

                      </Grid>
                    </TabPanel>)
                })}
              </div>
            </TabContext>
          </SectionContent>
        </SectionModule>


      </Container>
    </>
  );
}
