import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';

import { SectionModule, SectionContent } from '../../components/SectionModule'


import bannar1 from '../../assets/school/jcsj/top.jpg'

import zjkt1img from '../../assets/school/jcsj/zjkt/1.jpg'
import zjkt2img from '../../assets/school/jcsj/zjkt/2.jpg'
import zjkt3img from '../../assets/school/jcsj/zjkt/3.jpg'
import zjkt4img from '../../assets/school/jcsj/zjkt/4.jpg'
import zjkt5img from '../../assets/school/jcsj/zjkt/5.jpg'
import zjkt6img from '../../assets/school/jcsj/zjkt/6.jpg'
import zjkt7img from '../../assets/school/jcsj/zjkt/7.jpg'
import zjkt8img from '../../assets/school/jcsj/zjkt/8.jpg'
import zjkt9img from '../../assets/school/jcsj/zjkt/9.jpg'

import xyj1img from '../../assets/school/jcsj/xyj/1.jpg'
import xyj2img from '../../assets/school/jcsj/xyj/2.jpg'
import xyj3img from '../../assets/school/jcsj/xyj/3.jpg'
import xyj4img from '../../assets/school/jcsj/xyj/4.jpg'
import xyj5img from '../../assets/school/jcsj/xyj/5.jpg'
import xyj6img from '../../assets/school/jcsj/xyj/6.jpg'
import xyj7img from '../../assets/school/jcsj/xyj/7.jpg'
import xyj8img from '../../assets/school/jcsj/xyj/8.jpg'
import xyj9img from '../../assets/school/jcsj/xyj/9.jpg'

import pxhd1img from '../../assets/school/jcsj/pxhd/1.jpg'
import pxhd2img from '../../assets/school/jcsj/pxhd/2.jpg'
import pxhd3img from '../../assets/school/jcsj/pxhd/3.jpg'
import pxhd4img from '../../assets/school/jcsj/pxhd/4.jpg'





const useStyles = makeStyles({
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
      fontSize: "0.6rem",
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
      padding: "2% 2%"
    },
    "@media (min-width: 901px)": {
      padding: "2% 5%"
    },
  },
})

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
    backgroundColor: "#33ccff"
  },
}))((props) => <Tab disableRipple {...props} />);

const AntTabs = withStyles({


  "@media (max-width: 900px)": {
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    scroller: {
      overflow: "hidden !important"
    }
  },
  "@media (min-width: 901px)": {
    root: {
      borderBottom: '1px solid #e8e8e8',
      overflow: "visible",
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


const zjktList = [
  zjkt1img,
  zjkt2img,
  zjkt3img,
  zjkt4img,
  zjkt5img,
  zjkt6img,
  zjkt7img,
  zjkt8img,
  zjkt9img,
]
const xyjList = [
  xyj1img,
  xyj2img,
  xyj3img,
  xyj4img,
  xyj5img,
  xyj6img,
  xyj7img,
  xyj8img,
  xyj9img,
]
const pxhdList = [
  pxhd1img,
  pxhd2img,
  pxhd3img,
  pxhd4img,
]

const picList = [
  {
    title: "早教课堂",
    value: "1",
    picList: zjktList
  },

  {
    title: "嘻游记",
    value: "2",
    picList: xyjList
  },

  {
    title: "品宣活动",
    value: "3",
    picList: pxhdList
  }
]

export default function JcsjDetail() {

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
          <SectionContent>
            <TabContext value={value}>
              <AntTabs
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleChange}
                value={value}
                style={{ backgroundColor: "#eae5e5", }}
                TabIndicatorProps={{
                  style: {
                    height: "0px",
                  },
                  children:
                    <div
                      style={{
                        position: "absolute",
                        borderLeft: "20px solid transparent",
                        borderRight: "20px solid transparent",
                        borderBottom: "30px solid #f0f6fb",
                        width: "0px",
                        height: "0px",
                        left: "30%"
                      }}
                    />

                }}
              >
                {picList.map(item => {

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
                      </div>}
                    value={item.value}
                    style={{
                      backgroundColor: value === item.value ? "33ccff" : "",
                    }}
                  />
                  )
                }
                )
                }
              </AntTabs>
              {picList.map(item => {

                return (
                  <TabPanel
                    key={item.value}
                    value={item.value}
                    style={{
                      backgroundColor: "#f0f6fb",
                      borderRadius: "2rem",
                      marginTop: "2%"
                    }}
                  >
                    <Grid
                      container
                      spacing={3}
                      style={{
                        padding: "0% 2%"
                      }}
                    >
                      {
                        item.picList.map((subitem, index) => {
                          return (
                            <Grid
                              key={index}
                              item xs={12} sm={12} md={4} >
                              <div
                                className={classes.tabImg}>
                                <Zoom
                                  zoomMargin={100}
                                  transitionDuration={200}
                                  overlayBgColorEnd="rgba(255, 255, 255, 0.85)"
                                >
                                  <img
                                    alt=""
                                    src={subitem}
                                    width="100%"
                                    style={{
                                      borderRadius: "1rem",
                                    }} />
                                </Zoom>
                              </div>
                            </Grid>
                          )
                        })
                      }

                    </Grid>
                  </TabPanel>)
              })}
            </TabContext>
          </SectionContent>
        </SectionModule>


      </Container>
    </>
  );
}
