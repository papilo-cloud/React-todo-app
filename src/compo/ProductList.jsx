import React, { Component } from 'react'
import Product from './Product'
import img3 from './asstss/3.jpg'
import img1 from './asstss/1.jpg'
import img2 from './asstss/2.jpg'

const products = [
  {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      // votes: generateVoteCount(),
      vote: 65,
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: img1,

  },
  {
      id: 2,
      title: 'John Doe',
      description: 'Dont make me think, responsively.',
      url: '#',
      // votes: generateVoteCount(),
      vote: 49,
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: img2,

  },
  {
    id: 3,
    title: 'Joel Janet',
    description: 'You Dont know JavaScript by Kylie Simpson.',
    url: '#',
    // votes: generateVoteCount(),
    vote: 56,
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: img3,

},
{
  id: 4,
  title: 'Sani Abubakar',
  description: 'Dont make me think, responsively.',
  url: '#',
  // votes: generateVoteCount(),
  vote: 61,
  submitterAvatarUrl: 'images/avatars/daniel.jpg',
  productImageUrl: img2,

},
{
id: 5,
title: 'Abu Musa',
description: 'You Dont know JavaScript by Kylie Simpson.',
url: '#',
// votes: generateVoteCount(),
vote: 57,
submitterAvatarUrl: 'images/avatars/daniel.jpg',
productImageUrl: img3,

}
]

export default class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products : []
    }
    this.handleProductVote = this.handleProductVote.bind(this)
    
  }
  componentDidMount(){
    this.setState({products: products})
  }
  handleProductVote(productId) {
    const nextProducts = this.state.products.map((product) => {

      if (product.id === productId) {
      return { ...product, 
      vote: product.vote + 1,
      };
      } else {
      return product;
      }
      });
      this.setState({
      products: nextProducts,
      });
      
  }
  render() {
    const sortProduct = this.state.products.sort((a,b) =>(b.vote - a.vote))
   
    const product = sortProduct.map((prdt, i) => <Product key={i}
    id={prdt.id}
    title={prdt.title}
    description={prdt.description}
    vote={prdt.vote}
    image={prdt.productImageUrl}
    onVote={this.handleProductVote} />)
    return (
        <div className='ui unstackalbe items'>
          {product}
        </div>    
      )
  }
}
if (module.hot) {
  module.hot.accept()
}