import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'
import '../App.css'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const updateNews = async () => {
        try {
            props.setProgress(10)
            //    let url = `http://api.mediastack.com/v1/news?access_key=9aa577fbabbfd8d8d307b90b623b6de3&categories=${this.props.category}&limit=${this.props.pageSize}&count=${this.state.page}&languages=en`
            // let url = `http://newsdata.io/api/1/news?apikey=pub_2348961fb1698c0bd322041ac9b22ab488fb&language=en`
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey} &page=${page} &pageSize=${props.pageSize}&category=${props.category}`;
            setisLoaded(true);
            let data = await fetch(url)
            props.setProgress(70);
            let parsedData = await data.json()
            console.log(parsedData)
            if (parsedData.status === "error") {
                setisLoaded(true);

            } else {
                setitems(parsedData.articles)
                settotalResults(parsedData.totalResults)
                setisLoaded(false);
            }
            props.setProgress(100);
        } catch (err) {
            console.log("err", err)
        }
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, [])
    const [items, setitems] = useState([])
    const [page, setpage] = useState(1)
    const [isLoaded, setisLoaded] = useState(true)
    const [totalResults, settotalResults] = useState(0)
    //document.title = `${capitalizeFirstLetter(props.category)} -Inside Press`

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    // updateNews = () => {
    //     this.setState({ isLoaded: true })
    //     fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8722eac0e17e4d84967b49a663fb6690 &page=${this.state.page} &pageSize=${this.props.pageSize}&category=${this.props.category}`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result)
    //                 this.setState({
    //                     isLoaded: false,
    //                     items: result.articles,
    //                     totalResults: result.totalResults,
    //                     pageSize: this.props.pageSize
    //                 });
    //             },
    //             (error) => {
    //                 console.log("errrrrr", error)
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }
    const fetchMoreData = async () => {

        // let url = `http://api.mediastack.com/v1/news?access_key=9aa577fbabbfd8d8d307b90b623b6de3&limit=${this.props.pageSize}&count=${this.state.page}&languages=en&categories=${this.props.category}`
        // let url = `http://newsdata.io/api/1/news?apikey=pub_2348961fb1698c0bd322041ac9b22ab488fb&language=en`
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey} &page=${page + 1} &pageSize=${props.pageSize}&category=${props.category}`;
        setpage(page + 1);
        const data = await fetch(url)
        // let data = await fetch(url, {

        //     );
        //  console.log("data", data)
        let parsedData = await data.json()
        // console.log("parsedData", parsedData)
        // this.setState({
        //     items: this.state.items.concat(parsedData.articles),
        //     totalResults: parsedData.pagination.total
        // })
        setitems(items.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    }
    // const randomNumber = async () => {
    //     return Math.floor(1000 + Math.random() * 9000)
    // }
    return (
        <>
            <h1 className="text-center my-4">Today {capitalizeFirstLetter(props.category)} Headlines</h1>
            {isLoaded && <Loading />}
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={items.length !== totalResults}
                loader={<Loading />}>
                <div className="container">
                    <div className="row">
                        {/* {this.state.isLoaded}
                            {!this.state.message && <h1 className="text-center my-4">Today {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>}
                            {this.state.isLoaded && <div className="text-center loading-center">
                                {this.state.message}
                                {this.state.isLoaded && <Loading />}
                            </div>} */}
                        {!isLoaded && items.map((element, item) => {
                            return <div className="col-sm-12 col-md-6 col-lg-4  " key={element.url + item}>
                                <NewsItems title={element.title !== '' ? element.title.slice(0, 45) : ""} imageurl={element.urlToImage} description={element.description ? element.description.slice(0, 80) : ""} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                                />
                            </div>
                        })}

                        {/* {!this.state.isLoaded && this.state.items.map((element, index) => {
                                return <div className="col-sm-4 " key={this.randomNumber + index}>
                                    <NewsItems title={element.title ? element.title.slice(0, 45) : ""} imageurl={element.image} description={element.description ? element.description.slice(0, 100) : ""} url={element.url} author={element.author} date={element.published_at} source={element.source}
                                    />
                                </div>
                            })} */}
                        {/* {!this.state.isLoaded && <div className="container d-flex justify-content-between">
                                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviewClick}> &larr; Previous</button>
                                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                            </div>

                            } */}
                    </div>
                </div>
            </InfiniteScroll >
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News;
