import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid' 
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";
import Carousel from "nuka-carousel";
import { blue } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';
import Zmage from 'react-zmage'

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
  height: 400,
  "& .slick-slider": {
    height: "100%",
  },
});
const CarouselItem = styled("img")({
  objectFit: "cover",
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
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
          <CarouselItem alt='1' height='400px' src={bannar1} />
          <CarouselItem alt='1' height='400px' src={bannar1} />
        </Carousel>
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
                        borderBottom: "30px solid #f0f8ff",
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
                          margin: "1.0rem 0",
                          paddingBottom: "0.5rem",
                          color: value === item.value ? "#fff" : "#000",
                          minWidth:"6.0rem"
                        }}
                      >
                        <div
                          style={{ fontSize: "1.3rem", fontWeight: "1000", lineHeight: "1.5rem" }}
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
              <div>
                {picList.map(item => {

                  return (
                    <TabPanel
                      key={item.value}
                      value={item.value}
                      style={{
                        backgroundColor: "#f0f8ff",
                        borderRadius: "2rem",
                        marginTop:"2%",
                        padding: "0% 5%"
                      }}
                    >
                      <Grid
                        container
                        spacing={3}
                      >
                        {
                          item.picList.map((subitem, index) => {
                            return (
                              <Grid
                                key={index}
                                item xs={12} sm={12} md={4} >
                                <div style={{
                                  padding: "2% 5%",
                                  height: "100%"
                                }}>
                                  <Zmage
                                    controller={{ 
                                      close: true, 
                                      zoom: false, 
                                      download: false, 
                                      rotate: false, 
                                      flip: false, 
                                      pagination: false,
                                    }}
                                    backdrop="#ffffff99"
                                    edge={200}
                                    radius={5}
                                    src={subitem}
                                    width="100%"
                                    style={{
                                      borderRadius: "1rem",
                                    }} />
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
