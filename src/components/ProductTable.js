import React from 'react';

class ProductTable extends React.Component {
  render() {
    return(
        <div className="box">
          <article className="media">
            
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small> ${this.props.price} </small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={this.props.category} />
                </div>
   
          </div>
        </div>
      </article>
  </div>
         
)
}
}

export default ProductTable;





