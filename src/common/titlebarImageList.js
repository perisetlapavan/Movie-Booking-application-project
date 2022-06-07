import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { moviesData } from '../assets/moviesData';

export default class TitlebarImageList extends React.Component {
  render() {
    return (
      <ImageList sx={{ height: 250 }} style={{ width: '100%' }}>
        <ImageListItem key="Subheader" cols={6} >
        </ImageListItem>
        {moviesData.map((item) => (
          <ImageListItem key={item.poster_url}>
            <img
              src={`${item.poster_url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
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
}