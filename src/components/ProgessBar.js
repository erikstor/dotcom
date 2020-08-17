import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="33%" mr={1}>
                <LinearProgress className="bg-rojo-progress" variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography className="bg-rojo-progress"  variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}