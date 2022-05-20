
import React from 'react';
import Header from '../../common/header/Header';
import TitlebarImageList from '../../common/titlebarImageList';
import ReleasedMovies from '../../common/releasedMovies';
import Filter from '../../common/filter';

class Home extends React.Component {
    render() {
        return <div>
            <Header />
            {/* <Button variant="contained">Hello World</Button> */}
            <span style={{display:'block' , backgroundColor:'#ff9999', padding:'8px' ,textAlign:'center' , font:'1 rem'}}>Upcoming Movies</span>
            <TitlebarImageList />
            <Filter />
            <ReleasedMovies />
        </div>;
    }
}

export default Home;  