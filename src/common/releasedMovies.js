import {moviesData} from './moviesData';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

export default function ReleasedMovies(){
  const options = { year: "numeric", month: "long", day: "numeric" }
   
    return (
        <ImageList >
          <ImageListItem key="Subheader" cols={3} >
            {/* <ListSubheader component="div">December</ListSubheader> */}
          </ImageListItem>
          {moviesData.map((item) => (
            <ImageListItem key={item.poster_url} style={{margin:'16px' , cursor: 'pointer' ,width:'250px' }}>
              <img 
                style={{height:'350px' , width:'250px' }}
                src={`${item.poster_url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
              style={{width:'250px' }}
                title={item.title}
                subtitle={new Date(item.release_date).toLocaleDateString(undefined, options)}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    {/* <InfoIcon /> */}
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
}