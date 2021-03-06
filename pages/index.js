import Head from "next/head";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Avatar from "@mui/material/Avatar";
import { Typography, Container } from "@mui/material";
// import Image from "next/image";
import SignUp from "../components/SignUp/SignUp";
import styles from "../styles/Home.module.css";
import BlogCards from "../components/Cards/BlogCard";
import Grid from "@mui/material/Grid";
// import User from "../components/User/User";

export default function Home(props) {
  const { t } = useTranslation("home");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <SignUp /> */}
      <Grid container rowSpacing={3} columnSpacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BlogCards />
        </Grid>
      </Grid>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  // const initialI18nStore = {
  //   languages: ["en", "uz"],
  //   language: "en",
  //   fallbackLng: "en",
  //   otherLanguages: ["uz"],
  //   localeSubpaths: {
  //     en: "en",
  //     uz: "uz",
  //   },
  //   defaultNS: "common",
  //   ns: ["common"],
  //   defaultNS: "common",
  //   debug: false,
  //   backend: {
  //     loadPath: "locales/{{lng}}/{{ns}}.json",
  //   },
  // };

  // const { i18n } = serverSideTranslations(initialI18nStore);

  // const common = await import(`../locales/common.json`);
  // const en = await import(`../locales/en.json`);
  // const uz = await import(`../locales/uz.json`);

  // i18n.addResourceBundle("en", "common", common.default);
  // i18n.addResourceBundle("en", "common", en.default);
  // i18n.addResourceBundle("uz", "common", uz.default);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
};
