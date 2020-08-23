import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Facebook} from "@material-ui/icons";
import Gmail from '../assest/img/gmail.svg';
import Instagram from '../assest/img/instagram.svg';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const urlFacebook = "https://www.facebook.com/erikgram-2767021989978734";
const urlInstagram = "https://www.instagram.com/erik.gram/";
const urlGmail = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbSJZtxwNHBBMcZmGdbvcpvHpTMdfWcMdJdJcWQzvccNZzKZtGdtKQLGhmXlddGcsKxjfl";

export default function IconsFooter() {

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4} sm={1} direction="row" justify="center">
                    <Link color="inherit"
                          target="_blank"
                          href={urlFacebook}
                    >
                        <Typography variant="body2"
                                    color="primary"
                                    className="icon-align-footer-r"
                        >
                            <Facebook/>
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={1} direction="row" justify="center">
                    <Link color="inherit"
                          target="_blank"
                          href={urlInstagram}
                    >
                        <Typography variant="body2"
                                    color="textSecondary"
                                    className="icon-align-footer-m"
                        >
                            <img className="size-gmail-icon" src={Instagram} alt="gmail"/>
                        </Typography>
                    </Link>

                </Grid>
                <Grid item xs={4} sm={1} direction="row" justify="center">
                    <Link color="inherit"
                          target="_blank"
                          href={urlGmail}
                    >
                        <Typography variant="body2"
                                    color="textSecondary"
                                    className="icon-align-footer-l"
                        >
                            <img className="size-gmail-icon" src={Gmail} alt="gmail"/>
                        </Typography>
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
