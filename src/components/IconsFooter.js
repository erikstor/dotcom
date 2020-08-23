import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Facebook} from "@material-ui/icons";
import {LinkedIn} from "@material-ui/icons";
import Gmail from '../assest/img/gmail.svg';
import Instagram from '../assest/img/instagram.svg';
// import LinkedIn from '../assest/img/linkedin.svg';
import Link from "@material-ui/core/Link";

const urlFacebook = "https://www.facebook.com/erikgram-2767021989978734";
const urlInstagram = "https://www.instagram.com/erik.gram/";
const urlLinkedIn = "https://www.linkedin.com/in/erikstorfranco/";
const urlGmail = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbSJZtxwNHBBMcZmGdbvcpvHpTMdfWcMdJdJcWQzvccNZzKZtGdtKQLGhmXlddGcsKxjfl";

export default function IconsFooter() {

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4} sm={1} direction="row" justify="center" className="icon-align-footer-m color-facebook margin-l-2-5">
                    <Link color="inherit"
                          target="_blank"
                          href={urlFacebook}
                    >
                        <Facebook/>
                    </Link>
                    <Link color="inherit"
                          target="_blank"
                          href={urlInstagram}
                          className="margin-l-1"
                    >
                        <img className="size-instagram-icon" src={Instagram} alt="Instagram"/>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={1} direction="row" justify="center" className="color-linkedIn">
                    <Link color="inherit"
                          target="_blank"
                          href={urlLinkedIn}
                          className="margin-l-negative-1"
                    >
                        <LinkedIn/>
                    </Link>
                    <Link color="inherit"
                          target="_blank"
                          href={urlGmail}
                          className="margin-l-1"
                    >
                        <img className="size-gmail-icon" src={Gmail} alt="Gmail"/>
                    </Link>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div>
            <Grid container item xs={12} spacing={0} direction="row" className="espaciado-top-buttons-footer"
                  justify="center"
                  alignItems="center">
                <FormRow/>
            </Grid>
        </div>
    );
}
