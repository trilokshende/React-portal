
import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from '../common/backendportno';

const AddProduct = () =>{
    
    const [title, setTitle] = useState(''); 
    const [thumbnail, setThumbnail] = useState(undefined);
    const [size, setSize] = useState('');
    const [price, setPrice] = useState(0.0);
    const quantity = 1;
    const [cat_id,setCategoryId] = useState()
    
    const history = useHistory()

   // gets called when user selects an image
    const onFileSelect = (event) => {
    setThumbnail(event.target.files[0])
  }
    
    const AddProductToDB=()=>{
        if(title.length === 0){
            alert(`You missed to enter title!`)
            }
        else if( !thumbnail){
            alert(`You missed Thumbnail!`)
            }  
        else if( size === 0){
            alert(`You missed to enter Size!`)
            }
        else if( price === 0){
            alert(`You missed to enter Price!`)
            }else{
                // When we have to upload file use form data
                const data = new FormData()

                // append the data 
                data.append('title', title )
                data.append('thumbnail', thumbnail )
                data.append('size', size )
                data.append('price', price )
                data.append('p_qty', quantity )
                data.append('category', cat_id )
                
                axios.post( url + '/products', data).then((res)=>{
                    //const result = res.data
                    //console.log( result)
                    if( res.status === 200){
                        alert(`Product added successfully!!`)

                        // go to product List page i.e to ManageProducts 
                        history.push('/adminHome/manageProducts')
                    }
                }).catch(error => {
                  alert("error");
               });
            }
        }
    
    
    return (
      <div className="container ">
        <div className="HorizontalSlider-title">Add Product</div>
          <div className="add-product">
            <div className="mb-3">
              <label htmlFor=""><b>Thumbnail</b></label>
              <input
                accept="image/*"
                onChange={onFileSelect}
                type="file"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor=""><b>Title</b></label>
              <input
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor=""><b>Size</b></label>
              <input
                onChange={(e) => {
                  setSize(e.target.value)
                }}
                type="text"
                className="form-control"
              /> ( REGULAR)   ( MEDIUM )   ( LARGE ) 
            </div>

            <div className="mb-3">
              <label htmlFor=""><b>Price</b></label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""><b>Quantity</b></label>
              <input
                value={quantity}
                type="number"
                className="form-control"
              />          
            </div>
            <div className="mb-3">
              <label htmlFor=""><b>Category Id</b></label>
              <input
                onChange={(e) => {
                  setCategoryId(e.target.value)
                }}
                type="number"
                className="form-control"
              />  ( VEG : 1 )   ( NON-VEG : 2 )   ( BEVERAGES : 3 ) 
            </div>
        
            <div className="mb-3">
              <button onClick={AddProductToDB} className="right-space btn btn-success">
                Add
              </button>
      
              <Link to="/adminHome/manageProducts">
                <a className="btn btn-warning">Back</a>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default AddProduct