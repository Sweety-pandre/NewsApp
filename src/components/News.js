import PropTypes from 'prop-types';
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    async updatePage(pageNo) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f474763d486a4a658f004f6000dfe076&pagesize=${this.props.pagesize}&page=${this.state.page}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
           // totalResults: parseData.articles, oct3
           totalResults: parseData.totalResults,
            loading: false
        })
    }
    static defaultProps = {
        country: 'in',
        pagesize: 9,
        category: 'general',
        author: 'unknown'

    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.number
    }
    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
        
        document.title = `${this.capitalizeFirstLetter(this.props.category)} NewsDaily`
    }

    

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4680c325c624843a63f8549b9bf1199&pagesize=${this.props.pagesize}&page=1`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.articles,
            loading: false
        })
    }

    handlePrevClick = async () => {
        // console.log("prev page")
        // let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f474763d486a4a658f004f6000dfe076&pagesize=${this.props.pagesize}&page=${this.state.page - 1}`
        // this.setState({ loading: true });
        // let data = await fetch(url)
        // let parseData = await data.json()
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseData.articles,
        //     loading: false
        // }
        // ) 
        this.setState({page:this.state.page-1})
        this.updatePage()
    }
    handleNextClick = async (props) => {
        // let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f474763d486a4a658f004f6000dfe076&pagesize=${this.props.pagesize}&page=${this.state.page + 1} `
        // this.setState({ loading: true });
        // let data = await fetch(url)
        // let parseData = await data.json()
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parseData.articles,
        //     loading: false
        // }
        // )
        this.setState({page:this.state.page+1})
        this.updatePage()
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center text-white' style={{paddingBottom:'30px',width:'100%',marginBottom:'70px',paddingTop:'24px',fontFamily:'blacker_pro_displayheavy',background:'#0B122B'}}>
  Top Headlines On {this.props.category.toUpperCase()}
</h1>

                {this.state.loading && <Spinner></Spinner>}{/*if loading true h to hi spinner show hoga */}
                <div className="row" style={{ paddingLeft: '50px', paddingRight: '70px' }}>
                    {this.state.articles.map((element) => {
                        return <div className="col md-4"> <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
                        </div>

                    }
                    )}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
                    <button disabled={this.state.page + 1 > Math.ceil.pagesize / 20} type="button" className="btn btn-dark " onClick={this.handleNextClick} >Next &rarr; </button>
                </div>


            </div>
        )
    }
}

export default News