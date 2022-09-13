import Layout from '../../components/Layout';
import React, { useState, useEffect } from 'react';
import ReactPageScroller from 'react-page-scroller';
import ProtocolPage from './Components/ProtocolPage/ProtocolPage';
import WebPage from './Components/WebPage/WebPage';
import GamePage from './Components/GamePage/GamePage';
import MediaPage from './Components/MediaPage/MediaPage';
import { connect } from "react-redux";
import ReactLoading from 'react-loading';
import { setPageNumber } from '../../action';
import './style.css';

function Home(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [render, setRender] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const handlePageChange = number => {
    setCurrentPage(number);
    props.setPageNumber(currentPage);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRender(false)
    }, 1000)
    return () => clearTimeout(timeout)
  });

  const handleBeforePageChange = number => {
  };

  return (
    <Layout isPositionFixed={true}>
      {
        render ?
        <div className='roading-component'>
          <ReactLoading type="spinningBubbles" color="#fff"></ReactLoading>
        </div> :
        <ReactPageScroller
            pageOnChange={handlePageChange}
            onBeforePageScroll={handleBeforePageChange}
            customPageNumber={currentPage}
            blockScrollUp = {isShown}
            blockScrollDown = {isShown}
        >
            <ProtocolPage pageChangeHandler = {handlePageChange} />
            <WebPage pageChangeHandler = {handlePageChange} />
            <GamePage pageScrollHander = {setIsShown} pageChangeHandler = {handlePageChange} />
            <MediaPage pageChangeHandler = {handlePageChange} />
        </ReactPageScroller>
      }
    </Layout>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setPageNumber: (number) => dispatch(setPageNumber(number))
})

const mapStateToProps = state => ({
  pageNumber: state.pageNumber
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);