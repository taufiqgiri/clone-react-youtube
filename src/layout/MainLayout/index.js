import React from "react";
import { TopBar } from "../../components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: '#202020',
    width: '100vw',
    height: '100vh'
  }
});

export default function MainLayout({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
    </div>
  )
}