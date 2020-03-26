import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        const{onReset,counters,handleDelete,handleIncrement}=this.props
        return ( <div>
                <button className='btn btn-primary btn-sm m-2' onClick={onReset}>Reset</button>
           {counters.map(counter=><Counter key={counter.id}  handleDelete ={ handleDelete}counter={counter} handleIncrement={handleIncrement} />
               
               
              )}
        </div> );
    }
}
 
export default Counters;