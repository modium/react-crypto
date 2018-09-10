import React from 'react';
import { API_URL } from '../../config';
import { handleResponse, renderChangePercent } from '../../helpers';
import Loading from '../common/Loading';
import './Detail.css';

class Detail extends React.Component {
  state = {
    // experimental alternative to constructor
  }

  constructor(props) {
    super(props);
    this.state = {
      currency: {},
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    const currencyId = this.props.match.params.id;

    this.setState({
      loading: true,
    });

    fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
      .then(handleResponse)
      .then((currency) => {
        console.log(currency);
        this.setState({
          // currency: {
          //   id: currency.id,
          //   marketCap: currency.marketCap,
          //   name: currency.name,
          //   percentChange24h: currency.percentChange24h,
          //   price: currency.price,
          //   rank: currency.rank,
          //   symbol: currency.symbol,
          //   totalSupply: currency.totalSupply,
          //   volume24h: currency.volume24h,
          // },
          currency,
          loading: false,
          error: null,
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error.errorMessage,
        });
      });
  }

  render() {
    const { currency, loading, error } = this.state;

    if (loading) {
      return <div className='loading-container'><Loading /></div>
    }

    if (error) {
      return <div className='error'>{error}</div>
    }

    return (
      <div className='Detail'>
        <h1 className='Detail-heading'>
          {currency.name} ({currency.symbol})
        </h1>
        <div className='Detail-container'>
          <div className='Detail-item'>
            Price <span className='Detail-value'>$ {currency.price}</span>
          </div>
          <div className='Detail-item'>
            Rank <span className='Detail-value'>{currency.rank}</span>
          </div>
          <div className='Detail-item'>
            24H Change <span className='Detail-value'>{renderChangePercent(currency.percentChange24h)}</span>
          </div>
          <div className='Detail-item'>
            <span className='Detail-title'>Market cap</span>
            <span className='Detail-dollar'>$</span>
            {currency.marketCap}
          </div>
          <div className='Detail-item'>
            <span className='Detail-title'>24H Volume</span>
            <span className='Detail-dollar'>$</span>
            {currency.volume24h}
          </div>
          <div className='Detail-item'>
            <span className='Detail-title'>Total supply</span>
            {currency.totalSupply}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
