import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </>
  );
}