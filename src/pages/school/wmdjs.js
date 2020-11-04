import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';


import { SectionModule, SectionContent } from '../../components/SectionModule'

import bannar1 from '../../assets/school/wmdjs/top.jpg'

import js1img from '../../assets/school/wmdjs/js/1.jpg'
import js2img from '../../assets/school/wmdjs/js/2.jpg'
import js3img from '../../assets/school/wmdjs/js/3.jpg'
import js4img from '../../assets/school/wmdjs/js/4.jpg'
import js5img from '../../assets/school/wmdjs/js/5.jpg'
import js6img from '../../assets/school/wmdjs/js/6.jpg'

import xsf1img from '../../assets/school/wmdjs/xsf/1.jpg' 
import xsf3img from '../../assets/school/wmdjs/xsf/3.jpg'
import xsf4img from '../../assets/school/wmdjs/xsf/4.jpg'




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
    padding: "1% 2%"
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


const jsList = [
  js1img,
  js2img,
  js3img,
  js4img,
  js5img,
  js6img,
]
const xsfList = [
  xsf1img, 
  xsf3img,
  xsf4img,
]

const picList = [
  {
    title: "教室",
    value: "1",
    picList: jsList
  },

  {
    title: "小书房",
    value: "2",
    picList: xsfList
  },

]

export default function WmdjsDetail() {

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

                }}>
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
                              <div className={classes.tabImg}>
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
