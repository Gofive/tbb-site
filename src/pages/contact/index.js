import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { SectionModule, SectionTitle, SectionContent } from '../../components/SectionModule'
import Divider from '@material-ui/core/Divider';


import tel1 from "../../assets/contact/tel1.png"
import tel2 from "../../assets/contact/tel2.png"
import wechatimg from "../../assets/contact/wechat.png"
import chubanjituan from "../../assets/contact/chubanjituan.jpg"
import zhengdadian from "../../assets/contact/zhengdadian.jpg"
import zhididian from "../../assets/contact/zhididian.jpg"



const useStyles = makeStyles({
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
  title: {
    "@media (max-width: 900px)": {
      fontWeight: "1000",
      textAlign: "center",
      color: "#33ccff",
      fontSize: "1.2rem",
      letterSpacing: "0.1rem",
      lineHeight: "2.0rem",
      marginTop: "2rem",
    },
    "@media (min-width: 901px)": {
      fontWeight: "1000",
      textAlign: "center",
      color: "#33ccff",
      fontSize: "1.9rem",
      letterSpacing: "0.1rem",
      lineHeight: "3.0rem",
      marginTop: "5rem"
    },

  },
  address: {
    "@media (max-width: 900px)": {
      fontWeight: "500",
      textAlign: "center",
      color: "#000",
      fontSize: "0.5rem",
      letterSpacing: "0.1rem",
      lineHeight: "1.0rem"
    },
    "@media (min-width: 901px)": {
      fontWeight: "500",
      textAlign: "center",
      color: "#000",
      fontSize: "1.3rem",
      letterSpacing: "0.1rem",
      lineHeight: "3.5rem"
    },
  },
  telephone: {
    "@media (max-width: 900px)": {
      fontWeight: "500",
      textAlign: "center",
      color: "#000",
      fontSize: "0.5rem",
      letterSpacing: "0.1rem",
      lineHeight: "1.0rem"
    },
    "@media (min-width: 901px)": {
      fontWeight: "500",
      textAlign: "center",
      color: "#000",
      fontSize: "1.3rem",
      letterSpacing: "0.1rem",
      lineHeight: "2.0rem"
    },
  },
  addressImg: {
    "@media (max-width: 900px)": {
      marginTop: "0.5rem",
      maxWidth: "45rem",
      textAlign: "center",
      margin: "0 auto"
    },
    "@media (min-width: 901px)": {
      marginTop: "0.5rem",
      maxWidth: "45rem",
      textAlign: "center",
      margin: "0 auto",
      marginBottom: "6rem"
    },
  },
  xiaochengxu: {
    
    "@media (max-width: 900px)": {
      fontSize: "0.8rem",
      fontWeight: "500"
    },
    "@media (min-width: 901px)": {
      fontSize: "1.2rem",
      fontWeight: "500"
    },
  },
  lijiewomen: {
    "@media (max-width: 900px)": {
      fontSize: "0.8rem",
      fontWeight: "800"
    },
    "@media (min-width: 901px)": {
      fontSize: "1.3rem",
      fontWeight: "800"
    },
  }



});

const infoList = [
  {
    title: "豚宝宝总部",
    address: "地址：安徽省合肥市政务区祁门路1118号安徽出版集团6楼",
    telphone: "电话：0551-63533400",
    addressImg: chubanjituan
  },
  {
    title: "豚宝宝置地校区",
    address: "地址：安徽省合肥市政务区怀宁路288号置地广场D座1层（内广场）",
    telphone: "电话：0551-63539599",
    addressImg: zhididian
  }
  ,
  {
    title: "豚宝宝正大校区",
    address: "地址：安徽省合肥市经开区金寨路与芙蓉路交口正大广场3F（3号电梯旁）",
    telphone: "电话：0551-64376199",
    addressImg: zhengdadian
  }

]
export default function Contact() {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <SectionModule>
        <SectionTitle>
          <span style={{ display: "block" }}>联系我们</span>
          <span className={classes.sectionDivider}></span>
        </SectionTitle>
        <div>
        </div>
        {
          infoList.map(
            item => {
              return (
                <SectionContent>
                  <div className={classes.title}>
                    &bull;{item.title}&bull;
                </div>
                  <div className={classes.address}>
                    {item.address}
                  </div>
                  <div className={classes.telephone}>
                    {item.telphone}
                  </div>
                  <div className={classes.addressImg}>
                    <img src={item.addressImg} width="100%" alt="" />
                  </div>
                </SectionContent>
              )
            }
          )
        }


      </SectionModule>

      <SectionTitle>
        <span style={{ display: "block" }}>了解我们</span>
        <span className={classes.sectionDivider}></span>
      </SectionTitle>
      <Grid container justify="center" alignItems="center" style={{ maxWidth: "50rem", margin: "0 auto", marginTop: "3rem"  }}>
        <Grid item xs={4} sm={4} style={{ textAlign: "center", padding: "2%",borderRight:"1px solid #0002" }}>
          <img
            src={wechatimg}
            width="70%"
            alt=""
            style={{
              borderRadius: "1rem",
            }}
          />
          <div className={classes.xiaochengxu}>豚宝宝小程序</div>
        </Grid> 

        <Grid item xs={4} sm={4} style={{ textAlign: "center", padding: "2%" ,borderRight:"1px solid #0002" }}>
          <img
            src={tel1}
            width="70%"
            alt=""
          />
          <div className={classes.lijiewomen}>0551-63539599</div>
        </Grid>
 
        <Grid item xs={4} sm={4} style={{ textAlign: "center", padding: "2%" }}>
          <img
            src={tel2}
            width="70%"
            alt=""
          />
          <div className={classes.lijiewomen}>0551-63533400</div>
        </Grid>
      </Grid>
    </Container>
  );
}
