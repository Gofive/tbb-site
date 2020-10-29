import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";
import Carousel from "nuka-carousel";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import { Player } from 'video-react';
import { navigate } from "gatsby";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { SectionModule, SectionTitle, SectionSubTitle, SectionContent } from '../../components/SectionModule'


import bannar1 from '../../assets/school/banner1.jpg'
import bannar2 from '../../assets/school/banner2.jpg'
import bannar3 from '../../assets/school/banner3.jpg'
import videourl from '../../assets/school/zxjs.mp4'

import hlkimg from '../../assets/school/hlk.jpg'
import yyimg from '../../assets/school/yyk.jpg'
import ysimg from '../../assets/school/ysk.jpg'
import yyqsimg from '../../assets/school/yyqs.jpg'
import steamimg from '../../assets/school/steam.jpg'
import xyjimg from '../../assets/school/xyj.jpg'

import wdjsimg from "../../assets/school/wdjs.jpg"
import jcsjimg from "../../assets/school/jcsj.jpg"

import honor1img from "../../assets/school/honor/1.png"
import honor2img from "../../assets/school/honor/2.png"
import honor3img from "../../assets/school/honor/3.png"
import honor4img from "../../assets/school/honor/4.png"
import honor5img from "../../assets/school/honor/5.png"
import honor6img from "../../assets/school/honor/6.png"
import honor7img from "../../assets/school/honor/7.png"
import honor8img from "../../assets/school/honor/8.png"
import honor9img from "../../assets/school/honor/9.png"
import honor10img from "../../assets/school/honor/10.png"
import honor11img from "../../assets/school/honor/11.png"
import honor12img from "../../assets/school/honor/12.png"


import wechatimg from "../../assets/school/wechat.jpg"

import 'video-react/dist/video-react.css';


const useStyles = makeStyles({

  companyIntro: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "#f0f6fb",
    height: "100%",
    color: "#000a",

    "@media (max-width: 900px)": {

      fontSize: "0.7rem",
      letterSpacing: "0.1rem",
      lineHeight: "1.2rem",
    },
    "@media (min-width: 901px)": {

      fontSize: "1.4rem",
      letterSpacing: "0.16rem",
      lineHeight: "2.8rem",
    },
  },
  companyIntroP: {
    "@media (max-width: 900px)": {
      padding: "0 0%",
    },
    "@media (min-width: 901px)": {
      padding: "0 10%",
    },

  },

  card: {
    maxWidth: 350,
    margin: "0px auto 35px auto",
    border: "0",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    backgroundColor: "#fafafa",
    cursor: "pointer"

  },
  img: {
    "@media (max-width: 900px)": {
      height: 250,
    },
    "@media (min-width: 901px)": {
      height: 300,
    },
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
    "@media (max-width: 900px)": {
      height: 250,
    },
    "@media (min-width: 901px)": {
      height: 400,
    },
    
  },
  title: {
    fontWeight: 1000,
    color: "#33ccff",
    textAlign: "center",

    "@media (max-width: 900px)": {
      fontSize: "1.3rem",
      letterSpacing: "0.13rem",
    },
    "@media (min-width: 901px)": {
      fontSize: "1.5rem",
      letterSpacing: "0.15rem",
    },
  },
  description: {
    color: "#33ccff",
    textAlign: "center",
    fontSize: "1.1rem",
    letterSpacing: "0.11rem",
  },
  descriptiontext: {
    fontWeight: 400,
    fontSize: "1.0rem",
    letterSpacing: "0.1rem",
    lineHeight: "1.5rem"
  },

});


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
  cursor: "default",
  "@media (max-width: 900px)": {
    height: "200px"
  },
  "@media (min-width: 900px)": {
    height: "400px"
  },
});

const FixedBox = styled(Box)({
  position: "fixed",
  float: "right",
  top: "55vh",
  width: "100%",
  "@media (max-width: 900px)": {
    visibility: "hidden"
  },
});


const courseList = [
  {
    imgsrc: hlkimg,
    title: "欢乐课",
    description: "6-36个月宝宝的感统体适能训练课",
    text: "双语教学，通过设置6大主题游戏，学习12个基础动作，在运动游戏中培养孩子的语言、体能、智能、心理等多方面发展。",
  },
  {
    imgsrc: yyimg,
    title: "音乐课",
    description: "1-3岁宝宝的音乐启蒙和感知训练课",
    text: "双语教学，48种经典奥尔夫音乐教具，五大洲12个主题国家的音乐风格，5个全球知名音乐歌手，3个经典百老汇音乐剧，培养孩子的乐感、记忆力、表现力和语言能力。",
  },
  {
    imgsrc: ysimg,
    title: "艺术课",
    description: "1.5-6岁宝宝的艺术创意课",
    text: "24种自然艺术，48个世界大师作品，涵盖涂鸦，拼贴，绘画，泥塑等艺术表现方式，激发孩子对艺术的兴趣，培养孩子的专注力、想象力、主动性和艺术细胞。",
  },
  {
    imgsrc: yyqsimg,
    title: "语言情商",
    description: "2-6岁宝宝的语言、社交（情商）课",
    text: "160组汉语言词汇认知和应用、12篇经典诗词古文、18场主题情景社交模拟场景、80本儿童经典绘本阅读、4场戏剧表演，让孩子在实践活动、角色扮演及情景模拟中感受语言情商学习和使用的乐趣。",
  },
  {
    imgsrc: steamimg,
    title: "STEAM实验室",
    description: "2.5-6岁宝宝的科学启蒙课",
    text: "课程引入国际先进的STEAM教育理念，将科学、技术、工程、艺术和数学进行跨学科融合，通过项目探究的综合创新形式，培养孩子如同科学家一样的探究意识，建立好奇心，培养孩子发现问题、独立思考、动手创造、沟通合作及解决问题的综合能力。",
  },
  {
    imgsrc: xyjimg,
    title: "嘻游记",
    description: "1-6岁宝宝的户外探索体验课",
    text: "豚宝宝户外科学探索活动，提倡带领孩子“跳出课堂 走向户外”，设置“科学小课堂”“科学实验室”“豚宝宝朗读者”等多种环节，让孩子接触多元的环境，开阔视野。",
  }
]

const centerList = [
  {
    imgsrc: wdjsimg,
    title: "我们的教室",
    url: "/school/wmdjs"
  },
  {
    imgsrc: jcsjimg,
    title: "精彩瞬间",
    url: "/school/jcsj"
  },

]

const honorList = [
  honor1img,
  honor2img,
  honor3img,
  honor4img,
  honor5img,
  honor6img,
  honor7img,
  honor8img,
  honor9img,
  honor10img,
  honor11img,
  honor12img,

]
export default function School() {
  const classes = useStyles();
  return (
    <>
      <SliderBox>
        <Carousel
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          autoplay
          wrapAround
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: blue[400],
              outline: "none",
            },
          }}>
          <CarouselItem alt='1' src={bannar1} />
          <CarouselItem alt='2' src={bannar2} />
          <CarouselItem alt='3' src={bannar3} />
        </Carousel>
      </SliderBox>
      <FixedBox>
        <div style={{
          float: "right",
          border: "0.1rem solid #33ccff",
          borderRadius: "1rem",
          width: "120px",
          backgroundColor: "#fff",
          textAlign: "center",
          color: "#000",
          fontWeight: "600",
          fontSize: "0.8rem",
          padding: "10px 3px",

        }}>
          <img src={wechatimg} width="90%" alt="" style={{ textAlign: "center", padding: "5px" }} />
          <div>招商热线</div>
          <div>0551-63533400</div>
        </div>
      </FixedBox>
      <Container maxWidth='lg'>

        <SectionModule>
          <Grid container >
            <Grid item xs={12} sm={12} md={8}>
              <Player autoPlay={true}>
                <source src={videourl} />
              </Player>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className={classes.companyIntro}>
                <p className={classes.companyIntroP} >
                  豚宝宝成长中心隶属于大型国有出版企业安徽出版集团（A股代码：600551），豚宝宝品牌专注于为 0-6 岁中国亲子家庭提供早期教育全产业链服务，是早期教育领域的国家队。
                </p>
              </div>
            </Grid>
          </Grid>
        </SectionModule>

        <SectionModule>
          <SectionTitle>
            <span> 豚宝宝5+1课程体系</span>
          </SectionTitle>
          <SectionContent>

            <Grid container >
              {
                courseList.map(item => {
                  return (
                    <Grid item xs={12} sm={4} md={4} key={item.title}>
                      <Card className={classes.card} onClick={() => navigate("/school/coursedetail")} >
                        <CardMedia
                          className={classes.img}
                          image={item.imgsrc}
                        />
                        <CardContent>
                          <Typography className={classes.title} variant="h5" component="h5">
                            {item.title}
                          </Typography>
                          <Typography className={classes.description} gutterBottom variant="h6" component="p">
                            {item.description}
                          </Typography>
                          <Typography className={classes.descriptiontext} variant="body2" color="textSecondary" component="p">
                            {item.text}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  )

                })
              }
            </Grid>
          </SectionContent>
        </SectionModule>
        <SectionModule>
          <SectionTitle>
            <span>宝贝的成长中心</span>
          </SectionTitle>
          <SectionContent>

            <Grid container spacing={3}>
              {
                centerList.map(item => {
                  return (
                    <Grid item xs={12} sm={6} md={6} key={item.title}>
                      <Card className={classes.zxcard}>
                        <CardActionArea
                          onClick={() => navigate(item.url)}
                        >
                          <CardMedia
                            className={classes.zximg}
                            image={item.imgsrc} 
                          />
                          <CardContent>
                            <Typography className={classes.title} variant="h5" component="h5">
                              {item.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                })
              }
            </Grid>
          </SectionContent>
        </SectionModule>
        <SectionModule>
          <SectionTitle>
            <span>豚宝宝共获43项大奖</span>
            <SectionSubTitle>其中<span style={{ color: "#ff9933" }}>27项</span>为国家级奖项，<span style={{ color: "#ff9933" }}>16项</span>为省一级奖项</SectionSubTitle>
          </SectionTitle>
          <SectionContent>
            <div>
              <Grid container spacing={4}>
                {
                  honorList.map(item => {
                    return (
                      <Grid item xs={6} sm={4} md={3} key={item} style={{ textAlign: "center" }}>
                        <img
                          src={item}
                          width="90%"
                          alt=""
                          style={{
                            borderRadius: "1rem",
                            border: "0.06rem solid #33ccff",
                            backgroundColor: "#f0f6fb"
                          }}
                        />
                      </Grid>
                    )
                  })
                }
              </Grid>
            </div>
          </SectionContent>
        </SectionModule>

      </Container>
    </>
  );
}
