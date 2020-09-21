import { Box, Container, Divider, Grid, styled, Typography } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { ReactComponent as Wechat } from "../assets/wechat.svg";
import { ReactComponent as Weibo } from "../assets/weibo.svg";
import React from "react";

const BgBox = styled(Box)({
  backgroundColor: grey[100],
});

const FtItem = styled(Typography)({
  fontSize: (props) => (props.main ? "1.2rem" : "0.85rem"),
  fontWeight: 500,
  width: "fit-content",
  "&:hover": {
    transition: "all .3s ease-in-out 0s",
    color: (props) => (props.link ? blue[400] : "unset"),
    cursor: (props) => (props.link ? "pointer" : "default"),
  },
});

const SocialIcon = styled(Box)({
  marginRight: 12,
  display: "inline",
  "& svg:hover": {
    fill: blue[400],
    transition: "all .3s ease-in-out 0s",
    cursor: "pointer",
  },
});

function Footer() {
  return (
    <BgBox>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <FtItem main={1} component='p'>
              公司地址
            </FtItem>
            <FtItem component='p'>中国合肥市政务区</FtItem>
            <FtItem component='p'>翡翠路1118号安徽出版集团6楼</FtItem>
            <FtItem component='p'>电话：（+86）551-6353-3403</FtItem>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FtItem main={1} component='p'>
              联系我们
            </FtItem>
            <FtItem link={1} component='p'>
              加盟合作
            </FtItem>
            <FtItem link={1} component='p'>
              工作机会
            </FtItem>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FtItem main={1} component='p'>
              相关产品与平台
            </FtItem>
            <FtItem link={1} component='p'>
              豚宝宝幼儿园解决方案
            </FtItem>
            <FtItem link={1} component='p'>
              豚宝宝早教方案
            </FtItem>
            <FtItem link={1} component='p'>
              豚宝宝妙趣周边
            </FtItem>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FtItem main={1} component='p'>
              关注我们
            </FtItem>
            <SocialIcon>
              <Weibo fill='black' width={48} height={48} />
            </SocialIcon>
            <SocialIcon>
              <Wechat fill='black' width={48} height={48} />
            </SocialIcon>
          </Grid>
        </Grid>
        <Divider />
        <Typography style={{ padding: "12px 0px 6px" }} variant='body2' color='textSecondary' align='center'>
          版权所有 © {new Date().getFullYear()} 安徽时代漫游文化传媒股份有限公司
        </Typography>
        <Typography style={{ padding: "6px 0px 6px" }} variant='body2' color='textSecondary' align='center'>
          网络出版服务许可证: （署）网出证（皖）字第010号
        </Typography>
        <Typography style={{ padding: "6px 0px 12px" }} variant='body2' color='textSecondary' align='center'>
          ICP备案: 皖B2-20080043-1
        </Typography>
      </Container>
    </BgBox>
  );
}

export default Footer;
