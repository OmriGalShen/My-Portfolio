import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Contact.css";
import { contactList } from "./contactList";
import uuid4 from "uuid";

const displayList = contactList.map(item => {
  return (
    <div key={uuid4()} className="list-item">
      <i
        className={item.icon}
        aria-hidden="true"
        style={{ color: item.color }}
      />
      <p>{item.info}</p>
    </div>
  );
});

const ContactSection = () => {
  return (
    <Grid container className="contact-section">
      <Grid item xs={12}>
        <div>
          <h1 className="contact-title">Contact Me</h1>
          <hr />
        </div>
      </Grid>
      <Grid item md={1} xs={false}></Grid>
      <Grid item md={9} xs={12}>
        <div className="contact-list">{displayList}</div>
      </Grid>
      <Grid item md={3} xs={false}></Grid>
    </Grid>
  );
};

export default ContactSection;
