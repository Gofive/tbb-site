import { Box, styled } from "@material-ui/core";
import React from "react";

 

const SectionModuleStyle = styled(Box)({
    "@media (max-width: 900px)": {
        marginTop: "3.0rem",
        marginBottom: "3.0rem"
    },
    "@media (min-width: 901px)": {
        marginTop: "5.0rem",
        marginBottom: "5.0rem"
    },
    
});

const SectionTitleStyle = styled(Box)({
    textAlign: "center",
    fontWeight: "1000",
    "@media (max-width: 900px)": {
        fontSize: "1.6rem",
        letterSpacing: "0.16rem",
    },
    "@media (min-width: 901px)": {
        fontSize: "2.4rem",
        letterSpacing: "0.24rem",
    },
});

const SectionSubTitleStyle = styled(Box)({
    textAlign: "center",
    fontWeight: "700",
    "@media (max-width: 900px)": {
        fontSize: "1.2rem",
        letterSpacing: "0.12rem",
    },
    "@media (min-width: 901px)": {
        fontSize: "1.5rem",
        letterSpacing: "0.15rem",
    },
});

const SectionContentStyle = styled(Box)({
    
    "@media (max-width: 900px)": {
        marginTop: "2rem"
    },
    "@media (min-width: 901px)": {
        marginTop: "3rem"
    },
});


export function SectionModule({ children, ...props }) {
    return <SectionModuleStyle {...props}>{children}</SectionModuleStyle>;
}
export function SectionTitle({ children, ...props }) {
    return <SectionTitleStyle {...props}>{children}</SectionTitleStyle>;
}
export function SectionSubTitle({ children, ...props }) {
    return <SectionSubTitleStyle {...props}>{children}</SectionSubTitleStyle>;
}
export function SectionContent({ children, ...props }) {
    return <SectionContentStyle {...props}>{children}</SectionContentStyle>;
}

